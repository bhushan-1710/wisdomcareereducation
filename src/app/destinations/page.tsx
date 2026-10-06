import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Container } from '@/components/ui/Container';
import { destinations } from '@/content/destinations';
import { constructMetadata } from '@/lib/seo';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { Globe2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Destinations | Overseas Study & Placement Locations',
  description:
    'Explore overseas study and internship destinations guided by Wisdom Career Education, including programs in Southeast Asia and Europe.',
  path: '/destinations',
});

export default function DestinationsPage() {
  const verifiedDestinations = destinations.filter(
    (d) => hasValue(d.summary) && (d.status as string) === 'live'
  );

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Global Locations"
        title="Where could you go?"
        description="Wisdom Career Education assists students and graduates with international education admissions and 5-star hotel internships across accredited overseas destinations."
        breadcrumbs={[{ label: 'Destinations' }]}
        ctaLabel="Book free counselling"
        ctaHref="/contact"
      />

      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          {verifiedDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {verifiedDestinations.map((dest) => (
                <div
                  key={dest.slug}
                  className="rounded-[24px] bg-wce-blue-50/50 p-8 border border-wce-slate-200"
                >
                  <h2 className="text-[24px] font-bold text-wce-navy-900 mb-2">{dest.country}</h2>
                  <p className="text-sm text-wce-slate-600">{dest.summary as string}</p>
                </div>
              ))}
            </div>
          ) : (
            /* Honest, uninvented destination status notice */
            <div className="max-w-2xl mx-auto rounded-[24px] bg-wce-blue-50/60 p-8 sm:p-12 border border-wce-blue-100 text-center">
              <div className="h-14 w-14 rounded-full bg-wce-white shadow-sm border border-wce-blue-200 flex items-center justify-center mx-auto mb-6 text-wce-coral-700">
                <Globe2 className="h-7 w-7" />
              </div>

              <h2 className="text-[22px] sm:text-[26px] font-bold text-wce-navy-900 mb-3 tracking-tight">
                International Destination Profiles Under Audit
              </h2>

              <p className="text-[15px] sm:text-[16px] text-wce-slate-600 leading-relaxed mb-6">
                WCE regularly guides students to accredited programs across Southeast Asia (such as Malaysia) and Europe (such as France). Detailed destination dossiers and institution profiles are currently being compiled for our verified directory.
              </p>

              <div className="flex items-center justify-center gap-2">
                <TbcBadge label="TBC" context="country dossiers pending client audit (Q5)" />
              </div>
            </div>
          )}
        </Container>
      </section>

      <CtaBanner
        heading="Ask our team about specific countries"
        subcopy="Our counsellors can share current program availability, university partners, and visa processing windows for your target countries."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
