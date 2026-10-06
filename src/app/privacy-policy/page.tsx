import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/content/site';
import { constructMetadata } from '@/lib/seo';
import { TbcBadge } from '@/lib/tbc';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | Wisdom Career Education',
  description: 'Privacy policy and data handling guidelines for Wisdom Career Education Pvt. Ltd.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Information on how Wisdom Career Education handles applicant information and communication consent."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        ctaLabel=""
      />

      <section className="py-20 md:py-28 bg-wce-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 text-[16px] text-wce-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-wce-navy-900 mb-3">1. Organization Details</h2>
              <p>
                {siteConfig.legalLine}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-wce-navy-900 mb-3">2. Information Collection</h2>
              <p>
                When you submit an enquiry form or request counselling through this website, we collect your name, phone number, email address, educational background, and preferred destinations. This information is collected solely for the purpose of communicating regarding program eligibility, university admissions, and overseas internships.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-wce-navy-900 mb-3">3. Communication Consent</h2>
              <p>
                By opting in through our enquiry forms, you grant consent for WCE counsellors to reach out via phone call, SMS, email, or WhatsApp regarding your educational applications. You may revoke communication consent at any time by contacting our advisory team.
              </p>
            </div>

            <div className="pt-6 border-t border-wce-slate-200">
              <TbcBadge label="TBC" context="comprehensive formal legal text pending client legal counsel (Q14)" />
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
