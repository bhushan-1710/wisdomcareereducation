import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { whyIntro, whyFeatures } from '@/content/why';
import { hasValue, TbcBadge } from '@/lib/tbc';

export function WhyWceSection() {
  return (
    <section className="py-24 md:py-36 bg-wce-white" id="why-wce">
      <Container>
        {/* Section Heading */}
        <div className="max-w-2xl mb-20 md:mb-28">
          <Eyebrow>{whyIntro.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] font-bold text-wce-navy-900 tracking-tight mt-2.5">
            {whyIntro.heading}
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-wce-slate-600 leading-relaxed">
            {whyIntro.subheading}
          </p>
        </div>

        {/* Asymmetric / Staggered Editorial Feature Layout (≥768px) - No heavy boxed card envelopes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Feature 1 & Feature 3 */}
          <div className="space-y-16 lg:space-y-24">
            {/* Feature 1: Personal counselling */}
            <div className="group">
              <div className="h-20 w-20 rounded-[22px] bg-wce-blue-50 p-3.5 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Illustration id={whyFeatures[0].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[23px] lg:text-[25px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[0].title}
              </h3>
              {hasValue(whyFeatures[0].description) && (
                <p className="text-[15px] lg:text-[16px] text-wce-slate-600 leading-relaxed max-w-md">
                  {whyFeatures[0].description}
                </p>
              )}
            </div>

            {/* Feature 3: Global network */}
            <div className="group pt-6 md:pt-10 border-t border-wce-slate-200/60">
              <div className="h-20 w-20 rounded-[22px] bg-wce-blue-50 p-3.5 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Illustration id={whyFeatures[2].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[23px] lg:text-[25px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[2].title}
              </h3>
              {hasValue(whyFeatures[2].description) && (
                <p className="text-[15px] lg:text-[16px] text-wce-slate-600 leading-relaxed max-w-md">
                  {whyFeatures[2].description}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Feature 2 (Offset down) & Feature 4 */}
          <div className="space-y-16 lg:space-y-24 md:pt-16 lg:pt-24">
            {/* Feature 2: Visa and document support */}
            <div className="group">
              <div className="h-20 w-20 rounded-[22px] bg-wce-coral-50 p-3.5 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Illustration id={whyFeatures[1].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[23px] lg:text-[25px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[1].title}
              </h3>
              {hasValue(whyFeatures[1].description) && (
                <p className="text-[15px] lg:text-[16px] text-wce-slate-600 leading-relaxed max-w-md">
                  {whyFeatures[1].description}
                </p>
              )}
            </div>

            {/* Feature 4: Support after placement */}
            <div className="group pt-6 md:pt-10 border-t border-wce-slate-200/60">
              <div className="h-20 w-20 rounded-[22px] bg-wce-blue-50 p-3.5 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Illustration id={whyFeatures[3].art} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[23px] lg:text-[25px] font-bold text-wce-navy-900 tracking-tight mb-3">
                {whyFeatures[3].title}
              </h3>
              {hasValue(whyFeatures[3].description) ? (
                <p className="text-[15px] lg:text-[16px] text-wce-slate-600 leading-relaxed max-w-md">
                  {whyFeatures[3].description}
                </p>
              ) : (
                <div className="mt-2">
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
