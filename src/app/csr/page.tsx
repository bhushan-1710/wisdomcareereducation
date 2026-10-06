import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { csrContent } from '@/content/csr';
import { constructMetadata } from '@/lib/seo';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { Heart, Sparkles, Shield } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Corporate Social Responsibility | Community Initiatives',
  description:
    'Discover Wisdom Career Education community initiatives and social responsibility outreach supporting student education.',
  path: '/csr',
});

export default function CsrPage() {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Community & Outreach"
        title={csrContent.heading}
        description="Wisdom Career Education supports student development and community engagement initiatives."
        art={csrContent.art}
        breadcrumbs={[{ label: 'CSR' }]}
        ctaLabel="Contact our team"
        ctaHref="/contact"
      />

      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <Eyebrow>Community Commitment</Eyebrow>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-wce-navy-900 tracking-tight mt-2 mb-6">
                Corporate Social Responsibility
              </h2>

              {hasValue(csrContent.body) ? (
                <div className="space-y-5 text-[17px] text-wce-slate-600 leading-relaxed">
                  <p>{csrContent.body}</p>
                </div>
              ) : isProd ? (
                /* Production: honest, non-fabricated, compliant summary */
                <div className="space-y-5 text-[17px] text-wce-slate-600 leading-relaxed">
                  <p>
                    At Wisdom Career Education, we believe in supporting student aspirations and widening access to career guidance.
                  </p>
                  <p>
                    For information regarding community workshops, college advisory seminars, or institutional collaborations, please connect with our Nashik advisory office.
                  </p>
                </div>
              ) : (
                /* Development preview: marked explicitly as TBC */
                <div className="space-y-5 text-[17px] text-wce-slate-600 leading-relaxed">
                  <p>
                    At Wisdom Career Education, we believe in supporting student aspirations and widening access to career guidance.
                  </p>
                  <div className="mt-4">
                    <TbcBadge label="TBC" context="CSR body copy & event documentation pending client approval (Q13)" />
                  </div>
                </div>
              )}
            </div>

            {/* Proposed community pillars - hidden in production, previewed with TBC in dev */}
            {!isProd && (
              <div className="pt-8 border-t border-wce-slate-200">
                <div className="mb-6">
                  <TbcBadge label="TBC" context="proposed community pillars below pending client verification (Q13)" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="rounded-[20px] bg-wce-blue-50/50 p-6 border border-wce-blue-100">
                    <Heart className="h-6 w-6 text-wce-coral-800 mb-3" />
                    <h3 className="text-lg font-bold text-wce-navy-900 mb-2">Student Access</h3>
                    <p className="text-sm text-wce-slate-600 leading-relaxed mb-3">
                      Advisory sessions for students seeking international higher education opportunities.
                    </p>
                    <TbcBadge label="TBC" context="initiative details (Q13)" />
                  </div>

                  <div className="rounded-[20px] bg-wce-blue-50/50 p-6 border border-wce-blue-100">
                    <Sparkles className="h-6 w-6 text-wce-coral-800 mb-3" />
                    <h3 className="text-lg font-bold text-wce-navy-900 mb-2">College Seminars</h3>
                    <p className="text-sm text-wce-slate-600 leading-relaxed mb-3">
                      Sharing international career awareness and industry placement pathways.
                    </p>
                    <TbcBadge label="TBC" context="initiative details (Q13)" />
                  </div>

                  <div className="rounded-[20px] bg-wce-blue-50/50 p-6 border border-wce-blue-100">
                    <Shield className="h-6 w-6 text-wce-coral-800 mb-3" />
                    <h3 className="text-lg font-bold text-wce-navy-900 mb-2">Ethical Advisory</h3>
                    <p className="text-sm text-wce-slate-600 leading-relaxed mb-3">
                      Transparent program disclosures, authentic requirements, and zero misleading guarantees.
                    </p>
                    <TbcBadge label="TBC" context="initiative details (Q13)" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Collaborate with our community outreach"
        subcopy="If you represent an educational institution or student forum interested in career guidance workshops, connect with our team."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
