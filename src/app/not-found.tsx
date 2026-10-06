import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Illustration } from '@/components/art/Illustration';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <SiteShell>
      <section className="py-24 md:py-36 bg-wce-blue-50/70 min-h-[70vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Branded 404 Illustration */}
            <div className="w-full max-w-[360px] aspect-[3/2] rounded-[24px] bg-wce-white p-6 shadow-sm border border-wce-blue-100 flex items-center justify-center mb-8">
              <Illustration id="ill-404" className="w-full h-full object-contain" />
            </div>

            <Eyebrow>Error 404</Eyebrow>

            <h1 className="text-[34px] sm:text-[44px] font-bold text-wce-navy-900 tracking-tight mt-2 mb-4">
              Looks like this route went off course
            </h1>

            <p className="text-[16px] sm:text-[18px] text-wce-slate-600 leading-relaxed mb-8 max-w-lg">
              The page you are looking for may have been moved, updated, or is temporarily unavailable. Let us guide you back to our career pathways.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="/" variant="primary" size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Return to Homepage</span>
              </Button>

              <Button href="/programs" variant="secondary" size="lg" showArrow={false}>
                <Compass className="h-4 w-4 mr-2" />
                <span>Explore Programs</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
