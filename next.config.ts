import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://challenges.cloudflare.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  img-src 'self' data: https: blob:;
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://api.resend.com https://script.google.com https://script.googleusercontent.com;
  frame-src 'self' https://challenges.cloudflare.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/programs',
        permanent: true,
      },
      {
        source: '/programs-offered',
        destination: '/programs',
        permanent: true,
      },
      {
        source: '/internship',
        destination: '/programs/student-internships',
        permanent: true,
      },
      {
        source: '/internships',
        destination: '/programs/student-internships',
        permanent: true,
      },
      {
        source: '/study',
        destination: '/programs/study-abroad',
        permanent: true,
      },
      {
        source: '/study-abroad-programs',
        destination: '/programs/study-abroad',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/success-stories',
        permanent: true,
      },
      {
        source: '/stories',
        destination: '/success-stories',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
