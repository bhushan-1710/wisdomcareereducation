import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { sectors, sectorsIntro } from '@/content/sectors';
import { hasValue, TbcBadge } from '@/lib/tbc';

export function SectorsSection() {
  const topSectors = sectors.slice(0, 3);
  const bottomSectors = sectors.slice(3, 5);

  return (
    <section className="py-24 md:py-32 bg-wce-white" id="sectors">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <Eyebrow>Placement sectors</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] font-bold text-wce-navy-900 tracking-tight mt-2.5">
            Sectors we place in
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-wce-slate-600 leading-relaxed">
            {sectorsIntro}
          </p>
        </div>

        {/* Desktop Illustrated Catalogue (≥1024px) - Staggered 3 + 2 layout with large focal art */}
        <div className="hidden lg:block space-y-16">
          {/* Top row: 3 items */}
          <div className="grid grid-cols-3 gap-12 xl:gap-16">
            {topSectors.map((sector) => (
              <div
                key={sector.slug}
                className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Large visual illustration area - not a boxed UI card */}
                <div className="w-full aspect-[4/3] rounded-[24px] bg-wce-blue-50/50 p-6 flex items-center justify-center transition-all duration-300 group-hover:bg-wce-blue-100/60 group-hover:shadow-sm">
                  <div className="w-full h-full max-w-[220px] transition-transform duration-300 group-hover:scale-105">
                    <Illustration id={sector.art} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="mt-6 max-w-xs">
                  <h3 className="text-[21px] xl:text-[22px] font-bold text-wce-navy-900 tracking-tight leading-snug group-hover:text-wce-coral-700 transition-colors">
                    {sector.title}
                  </h3>
                  {hasValue(sector.examples) ? (
                    <p className="mt-2 text-sm text-wce-slate-500 leading-relaxed">
                      {sector.examples.join(', ')}
                    </p>
                  ) : (
                    <div className="mt-2.5 flex justify-center">
                      <TbcBadge label="TBC" context="roles" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 items centered for editorial asymmetry */}
          <div className="flex justify-center gap-12 xl:gap-16 max-w-4xl mx-auto">
            {bottomSectors.map((sector) => (
              <div
                key={sector.slug}
                className="group flex-1 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="w-full aspect-[4/3] rounded-[24px] bg-wce-blue-50/50 p-6 flex items-center justify-center transition-all duration-300 group-hover:bg-wce-blue-100/60 group-hover:shadow-sm">
                  <div className="w-full h-full max-w-[220px] transition-transform duration-300 group-hover:scale-105">
                    <Illustration id={sector.art} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="mt-6 max-w-xs">
                  <h3 className="text-[21px] xl:text-[22px] font-bold text-wce-navy-900 tracking-tight leading-snug group-hover:text-wce-coral-700 transition-colors">
                    {sector.title}
                  </h3>
                  {hasValue(sector.examples) ? (
                    <p className="mt-2 text-sm text-wce-slate-500 leading-relaxed">
                      {sector.examples.join(', ')}
                    </p>
                  ) : (
                    <div className="mt-2.5 flex justify-center">
                      <TbcBadge label="TBC" context="roles" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile Layout (<1024px) - Clean airy catalogue flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 sm:gap-10">
          {sectors.map((sector) => (
            <div
              key={sector.slug}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-[4/3] rounded-[20px] bg-wce-blue-50/60 p-5 flex items-center justify-center">
                <div className="w-full h-full max-w-[190px]">
                  <Illustration id={sector.art} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-[18px] sm:text-[19px] font-bold text-wce-navy-900 leading-snug">
                  {sector.title}
                </h3>
                {hasValue(sector.examples) ? (
                  <p className="mt-1 text-xs text-wce-slate-500 leading-relaxed">
                    {sector.examples.join(', ')}
                  </p>
                ) : (
                  <div className="mt-2 flex justify-center">
                    <TbcBadge label="TBC" context="roles" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
