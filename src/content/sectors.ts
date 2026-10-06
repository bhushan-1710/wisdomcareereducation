import { TBC } from '@/lib/tbc';
import type { Sector } from './types';

export const sectorsIntro = 'Placement sectors include, but are not limited to, the following.';

export const sectors: Sector[] = [
  {
    slug: 'hospitality-catering',
    title: 'Hospitality & Catering',
    description: TBC,
    examples: TBC,
    art: 'ill-sector-hospitality',
    status: 'live',
  },
  {
    slug: 'business-finance',
    title: 'Business & Finance',
    description: TBC,
    examples: TBC,
    art: 'ill-sector-business',
    status: 'live',
  },
  {
    slug: 'engineering-construction',
    title: 'Engineering & Construction',
    description: TBC,
    examples: TBC,
    art: 'ill-sector-engineering',
    status: 'live',
  },
  {
    slug: 'nursing-midwifery',
    title: 'Nursing & Midwifery',
    description: TBC,
    examples: TBC,
    art: 'ill-sector-nursing',
    status: 'live',
  },
  {
    slug: 'information-technology-computer-science',
    title: 'Information Technology & Computer Science',
    description: TBC,
    examples: TBC,
    art: 'ill-sector-it',
    status: 'live',
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
