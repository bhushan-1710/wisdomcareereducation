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
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Community & Giving Back"
        title={csrContent.heading}
        description="Empowering community growth and supporting student aspirations are foundational to WCE. Beyond educational guidance, we actively participate in community outreach and student welfare programs."
        art={csrContent.art}
        breadcrumbs={[{ label: 'CSR' }]}
        ctaLabel="Contact our team"
        ctaHref="/contact"
      />

      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <Eyebrow>Our Commitment</Eyebrow>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-wce-navy-900 tracking-tight mt-2 mb-6">
                Education as an engine for community development
              </h2>
              <div className="space-y-5 text-[17px] text-wce-slate-600 leading-relaxed">
                <p>
                  Since our founding in 2008, Wisdom Career Education has maintained that international educational guidance should not be a privilege limited to a few. We actively seek ways to share guidance, resources, and mentorship with students who aspire to build global careers.
                </p>
                {hasValue(csrContent.body) && <p>{csrContent.body}</p>}
              </div>

              {!hasValue(csrContent.body) && (
                <div className="mt-4">
                  <TbcBadge label="TBC" context="specific CSR event documentation & photography (Q13)" />
                </div>
              )}
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-wce-slate-200">
              <div className="rounded-[20px] bg-wce-blue-50/50 p-6 border border-wce-blue-100">
                <Heart className="h-6 w-6 text-wce-coral-700 mb-3" />
                <h3 className="text-lg font-bold text-wce-navy-900 mb-2">Student Access</h3>
                <p className="text-sm text-wce-slate-600 leading-relaxed">
                  Pro bono advisory sessions for high-potential applicants from under-resourced academic institutions.
                </p>
              </div>

              <div className="rounded-[20px] bg-wce-blue-50/50 p-6 border border-wce-blue-100">
                <Sparkles className="h-6 w-6 text-wce-coral-700 mb-3" />
                <h3 className="text-lg font-bold text-wce-navy-900 mb-2">Community Mentorship</h3>
                <p className="text-sm text-wce-slate-600 leading-relaxed">
                  Sharing industry knowledge, hospitality trends, and international career workshops with local colleges.
                </p>
              </div>

              <div className="rounded-[20px] bg-wce-blue-50/50 p-6 border border-wce-blue-100">
                <Shield className="h-6 w-6 text-wce-coral-700 mb-3" />
                <h3 className="text-lg font-bold text-wce-navy-900 mb-2">Ethical Practice</h3>
                <p className="text-sm text-wce-slate-600 leading-relaxed">
                  100% transparent fee structures, genuine institution disclosures, and zero hidden commercial promises.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Collaborate with our community outreach"
        subcopy="If you represent an educational institution or social foundation interested in joint career guidance initiatives, connect with us."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
