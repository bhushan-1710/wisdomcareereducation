import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Illustration } from '@/components/art/Illustration';
import { Reveal } from '@/components/motion/Reveal';

export interface HeroProps {
  className?: string;
  hasVideoStory?: boolean;
}

export function Hero({ className = '', hasVideoStory = false }: HeroProps) {
  // 5 student story preview items for the Ref C signature floating card
  const storyAvatars = [
    { id: 'ill-avatar-1', alt: 'Student story 1', dest: 'Malaysia' },
    { id: 'ill-avatar-2', alt: 'Student story 2', dest: 'France' },
    { id: 'ill-avatar-3', alt: 'Student story 3', dest: 'UK' },
    { id: 'ill-avatar-4', alt: 'Student story 4', dest: 'Australia' },
    { id: 'ill-avatar-5', alt: 'Student story 5', dest: 'Germany' },
  ];

  return (
    <section
      className={`relative bg-wce-blue-50 pt-12 pb-16 md:pt-20 md:pb-24 ${className}`}
      aria-label="Hero"
    >
      {/* Soft sky atmosphere & top-left subtle sun glow per Ref B / design.md */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 15% 15%, rgba(255, 200, 87, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 10%, rgba(156, 203, 255, 0.20) 0%, transparent 50%)',
        }}
      />

      <Container size="default">
        {/* Centered Hero Typography */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-wce-navy-900 sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.08]">
            <Reveal rotateX delayMs={60} durationMs={700}>
              <span className="block">Your global career</span>
            </Reveal>
            <Reveal rotateX delayMs={140} durationMs={700}>
              <span className="relative inline-block text-wce-coral-500 mt-1 sm:mt-2">
                starts here
              </span>
            </Reveal>
          </h1>

          <Reveal delayMs={240} durationMs={700}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-wce-slate-600 sm:text-lg md:mt-6 md:text-xl">
              Internships, study abroad and professional development programs, backed by 15+ years of experience.
            </p>
          </Reveal>

          {/* CTA Row */}
          <Reveal delayMs={340} durationMs={700}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                {siteConfig.primaryCta}
              </Button>

              {/* Secondary CTA — hidden when story video is unavailable per PRD & content.md */}
              {hasVideoStory ? (
                <Button href="#story" variant="secondary" size="lg">
                  {siteConfig.secondaryCta}
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>

        {/* Hero Illustration Container */}
        <div className="relative mx-auto mt-10 max-w-5xl md:mt-14">
          <Reveal delayMs={440} durationMs={800} distance={32}>
            <div className="relative rounded-[24px] bg-wce-white/40 p-2 backdrop-blur-xs shadow-wce-sm border border-wce-slate-300/30">
              <Illustration
                id="ill-hero"
                priority
                className="w-full rounded-[20px] shadow-sm"
              />
            </div>
          </Reveal>

          {/* Ref C Desktop Floating Story Card (Overlaps hero bottom) */}
          <div className="hidden md:block relative z-20 -mb-14 mt-8">
            <Reveal delayMs={540} durationMs={700} distance={40}>
              <div className="mx-auto max-w-[620px] rounded-[20px] border border-wce-slate-200/90 bg-wce-white p-4 shadow-wce-float">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Overlapping Avatar Thumbnails */}
                    <div className="flex -space-x-2.5 overflow-hidden">
                      {storyAvatars.map((avatar) => (
                        <div
                          key={avatar.id}
                          className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-wce-white bg-wce-blue-100 transition-transform hover:scale-105"
                        >
                          <Illustration id={avatar.id} alt={avatar.alt} />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-wce-coral-500" />
                        <span className="font-heading text-sm font-bold text-wce-navy-900">
                          Real stories, real journeys
                        </span>
                      </div>
                      <span className="text-xs text-wce-slate-500">
                        From classrooms to 5-star placements
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/success-stories"
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-wce-blue-50 px-3.5 py-1.5 text-xs font-semibold text-wce-navy-900 transition-colors hover:bg-wce-coral-100 hover:text-wce-coral-800"
                  >
                    <span>Read all stories</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Ref C Mobile Story Card (Clean horizontal treatment below hero, avoiding squeeze) */}
        <div className="mt-8 block md:hidden">
          <Reveal delayMs={400} durationMs={600}>
            <div className="rounded-[18px] border border-wce-slate-200 bg-wce-white p-4 shadow-wce-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2 overflow-hidden">
                    {storyAvatars.slice(0, 3).map((avatar) => (
                      <div
                        key={avatar.id}
                        className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-wce-white bg-wce-blue-100"
                      >
                        <Illustration id={avatar.id} alt={avatar.alt} />
                      </div>
                    ))}
                  </div>
                  <span className="font-heading text-xs font-bold text-wce-navy-900">
                    Real stories, real journeys
                  </span>
                </div>

                <Link
                  href="/success-stories"
                  className="flex items-center gap-1 text-xs font-semibold text-wce-coral-700"
                >
                  <span>Stories</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
