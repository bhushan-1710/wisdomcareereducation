'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { testimonialsHeading, getApprovedTestimonials } from '@/content/testimonials';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from 'lucide-react';

export function SuccessStoriesSection() {
  const approved = getApprovedTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? approved.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === approved.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="py-20 md:py-28 bg-wce-blue-100" id="success-stories">
      <Container>
        <div className="max-w-2xl mb-12 md:mb-16">
          <Eyebrow>{testimonialsHeading.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[42px] font-bold text-wce-navy-900 tracking-tight mt-2">
            {testimonialsHeading.heading}
          </h2>
        </div>

        {approved.length > 0 ? (
          /* Production Slider Structure when approved testimonials are unlocked */
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
        ) : (
          /* Documented intentional alternative when quotes/photos are awaiting signed release */
          <div className="rounded-[24px] bg-wce-white p-8 sm:p-12 md:p-14 shadow-sm border border-wce-slate-200/90 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-[20px] bg-wce-blue-50 p-4 border border-wce-blue-100 flex items-center justify-center">
                <Illustration id="ill-avatar-1" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-2 text-wce-coral-700 mb-2">
                <Quote className="h-6 w-6" />
                <span className="text-[13px] font-bold uppercase tracking-wider">15+ Years of Student Success</span>
              </div>

              <h3 className="text-[22px] sm:text-[26px] font-bold text-wce-navy-900 tracking-tight leading-snug">
                From classroom ambitions to 5-star placements and global universities
              </h3>

              <p className="mt-3 text-[15px] sm:text-[16px] text-wce-slate-600 leading-relaxed">
                Since 2008, WCE has guided Indian students and graduates into accredited university degree programs, premium hotel internships, and global career pathways. Verified student stories, video features, and testimonial releases are being assembled for our student showcase.
              </p>

              <div className="mt-6 pt-5 border-t border-wce-slate-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-wce-navy-900 hover:text-wce-coral-700 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-wce-coral-700" />
                  <span>Have you travelled with WCE? Share your journey &rarr;</span>
                </a>

                <TbcBadge label="TBC" context="student releases & video permissions (Q4)" />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
