import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Illustration } from '@/components/art/Illustration';
import { csrContent } from '@/content/csr';
import { hasValue, TbcBadge } from '@/lib/tbc';

export function CsrSection() {
  return (
    <section className="py-28 md:py-36 bg-wce-white border-t border-wce-slate-100" id="csr">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content column */}
          <div className="lg:col-span-6 max-w-xl">
            <Eyebrow>Giving back</Eyebrow>
            <h2 className="text-[32px] md:text-[44px] font-bold text-wce-navy-900 tracking-tight mt-2.5 mb-5 leading-[1.15]">
              {csrContent.heading}
            </h2>
            <p className="text-[16px] md:text-[18px] text-wce-slate-600 leading-relaxed mb-6">
              Empowering community growth and supporting student aspirations are foundational to WCE. Beyond educational guidance, we actively participate in community outreach and student welfare programs.
            </p>

            {hasValue(csrContent.body) ? (
              <p className="text-[15px] md:text-[16px] text-wce-slate-600 leading-relaxed mb-6">
                {csrContent.body}
              </p>
            ) : (
              <div className="pt-2">
                <TbcBadge label="TBC" context="specific CSR event photos and documentation (Q13)" />
              </div>
            )}
          </div>

          {/* Large editorial illustration stage */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[580px] aspect-[4/3] rounded-[24px] bg-wce-blue-50/50 p-6 sm:p-8 flex items-center justify-center">
              <Illustration id={csrContent.art} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
