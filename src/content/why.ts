import { TBC } from '@/lib/tbc';
import type { WhyFeature } from './types';

export const whyIntro = {
  eyebrow: 'Why WCE',
  heading: 'Why students choose WCE',
  subheading: 'Dedicated personal guidance backed by over 15 years of government-registered experience.',
};

export const whyFeatures: WhyFeature[] = [
  {
    id: 'counselling',
    title: 'Personal counselling',
    description: 'One-to-one guidance from enquiry to departure.',
    art: 'ill-why-1',
  },
  {
    id: 'visa',
    title: 'Visa and document support',
    description: 'Team support through the visa process.',
    art: 'ill-why-2',
  },
  {
    id: 'network',
    title: 'Global network',
    description: 'Relationships with international education providers and industry.',
    art: 'ill-why-3',
  },
  {
    id: 'aftercare',
    title: 'Support after placement',
    description: TBC,
    art: 'ill-why-4',
  },
];
