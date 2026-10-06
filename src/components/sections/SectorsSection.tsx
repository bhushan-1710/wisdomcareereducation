import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { sectors, sectorsIntro } from '@/content/sectors';
import { hasValue, TbcBadge } from '@/lib/tbc';

export function SectorsSection() {
  return (
    <section className="py-20 md:py-28 bg-wce-white" id="sectors">
      <Container>
        <div className="max-w-2xl mb-12 md:mb-16">
          <Eyebrow>Placement sectors</Eyebrow>
          <h2 className="text-[32px] md:text-[40px] font-bold text-wce-navy-900 tracking-tight mt-2">
            Sectors we place in
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-wce-slate-600 leading-relaxed">
            {sectorsIntro}
          </p>
        </div>

        {/* Desktop staggered arrangement: 3 on top, 2 centered below */}
        <div className="hidden lg:grid grid-cols-6 gap-6">
          {sectors.slice(0, 3).map((sector) => (
            <div
              key={sector.slug}
              className="col-span-2 group rounded-[20px] bg-wce-white p-6 border border-wce-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-wce-blue-200"
            >
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-5 rounded-[16px] bg-wce-blue-50/60 p-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Illustration id={sector.art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[19px] font-bold text-wce-navy-900 text-center tracking-tight">
                {sector.title}
              </h3>
              {hasValue(sector.examples) ? (
                <p className="mt-2 text-xs text-wce-slate-500 text-center">
                  {sector.examples.join(', ')}
                </p>
              ) : (
                <div className="mt-2 flex justify-center">
                  <TbcBadge label="TBC" context="roles" />
                </div>
              )}
            </div>
          ))}

          {/* Staggered bottom row with 2 items centered */}
          <div className="col-start-2 col-span-2">
            <div className="group rounded-[20px] bg-wce-white p-6 border border-wce-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-wce-blue-200 h-full">
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-5 rounded-[16px] bg-wce-blue-50/60 p-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Illustration id={sectors[3].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[19px] font-bold text-wce-navy-900 text-center tracking-tight">
                {sectors[3].title}
              </h3>
              {hasValue(sectors[3].examples) ? (
                <p className="mt-2 text-xs text-wce-slate-500 text-center">
                  {sectors[3].examples.join(', ')}
                </p>
              ) : (
                <div className="mt-2 flex justify-center">
                  <TbcBadge label="TBC" context="roles" />
                </div>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <div className="group rounded-[20px] bg-wce-white p-6 border border-wce-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-wce-blue-200 h-full">
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-5 rounded-[16px] bg-wce-blue-50/60 p-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Illustration id={sectors[4].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[19px] font-bold text-wce-navy-900 text-center tracking-tight">
                {sectors[4].title}
              </h3>
              {hasValue(sectors[4].examples) ? (
                <p className="mt-2 text-xs text-wce-slate-500 text-center">
                  {sectors[4].examples.join(', ')}
                </p>
              ) : (
                <div className="mt-2 flex justify-center">
                  <TbcBadge label="TBC" context="roles" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tablet / Mobile grid (2 columns on tablet, clean stacked/carousel on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-5">
          {sectors.map((sector) => (
            <div
              key={sector.slug}
              className="rounded-[18px] bg-wce-white p-5 border border-wce-slate-200/90 shadow-sm flex items-center gap-4"
            >
              <div className="h-20 w-20 min-w-[80px] rounded-[14px] bg-wce-blue-50/70 p-2 flex items-center justify-center">
                <Illustration id={sector.art} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-wce-navy-900 leading-snug">
                  {sector.title}
                </h3>
                {hasValue(sector.examples) ? (
                  <p className="mt-1 text-xs text-wce-slate-500">
                    {sector.examples.join(', ')}
                  </p>
                ) : (
                  <div className="mt-1">
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
