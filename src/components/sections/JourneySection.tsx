import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { journeyIntro, journeySteps } from '@/content/journey';

export function JourneySection() {
  return (
    <section className="py-28 md:py-36 bg-wce-blue-50/70 relative overflow-hidden" id="journey">
      <Container>
        {/* Section Heading with generous vertical rhythm */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <Eyebrow>{journeyIntro.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] font-bold text-wce-navy-900 tracking-tight mt-2.5">
            {journeyIntro.heading}
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-wce-slate-600 leading-relaxed">
            {journeyIntro.subheading}
          </p>
        </div>

        {/* Desktop Horizontal Route Stepper (≥1024px) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Continuous route track behind step anchors */}
          <div
            className="absolute top-[48px] left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-wce-blue-300/90 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-6 xl:gap-8 relative z-10">
            {journeySteps.map((step) => (
              <div
                key={step.step}
                data-journey-step={step.step}
                className="group flex flex-col items-center text-center px-1"
              >
                {/* Large step anchor ready for future paper-plane flight path */}
                <div className="relative mb-6">
                  <div className="h-24 w-24 rounded-full bg-wce-white shadow-md border-2 border-wce-blue-200/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-wce-coral-500 group-hover:shadow-lg">
                    <Illustration id={step.art} className="h-12 w-12 object-contain" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 h-7 w-7 rounded-full bg-wce-navy-900 text-wce-white text-[12px] font-bold flex items-center justify-center shadow-md border-2 border-wce-white">
                    {`0${step.step}`}
                  </span>
                </div>

                <h3 className="text-[18px] xl:text-[19px] font-bold text-wce-navy-900 tracking-tight mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[14px] text-wce-slate-600 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile Vertical Stepper (<1024px) */}
        <div className="lg:hidden relative max-w-xl mx-auto pl-6 sm:pl-8">
          {/* Continuous vertical route line connecting all 5 steps */}
          <div
            className="absolute top-8 bottom-8 left-[35px] sm:left-[43px] w-[2px] border-l-2 border-dashed border-wce-blue-300"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-14 relative">
            {journeySteps.map((step) => (
              <div
                key={step.step}
                data-journey-step={step.step}
                className="flex items-start gap-5 sm:gap-7"
              >
                {/* Step anchor */}
                <div className="relative flex-none">
                  <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-wce-white shadow-md border-2 border-wce-blue-200 flex items-center justify-center">
                    <Illustration id={step.art} className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
                  </div>
                  <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-wce-navy-900 text-wce-white text-[11px] font-bold flex items-center justify-center shadow-sm border-2 border-wce-white">
                    {`0${step.step}`}
                  </span>
                </div>

                {/* Content node */}
                <div className="pt-1.5 flex-1">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-wce-navy-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-wce-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
