import { TBC } from '@/lib/tbc';
import type { Program, ProgramStep } from './types';

export const standardProgramSteps: ProgramStep[] = [
  { title: 'Free counselling', text: 'Tell us your goals and background.' },
  { title: 'Choose program and country', text: 'We help you compare options.' },
  { title: 'Admission or internship offer', text: 'We support your applications.' },
  { title: 'Visa and documentation', text: 'We guide you through the paperwork.' },
  { title: 'Fly and get placed', text: 'Start your program abroad.' },
];

export const allSectorSlugs = [
  'hospitality-catering',
  'business-finance',
  'engineering-construction',
  'nursing-midwifery',
  'information-technology-computer-science',
];

export const programs: Program[] = [
  {
    slug: 'study-abroad',
    title: 'Study Abroad & University Admissions',
    summary: 'Guidance on choosing a university and country, applications and admission support.',
    audience: "Students seeking bachelor's, master's or diploma programs overseas",
    tags: ['Admissions', 'Documentation'],
    inclusions: TBC,
    steps: standardProgramSteps,
    sectorSlugs: allSectorSlugs,
    faqIds: ['faq-1', 'faq-2', 'faq-5', 'faq-6'],
    art: 'ill-iso-study',
    status: 'proposed',
  },
  {
    slug: 'student-internships',
    title: 'Student Internships',
    summary:
      'Internships that complement degree-level studies, with a set schedule of tasks. Students normally return to finish their degree and can earn credit toward it.',
    audience: 'Current enrolled university and college students',
    tags: ['During your degree', 'Credit'],
    inclusions: TBC,
    steps: standardProgramSteps,
    sectorSlugs: allSectorSlugs,
    faqIds: ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'],
    art: 'ill-iso-student',
    status: 'live',
  },
  {
    slug: 'graduate-internships',
    title: 'Graduate Internships',
    summary:
      'For recent graduates and beyond. Practical experience that follows theoretical study, with a set schedule of tasks. Graduates normally do not return to the degree course.',
    audience: 'Recent degree and diploma graduates seeking international practical experience',
    tags: ['After graduation'],
    inclusions: TBC,
    steps: standardProgramSteps,
    sectorSlugs: allSectorSlugs,
    faqIds: ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'],
    art: 'ill-iso-grad',
    status: 'live',
  },
  {
    slug: 'professional-development',
    title: 'Professional Development Programs',
    summary:
      'A combined internship and study program that builds professional standing in the host country and may lead to a work permit and/or migration.',
    audience: 'Working professionals and graduates seeking international professional standing',
    tags: ['International career pathway'],
    inclusions: TBC,
    steps: standardProgramSteps,
    sectorSlugs: allSectorSlugs,
    faqIds: ['faq-1', 'faq-2', 'faq-4', 'faq-5', 'faq-6'],
    art: 'ill-iso-pdp',
    status: 'live',
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
