import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { WhyWceSection } from '@/components/sections/WhyWceSection';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/content/site';
import { constructMetadata } from '@/lib/seo';
import { Building2, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Us | 15+ Years of International Career Guidance',
  description:
    'Established in 2008 in Nashik, Maharashtra. Wisdom Career Education provides government-registered overseas study and internship placement advisory.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <SiteShell>
      {/* Inner Hero */}
      <InnerHero
        eyebrow="Our History & Mission"
        title="15+ years of turning ambition into global careers"
        description="Wisdom Career Education was founded with a clear mission: to provide Indian students and graduates with honest, transparent, and structured access to international universities and global industry placements."
        art="ill-about"
        artContainerClassName="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] flex items-center justify-center drop-shadow-md"
        breadcrumbs={[{ label: 'About' }]}
        ctaLabel="Book free counselling"
        ctaHref="/contact"
        className="pb-8 md:pb-12"
      />

      {/* Narrative Story Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-wce-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Eyebrow>The WCE Story</Eyebrow>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-wce-navy-900 tracking-tight mt-2 mb-6">
                Guiding students from classrooms to international workplaces
              </h2>
              <div className="space-y-5 text-[17px] text-wce-slate-600 leading-relaxed">
                <p>{siteConfig.aboutStory.body}</p>
                <p>
                  Over the past decade and a half, our experienced counselling team in Nashik has maintained relationships with accredited overseas institutions, hospitality employers, and educational bodies, ensuring that every applicant receives authentic guidance tailored to their career aspirations.
                </p>
              </div>
            </div>

            {/* Registration & Credentials Callout */}
            <div className="rounded-[24px] bg-wce-blue-50/70 p-8 sm:p-10 border border-wce-blue-100/80">
              <div className="flex items-center gap-3 text-wce-coral-800 mb-3">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-wider">Government Registered</span>
              </div>

              <h3 className="text-[22px] sm:text-[24px] font-bold text-wce-navy-900 mb-3">
                Established 2008 under Government of India Records
              </h3>

              <p className="text-[15px] sm:text-[16px] text-wce-slate-600 leading-relaxed mb-6">
                {siteConfig.legalLine}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-wce-slate-200/60">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-wce-navy-900 flex-none" />
                  <span className="text-sm font-semibold text-wce-navy-900">15+ Years Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-wce-navy-900 flex-none" />
                  <span className="text-sm font-semibold text-wce-navy-900">Headquartered in Nashik</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-wce-navy-900 flex-none" />
                  <span className="text-sm font-semibold text-wce-navy-900">Private Limited Entity</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why WCE Section */}
      <WhyWceSection />

      {/* CTA Banner */}
      <CtaBanner
        heading="Speak with our experienced counsellors"
        subcopy="Schedule a free 1-on-1 session to discuss eligible study programs, internships, and overseas career pathways."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
