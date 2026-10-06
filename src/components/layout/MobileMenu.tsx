'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig, navConfig } from '@/content';
import { resolveValue } from '@/lib/tbc';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  whatsappNumber = resolveValue(siteConfig.whatsappNumber) || undefined,
}: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col bg-wce-navy-900 text-wce-white transition-opacity duration-200"
    >
      {/* Header bar */}
      <div className="flex h-[72px] items-center justify-between px-6 border-b border-wce-navy-800">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 text-xl font-bold font-heading text-wce-white"
        >
          <span className="text-wce-coral-400">{siteConfig.shortName}</span>
          <span className="text-sm font-normal text-wce-slate-300">Wisdom Career</span>
        </Link>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-wce-navy-700 text-wce-white hover:bg-wce-navy-800 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-wce-blue-500"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Nav items */}
      <div
        ref={sheetRef}
        className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between"
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile menu links">
          {navConfig.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex min-h-[48px] items-center text-[22px] font-semibold text-wce-white hover:text-wce-coral-400 transition-colors py-2 border-b border-wce-navy-800/60"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-5 h-5 ml-auto text-wce-navy-700" />
            </Link>
          ))}
        </nav>

        {/* Bottom pinned actions */}
        <div className="pt-8 flex flex-col gap-3">
          <Button
            href={navConfig.ctaButton.href}
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={onClose}
          >
            {navConfig.ctaButton.label}
          </Button>

          {whatsappNumber ? (
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefilledText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-wce-navy-700 bg-wce-navy-800 py-3 text-[15px] font-semibold text-wce-white hover:bg-wce-navy-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-wce-green-400" />
              <span>Chat on WhatsApp</span>
            </a>
          ) : process.env.NODE_ENV !== 'production' ? (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-wce-navy-700/50 bg-wce-navy-800/50 py-3 text-[14px] font-medium text-wce-slate-300 opacity-60 cursor-not-allowed"
            >
              <MessageCircle className="h-5 w-5 text-wce-slate-400" />
              <span>Chat on WhatsApp (TBC)</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
