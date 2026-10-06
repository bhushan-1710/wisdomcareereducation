import React from 'react';
import { Illustration } from '@/components/art/Illustration';
import { Button } from '@/components/ui/Button';
import { MessageSquare, RotateCcw } from 'lucide-react';
import { siteConfig } from '@/content/site';

export interface FormSuccessProps {
  onReset?: () => void;
  className?: string;
}

export function FormSuccess({ onReset, className = '' }: FormSuccessProps) {
  const whatsappNum = typeof siteConfig.whatsappNumber === 'string' ? siteConfig.whatsappNumber : null;
  const whatsappUrl = whatsappNum
    ? `https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        siteConfig.whatsappPrefilledText
      )}`
    : undefined;

  return (
    <div
      className={`rounded-[20px] bg-wce-white p-8 md:p-10 text-center shadow-lg border border-wce-slate-200/80 flex flex-col items-center ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-[240px] mb-6">
        <Illustration id="ill-form-success" className="mx-auto" />
      </div>

      <h3 className="text-[24px] md:text-[28px] font-bold text-wce-navy-900 tracking-tight mb-3">
        Thank you for reaching out!
      </h3>

      <p className="text-[15px] md:text-[16px] text-wce-slate-600 max-w-md mx-auto leading-relaxed mb-8">
        Your enquiry has been received. Our senior counsellor will review your profile and contact you within 24 hours to discuss your pathway.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
        {whatsappNum && whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#25D366] px-5 py-3 text-[14px] font-semibold text-wce-white transition-all hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/40"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
        )}

        {onReset && (
          <Button
            type="button"
            variant="secondary"
            size="md"
            showArrow={false}
            onClick={onReset}
            className="border-wce-slate-300 text-wce-navy-900 hover:bg-wce-blue-50"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            <span>Submit another enquiry</span>
          </Button>
        )}
      </div>
    </div>
  );
}
