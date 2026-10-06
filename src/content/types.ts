import type { Tbc, Maybe } from '@/lib/tbc';
export type { Tbc, Maybe };

export interface ProgramStep {
  title: string;
  text: string;
}

export interface Program {
  slug: 'study-abroad' | 'student-internships' | 'graduate-internships' | 'professional-development';
  title: string;
  summary: string;
  audience: string;
  tags: string[];
  inclusions: Maybe<string[]>;
  steps: ProgramStep[];
  sectorSlugs: string[];
  faqIds: string[];
  art: string; // illustration id from assets-manifest
  status: 'live' | 'proposed';
}

export interface Sector {
  slug: string;
  title: string;
  description: Maybe<string>;
  examples: Maybe<string[]>;
  art: string;
  status: 'live' | 'proposed';
}

export interface Destination {
  slug: string;
  country: string;
  summary: Maybe<string>;
  highlights: Maybe<string[]>;
  art: string;
  status: 'proposed';
}

export interface Testimonial {
  id: string;
  name: string;
  context: string;
  destination: Maybe<string>;
  quote: Maybe<string>;
  photo?: string;
  permission: boolean;
  isFeaturedChef?: boolean;
}

export interface Faq {
  id: string;
  q: string;
  a: Maybe<string>;
  category: 'applications' | 'visa' | 'fees' | 'internships';
}

export interface Stat {
  key: string;
  label: string;
  value: Maybe<number>;
  suffix?: string;
  status: 'live' | 'proposed';
}

export interface Partner {
  name: string;
  logo: Maybe<string>;
  type: 'hotel' | 'university' | 'institute' | 'company';
  permission: boolean;
}

export interface SiteAddress {
  city: string;
  state: string;
  country: string;
  fullText: Maybe<string>;
}

export interface SiteConfig {
  brandName: string;
  shortName: string;
  legalLine: string;
  tagline: string;
  primaryCta: string;
  secondaryCta: string;
  trustLine: string;
  phoneDisplay: Maybe<string>;
  whatsappNumber: Maybe<string>;
  whatsappPrefilledText: string;
  email: Maybe<string>;
  address: SiteAddress;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
  aboutStory: {
    eyebrow: string;
    heading: string;
    body: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavConfig {
  links: NavLink[];
  ctaButton: {
    label: string;
    href: string;
  };
}
