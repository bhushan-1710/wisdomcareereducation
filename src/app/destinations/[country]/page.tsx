import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/SiteShell';
import { InnerHero } from '@/components/layout/InnerHero';
import { CtaBanner } from '@/components/layout/CtaBanner';
import { Container } from '@/components/ui/Container';
import { destinations, getDestinationBySlug } from '@/content/destinations';
import { constructMetadata } from '@/lib/seo';
import { hasValue } from '@/lib/tbc';

interface DestinationPageProps {
  params: Promise<{
    country: string;
  }>;
}

export async function generateStaticParams() {
  // Only generate routes for valid seeded content per PRD & Step 5 scope
  return destinations
    .filter((d) => hasValue(d.summary) && (d.status as string) === 'live')
    .map((d) => ({
      country: d.slug,
    }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { country } = await params;
  const dest = getDestinationBySlug(country);

  if (!dest || !hasValue(dest.summary)) {
    return constructMetadata({
      title: 'Destination Not Found',
      path: `/destinations/${country}`,
    });
  }

  return constructMetadata({
    title: `Study & Internships in ${dest.country}`,
    description: typeof dest.summary === 'string' ? dest.summary : 'International pathways with WCE.',
    path: `/destinations/${dest.slug}`,
  });
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { country } = await params;
  const dest = getDestinationBySlug(country);

  // If destination is unverified or has no approved summary, return 404 cleanly
  if (!dest || !hasValue(dest.summary) || (dest.status as string) !== 'live') {
    notFound();
  }

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Country Dossier"
        title={`Study & Internships in ${dest.country}`}
        description={dest.summary as string}
        art={dest.art}
        breadcrumbs={[
          { label: 'Destinations', href: '/destinations' },
          { label: dest.country },
        ]}
      />

      <section className="py-24 bg-wce-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-wce-navy-900 mb-4">Program Overview</h2>
            <p className="text-wce-slate-600 leading-relaxed">{dest.summary as string}</p>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading={`Explore opportunities in ${dest.country}`}
        subcopy="Our counsellors can guide you through admissions, visa paperwork, and placement timelines."
        ctaHref="/contact"
      />
    </SiteShell>
  );
}
