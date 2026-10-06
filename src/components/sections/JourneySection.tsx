import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { journeyIntro, journeySteps } from '@/content/journey';

export function JourneySection() {
  return (
    <section className="py-20 md:py-28 bg-wce-blue-50/70 relative overflow-hidden" id="journey">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Eyebrow>{journeyIntro.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[42px] font-bold text-wce-navy-900 tracking-tight mt-2">
            {journeyIntro.heading}
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-wce-slate-600 leading-relaxed">
            {journeyIntro.subheading}
          </p>
        </div>

        {/* Desktop Horizontal Stepper (≥1024px) */}
        <div className="hidden lg:block relative">
          {/* Dotted path connector behind cards */}
          <div
            className="absolute top-[52px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-wce-blue-300 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {journeySteps.map((step) => (
              <div
                key={step.step}
                data-journey-step={step.step}
                className="group flex flex-col items-center text-center px-2"
              >
                {/* Step number badge / icon anchor */}
                <div className="relative mb-5">
                  <div className="h-16 w-16 rounded-full bg-wce-white shadow-md border-2 border-wce-blue-200 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:border-wce-coral-500">
                    <Illustration id={step.art} className="h-9 w-9 object-contain" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-wce-navy-900 text-wce-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                    {`0${step.step}`}
                  </span>
                </div>

                <h3 className="text-[17px] font-bold text-wce-navy-900 tracking-tight mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-wce-slate-600 leading-relaxed max-w-[190px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet / Mobile Vertical Stepper (<1024px) */}
        <div className="lg:hidden relative pl-6 sm:pl-8">
          {/* Vertical dotted connector line */}
          <div
            className="absolute top-6 bottom-6 left-[31px] sm:left-[39px] w-[2px] border-l-2 border-dashed border-wce-blue-300"
            aria-hidden="true"
          />

          <div className="space-y-8 relative">
            {journeySteps.map((step) => (
              <div
                key={step.step}
                data-journey-step={step.step}
                className="flex items-start gap-4 sm:gap-6"
              >
                {/* Step badge / icon */}
                <div className="relative flex-none">
                  <div className="h-14 w-14 rounded-full bg-wce-white shadow-md border-2 border-wce-blue-200 flex items-center justify-center">
                    <Illustration id={step.art} className="h-7 w-7 object-contain" />
                  </div>
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-wce-navy-900 text-wce-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="rounded-[16px] bg-wce-white/90 p-4 sm:p-5 border border-wce-slate-200/80 shadow-sm flex-1">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-wce-navy-900 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-wce-slate-600 leading-relaxed">
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
