import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Container } from '@/components/ui/Container';
import { Illustration } from '@/components/art/Illustration';
import { sectors, sectorsIntro } from '@/content/sectors';
import { constructMetadata } from '@/lib/seo';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { ArrowRight, Briefcase } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Placement Sectors | International Career Pathways',
  description:
    'Placement sectors for overseas internships and study pathways: Hospitality & Catering, Business & Finance, Engineering, Nursing & Midwifery, and IT.',
  path: '/sectors',
});

export default function SectorsPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Industry Placements"
        title="Placement sectors we specialize in"
        description={sectorsIntro}
        breadcrumbs={[{ label: 'Sectors' }]}
        ctaLabel="Book free counselling"
        ctaHref="/contact"
      />

      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {sectors.map((sector) => (
              <div
                key={sector.slug}
                id={sector.slug}
                className="group rounded-[24px] bg-wce-blue-50/40 p-8 border border-wce-slate-200/80 flex flex-col justify-between transition-all hover:bg-wce-blue-50/70 hover:shadow-sm"
              >
                <div>
                  <div className="w-full aspect-square max-w-[200px] mx-auto mb-6 rounded-[20px] bg-wce-white p-4 shadow-sm border border-wce-blue-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Illustration id={sector.art} className="w-full h-full object-contain" />
                  </div>

                  <h2 className="text-[22px] font-bold text-wce-navy-900 tracking-tight leading-snug mb-3">
                    {sector.title}
                  </h2>

                  <div className="flex items-center gap-2 text-xs font-semibold text-wce-coral-800 bg-wce-coral-50/80 px-3 py-1 rounded-full w-fit mb-4">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>Global Placements & Internships</span>
                  </div>

                  {hasValue(sector.examples) ? (
                    <div className="text-sm text-wce-slate-600 mb-6">
                      <strong className="block text-wce-navy-900 mb-1">Role Profiles:</strong>
                      <p>{sector.examples.join(', ')}</p>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <TbcBadge label="TBC" context="specific role profiles pending client audit (Q10)" />
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-wce-slate-200/70">
                  <Link
                    href={`/contact?sector=${sector.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-wce-navy-900 hover:text-wce-coral-700 transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Enquire for {sector.title}</span>
                    <ArrowRight className="h-4 w-4 text-wce-coral-700" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Interested in an industry not listed here?"
        subcopy="Our employer network expands across international hotel groups, technology providers, and healthcare facilities. Speak with our team to discuss custom placements."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
