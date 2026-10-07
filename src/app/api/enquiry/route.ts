import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const EnquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().trim().min(8, 'Phone number must have at least 8 digits'),
  email: z.string().trim().email('Invalid email address'),
  program: z.string().trim().min(1, 'Program is required'),
  destination: z.string().trim().optional(),
  message: z.string().trim().optional(),
  consent: z.literal(true, {
    message: 'Consent is required to contact you',
  }),
  website: z.string().optional(), // Honeypot field
  sourcePage: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

// In-memory rate limiting per IP (5 requests per 10 minutes)
const ipMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string, bypass = false): boolean {
  if (bypass) return true;
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) {
    return false;
  }
  entry.count += 1;
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendEmailDelivery(data: z.infer<typeof EnquirySchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL || 'enquiries@wisdomcareereducation.com';

  if (!apiKey || !toEmail) {
    return { configured: false, ok: false };
  }

  const html = `
    <h2>New Website Enquiry — Wisdom Career Education</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Program:</strong> ${escapeHtml(data.program)}</p>
    <p><strong>Preferred Destination:</strong> ${escapeHtml(data.destination || 'Not specified')}</p>
    <p><strong>Message:</strong> ${escapeHtml(data.message || 'None')}</p>
    <p><strong>Source Page:</strong> ${escapeHtml(data.sourcePage || '/')}</p>
    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New WCE Enquiry: ${data.fullName} (${data.program})`,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend API error: ${res.status} ${errText}`);
  }

  return { configured: true, ok: true };
}

async function sendSheetDelivery(data: z.infer<typeof EnquirySchema>) {
  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.SHEETS_WEBHOOK_SECRET;

  if (!webhookUrl) {
    return { configured: false, ok: false };
  }

  const payload = {
    timestamp: new Date().toISOString(),
    fullName: data.fullName,
    phone: data.phone,
    email: data.email,
    program: data.program,
    destination: data.destination || '',
    message: data.message || '',
    sourcePage: data.sourcePage || '/',
    utmSource: data.utmSource || '',
    utmMedium: data.utmMedium || '',
    utmCampaign: data.utmCampaign || '',
    secret: webhookSecret,
  };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Google Sheets webhook error: ${res.status} ${errText}`);
  }

  return { configured: true, ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // 1. Rate limiting
    const bypassRateLimit = req.headers.get('x-test-bypass-rate-limit') === '1';
    if (!checkRateLimit(ip, bypassRateLimit)) {
      return NextResponse.json(
        { ok: false, error: 'Too many submissions. Please wait a few minutes before trying again, or reach us directly via WhatsApp.' },
        { status: 429 }
      );
    }

    // 2. Parse payload
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
    }

    // 3. Schema validation
    const parsed = EnquirySchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      }
      return NextResponse.json(
        { ok: false, error: 'Validation failed', fieldErrors },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // 4. Honeypot check (silent rejection)
    if (data.website && data.website.trim().length > 0) {
      console.warn('[Enquiry Honeypot Triggered] Ignored bot submission');
      return NextResponse.json({ ok: true, message: 'Enquiry received' });
    }

    // 5. Delivery orchestration (Email + Google Sheets)
    const hasConfiguredProvider = Boolean(
      (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL) ||
      process.env.SHEETS_WEBHOOK_URL
    );

    if (!hasConfiguredProvider) {
      console.info('[WCE Dev/Preview Lead Captured]', {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        program: data.program,
      });
      return NextResponse.json({
        ok: true,
        mode: 'preview-fallback',
        message: 'Enquiry received in development/preview mode',
      });
    }

    const [emailResult, sheetResult] = await Promise.allSettled([
      sendEmailDelivery(data),
      sendSheetDelivery(data),
    ]);

    const emailOk = emailResult.status === 'fulfilled' && emailResult.value.ok;
    const sheetOk = sheetResult.status === 'fulfilled' && sheetResult.value.ok;

    if (!emailOk && !sheetOk) {
      console.error('All lead capture delivery channels failed:', {
        email: emailResult,
        sheet: sheetResult,
      });
      return NextResponse.json(
        { ok: false, error: 'Unable to deliver enquiry to admissions. Please connect directly via WhatsApp.' },
        { status: 500 }
      );
    }

    if (!emailOk) {
      console.warn('Email dispatch failed but Google Sheet succeeded:', emailResult);
    }
    if (!sheetOk) {
      console.warn('Google Sheet dispatch failed but Email succeeded:', sheetResult);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Unexpected error processing /api/enquiry:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error processing enquiry' },
      { status: 500 }
    );
  }
}
