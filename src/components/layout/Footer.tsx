'use client';

import React from 'react';
import Link from 'next/link';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/content';
import { hasValue } from '@/lib/tbc';

export interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative bg-wce-navy-800 text-wce-white pt-16 pb-12 mt-16 ${className}`}>
      {/* Ref C signature angled top edge with one rounded corner */}
      <div
        className="absolute -top-8 left-0 right-0 h-8 bg-wce-navy-800 pointer-events-none rounded-tl-[32px]"
        style={{
          clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-wce-navy-700/60">
          {/* Col 1: Brand & Contact */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wce-navy-900 text-wce-coral-400">
                <Send className="h-4 w-4 -rotate-45 translate-x-0.5" />
              </div>
              <span className="font-heading font-bold text-[20px] text-wce-white">
                {siteConfig.shortName}
              </span>
            </Link>

            <p className="text-[14px] text-wce-slate-300 leading-relaxed">
              Global internships, study abroad and professional development pathways backed by 15+ years of experience.
            </p>

            <div className="flex flex-col gap-2.5 pt-2 text-[14px] text-wce-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-wce-coral-400 mt-1 shrink-0" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}
                </span>
              </div>
              {hasValue(siteConfig.phoneDisplay) && (
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-wce-coral-400 shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </div>
              )}
              {hasValue(siteConfig.email) && (
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-wce-coral-400 shrink-0" />
                  <span>{siteConfig.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-[16px] text-wce-white tracking-normal">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-[14px] text-wce-slate-300">
              <li>
                <Link href="/about" className="hover:text-wce-coral-400 transition-colors">
                  About WCE
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-wce-coral-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-wce-coral-400 transition-colors">
                  Placement Sectors
                </Link>
              </li>
              <li>
                <Link href="/csr" className="hover:text-wce-coral-400 transition-colors">
                  CSR Initiatives
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-wce-coral-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-wce-coral-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-[16px] text-wce-white tracking-normal">
              Programs
            </h3>
            <ul className="flex flex-col gap-2.5 text-[14px] text-wce-slate-300">
              <li>
                <Link href="/programs/study-abroad" className="hover:text-wce-coral-400 transition-colors">
                  Study Abroad &amp; Admissions
                </Link>
              </li>
              <li>
                <Link href="/programs/student-internships" className="hover:text-wce-coral-400 transition-colors">
                  Student Internships
                </Link>
              </li>
              <li>
                <Link href="/programs/graduate-internships" className="hover:text-wce-coral-400 transition-colors">
                  Graduate Internships
                </Link>
              </li>
              <li>
                <Link href="/programs/professional-development" className="hover:text-wce-coral-400 transition-colors">
                  Professional Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-[16px] text-wce-white tracking-normal">
              Stay Informed
            </h3>
            <p className="text-[14px] text-wce-slate-300 leading-relaxed">
              Get program updates, university deadlines and scholarship announcements.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 pt-1">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address for program updates"
                className="w-full h-11 rounded-[12px] bg-wce-navy-900 border border-wce-navy-700 px-3.5 text-[14px] text-wce-white placeholder:text-wce-slate-600 focus:outline-none focus:ring-2 focus:ring-wce-blue-500"
              />
              <Button variant="primary" size="sm" type="submit" className="w-full justify-center">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Legal Registration Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-wce-slate-300">
          <p className="text-center md:text-left leading-relaxed">
            {siteConfig.legalLine}
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/privacy-policy" className="hover:text-wce-coral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-wce-coral-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>© {currentYear} {siteConfig.shortName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
