import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Container } from '@/components/ui/Container';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { faqs, getPublishedFaqs } from '@/content/faqs';
import { constructMetadata } from '@/lib/seo';
import { hasValue, TbcBadge } from '@/lib/tbc';

export const metadata: Metadata = constructMetadata({
  title: 'Frequently Asked Questions | Eligibility, Visas & Fees',
  description:
    'Common questions answered about studying abroad, overseas internships, visa processing times, documents, and counselling.',
  path: '/faq',
});

const CATEGORIES = [
  { key: 'applications', label: 'Applications & Eligibility' },
  { key: 'visa', label: 'Visas & Documentation' },
  { key: 'fees', label: 'Fees & Inclusions' },
  { key: 'internships', label: 'Internships & Work Regulations' },
] as const;

export default function FaqPage() {
  const publishedFaqs = getPublishedFaqs();
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Help & Information"
        title="Frequently asked questions"
        description="Find answers to common questions about eligibility, application documents, visa processing, fees, and program formats."
        breadcrumbs={[{ label: 'FAQ' }]}
        ctaLabel="Ask our counsellors"
        ctaHref="/contact"
      />

      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          <div className="max-w-[780px] mx-auto space-y-16">
            {CATEGORIES.map((cat) => {
              const catFaqs = faqs.filter((f) => f.category === cat.key);
              const itemsToRender = isProd
                ? catFaqs.filter((f) => hasValue(f.a))
                : catFaqs;

              if (itemsToRender.length === 0) {
                return null;
              }

              const accordionItems: AccordionItem[] = itemsToRender.map((faq) => ({
                id: faq.id,
                title: faq.q,
                content: hasValue(faq.a) ? (
                  <p>{faq.a}</p>
                ) : (
                  <div className="py-2">
                    <p className="text-wce-slate-500 italic mb-2">
                      Official answer being prepared by admissions team.
                    </p>
                    <TbcBadge label="TBC" context="client confirmation (Q12)" />
                  </div>
                ),
              }));

              return (
                <div key={cat.key}>
                  <h2 className="text-[22px] sm:text-[24px] font-bold text-wce-navy-900 mb-6 tracking-tight">
                    {cat.label}
                  </h2>
                  <Accordion items={accordionItems} />
                </div>
              );
            })}

            {/* If all categories were empty in production */}
            {isProd && publishedFaqs.length === 0 && (
              <div className="rounded-[24px] bg-wce-blue-50/60 p-8 sm:p-12 text-center border border-wce-blue-100">
                <h3 className="text-xl font-bold text-wce-navy-900 mb-2">
                  Official FAQ Guidance Under Review
                </h3>
                <p className="text-wce-slate-600 mb-6 max-w-md mx-auto">
                  Our admissions team is finalizing verified guidance sheets for visa rules and application procedures. Contact our counsellors directly for personalized answers.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-[14px] bg-wce-coral-700 px-6 py-3 text-sm font-semibold text-wce-white hover:bg-wce-coral-800 transition-colors"
                >
                  Contact Counselling Team
                </a>
              </div>
            )}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Have a question not listed here?"
        subcopy="Our team is available to review your academic background, eligibility, and destination requirements."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
