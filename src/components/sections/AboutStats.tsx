import React from 'react';
import { siteConfig } from '@/content';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { Reveal } from '@/components/motion/Reveal';
import { CountUp } from '@/components/motion/CountUp';
import { TbcBadge } from '@/lib/tbc';

export interface AboutStatsProps {
  className?: string;
}

export function AboutStats({ className = '' }: AboutStatsProps) {
  const isDev = process.env.NODE_ENV !== 'production';

  return (
    <section
      className={`relative overflow-hidden bg-wce-white py-16 md:py-24 ${className}`}
      aria-label="About Wisdom Career Education"
    >
      <Container size="default">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text & Verified 15+ Years Metric (Left side) */}
          <div className="lg:col-span-7">
            <Reveal durationMs={650}>
              <Eyebrow>{siteConfig.aboutStory.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-wce-navy-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
                {siteConfig.aboutStory.heading}
              </h2>
            </Reveal>

            <Reveal delayMs={140} durationMs={650}>
              <p className="mt-5 text-base leading-relaxed text-wce-slate-600 sm:text-lg">
                {siteConfig.aboutStory.body}
              </p>
            </Reveal>

            {/* Verified Statistics Callout — Prominently featuring 15+ Years without awkward empty slots */}
            <Reveal delayMs={240} durationMs={650}>
              <div className="mt-8 rounded-[20px] border border-wce-slate-200/90 bg-wce-blue-50/70 p-6 shadow-wce-sm sm:flex sm:items-center sm:gap-6">
                <div className="shrink-0 text-left">
                  <span className="font-heading text-5xl font-extrabold leading-none text-wce-navy-900 sm:text-6xl">
                    <CountUp end={15} suffix="+" />
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-wce-coral-800">
                    Years of Experience
                  </span>
                </div>

                <div className="mt-4 border-t border-wce-slate-200 pt-4 sm:mt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
                  <h3 className="font-heading text-base font-bold text-wce-navy-900">
                    Established 2008 in Government of India Records
                  </h3>
                  <p className="mt-1 text-xs text-wce-slate-600 sm:text-sm">
                    Connecting Indian students and graduates with accredited overseas universities, hotels, and industry employers.
                  </p>
                </div>
              </div>

              {/* Dev notice showing that remaining stats are TBC pending client supply */}
              {isDev ? (
                <div className="mt-3 flex items-center gap-2 text-xs text-wce-slate-400">
                  <TbcBadge label="TBC" context="placements, admissions, countries metrics pending client audit" />
                </div>
              ) : null}
            </Reveal>
          </div>

          {/* Illustration Container with Organic Soft Treatment (Right side) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delayMs={200} durationMs={750} distance={32}>
              <div className="relative mx-auto max-w-[420px] lg:max-w-none flex items-center justify-center drop-shadow-md">
                <Illustration
                  id="ill-about"
                  className="w-full object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
