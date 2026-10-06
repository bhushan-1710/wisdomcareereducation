import { TBC, hasValue } from '@/lib/tbc';
import type { Faq } from './types';

export const faqs: Faq[] = [
  {
    id: 'faq-1',
    q: 'What documents do I need to apply?',
    a: TBC,
    category: 'applications',
  },
  {
    id: 'faq-2',
    q: 'How long does the visa process take?',
    a: TBC,
    category: 'visa',
  },
  {
    id: 'faq-3',
    q: 'Are internships paid?',
    a: TBC,
    category: 'internships',
  },
  {
    id: 'faq-4',
    q: 'Can an internship lead to a work permit?',
    a: TBC,
    category: 'internships',
  },
  {
    id: 'faq-5',
    q: 'What are the fees and what do they cover?',
    a: TBC,
    category: 'fees',
  },
  {
    id: 'faq-6',
    q: 'Who is eligible for each program?',
    a: TBC,
    category: 'applications',
  },
  {
    id: 'faq-7',
    q: 'How do I book a counselling session?',
    a: TBC,
    category: 'applications',
  },
  {
    id: 'faq-8',
    q: 'Can my parents join the counselling session?',
    a: TBC,
    category: 'applications',
  },
];

/**
 * Returns only FAQs with published answers (not TBC).
 * Production UI hides incomplete FAQ items per docs/architecture.md.
 */
export function getPublishedFaqs(): Faq[] {
  return faqs.filter((faq) => hasValue(faq.a));
}

export function getFaqsByCategory(category: Faq['category']): Faq[] {
  return faqs.filter((faq) => faq.category === category);
}
