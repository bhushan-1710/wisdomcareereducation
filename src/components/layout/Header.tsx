'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

export interface HeaderProps {
  className?: string;
  whatsappNumber?: string;
}

export function Header({ className = '', whatsappNumber }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: '/programs' },
    { label: 'Study Abroad', href: '/programs/study-abroad' },
    { label: 'Internships', href: '/programs/student-internships' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[72px] transition-all duration-320 ${
          isScrolled
            ? 'bg-wce-white/95 backdrop-blur-md shadow-wce-sm border-b border-wce-slate-300/40'
            : 'bg-wce-white/80 backdrop-blur-sm border-b border-transparent'
        } ${className}`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500 rounded-lg p-1"
            aria-label="Wisdom Career Education Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wce-navy-900 text-wce-coral-400 group-hover:scale-105 transition-transform duration-160">
              <Send className="h-4 w-4 -rotate-45 translate-x-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[18px] leading-none text-wce-navy-900 tracking-tight">
                WCE
              </span>
              <span className="text-[11px] font-medium leading-none text-wce-slate-600 tracking-wider uppercase mt-0.5">
                Wisdom Career
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-1 text-[15px] font-semibold text-wce-navy-900 hover:text-wce-coral-700 transition-colors group focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500 rounded-md"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-wce-coral-700 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button href="/contact" variant="primary" size="sm">
                Enquire now
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-wce-slate-300 text-wce-navy-900 hover:bg-wce-blue-100 lg:hidden focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Sheet */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        whatsappNumber={whatsappNumber}
      />
    </>
  );
}
