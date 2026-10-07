'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { Illustration } from '@/components/art/Illustration';
import { Reveal } from '@/components/motion/Reveal';

export default function DevComponentsPage() {
  // If production and not explicitly enabled, return 404
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_ENABLE_DEV_ROUTES) {
    notFound();
  }

  const [inputVal, setInputVal] = useState('John Doe');
  const [selectVal, setSelectVal] = useState('study-abroad');
  const [checkedConsent, setCheckedConsent] = useState(true);

  const accordionItems = [
    {
      id: 'faq-1',
      title: 'What documents are required to apply?',
      content: 'Standard documentation includes academic transcripts, valid passport, updated resume, and language proficiency test scores where applicable.',
    },
    {
      id: 'faq-2',
      title: 'How long does the visa process typically take?',
      content: 'Processing times vary between 4 to 12 weeks depending on the destination country, embassy schedules, and submission completeness.',
    },
    {
      id: 'faq-3',
      title: 'Are internships paid abroad?',
      content: 'Most hospitality and graduate internship programs offer a monthly stipend along with duty meals or accommodation support.',
    },
  ];

  return (
    <div className="min-h-screen bg-wce-blue-50 text-wce-slate-600 pb-24">
      {/* Dev Page Notification Bar */}
      <div className="bg-wce-navy-900 text-wce-white px-4 py-2 text-center text-[12px] font-mono tracking-wide border-b border-wce-navy-800">
        🛠️ WCE DESIGN SYSTEM GALLERY · <span className="text-wce-coral-400 font-bold">DEV ONLY (/dev/components)</span>
      </div>

      {/* Global Header Shell */}
      <Header />

      <main id="main-content">
        {/* Intro Section */}
        <Section bg="white" className="border-b border-wce-slate-300/40">
          <Container>
            <Eyebrow>Design System Primitives</Eyebrow>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-wce-navy-900 mt-2 mb-4 tracking-tight">
              Component & Token <span className="headline-highlight">Design Gallery</span>
            </h1>
            <p className="text-lg text-wce-slate-600 max-w-2xl leading-relaxed">
              Living design system specification for Wisdom Career Education. Every token, component,
              and interactive state adheres strictly to the contrast and typography guidelines of <code className="text-xs bg-wce-blue-100 text-wce-navy-900 px-1.5 py-0.5 rounded">docs/design.md</code>.
            </p>
          </Container>
        </Section>

        {/* 1. Typography & Hierarchy */}
        <Section bg="blue-50">
          <Container>
            <Eyebrow>01 · Typography</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              Font Hierarchy & Tracking Rules
            </h2>

            <div className="flex flex-col gap-8 rounded-[20px] bg-wce-white p-6 sm:p-8 border border-wce-slate-300 shadow-wce-sm">
              <div className="pb-6 border-b border-wce-slate-300/60">
                <p className="text-xs font-mono text-wce-slate-600 mb-2 uppercase">H1 Display Headline (Plus Jakarta Sans 800)</p>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-wce-navy-900 tracking-tight leading-[1.1]">
                  Your global career <span className="headline-highlight">starts here</span>
                </h1>
              </div>

              <div className="pb-6 border-b border-wce-slate-300/60">
                <p className="text-xs font-mono text-wce-slate-600 mb-2 uppercase">H2 Section Heading (Plus Jakarta Sans 700)</p>
                <h2 className="text-2xl sm:text-4xl font-bold text-wce-navy-900 tracking-tight">
                  15+ years of turning <span className="headline-highlight">ambition into careers</span>
                </h2>
              </div>

              <div className="pb-6 border-b border-wce-slate-300/60">
                <p className="text-xs font-mono text-wce-slate-600 mb-2 uppercase">H3 Card Heading (Plus Jakarta Sans 700)</p>
                <h3 className="text-xl sm:text-2xl font-bold text-wce-navy-900">
                  Study Abroad & University Admissions
                </h3>
              </div>

              <div className="pb-6 border-b border-wce-slate-300/60">
                <p className="text-xs font-mono text-wce-slate-600 mb-2 uppercase">Eyebrow (Inter 600, uppercase, +0.08em tracking, coral-700)</p>
                <Eyebrow>What we offer</Eyebrow>
              </div>

              <div>
                <p className="text-xs font-mono text-wce-slate-600 mb-2 uppercase">Body Text (Inter 400/500, line-height 1.6)</p>
                <p className="text-[16px] sm:text-[18px] text-wce-slate-600 leading-relaxed max-w-2xl">
                  WCE was established in 2008 to meet the core needs of students, recent graduates and experienced professionals, while also meeting the needs of industry and international education providers.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 2. Color Tokens & Contrast */}
        <Section bg="white">
          <Container>
            <Eyebrow>02 · Color Tokens & WCAG Contrast</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              Token Palette & Roles
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-[14px] bg-wce-navy-900 text-wce-white flex flex-col justify-between h-28 shadow-sm">
                <span className="text-xs font-mono">navy-900</span>
                <span className="text-xs opacity-75">#0F1B3D · Headings</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-navy-800 text-wce-white flex flex-col justify-between h-28 shadow-sm">
                <span className="text-xs font-mono">navy-800</span>
                <span className="text-xs opacity-75">#1C2757 · Footer</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-navy-700 text-wce-white flex flex-col justify-between h-28 shadow-sm">
                <span className="text-xs font-mono">navy-700</span>
                <span className="text-xs opacity-75">#1E3A8A · Links</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-coral-700 text-wce-white flex flex-col justify-between h-28 shadow-sm">
                <span className="text-xs font-mono font-bold">coral-700</span>
                <span className="text-xs font-medium">#CF4326 · Primary CTA</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-coral-500 text-wce-navy-900 flex flex-col justify-between h-28 shadow-sm">
                <span className="text-xs font-mono font-bold">coral-500</span>
                <span className="text-xs font-medium">#F0572F · Highlight ≥28px</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-coral-100 text-wce-coral-800 flex flex-col justify-between h-28 border border-wce-coral-400/20">
                <span className="text-xs font-mono font-bold">coral-100</span>
                <span className="text-xs font-medium">#FFE9E3 · Accents</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-blue-100 text-wce-navy-900 flex flex-col justify-between h-28 border border-wce-blue-500/20">
                <span className="text-xs font-mono font-bold">blue-100</span>
                <span className="text-xs">#E6F0FF · Bands</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-blue-50 text-wce-navy-900 flex flex-col justify-between h-28 border border-wce-slate-300">
                <span className="text-xs font-mono font-bold">blue-50</span>
                <span className="text-xs">#F4F8FF · Page Bg</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-slate-600 text-wce-white flex flex-col justify-between h-28 shadow-sm">
                <span className="text-xs font-mono">slate-600</span>
                <span className="text-xs opacity-90">#475569 · Body text</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-slate-300 text-wce-ink flex flex-col justify-between h-28">
                <span className="text-xs font-mono font-bold">slate-300</span>
                <span className="text-xs">#CBD5E1 · Borders</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-sun-400 text-wce-navy-900 flex flex-col justify-between h-28">
                <span className="text-xs font-mono font-bold">sun-400</span>
                <span className="text-xs font-medium">#FFC857 · Stars</span>
              </div>
              <div className="p-4 rounded-[14px] bg-wce-green-400 text-wce-navy-900 flex flex-col justify-between h-28">
                <span className="text-xs font-mono font-bold">green-400</span>
                <span className="text-xs font-medium">#8FBF5A · Success</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. Buttons & States */}
        <Section bg="blue-50">
          <Container>
            <Eyebrow>03 · Buttons & Micro-Interactions</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              Pill Buttons & States
            </h2>

            <div className="flex flex-col gap-8 rounded-[20px] bg-wce-white p-6 sm:p-8 border border-wce-slate-300 shadow-wce-sm">
              {/* Primary, Secondary, Dark, Text */}
              <div className="flex flex-wrap items-center gap-5">
                <Button variant="primary">Book free counselling</Button>
                <Button variant="secondary">Explore programs</Button>
                <Button variant="dark">Learn more</Button>
                <Button variant="text">Watch our story</Button>
                <Button variant="icon-circle" aria-label="Explore program" />
              </div>

              {/* Sizes */}
              <div className="pt-4 border-t border-wce-slate-300/60">
                <p className="text-xs font-mono text-wce-slate-600 mb-3 uppercase">Button Sizes</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">Small (40px)</Button>
                  <Button variant="primary" size="md">Medium (52px, Default)</Button>
                  <Button variant="primary" size="lg">Large (56px)</Button>
                </div>
              </div>

              {/* States: Loading, Disabled */}
              <div className="pt-4 border-t border-wce-slate-300/60">
                <p className="text-xs font-mono text-wce-slate-600 mb-3 uppercase">Interactive States (Loading, Disabled)</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" loading>Submitting</Button>
                  <Button variant="primary" disabled>Primary Disabled</Button>
                  <Button variant="secondary" disabled>Secondary Disabled</Button>
                  <Button variant="dark" disabled>Dark Disabled</Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. Cards & Badges */}
        <Section bg="white">
          <Container>
            <Eyebrow>04 · Cards & Elevation</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              Card Geometry (20px radius) & Badges
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Static Card */}
              <Card elevation="sm">
                <Badge variant="chip" className="mb-4">Standard Card</Badge>
                <h3 className="text-xl font-bold text-wce-navy-900 mb-2">Static Card</h3>
                <p className="text-[15px] text-wce-slate-600 leading-relaxed mb-6">
                  Features a 20px radius with subtle 1px border and token shadow-sm elevation.
                </p>
                <Button variant="text">Read more</Button>
              </Card>

              {/* Interactive Card */}
              <Card interactive elevation="sm" className="relative group">
                <Badge variant="coral" className="mb-4">International career pathway</Badge>
                <h3 className="text-xl font-bold text-wce-navy-900 mb-2">Interactive Program Card</h3>
                <p className="text-[15px] text-wce-slate-600 leading-relaxed mb-6">
                  Hovers with an 8px lift, subtle scale and elevation to shadow-wce-float.
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-wce-slate-300/40">
                  <span className="text-[14px] font-semibold text-wce-navy-900">Explore program</span>
                  <Button variant="icon-circle" aria-label="Explore program" />
                </div>
              </Card>

              {/* Sticker Badge Card */}
              <Card elevation="md" className="flex flex-col items-center justify-center text-center p-8">
                <Badge variant="sticker" className="mb-4">
                  Free Counselling
                </Badge>
                <h3 className="text-lg font-bold text-wce-navy-900 mb-1">Rotatable Sticker</h3>
                <p className="text-[14px] text-wce-slate-600">
                  Ref A inspired round badge for promotional callouts.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 5. Form Primitives */}
        <Section bg="blue-50">
          <Container size="narrow">
            <Eyebrow>05 · Forms & Accessibility</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              Input, Select, & Checkbox Controls
            </h2>

            <div className="rounded-[20px] bg-wce-white p-6 sm:p-8 border border-wce-slate-300 shadow-wce-sm flex flex-col gap-6">
              <Input
                label="Full name"
                placeholder="Enter your name"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                isValid={inputVal.length > 2}
                required
              />

              <Input
                label="Phone number (+91)"
                placeholder="10-digit mobile number"
                error="Please enter a valid 10-digit mobile number."
                defaultValue="9876"
                required
              />

              <Select
                label="I'm interested in"
                value={selectVal}
                onChange={(e) => setSelectVal(e.target.value)}
                required
                options={[
                  { value: 'study-abroad', label: 'Study Abroad & University Admissions' },
                  { value: 'student-internships', label: 'Student Internships' },
                  { value: 'graduate-internships', label: 'Graduate Internships' },
                  { value: 'professional-development', label: 'Professional Development Programs' },
                  { value: 'not-sure', label: 'Not sure yet' },
                ]}
              />

              <Checkbox
                label="I agree to be contacted by WCE about my counselling enquiry. See our Privacy Policy."
                checked={checkedConsent}
                onChange={(e) => setCheckedConsent(e.target.checked)}
                required
              />

              <Button variant="primary" size="lg" className="w-full mt-2">
                Book free counselling
              </Button>
            </div>
          </Container>
        </Section>

        {/* 6. Accordion */}
        <Section bg="white">
          <Container>
            <Eyebrow>06 · Accordion</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              FAQ Accordion Component
            </h2>

            <Accordion items={accordionItems} defaultOpenId="faq-1" />
          </Container>
        </Section>

        {/* 7. Illustration Placeholders */}
        <Section bg="blue-100">
          <Container>
            <Eyebrow>07 · Asset Placeholder System</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              Documented Aspect Ratios & IDs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card elevation="sm" className="p-4">
                <Illustration id="ill-iso-study" className="mb-4" />
                <h4 className="font-bold text-wce-navy-900 text-[16px]">Study Abroad Tile</h4>
                <p className="text-[13px] text-wce-slate-600">ID: ill-iso-study (480×480)</p>
              </Card>

              <Card elevation="sm" className="p-4">
                <Illustration id="ill-sector-hospitality" className="mb-4" />
                <h4 className="font-bold text-wce-navy-900 text-[16px]">Hospitality Sector</h4>
                <p className="text-[13px] text-wce-slate-600">ID: ill-sector-hospitality (240×240)</p>
              </Card>

              <Card elevation="sm" className="p-4">
                <Illustration id="ill-step-1" className="mb-4" />
                <h4 className="font-bold text-wce-navy-900 text-[16px]">Free Counselling Icon</h4>
                <p className="text-[13px] text-wce-slate-600">ID: ill-step-1 (96×96)</p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 8. Motion Reveal Demo */}
        <Section bg="white">
          <Container>
            <Eyebrow>08 · Motion Foundation</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-wce-navy-900 mt-1 mb-8">
              Performant Reveal Primitive
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal rotateX delayMs={100}>
                <Card elevation="sm" className="p-6">
                  <h3 className="text-xl font-bold text-wce-navy-900 mb-2">Headline Reveal with 3D Settle</h3>
                  <p className="text-[15px] text-wce-slate-600">
                    Smoothly animates transform and opacity only. Respects <code className="text-xs bg-wce-blue-100 text-wce-navy-900 px-1 rounded">prefers-reduced-motion</code> by rendering directly in its final state.
                  </p>
                </Card>
              </Reveal>

              <Reveal delayMs={200}>
                <Card elevation="sm" className="p-6">
                  <h3 className="text-xl font-bold text-wce-navy-900 mb-2">Standard Section Reveal</h3>
                  <p className="text-[15px] text-wce-slate-600">
                    Lightweight IntersectionObserver integration that unobserves once triggered, keeping main thread free.
                  </p>
                </Card>
              </Reveal>
            </div>
          </Container>
        </Section>
      </main>

      {/* Global Footer Shell */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <MobileActionBar />
    </div>
  );
}
