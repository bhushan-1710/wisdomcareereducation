import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';

export interface CtaBannerProps {
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function CtaBanner({
  eyebrow = 'Take the next step',
  heading = 'Achieve your dream today',
  subcopy = 'Book a free counselling session and tell us where you want to go. Our experienced advisors guide you from enquiry to departure.',
  ctaText = 'Book free counselling',
  ctaHref = '/contact',
  className = '',
}: CtaBannerProps) {
  return (
    <section className={`py-20 md:py-28 bg-wce-navy-900 text-wce-white relative overflow-hidden ${className}`}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow light className="mb-2">{eyebrow}</Eyebrow>

          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-wce-white tracking-tight leading-[1.14] mb-5">
            {heading}
          </h2>

          <p className="text-[16px] sm:text-[18px] text-wce-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {subcopy}
          </p>

          <div className="flex justify-center">
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
