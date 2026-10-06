import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { EnquiryForm } from '@/components/forms/EnquiryForm';

export function FinalCtaSection() {
  return (
    <section className="py-24 md:py-32 lg:pb-40 bg-wce-navy-900 text-wce-white relative" id="enquire">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subcopy & Runway Scene Illustration */}
          <div className="lg:col-span-6">
            <Eyebrow light>Start your journey</Eyebrow>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-wce-white tracking-tight mt-3 mb-5 leading-[1.12]">
              Achieve your dream today
            </h2>
            <p className="text-[16px] sm:text-[18px] text-wce-slate-300 leading-relaxed max-w-lg mb-8">
              Book a free counselling session and tell us where you want to go. Our experienced advisors guide you through programs, admissions, documentation, and departure.
            </p>

            {/* Documented runway scene illustration container - clean solid navy surface */}
            <div className="rounded-[24px] bg-wce-navy-800 p-5 sm:p-6 border border-wce-navy-700 max-w-lg">
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
