'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { testimonialsHeading, getApprovedTestimonials } from '@/content/testimonials';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export function SuccessStoriesSection() {
  const approved = getApprovedTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);

  // In production, hide cleanly if no approved testimonials exist per docs/content.md & PRD
  if (approved.length === 0) {
    if (process.env.NODE_ENV === 'production') {
      return null;
    }

    return (
      <section
        className="py-4 bg-wce-blue-100/60 border-y border-wce-blue-200/60"
        aria-label="Success Stories Dev State"
      >
        <Container>
          <div className="flex items-center justify-between text-xs text-wce-slate-600">
            <span>
              [Dev Only] Section 11 — Success stories: Omitted in production until signed student releases/permissions are approved.
            </span>
            <TbcBadge label="TBC" context="student releases (Q4)" />
          </div>
        </Container>
      </section>
    );
  }

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? approved.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === approved.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="py-24 md:py-32 bg-wce-blue-100" id="success-stories">
      <Container>
        <div className="max-w-2xl mb-12 md:mb-16">
          <Eyebrow>{testimonialsHeading.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[42px] font-bold text-wce-navy-900 tracking-tight mt-2">
            {testimonialsHeading.heading}
          </h2>
        </div>

        {/* Documented large blue-100 editorial testimonial panel */}
        <div className="relative rounded-[24px] bg-wce-white p-8 sm:p-12 md:p-16 shadow-md border border-wce-slate-200/80">
          <Quote className="h-12 w-12 text-wce-blue-200 mb-6" />

          <div className="min-h-[160px] flex flex-col justify-between">
            <p className="text-[18px] sm:text-[22px] md:text-[24px] font-medium text-wce-navy-900 leading-relaxed italic">
              &ldquo;{typeof approved[activeIndex].quote === 'string' ? approved[activeIndex].quote : ''}&rdquo;
            </p>

            <div className="mt-8 pt-6 border-t border-wce-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-wce-blue-50 border border-wce-slate-200 flex items-center justify-center">
                  <Illustration id="ill-avatar-1" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-wce-navy-900">
                    {approved[activeIndex].name}
                  </h3>
                  <p className="text-[13px] text-wce-slate-600">
                    {approved[activeIndex].context}
                  </p>
                  {hasValue(approved[activeIndex].destination) && (
                    <span className="inline-block mt-1 text-[11px] font-semibold text-wce-coral-700 bg-wce-coral-50 px-2 py-0.5 rounded">
                      {approved[activeIndex].destination}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="h-10 w-10 rounded-full border border-wce-slate-300 bg-wce-white flex items-center justify-center text-wce-navy-900 hover:bg-wce-blue-50 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="h-10 w-10 rounded-full border border-wce-slate-300 bg-wce-white flex items-center justify-center text-wce-navy-900 hover:bg-wce-blue-50 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
