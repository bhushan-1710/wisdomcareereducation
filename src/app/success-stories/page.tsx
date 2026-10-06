import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Container } from '@/components/ui/Container';
import { getApprovedTestimonials } from '@/content/testimonials';
import { constructMetadata } from '@/lib/seo';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { Quote, MessageSquare } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Success Stories | Student Journeys & Testimonials',
  description:
    'Real student journeys, university admissions, and international internship experiences guided by Wisdom Career Education.',
  path: '/success-stories',
});

export default function SuccessStoriesPage() {
  const approved = getApprovedTestimonials();

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Student Feedback"
        title="Stories from our students"
        description="Over 15+ years of guiding students and graduates across India to international internships, university admissions, and overseas hospitality careers."
        breadcrumbs={[{ label: 'Success Stories' }]}
        ctaLabel="Book free counselling"
        ctaHref="/contact"
      />

      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          {approved.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {approved.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[24px] bg-wce-blue-50/50 p-8 border border-wce-slate-200/80"
                >
                  <Quote className="h-8 w-8 text-wce-blue-300 mb-4" />
                  <p className="text-[17px] text-wce-navy-900 leading-relaxed italic mb-6">
                    &ldquo;{typeof item.quote === 'string' ? item.quote : ''}&rdquo;
                  </p>
                  <div>
                    <h3 className="text-lg font-bold text-wce-navy-900">{item.name}</h3>
                    <p className="text-sm text-wce-slate-600">{item.context}</p>
                    {hasValue(item.destination) && (
                      <span className="inline-block mt-2 text-xs font-semibold text-wce-coral-800 bg-wce-coral-50 px-2 py-0.5 rounded">
                        {item.destination}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Structurally valid verification status - zero fabricated testimonials */
            <div className="max-w-2xl mx-auto rounded-[24px] bg-wce-blue-50/60 p-8 sm:p-12 border border-wce-blue-100 text-center">
              <div className="h-14 w-14 rounded-full bg-wce-white shadow-sm border border-wce-blue-200 flex items-center justify-center mx-auto mb-6 text-wce-coral-700">
                <MessageSquare className="h-7 w-7" />
              </div>

              <h2 className="text-[22px] sm:text-[26px] font-bold text-wce-navy-900 mb-3 tracking-tight">
                Verified Student Stories Under Audit
              </h2>

              <p className="text-[15px] sm:text-[16px] text-wce-slate-600 leading-relaxed mb-6">
                In strict accordance with our publication standards, student testimonials, photos, and video messages are only published with explicit signed permission. Student feedback archives are currently undergoing audit.
              </p>

              <div className="flex items-center justify-center gap-2">
                <TbcBadge label="TBC" context="student releases pending client delivery (Q4)" />
              </div>
            </div>
          )}
        </Container>
      </section>

      <CtaBanner
        heading="Start your own international journey"
        subcopy="Connect with our counselling team to evaluate eligible overseas universities and internship placements."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
