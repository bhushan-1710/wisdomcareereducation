import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { EnquiryForm } from '@/components/forms/EnquiryForm';

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 lg:pb-36 bg-wce-navy-900 text-wce-white relative overflow-hidden" id="enquire">
      {/* Subtle atmospheric gradient light */}
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-wce-blue-600/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-wce-coral-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Subcopy & Atmospheric Runway Scene */}
          <div className="lg:col-span-6">
            <Eyebrow light>Start your journey</Eyebrow>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[50px] font-bold text-wce-white tracking-tight mt-3 mb-5 leading-[1.12]">
              Achieve your dream today
            </h2>
            <p className="text-[16px] sm:text-[18px] text-wce-slate-300 leading-relaxed max-w-lg mb-8">
              Book a free counselling session and tell us where you want to go. Our experienced advisors guide you through programs, admissions, documentation, and departure.
            </p>

            {/* Runway scene illustration */}
            <div className="rounded-[24px] bg-wce-navy-800/80 p-5 sm:p-7 border border-wce-navy-700/80 shadow-2xl backdrop-blur-sm max-w-lg">
              <div className="w-full aspect-[16/7] rounded-[16px] overflow-hidden">
                <Illustration id="ill-cta-scene" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-wce-slate-400">
                <span>Personalised 1-on-1 Guidance</span>
                <span>15+ Years Registered Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form UI */}
          <div className="lg:col-span-6">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
