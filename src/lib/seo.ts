import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

interface PageSeoProps {
  title: string;
  description?: string;
  path?: string;
}

export function constructMetadata({
  title,
  description = 'Internships, study abroad and professional development programs from Nashik, with 15+ years of experience.',
  path = '',
}: PageSeoProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.brandName}`;
  const url = `https://wisdomcareereducation.com${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.brandName,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
