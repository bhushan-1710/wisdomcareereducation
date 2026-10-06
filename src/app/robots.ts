import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://wisdomcareereducation.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dev/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
