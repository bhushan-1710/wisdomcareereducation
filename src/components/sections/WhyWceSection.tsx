import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { whyIntro, whyFeatures } from '@/content/why';
import { hasValue, TbcBadge } from '@/lib/tbc';

export function WhyWceSection() {
  return (
    <section className="py-20 md:py-28 bg-wce-white" id="why-wce">
      <Container>
        <div className="max-w-2xl mb-16 md:mb-20">
          <Eyebrow>{whyIntro.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[42px] font-bold text-wce-navy-900 tracking-tight mt-2">
            {whyIntro.heading}
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-wce-slate-600 leading-relaxed">
            {whyIntro.subheading}
          </p>
        </div>

        {/* Staggered / Asymmetric 2-column layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Card 1 & Card 3 */}
          <div className="space-y-8 lg:space-y-12">
            {/* Card 1: Personal counselling */}
            <div className="group rounded-[24px] bg-wce-blue-50/50 p-8 lg:p-10 border border-wce-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-[16px] bg-wce-white p-3 shadow-sm mb-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-wce-blue-100">
                <Illustration id={whyFeatures[0].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[22px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[0].title}
              </h3>
              {hasValue(whyFeatures[0].description) && (
                <p className="text-[15px] text-wce-slate-600 leading-relaxed">
                  {whyFeatures[0].description}
                </p>
              )}
            </div>

            {/* Card 3: Global network (staggered offset) */}
            <div className="group rounded-[24px] bg-wce-white p-8 lg:p-10 border border-wce-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-[16px] bg-wce-blue-50 p-3 shadow-sm mb-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-wce-blue-100">
                <Illustration id={whyFeatures[2].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[22px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[2].title}
              </h3>
              {hasValue(whyFeatures[2].description) && (
                <p className="text-[15px] text-wce-slate-600 leading-relaxed">
                  {whyFeatures[2].description}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Card 2 (down-shifted) & Card 4 */}
          <div className="space-y-8 lg:space-y-12 md:pt-10 lg:pt-14">
            {/* Card 2: Visa and document support */}
            <div className="group rounded-[24px] bg-wce-white p-8 lg:p-10 border border-wce-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-[16px] bg-wce-coral-50 p-3 shadow-sm mb-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-wce-coral-100">
                <Illustration id={whyFeatures[1].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[22px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[1].title}
              </h3>
              {hasValue(whyFeatures[1].description) && (
                <p className="text-[15px] text-wce-slate-600 leading-relaxed">
                  {whyFeatures[1].description}
                </p>
              )}
            </div>

            {/* Card 4: Support after placement */}
            <div className="group rounded-[24px] bg-wce-blue-50/50 p-8 lg:p-10 border border-wce-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-[16px] bg-wce-white p-3 shadow-sm mb-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-wce-blue-100">
                <Illustration id={whyFeatures[3].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[22px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[3].title}
              </h3>
              {hasValue(whyFeatures[3].description) ? (
                <p className="text-[15px] text-wce-slate-600 leading-relaxed">
                  {whyFeatures[3].description}
                </p>
              ) : (
                <div className="mt-1">
                  <TbcBadge label="TBC" context="client confirmation (Q11)" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
