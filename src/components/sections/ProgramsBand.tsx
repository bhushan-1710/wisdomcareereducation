import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { programs } from '@/content';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';
import { Illustration } from '@/components/art/Illustration';
import { Reveal } from '@/components/motion/Reveal';

export interface ProgramsBandProps {
  className?: string;
}

export function ProgramsBand({ className = '' }: ProgramsBandProps) {
  return (
    <section
      className={`relative bg-wce-blue-100 py-16 md:py-24 ${className}`}
      aria-label="Programs"
    >
      <Container size="default">
        {/* Section Header with Circular Sticker Badge */}
        <div className="relative mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>What we offer</Eyebrow>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-wce-navy-900 sm:text-4xl lg:text-[44px]">
              Choose the path that fits your goal
            </h2>
            <p className="mt-3 max-w-2xl text-base text-wce-slate-600 sm:text-lg">
              Structured pathways from degree-level internships to university admissions and global career development.
            </p>
          </div>

          {/* Circular Promotional "Free counselling" Sticker Badge */}
          <div className="hidden shrink-0 sm:block" aria-hidden="true">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-wce-white bg-wce-navy-900 p-2 text-center text-[11px] font-bold uppercase tracking-wider text-wce-white shadow-wce-md select-none transition-transform hover:rotate-6">
              <span>Free Counselling</span>
            </div>
          </div>
        </div>

        {/* Desktop & Tablet: 4-up (Desktop) / 2×2 (Tablet) */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {programs.map((program, idx) => (
            <Reveal
              key={program.slug}
              delayMs={idx * 80}
              durationMs={600}
              className="h-full"
            >
              <Link
                href={`/programs/${program.slug}`}
                className="group relative flex h-full flex-col justify-between rounded-[20px] border border-wce-slate-300 bg-wce-white p-6 shadow-wce-sm transition-all duration-320 hover:-translate-y-2 hover:shadow-wce-float focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500"
              >
                <div>
                  {/* Isometric Illustration Tile on Pastel Background */}
                  <div className="mb-5 flex items-center justify-center overflow-hidden rounded-[16px] border border-wce-blue-100/60 bg-wce-blue-50/80 p-4">
                    <Illustration
                      id={program.art}
                      className="w-full aspect-square transition-transform duration-320 group-hover:scale-[1.04] group-hover:rotate-3"
                    />
                  </div>

                  <h3 className="font-heading text-xl font-bold leading-snug text-wce-navy-900 transition-colors duration-160 group-hover:text-wce-coral-700">
                    {program.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-wce-slate-600 line-clamp-3">
                    {program.summary}
                  </p>

                  {/* Program Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {program.tags.map((tag) => (
                      <Badge key={tag} variant="chip">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom Pinned Action */}
                <div className="mt-6 flex items-center justify-between border-t border-wce-slate-100 pt-5">
                  <span className="text-sm font-semibold text-wce-navy-900 transition-colors group-hover:text-wce-coral-700">
                    Explore pathway
                  </span>
                  <div className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-wce-slate-300 text-wce-navy-900 transition-all duration-200 group-hover:border-wce-coral-700 group-hover:bg-wce-coral-700 group-hover:text-wce-white">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll-Snap Carousel with Edge-Peek */}
        <div className="block md:hidden">
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
            {programs.map((program) => (
              <div
                key={program.slug}
                className="w-[82vw] min-w-[280px] max-w-[340px] shrink-0 snap-start"
              >
                <Link
                  href={`/programs/${program.slug}`}
                  className="group relative flex h-full flex-col justify-between rounded-[20px] border border-wce-slate-300 bg-wce-white p-6 shadow-wce-sm active:scale-[0.99] transition-transform"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-center overflow-hidden rounded-[16px] border border-wce-blue-100/60 bg-wce-blue-50/80 p-4">
                      <Illustration
                        id={program.art}
                        className="w-full aspect-square"
                      />
                    </div>

                    <h3 className="font-heading text-lg font-bold leading-snug text-wce-navy-900">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-wce-slate-600 line-clamp-3">
                      {program.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {program.tags.map((tag) => (
                        <Badge key={tag} variant="chip">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-wce-slate-100 pt-4">
                    <span className="text-sm font-semibold text-wce-navy-900">
                      Explore pathway
                    </span>
                    <div className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-wce-slate-300 text-wce-navy-900">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Edge peek prompt note */}
          <p className="mt-2 text-center text-xs text-wce-slate-400">
            Swipe sideways to view all 4 programs →
          </p>
        </div>
      </Container>
    </section>
  );
}
