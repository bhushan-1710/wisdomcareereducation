import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/content/site';
import { constructMetadata } from '@/lib/seo';
import { TbcBadge } from '@/lib/tbc';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions | Wisdom Career Education',
  description: 'Terms of service and educational advisory disclosures for Wisdom Career Education Pvt. Ltd.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Terms and service guidelines governing educational counselling and application advisory."
        breadcrumbs={[{ label: 'Terms' }]}
        ctaLabel=""
      />

      <section className="py-20 md:py-28 bg-wce-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 text-[16px] text-wce-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-wce-navy-900 mb-3">1. Legal Entity</h2>
              <p>
                {siteConfig.legalLine}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-wce-navy-900 mb-3">2. Advisory Scope</h2>
              <p>
                Wisdom Career Education acts as an educational and career consultancy providing counselling, institution selection advice, application assistance, and visa documentation guidance. Program admissions, visa issuance, and internship selections remain subject to the sole discretion of the respective overseas institutions, host employers, and foreign immigration authorities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-wce-navy-900 mb-3">3. Accurate Disclosures</h2>
              <p>
                Applicants are responsible for providing authentic academic credentials, identification documents, and financial records. WCE maintains zero tolerance for fabricated documentation.
              </p>
            </div>

            <div className="pt-6 border-t border-wce-slate-200">
              <TbcBadge label="TBC" context="comprehensive formal terms pending client legal counsel (Q14)" />
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
