import React from 'react';
import { notFound } from 'next/navigation';
import {
  siteConfig,
  navConfig,
  programs,
  sectors,
  destinations,
  testimonials,
  getApprovedTestimonials,
  faqs,
  getPublishedFaqs,
  stats,
  getPublishedStats,
  partners,
  getApprovedPartners,
} from '@/content';
import { TbcBadge, show, isTbc } from '@/lib/tbc';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Illustration } from '@/components/art/Illustration';

export const metadata = {
  title: 'Content Layer Verification — Dev Surface | WCE',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DevContentPage() {
  // Developer verification page only — 404 in production builds
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_ENABLE_DEV_ROUTES) {
    notFound();
  }

  const approvedTestimonials = getApprovedTestimonials();
  const publishedStats = getPublishedStats();
  const publishedFaqs = getPublishedFaqs();
  const approvedPartners = getApprovedPartners();

  return (
    <div className="min-h-screen bg-wce-blue-50/60 pb-32 pt-12 text-wce-slate-600">
      <Container size="wide">
        {/* Header */}
        <div className="mb-12 border-b border-wce-slate-200 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Eyebrow>Development Surface</Eyebrow>
              <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-wce-navy-900 sm:text-4xl">
                Content Layer Architecture Verification
              </h1>
              <p className="mt-2 text-sm text-wce-slate-500">
                Audits all typed data models, TBC indicators, permission filtering, and illustration resolutions.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="chip">Dev Mode Active</Badge>
              <Badge variant="navy">Strict Data Layer</Badge>
            </div>
          </div>
        </div>

        {/* 1. Global Site & Brand Config */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6">
            <h2 className="font-heading text-2xl font-bold text-wce-navy-900">1. Global Site Configuration</h2>
            <p className="text-sm text-wce-slate-500">All brand, contact, and legal values from docs/content.md</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card elevation="sm" className="space-y-4">
              <h3 className="font-heading text-base font-semibold text-wce-navy-900">Brand Identity &amp; CTAs</h3>
              <dl className="grid grid-cols-1 gap-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Brand Name</dt>
                  <dd className="font-medium text-wce-navy-900">{siteConfig.brandName} ({siteConfig.shortName})</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Tagline</dt>
                  <dd className="text-wce-slate-700">{siteConfig.tagline}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Primary CTA / Secondary CTA</dt>
                  <dd className="flex gap-2">
                    <Badge variant="coral">{siteConfig.primaryCta}</Badge>
                    <Badge variant="chip">{siteConfig.secondaryCta}</Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Trust Strip Line</dt>
                  <dd className="text-wce-slate-700">{siteConfig.trustLine}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Legal Line (Footer)</dt>
                  <dd className="text-xs text-wce-slate-600">{siteConfig.legalLine}</dd>
                </div>
              </dl>
            </Card>

            <Card elevation="sm" className="space-y-4">
              <h3 className="font-heading text-base font-semibold text-wce-navy-900">Contact Channels (TBC Protected)</h3>
              <dl className="grid grid-cols-1 gap-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Phone Display</dt>
                  <dd className="flex items-center gap-2">
                    {show(siteConfig.phoneDisplay, (p) => <span>{p}</span>, 'phone')}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">WhatsApp Number</dt>
                  <dd className="flex items-center gap-2">
                    {show(siteConfig.whatsappNumber, (w) => <span>{w}</span>, 'whatsapp')}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">WhatsApp Prefilled Text</dt>
                  <dd className="text-xs italic text-wce-slate-600">&quot;{siteConfig.whatsappPrefilledText}&quot;</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Contact Email</dt>
                  <dd className="flex items-center gap-2">
                    {show(siteConfig.email, (e) => <span>{e}</span>, 'email')}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Address</dt>
                  <dd className="text-wce-slate-700">
                    {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}
                    <div className="mt-1">
                      Full Address: {show(siteConfig.address.fullText, (txt) => <span>{txt}</span>, 'full address')}
                    </div>
                  </dd>
                </div>
              </dl>
            </Card>
          </div>
        </Section>

        {/* 2. Navigation */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6">
            <h2 className="font-heading text-2xl font-bold text-wce-navy-900">2. Navigation Config</h2>
            <p className="text-sm text-wce-slate-500">Documented primary routes and action triggers</p>
          </div>
          <Card elevation="sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {navConfig.links.map((link) => (
                  <Badge key={link.href} variant="chip">
                    {link.label} <span className="text-[11px] font-mono text-wce-navy-900">({link.href})</span>
                  </Badge>
                ))}
              </div>
              <div>
                <Badge variant="coral">
                  CTA Button: {navConfig.ctaButton.label} ({navConfig.ctaButton.href})
                </Badge>
              </div>
            </div>
          </Card>
        </Section>

        {/* 3. Programs */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-wce-navy-900">3. Programs (4 Entities)</h2>
              <p className="text-sm text-wce-slate-500">Strictly mapped to study-abroad, student-internships, graduate-internships, professional-development</p>
            </div>
            <Badge variant="chip">{programs.length} Programs Registered</Badge>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.slug} elevation="sm" className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-wce-slate-400">/{program.slug}</span>
                      <Badge variant={program.status === 'live' ? 'navy' : 'coral'}>
                        {program.status}
                      </Badge>
                    </div>
                    <h3 className="mt-1 font-heading text-lg font-bold text-wce-navy-900">{program.title}</h3>
                  </div>
                  <div className="w-16 shrink-0">
                    <Illustration id={program.art} />
                  </div>
                </div>

                <p className="text-sm text-wce-slate-600">{program.summary}</p>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-wce-slate-400">Target Audience</span>
                  <p className="text-xs text-wce-slate-700">{program.audience}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {program.tags.map((tag) => (
                    <Badge key={tag} variant="chip">{tag}</Badge>
                  ))}
                </div>

                <div className="border-t border-wce-slate-100 pt-3 text-xs">
                  <span className="font-semibold text-wce-slate-500">Inclusions: </span>
                  {show(program.inclusions, (inc) => <span>{inc.join(', ')}</span>, 'program inclusions')}
                </div>

                <div className="border-t border-wce-slate-100 pt-3">
                  <span className="text-xs font-semibold text-wce-slate-500">5-Step Journey:</span>
                  <ol className="mt-1.5 space-y-1 text-xs text-wce-slate-600">
                    {program.steps.map((step, idx) => (
                      <li key={step.title} className="flex gap-1.5">
                        <span className="font-bold text-wce-navy-900">{idx + 1}.</span>
                        <span><strong>{step.title}</strong> — {step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 4. Placement Sectors */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-wce-navy-900">4. Placement Sectors (5 Entities)</h2>
              <p className="text-sm text-wce-slate-500">Fixed truncated &quot;Computer Scie&quot; to full &quot;Information Technology &amp; Computer Science&quot;</p>
            </div>
            <Badge variant="chip">{sectors.length} Sectors Registered</Badge>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Card key={sector.slug} elevation="sm" className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading text-base font-bold text-wce-navy-900">{sector.title}</h3>
                  <div className="w-12 shrink-0">
                    <Illustration id={sector.art} />
                  </div>
                </div>
                <div className="text-xs text-wce-slate-500">
                  <div>Slug: <code className="font-mono text-wce-navy-900">{sector.slug}</code></div>
                  <div className="mt-1 flex items-center gap-1">
                    Description: {show(sector.description, (d) => <span>{d}</span>, 'sector description')}
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    Roles / Examples: {show(sector.examples, (ex) => <span>{ex.join(', ')}</span>, 'role examples')}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 5. Destinations */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-wce-navy-900">5. Destinations (Optional Section)</h2>
              <p className="text-sm text-wce-slate-500">Documented countries with TBC summaries and highlights</p>
            </div>
            <Badge variant="coral">{destinations.length} Destinations (Proposed)</Badge>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {destinations.map((dest) => (
              <Card key={dest.slug} elevation="sm" className="flex gap-4">
                <div className="w-24 shrink-0">
                  <Illustration id={dest.art} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-lg font-bold text-wce-navy-900">{dest.country}</h3>
                    <Badge variant="coral">proposed</Badge>
                  </div>
                  <div className="text-xs text-wce-slate-500">
                    <div>Summary: {show(dest.summary, (s) => <span>{s}</span>, 'country overview')}</div>
                    <div className="mt-1">Highlights: {show(dest.highlights, (h) => <span>{h.join(', ')}</span>, 'highlights')}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 6. Testimonials & Permission Filtering */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold text-wce-navy-900">6. Testimonials &amp; Permission Gating</h2>
              <p className="text-sm text-wce-slate-500">Strict rule: Testimonials render ONLY if permission === true</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="chip">Catalog: {testimonials.length}</Badge>
              <Badge variant={approvedTestimonials.length > 0 ? 'navy' : 'coral'}>
                Permitted: {approvedTestimonials.length} (Gated)
              </Badge>
            </div>
          </div>

          <div className="mb-4 rounded-[var(--radius-card)] bg-amber-50 p-4 border border-amber-200 text-xs text-amber-900">
            <strong>Permission Gate Status:</strong> {approvedTestimonials.length} approved testimonials. Since client releases are pending, production output omits the testimonial section automatically.
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.id} elevation="sm" className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-sm font-bold text-wce-navy-900">{t.name}</h3>
                    {t.isFeaturedChef && <Badge variant="coral">Chef Feature</Badge>}
                  </div>
                  <Badge variant={t.permission ? 'navy' : 'chip'}>
                    {t.permission ? 'Permission OK' : 'Permission Pending'}
                  </Badge>
                </div>
                <p className="text-xs text-wce-slate-600">{t.context}</p>
                <div className="border-t border-wce-slate-100 pt-2 text-xs">
                  <div>Destination: {show(t.destination, (d) => <span className="font-medium text-wce-navy-900">{d}</span>, 'destination')}</div>
                  <div className="mt-1">Quote: {show(t.quote, (q) => <span className="italic">&quot;{q}&quot;</span>, 'client quote')}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 7. Statistics */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-wce-navy-900">7. Statistics (TBC Handling)</h2>
              <p className="text-sm text-wce-slate-500">Years of experience is 15+ (live); remaining stats are TBC until supplied</p>
            </div>
            <Badge variant="chip">Published in Prod: {publishedStats.length} / {stats.length}</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.key} elevation="sm" className="text-center space-y-1">
                <span className="text-xs font-semibold text-wce-slate-400 uppercase tracking-wider">{stat.label}</span>
                <div className="font-heading text-3xl font-bold text-wce-navy-900">
                  {isTbc(stat.value) ? (
                    <TbcBadge label="TBC" context="client stat" />
                  ) : (
                    <span>{stat.value}{stat.suffix}</span>
                  )}
                </div>
                <Badge variant={stat.status === 'live' ? 'navy' : 'coral'}>
                  {stat.status}
                </Badge>
              </Card>
            ))}
          </div>
        </Section>

        {/* 8. Partners */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-wce-navy-900">8. Partners &amp; Trust Strip</h2>
              <p className="text-sm text-wce-slate-500">No fake partners; logo and permission required before publishing</p>
            </div>
            <Badge variant="chip">Published in Prod: {approvedPartners.length} / {partners.length}</Badge>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.name} elevation="sm" className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-sm font-bold text-wce-navy-900">{partner.name}</h3>
                  <Badge variant="chip">{partner.type}</Badge>
                </div>
                <div className="text-xs text-wce-slate-500">
                  <div>Logo: {show(partner.logo, (l) => <span>{l}</span>, 'logo file')}</div>
                  <div className="mt-1">Permission: {partner.permission ? 'Approved' : 'Pending'}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 9. FAQs */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-wce-navy-900">9. FAQs (8 Documented Questions)</h2>
              <p className="text-sm text-wce-slate-500">Proposed questions; answers are TBC from client. Prod publishes 0 incomplete items.</p>
            </div>
            <Badge variant="chip">Published in Prod: {publishedFaqs.length} / {faqs.length}</Badge>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.id} elevation="sm" className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-heading text-sm font-semibold text-wce-navy-900">{faq.q}</span>
                  <Badge variant="chip">{faq.category}</Badge>
                </div>
                <div className="text-xs text-wce-slate-500 border-t border-wce-slate-100 pt-2">
                  <span>Answer: </span>
                  {show(faq.a, (ans) => <span>{ans}</span>, 'faq answer')}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 10. Assets Manifest Sample Resolution */}
        <Section bg="white" className="rounded-[24px] mb-8 py-8 shadow-wce-sm">
          <div className="mb-6">
            <h2 className="font-heading text-2xl font-bold text-wce-navy-900">10. Illustration Component Spec Check</h2>
            <p className="text-sm text-wce-slate-500">Sample manifest illustration IDs resolving aspect ratio and documented placeholder</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {['ill-hero', 'ill-iso-study', 'ill-sector-it', 'ill-about', 'ill-why-1', 'ill-cta-scene'].map((id) => (
              <div key={id} className="space-y-1 text-center">
                <Illustration id={id} />
                <span className="block font-mono text-[10px] text-wce-slate-500">{id}</span>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
}
