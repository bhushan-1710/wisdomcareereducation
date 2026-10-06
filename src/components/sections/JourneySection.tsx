'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { Reveal } from '@/components/motion/Reveal';
import { useReducedMotion } from '@/components/motion/useReducedMotion';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { journeyIntro, journeySteps } from '@/content/journey';

export function JourneySection() {
  const prefersReduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [lineProgress, setLineProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const currentStep = prefersReduced ? 5 : activeStep;
  const currentLineProgress = prefersReduced ? 100 : lineProgress;

  useEffect(() => {
    if (prefersReduced) {
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 65%',
        end: 'bottom 45%',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate step index from 1 to 5
          const calculatedStep = Math.min(5, Math.max(1, Math.ceil(progress * 5)));
          setActiveStep(calculatedStep);
          setLineProgress(Math.min(100, progress * 100));
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-36 bg-wce-blue-50/70 relative overflow-hidden"
      id="journey"
    >
      <Container>
        {/* Section Heading with generous vertical rhythm */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <Reveal durationMs={650}>
            <Eyebrow>{journeyIntro.eyebrow}</Eyebrow>
            <h2 className="text-[32px] md:text-[44px] font-bold text-wce-navy-900 tracking-tight mt-2.5">
              {journeyIntro.heading}
            </h2>
          </Reveal>
          <Reveal delayMs={120} durationMs={650}>
            <p className="mt-4 text-[16px] md:text-[18px] text-wce-slate-600 leading-relaxed">
              {journeyIntro.subheading}
            </p>
          </Reveal>
        </div>

        {/* Desktop Horizontal Route Stepper (≥1024px) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Continuous route track behind step anchors */}
          <div
            className="absolute top-[48px] left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-wce-blue-300/80 -z-0"
            aria-hidden="true"
          />

          {/* Progressive dynamic line fill */}
          <div
            className="absolute top-[48px] left-[8%] h-[2px] bg-wce-coral-500 transition-all duration-300 -z-0"
            style={{
              width: prefersReduced ? '84%' : `${(currentLineProgress / 100) * 84}%`,
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-6 xl:gap-8 relative z-10">
            {journeySteps.map((step) => {
              const isPassedOrActive = step.step <= currentStep;
              const isCurrent = step.step === currentStep;

              return (
                <div
                  key={step.step}
                  data-journey-step={step.step}
                  className="group flex flex-col items-center text-center px-1"
                >
                  {/* Large step anchor */}
                  <div className="relative mb-6">
                    <div
                      className={`h-24 w-24 rounded-full bg-wce-white flex items-center justify-center transition-all duration-320 ${
                        isCurrent
                          ? 'scale-110 border-2 border-wce-coral-500 shadow-wce-md bg-wce-coral-50/30 ring-4 ring-wce-coral-400/20'
                          : isPassedOrActive
                          ? 'border-2 border-wce-coral-400 shadow-sm'
                          : 'border-2 border-wce-blue-200/90 shadow-sm opacity-80'
                      }`}
                    >
                      <Illustration id={step.art} className="h-12 w-12 object-contain" />
                    </div>
                    <span
                      className={`absolute -top-1.5 -right-1.5 h-7 w-7 rounded-full text-[12px] font-bold flex items-center justify-center shadow-md border-2 border-wce-white transition-colors duration-300 ${
                        isPassedOrActive
                          ? 'bg-wce-coral-700 text-wce-white'
                          : 'bg-wce-navy-900 text-wce-white'
                      }`}
                    >
                      {`0${step.step}`}
                    </span>
                  </div>

                  <h3
                    className={`text-[18px] xl:text-[19px] tracking-tight mb-2.5 leading-snug transition-colors duration-300 ${
                      isPassedOrActive ? 'font-bold text-wce-navy-900' : 'font-semibold text-wce-slate-600'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-wce-slate-600 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet & Mobile Vertical Stepper (<1024px) */}
        <div className="lg:hidden relative max-w-xl mx-auto pl-6 sm:pl-8">
          {/* Continuous vertical route line connecting all 5 steps */}
          <div
            className="absolute top-8 bottom-8 left-[35px] sm:left-[43px] w-[2px] border-l-2 border-dashed border-wce-blue-300"
            aria-hidden="true"
          />

          {/* Progressive dynamic vertical line fill */}
          <div
            className="absolute top-8 left-[35px] sm:left-[43px] w-[2px] bg-wce-coral-500 transition-all duration-300"
            style={{
              height: prefersReduced ? 'calc(100% - 64px)' : `calc(${(currentLineProgress / 100)} * (100% - 64px))`,
            }}
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-14 relative">
            {journeySteps.map((step) => {
              const isPassedOrActive = step.step <= currentStep;
              const isCurrent = step.step === currentStep;

              return (
                <div
                  key={step.step}
                  data-journey-step={step.step}
                  className="flex items-start gap-5 sm:gap-7"
                >
                  {/* Step anchor */}
                  <div className="relative flex-none">
                    <div
                      className={`h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-wce-white flex items-center justify-center transition-all duration-320 ${
                        isCurrent
                          ? 'scale-105 border-2 border-wce-coral-500 shadow-md ring-3 ring-wce-coral-400/20'
                          : isPassedOrActive
                          ? 'border-2 border-wce-coral-400 shadow-sm'
                          : 'border-2 border-wce-blue-200 shadow-sm opacity-80'
                      }`}
                    >
                      <Illustration id={step.art} className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
                    </div>
                    <span
                      className={`absolute -top-1 -right-1 h-6 w-6 rounded-full text-[11px] font-bold flex items-center justify-center shadow-sm border-2 border-wce-white transition-colors duration-300 ${
                        isPassedOrActive
                          ? 'bg-wce-coral-700 text-wce-white'
                          : 'bg-wce-navy-900 text-wce-white'
                      }`}
                    >
                      {`0${step.step}`}
                    </span>
                  </div>

                  {/* Content node */}
                  <div className="pt-1.5 flex-1">
                    <h3
                      className={`text-[18px] sm:text-[20px] mb-1.5 leading-snug transition-colors duration-300 ${
                        isPassedOrActive ? 'font-bold text-wce-navy-900' : 'font-semibold text-wce-slate-600'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-wce-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
