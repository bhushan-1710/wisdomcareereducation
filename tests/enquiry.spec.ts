import { test, expect } from '@playwright/test';

test.describe('Enquiry Form — Production Flow & Security Gates', () => {
  test('Valid submission displays FormSuccess and WhatsApp followup', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    const form = page.locator('#enquiry-form');

    // Fill valid form using accessible role & label queries inside the form
    await form.getByLabel('Full Name').fill('Aditi Verma');
    await form.getByLabel('Phone Number').fill('+91 98220 12345');
    await form.getByLabel('Email Address').fill('aditi.verma@example.com');
    await form.getByLabel('Interested in').selectOption('study-abroad');
    await form.getByRole('checkbox', { name: /I agree to receive counselling details/i }).check({ force: true });

    // Submit
    await form.getByRole('button', { name: /Book free counselling/i }).click();

    // Verify success state rendered
    const successHeading = page.getByRole('heading', { name: /Thank you for reaching out!/i });
    await expect(successHeading).toBeVisible();

    // Verify reset button
    const resetBtn = page.getByRole('button', { name: /Submit another enquiry/i });
    await expect(resetBtn).toBeVisible();
  });

  test('Missing required fields prevents submission and announces error messages', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    const form = page.locator('#enquiry-form');

    // Submit blank form
    await form.getByRole('button', { name: /Book free counselling/i }).click();

    // Validation errors visible
    await expect(page.getByText('Full name is required')).toBeVisible();
    await expect(page.getByText('Contact number is required')).toBeVisible();
    await expect(page.getByText('Email address is required')).toBeVisible();
    await expect(page.getByText('Please select a program of interest')).toBeVisible();
    await expect(page.getByText('Your consent is required to contact you')).toBeVisible();

    // Still on form, not on success
    await expect(form).toBeVisible();
  });

  test('Malformed email and short phone number show field-specific errors', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    const form = page.locator('#enquiry-form');

    await form.getByLabel('Full Name').fill('Rahul Patil');
    await form.getByLabel('Phone Number').fill('1234'); // too short
    await form.getByLabel('Email Address').fill('not-an-email');
    await form.getByLabel('Interested in').selectOption('student-internships');
    await form.getByRole('checkbox', { name: /I agree to receive counselling details/i }).check({ force: true });

    await form.getByRole('button', { name: /Book free counselling/i }).click();

    await expect(page.getByText('Please enter a valid phone number')).toBeVisible();
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
  });

  test('Honeypot submission is silently handled without crashing or leaking', async ({ request }) => {
    const res = await request.post('/api/enquiry', {
      headers: {
        'x-test-bypass-rate-limit': '1',
      },
      data: {
        fullName: 'Bot Spammer',
        phone: '+919876543210',
        email: 'spam@botnet.test',
        program: 'study-abroad',
        consent: true,
        website: 'http://spam-link.example.com', // Honeypot filled!
      },
    });

    expect(res.status()).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);
  });

  test('Rate limiting triggers 429 when threshold exceeded', async ({ request }) => {
    // Submit rapidly from same client
    const payloads = Array.from({ length: 6 }).map((_, i) => ({
      fullName: `User ${i}`,
      phone: `+91987654321${i}`,
      email: `user${i}@example.com`,
      program: 'study-abroad',
      consent: true,
    }));

    let lastStatus = 200;
    for (const p of payloads) {
      const res = await request.post('/api/enquiry', { data: p });
      lastStatus = res.status();
    }

    // Rate limiter allows 5 requests per 10min per IP; the 6th should be 429
    expect(lastStatus).toBe(429);
  });
});
