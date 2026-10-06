import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Illustration } from '@/components/art/Illustration';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import type { Program } from '@/content/types';
import { getSectorBySlug } from '@/content/sectors';
import { faqs } from '@/content/faqs';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';

export interface ProgramDetailTemplateProps {
  program: Program;
}

export function ProgramDetailTemplate({ program }: ProgramDetailTemplateProps) {
  const isProd = process.env.NODE_ENV === 'production';

  // Find relevant FAQs for this program
  const relevantFaqs = faqs.filter((f) => program.faqIds.includes(f.id));
  const displayFaqs = isProd
    ? relevantFaqs.filter((f) => hasValue(f.a))
    : relevantFaqs;

  const accordionItems: AccordionItem[] = displayFaqs.map((faq) => ({
    id: faq.id,
    title: faq.q,
    content: hasValue(faq.a) ? (
      <p>{faq.a}</p>
    ) : (
      <div className="py-2">
        <p className="text-wce-slate-500 italic mb-2">Response being reviewed by admissions team.</p>
        <TbcBadge label="TBC" context="answer pending client approval (Q12)" />
      </div>
    ),
  }));

  // Resolve sector entities
  const relevantSectors = program.sectorSlugs
    .map((slug) => getSectorBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="bg-wce-white">
      {/* Inner Hero */}
      <InnerHero
        eyebrow="Program Pathway"
        title={program.title}
        description={program.summary}
        art={program.art}
        breadcrumbs={[
          { label: 'Programs', href: '/programs' },
          { label: program.title },
        ]}
        ctaLabel="Book free counselling"
        ctaHref="/contact"
      />

      {/* Overview & Audience Section */}
      <section className="py-20 md:py-28 bg-wce-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Audience / Who It's For */}
            <div className="lg:col-span-7">
              <Eyebrow>Program Overview</Eyebrow>
              <h2 className="text-[30px] sm:text-[38px] font-bold text-wce-navy-900 tracking-tight mt-2 mb-6">
                Who this program is for
              </h2>

              <div className="rounded-[20px] bg-wce-blue-50/60 p-6 sm:p-8 border border-wce-blue-100 flex items-start gap-4 mb-8">
                <Users className="h-6 w-6 text-wce-coral-700 flex-none mt-1" />
                <div>
                  <h3 className="text-[18px] font-bold text-wce-navy-900 mb-2">Candidate Profile</h3>
                  <p className="text-[16px] text-wce-slate-600 leading-relaxed">
                    {program.audience}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-wce-blue-100 px-3.5 py-1 text-xs font-semibold text-wce-navy-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Inclusions (only if approved) */}
              {hasValue(program.inclusions) && (
                <div className="mt-8 pt-8 border-t border-wce-slate-200">
                  <h3 className="text-[20px] font-bold text-wce-navy-900 mb-4">What is included</h3>
                  <ul className="space-y-3">
                    {program.inclusions.map((inc) => (
                      <li key={inc} className="flex items-center gap-3 text-wce-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-wce-coral-700 flex-none" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Quick facts vignette */}
            <div className="lg:col-span-5 rounded-[24px] bg-wce-white p-8 border border-wce-slate-200/90 shadow-sm">
              <h3 className="text-[20px] font-bold text-wce-navy-900 mb-4">Key Details</h3>
              <dl className="space-y-4 text-sm divide-y divide-wce-slate-100">
                <div className="pt-3 flex justify-between">
                  <dt className="text-wce-slate-500 font-medium">Experience Level</dt>
                  <dd className="text-wce-navy-900 font-semibold">{program.tags[0] || 'All Levels'}</dd>
                </div>
                <div className="pt-3 flex justify-between">
                  <dt className="text-wce-slate-500 font-medium">Placement Guidance</dt>
                  <dd className="text-wce-navy-900 font-semibold">1-on-1 Personalised</dd>
                </div>
                <div className="pt-3 flex justify-between">
                  <dt className="text-wce-slate-500 font-medium">Advisory Experience</dt>
                  <dd className="text-wce-navy-900 font-semibold">15+ Years Registered</dd>
                </div>
              </dl>

              <div className="mt-8 pt-6 border-t border-wce-slate-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-[14px] bg-wce-coral-700 px-5 py-3 text-sm font-semibold text-wce-white hover:bg-wce-coral-800 transition-colors"
                >
                  <span>Enquire about this program</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Step-by-Step Pathway Process */}
      <section className="py-20 md:py-28 bg-wce-blue-50/50 border-y border-wce-slate-200/60">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-[30px] sm:text-[38px] font-bold text-wce-navy-900 tracking-tight mt-2">
              Application & Placement Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {program.steps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-[20px] bg-wce-white p-6 border border-wce-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-mono font-bold text-wce-coral-700 mb-3">
                    {`0${idx + 1}`}
                  </span>
                  <h3 className="text-[17px] font-bold text-wce-navy-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-wce-slate-600 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Relevant Placement Sectors */}
      <section className="py-20 md:py-28 bg-wce-white">
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow>Career Sectors</Eyebrow>
            <h2 className="text-[30px] sm:text-[38px] font-bold text-wce-navy-900 tracking-tight mt-2">
              Relevant placement industries
            </h2>
            <p className="mt-3 text-[16px] text-wce-slate-600">
              This program pathway offers placements and opportunities across key industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {relevantSectors.map((sector) => (
              <Link
                key={sector.slug}
                href="/sectors"
                className="group rounded-[20px] bg-wce-blue-50/40 p-5 border border-wce-slate-200/70 hover:bg-wce-blue-100/60 hover:border-wce-blue-200 transition-all text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-3 flex items-center justify-center transition-transform group-hover:scale-105">
                  <Illustration id={sector.art} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-sm font-bold text-wce-navy-900 group-hover:text-wce-coral-700 transition-colors">
                  {sector.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section (if published answers exist or in dev mode) */}
      {displayFaqs.length > 0 && (
        <section className="py-20 md:py-28 bg-wce-blue-50/60 border-t border-wce-slate-200/60">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Eyebrow>Got Questions?</Eyebrow>
              <h2 className="text-[30px] sm:text-[38px] font-bold text-wce-navy-900 tracking-tight mt-2">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-[760px] mx-auto">
              <Accordion items={accordionItems} defaultOpenId={displayFaqs[0]?.id} />
            </div>
          </Container>
        </section>
      )}

      {/* Final Counselling CTA */}
      <CtaBanner
        heading={`Start your ${program.title} journey`}
        subcopy="Speak directly with our senior counsellors to discuss universities, companies, visa guidance, and timelines."
        ctaHref="/contact"
      />
    </div>
  );
}
