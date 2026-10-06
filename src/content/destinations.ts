import { TBC } from '@/lib/tbc';
import type { Destination } from './types';

export const destinationsIntro = {
  heading: 'Where could you go?',
  status: 'proposed' as const,
};

export const destinations: Destination[] = [
  {
    slug: 'malaysia',
    country: 'Malaysia',
    summary: TBC,
    highlights: TBC,
    art: 'ill-dest-malaysia',
    status: 'proposed',
  },
  {
    slug: 'france',
    country: 'France',
    summary: TBC,
    highlights: TBC,
    art: 'ill-dest-france',
    status: 'proposed',
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
