import React from 'react';
import { siteConfig, getApprovedPartners } from '@/content';
import { Container } from '@/components/ui/Container';
import { TbcBadge } from '@/lib/tbc';

export interface TrustStripProps {
  className?: string;
}

export function TrustStrip({ className = '' }: TrustStripProps) {
  const approvedPartners = getApprovedPartners();
  const isDev = process.env.NODE_ENV !== 'production';

  // In production: if no verified partner logos with client permission exist,
  // gracefully hide the entire trust strip so zero empty bands or unapproved logos appear.
  if (!isDev && approvedPartners.length === 0) {
    return null;
  }

  return (
    <section
      className={`border-b border-wce-slate-200/60 bg-wce-white pt-16 pb-8 md:pt-20 md:pb-10 ${className}`}
      aria-label="Trust & Accreditation"
    >
      <Container size="default">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.08em] text-wce-slate-500 sm:text-sm">
            {siteConfig.trustLine}
          </p>

          {/* If verified partners become available in production, render them */}
          {approvedPartners.length > 0 ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-80 grayscale transition-all hover:grayscale-0">
              {approvedPartners.map((partner) => (
                <div key={partner.name} className="flex items-center gap-2">
                  <span className="text-sm font-medium text-wce-navy-900">{partner.name}</span>
                </div>
              ))}
            </div>
          ) : isDev ? (
            /* Development-only indicator per TBC architecture */
            <div className="mt-3 flex items-center gap-2">
              <TbcBadge label="TBC" context="partner logos pending client delivery (Q2)" />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
