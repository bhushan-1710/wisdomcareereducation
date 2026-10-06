import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Container } from '@/components/ui/Container';
import { Illustration } from '@/components/art/Illustration';
import { programs } from '@/content/programs';
import { constructMetadata } from '@/lib/seo';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Our Programs | Study Abroad & Global Internships',
  description:
    'Explore university admissions abroad, student internships, graduate placements, and professional development programs backed by 15+ years of experience.',
  path: '/programs',
});

export default function ProgramsPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="What We Offer"
        title="Programs tailored for every career milestone"
        description="Whether you are pursuing an international degree, gaining practical credits during college, or building overseas professional standing, WCE provides dedicated guidance at every step."
        breadcrumbs={[{ label: 'Programs' }]}
        ctaLabel="Book free counselling"
        ctaHref="/contact"
      />

      {/* Editorial Programs List */}
      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {programs.map((program, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={program.slug}
                  id={program.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center rounded-[24px] bg-wce-blue-50/40 p-8 sm:p-12 border border-wce-slate-200/80 transition-all hover:bg-wce-blue-50/70 hover:shadow-sm`}
                >
                  {/* Visual illustration stage */}
                  <div
                    className={`lg:col-span-5 flex justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="w-full max-w-[360px] aspect-square rounded-[20px] bg-wce-white p-6 shadow-sm border border-wce-blue-100 flex items-center justify-center">
                      <Illustration id={program.art} className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Content column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {program.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-wce-blue-100 px-3 py-0.5 text-xs font-semibold text-wce-navy-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-[26px] sm:text-[32px] font-bold text-wce-navy-900 tracking-tight leading-snug mb-3">
                      {program.title}
                    </h2>

                    <p className="text-[16px] text-wce-slate-600 leading-relaxed mb-6">
                      {program.summary}
                    </p>

                    <div className="rounded-[16px] bg-wce-white p-4 border border-wce-slate-200/80 mb-6 text-sm text-wce-slate-600">
                      <strong className="text-wce-navy-900 block mb-1">Target Audience:</strong>
                      {program.audience}
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="inline-flex items-center gap-2 rounded-[14px] bg-wce-coral-700 px-5 py-3 text-sm font-semibold text-wce-white hover:bg-wce-coral-800 transition-colors group"
                      >
                        <span>View program details</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Unsure which program fits your background?"
        subcopy="Our senior counsellors provide 1-on-1 profile evaluation to match you with the right international university or internship opportunity."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
