import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Illustration } from '@/components/art/Illustration';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

export interface InnerHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  art?: string;
  artContainerClassName?: string;
  breadcrumbs: BreadcrumbItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function InnerHero({
  eyebrow,
  title,
  description,
  art,
  artContainerClassName,
  breadcrumbs,
  ctaLabel = 'Book free counselling',
  ctaHref = '/contact',
  className = '',
}: InnerHeroProps) {
  return (
    <section className={`bg-wce-blue-50/70 border-b border-wce-slate-200/50 pt-8 pb-12 md:pt-12 md:pb-16 ${className}`}>
      <Container>
        {/* Breadcrumb row */}
        <div className="mb-6 md:mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className={`grid grid-cols-1 ${art ? 'lg:grid-cols-12 gap-8 lg:gap-14 items-center' : 'max-w-3xl'}`}>
          {/* Main content */}
          <div className={art ? 'lg:col-span-7' : ''}>
            {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}

            <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-wce-navy-900 tracking-tight leading-[1.12] mb-5">
              {title}
            </h1>

            <p className="text-[16px] sm:text-[18px] text-wce-slate-600 leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>

            {ctaLabel && (
              <div>
                <Button href={ctaHref} variant="primary" size="lg">
                  {ctaLabel}
                </Button>
              </div>
            )}
          </div>

          {/* Optional illustration stage */}
          {art && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                className={
                  artContainerClassName ??
                  'w-full max-w-[420px] aspect-square rounded-[24px] bg-wce-white p-6 shadow-sm border border-wce-blue-100 flex items-center justify-center'
                }
              >
                <Illustration id={art} className="w-full h-full object-contain" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
