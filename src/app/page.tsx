import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import {
  Hero,
  TrustStrip,
  AboutStats,
  ProgramsBand,
  DestinationsSection,
  SectorsSection,
  SpotlightSection,
  JourneySection,
  WhyWceSection,
  SuccessStoriesSection,
  CsrSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/sections';

export const metadata: Metadata = {
  title: 'Wisdom Career Education | Internships, Study Abroad | Nashik',
  description:
    'Internships, study abroad and professional development programs from Nashik, with 15+ years of experience. Book a free counselling session.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-wce-white text-wce-slate-600">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-wce-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-wce-white focus:shadow-wce-md"
      >
        Skip to main content
      </a>

      {/* Section 1: Production Header */}
      <Header />

      {/* Main Content — Home Sections 2 through 14 */}
      <main id="main-content" className="flex-1">
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Trust Strip */}
        <TrustStrip />

        {/* Section 4: About + 15+ Years Stats */}
        <AboutStats />

        {/* Section 5: Programs Band */}
        <ProgramsBand />

        {/* Section 6: Destinations (Optional) */}
        <DestinationsSection />

        {/* Section 7: Placement Sectors */}
        <SectorsSection />

        {/* Section 8: Spotlight Rows ×2 (Optional) */}
        <SpotlightSection />

        {/* Section 9: Journey Stepper */}
        <JourneySection />

        {/* Section 10: Why WCE */}
        <WhyWceSection />

        {/* Section 11: Success Stories */}
        <SuccessStoriesSection />

        {/* Section 12: CSR */}
        <CsrSection />

        {/* Section 13: FAQ */}
        <FaqSection />

        {/* Section 14: Final CTA + Enquiry Form UI */}
        <FinalCtaSection />
      </main>

      {/* Section 15: Production Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />
    </div>
  );
}
