import { TBC } from '@/lib/tbc';
import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  brandName: 'Wisdom Career Education',
  shortName: 'WCE',
  legalLine: 'Wisdom Career Education Pvt. Ltd. Registered under the Companies Act 1956, Government of India. Established 2008.',
  tagline: 'Your global career starts here',
  primaryCta: 'Book free counselling',
  secondaryCta: 'Watch our story',
  trustLine: 'Trusted by students and institutes across India',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || TBC,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || TBC,
  whatsappPrefilledText: "Hi WCE, I'd like to know more about your programs.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || TBC,
  address: {
    city: 'Nashik',
    state: 'Maharashtra',
    country: 'India',
    fullText: TBC,
  },
  socialLinks: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || undefined,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || undefined,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || undefined,
  },
  aboutStory: {
    eyebrow: 'About WCE',
    heading: '15+ years of turning ambition into careers',
    body: 'WCE was established in 2008 to meet the core needs of students, recent graduates and experienced professionals, while also meeting the needs of industry and international education providers. Our programs and services are designed to develop careers and to promote international awareness and cultural exchange. Our main focus is Internship and Study Abroad, along with Professional Development Programs.',
  },
};
