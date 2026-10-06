'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { faqs, getPublishedFaqs } from '@/content/faqs';
import { hasValue, TbcBadge } from '@/lib/tbc';

export function FaqSection() {
  const publishedFaqs = getPublishedFaqs();
  const isProd = process.env.NODE_ENV === 'production';

  // In production, gracefully disappear if no approved answers exist
  if (isProd && publishedFaqs.length === 0) {
    return null;
  }

  // Use published FAQs in production, or the documented question set in development with TBC badges
  const itemsToRender = isProd ? publishedFaqs : faqs.slice(0, 5);

  const accordionItems: AccordionItem[] = itemsToRender.map((faq) => ({
    id: faq.id,
    title: faq.q,
    content: hasValue(faq.a) ? (
      <p>{faq.a}</p>
    ) : (
      <div className="py-2">
        <p className="text-wce-slate-500 italic mb-2">Official response being reviewed by WCE admissions team.</p>
        <TbcBadge label="TBC" context="answer pending client approval (Q12)" />
      </div>
    ),
  }));

  return (
    <section className="py-28 md:py-36 bg-wce-blue-50/60" id="faq">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Eyebrow>Got questions?</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] font-bold text-wce-navy-900 tracking-tight mt-2.5">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[16px] md:text-[17px] text-wce-slate-600 leading-relaxed">
            Answers to common questions about eligibility, visas, and counselling.
          </p>
        </div>

        <div className="max-w-[760px] mx-auto">
          <Accordion items={accordionItems} defaultOpenId={itemsToRender[0]?.id} />
        </div>

        <div className="mt-12 text-center text-[15px] text-wce-slate-600">
          Have a question not listed here?{' '}
          <a href="#enquiry-form" className="font-semibold text-wce-coral-700 hover:underline">
            Ask our counselling team directly &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}
