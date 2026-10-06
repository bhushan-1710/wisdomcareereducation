import React from 'react';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/content/site';
import { constructMetadata } from '@/lib/seo';
import { hasValue, TbcBadge } from '@/lib/tbc';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us | Book Free Counselling in Nashik',
  description:
    'Contact Wisdom Career Education in Nashik, Maharashtra. Book a free 1-on-1 counselling session for study abroad and internships.',
  path: '/contact',
});

export default function ContactPage() {
  const isProd = process.env.NODE_ENV === 'production';
  const hasPhone = hasValue(siteConfig.phoneDisplay);
  const hasWhatsapp = hasValue(siteConfig.whatsappNumber);
  const hasEmail = hasValue(siteConfig.email);
  const hasAddressFull = hasValue(siteConfig.address.fullText);
  const hasHours = hasValue(siteConfig.hours);

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Get In Touch"
        title="Start your global career conversation"
        description="Whether you have questions about specific university intakes, hotel internships, or visa documentation, our experienced team is ready to guide you."
        breadcrumbs={[{ label: 'Contact' }]}
        ctaLabel=""
      />

      <section className="py-24 md:py-32 bg-wce-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info & Advisory Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-[26px] sm:text-[30px] font-bold text-wce-navy-900 tracking-tight mb-3">
                  Direct Advisory & Inquiries
                </h2>
                <p className="text-[16px] text-wce-slate-600 leading-relaxed">
                  Wisdom Career Education was established in Nashik, Maharashtra in 2008. We provide 1-on-1 profile evaluations and guidance sessions for students across India.
                </p>
              </div>

              {/* Contact Information Blocks */}
              <div className="space-y-6 pt-4 border-t border-wce-slate-200">
                {/* Location / Headquarters */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-[14px] bg-wce-blue-50 border border-wce-blue-200/80 flex items-center justify-center text-wce-coral-800 flex-none mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-wce-navy-900">
                      {hasAddressFull ? 'Office Address' : 'Headquarters'}
                    </strong>
                    {hasAddressFull ? (
                      <p className="text-sm text-wce-slate-600">{siteConfig.address.fullText as string}</p>
                    ) : (
                      <>
                        <p className="text-sm text-wce-slate-600">
                          {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}
                        </p>
                        {!isProd ? (
                          <div className="mt-1">
                            <TbcBadge label="TBC" context="exact office street address (Q3)" />
                          </div>
                        ) : (
                          <p className="text-xs text-wce-slate-500 mt-1">
                            In-person sessions and office meetings arranged by appointment.
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-[14px] bg-wce-blue-50 border border-wce-blue-200/80 flex items-center justify-center text-wce-coral-800 flex-none mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-wce-navy-900">Phone</strong>
                    {hasPhone ? (
                      <a
                        href={`tel:${siteConfig.phoneDisplay}`}
                        className="text-sm text-wce-slate-600 hover:text-wce-coral-800"
                      >
                        {siteConfig.phoneDisplay as string}
                      </a>
                    ) : (
                      <div className="mt-0.5">
                        <span className="text-sm text-wce-slate-500">Available via enquiry form</span>
                        {!isProd && <TbcBadge label="TBC" context="phone number (Q3)" className="ml-2" />}
                      </div>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-[14px] bg-wce-blue-50 border border-wce-blue-200/80 flex items-center justify-center text-wce-coral-800 flex-none mt-0.5">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-wce-navy-900">WhatsApp</strong>
                    {hasWhatsapp ? (
                      <span className="text-sm text-wce-slate-600">{siteConfig.whatsappNumber as string}</span>
                    ) : (
                      <div className="mt-0.5">
                        <span className="text-sm text-wce-slate-500">Available via enquiry form</span>
                        {!isProd && <TbcBadge label="TBC" context="WhatsApp number (Q3)" className="ml-2" />}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-[14px] bg-wce-blue-50 border border-wce-blue-200/80 flex items-center justify-center text-wce-coral-800 flex-none mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-wce-navy-900">Email</strong>
                    {hasEmail ? (
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-wce-slate-600 hover:text-wce-coral-800"
                      >
                        {siteConfig.email as string}
                      </a>
                    ) : (
                      <div className="mt-0.5">
                        <span className="text-sm text-wce-slate-500">Available via enquiry form</span>
                        {!isProd && <TbcBadge label="TBC" context="email address (Q3)" className="ml-2" />}
                      </div>
                    )}
                  </div>
                </div>

                {/* Office Hours - rendered only when client-approved, or with TBC badge in dev */}
                {hasHours ? (
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-[14px] bg-wce-blue-50 border border-wce-blue-200/80 flex items-center justify-center text-wce-coral-800 flex-none mt-0.5">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-wce-navy-900">Hours</strong>
                      <p className="text-sm text-wce-slate-600">{siteConfig.hours as string}</p>
                    </div>
                  </div>
                ) : !isProd ? (
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-[14px] bg-wce-blue-50 border border-wce-blue-200/80 flex items-center justify-center text-wce-coral-800 flex-none mt-0.5">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-wce-navy-900">Hours</strong>
                      <div className="mt-0.5">
                        <span className="text-sm text-wce-slate-500">Operating hours</span>
                        <TbcBadge label="TBC" context="office hours (Q3)" className="ml-2" />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Right: Enquiry Form Component */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
