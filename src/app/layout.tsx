import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";
import { generateOrganizationJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wisdomcareereducation.com'),
  title: "Wisdom Career Education | Internships, Study Abroad | Nashik",
  description: "Internships, study abroad and professional development programs from Nashik, with 15+ years of experience. Book a free counselling session.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    images: [
      {
        url: "/og/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Wisdom Career Education",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = generateOrganizationJsonLd();

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-body text-wce-slate-600 bg-wce-blue-50 antialiased selection:bg-wce-coral-100 selection:text-wce-coral-800">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <div id="root-layout" className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
