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

export function generateOrganizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wisdomcareereducation.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.brandName,
    alternateName: siteConfig.shortName,
    url: baseUrl,
    description: 'Internships abroad, university admissions, and career counseling based in Nashik, Maharashtra since 2008.',
    foundingDate: '2008',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook,
    ].filter(Boolean),
  };
}

export function generateFaqJsonLd(faqs: Array<{ q: string; a: string | null }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs
      .filter((item): item is { q: string; a: string } => Boolean(item.a))
      .map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
  };
}

export function generateBreadcrumbsJsonLd(items: Array<{ name: string; url: string }>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wisdomcareereducation.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}
