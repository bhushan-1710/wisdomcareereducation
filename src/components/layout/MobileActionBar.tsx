'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export interface MobileActionBarProps {
  phoneDisplay?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
}

export function MobileActionBar({
  phoneNumber = '+919876543210',
  whatsappNumber = '919876543210',
}: MobileActionBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 block sm:hidden bg-wce-white/95 backdrop-blur-md border-t border-wce-slate-300/60 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-wce-md">
      <div className="flex items-center gap-2 max-w-[400px] mx-auto">
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Wisdom Career Education"
          className="flex-1 flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-wce-navy-900 bg-wce-white px-4 text-[14px] font-semibold text-wce-navy-900 active:bg-wce-blue-50 transition-colors"
        >
          <Phone className="h-4 w-4 text-wce-navy-900" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi%20WCE%2C%20I'd%20like%20to%20know%20more%20about%20your%20programs.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-wce-coral-700 px-4 text-[14px] font-semibold text-wce-white active:bg-wce-coral-800 transition-colors shadow-sm"
        >
          <MessageCircle className="h-4 w-4 text-wce-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
