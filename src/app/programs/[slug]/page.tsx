import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/SiteShell';
import { ProgramDetailTemplate } from '@/components/templates/ProgramDetailTemplate';
import { programs, getProgramBySlug } from '@/content/programs';
import { constructMetadata } from '@/lib/seo';

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return constructMetadata({
      title: 'Program Not Found',
      path: `/programs/${slug}`,
    });
  }

  return constructMetadata({
    title: program.title,
    description: program.summary,
    path: `/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <SiteShell>
      <ProgramDetailTemplate program={program} />
    </SiteShell>
  );
}
