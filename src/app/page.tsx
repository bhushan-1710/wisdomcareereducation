import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { AboutStats } from '@/components/sections/AboutStats';
import { ProgramsBand } from '@/components/sections/ProgramsBand';

export const metadata: Metadata = {
  title: 'Wisdom Career Education | Internships, Study Abroad | Nashik',
  description:
    'Internships, study abroad and professional development programs from Nashik, with 15+ years of experience. Book a free counselling session.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-wce-blue-50 text-wce-slate-600">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-wce-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-wce-white focus:shadow-wce-md"
      >
        Skip to main content
      </a>

      {/* Production Header */}
      <Header />

      {/* Main Content — Home A Scope (Sections 1-5) */}
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <AboutStats />
        <ProgramsBand />
      </main>

      {/* Production Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />
    </div>
  );
}
