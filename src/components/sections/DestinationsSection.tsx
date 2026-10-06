import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { destinations, destinationsIntro } from '@/content/destinations';
import { hasValue, TbcBadge } from '@/lib/tbc';

export function DestinationsSection() {
  const approvedDestinations = destinations.filter(
    (d) => hasValue(d.summary) && (d.status as string) === 'live'
  );

  // If no verified destinations exist with approved content, omit completely
  if (approvedDestinations.length === 0) {
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    // Dev-only placeholder indicator
    return (
      <section className="py-6 bg-wce-blue-50/50 border-y border-wce-slate-200/60" aria-label="Destinations Dev State">
        <Container>
          <div className="flex items-center justify-between text-xs text-wce-slate-500">
            <span>[Dev Only] Section 6 — Destinations: Omitted in production until country summaries are approved.</span>
            <TbcBadge label="TBC" context="destination summaries (Q5)" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-wce-blue-50/60" id="destinations">
      <Container>
        <div className="mb-12">
          <Eyebrow>Explore</Eyebrow>
          <h2 className="text-[32px] md:text-[40px] font-bold text-wce-navy-900 tracking-tight mt-2">
            {destinationsIntro.heading}
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 pb-4 md:mx-0 md:px-0">
          {approvedDestinations.map((dest) => (
            <div
              key={dest.slug}
              className="flex-none w-[280px] sm:w-[340px] snap-start rounded-[20px] bg-wce-white p-6 shadow-md border border-wce-slate-200"
            >
              <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-5">
                <Illustration id={dest.art} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[20px] font-bold text-wce-navy-900">{dest.country}</h3>
              {hasValue(dest.summary) && (
                <p className="mt-2 text-[14px] text-wce-slate-600 leading-relaxed">{dest.summary}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
