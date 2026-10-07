import React from 'react';
import Image from 'next/image';

export interface AssetSpecification {
  width: number;
  height: number;
  alt: string;
  type: 'scene' | 'sprite' | 'tile' | 'icon' | 'badge' | 'avatar' | 'decoration' | 'path';
}

// Complete catalog from docs/assets-manifest.md Section A & docs/design.md Section 4
export const ASSET_SPECIFICATIONS: Record<string, AssetSpecification> = {
  // Scenes & Sprites
  'ill-hero': { width: 1600, height: 900, alt: 'Runway scene with students and university campus buildings', type: 'scene' },
  'ill-plane-side': { width: 96, height: 64, alt: 'Paper plane side view', type: 'sprite' },
  'ill-plane-top': { width: 96, height: 96, alt: 'Paper plane top-down view', type: 'sprite' },
  'ill-cloud-1': { width: 240, height: 140, alt: 'Soft cloud decoration layer 1', type: 'decoration' },
  'ill-cloud-2': { width: 240, height: 140, alt: 'Soft cloud decoration layer 2', type: 'decoration' },
  'ill-cloud-3': { width: 240, height: 140, alt: 'Soft cloud decoration layer 3', type: 'decoration' },

  // Program Isometric Tiles
  'ill-iso-study': { width: 480, height: 480, alt: 'Study abroad and university admissions illustration', type: 'tile' },
  'ill-iso-student': { width: 480, height: 480, alt: 'Student internships abroad illustration', type: 'tile' },
  'ill-iso-grad': { width: 480, height: 480, alt: 'Graduate internships abroad illustration', type: 'tile' },
  'ill-iso-pdp': { width: 480, height: 480, alt: 'Professional development programs illustration', type: 'tile' },

  // Placement Sector Tiles
  'ill-sector-hospitality': { width: 240, height: 240, alt: 'Hospitality and catering sector tile', type: 'tile' },
  'ill-sector-business': { width: 240, height: 240, alt: 'Business and finance sector tile', type: 'tile' },
  'ill-sector-engineering': { width: 240, height: 240, alt: 'Engineering and construction sector tile', type: 'tile' },
  'ill-sector-nursing': { width: 240, height: 240, alt: 'Nursing and midwifery sector tile', type: 'tile' },
  'ill-sector-it': { width: 240, height: 240, alt: 'Information technology and computer science sector tile', type: 'tile' },

  // About, Destinations, Spotlight
  'ill-about': { width: 640, height: 560, alt: 'Counsellor guiding student at desk with global map', type: 'scene' },
  'ill-dest-malaysia': { width: 480, height: 600, alt: 'Malaysia landmark destination card art', type: 'tile' },
  'ill-dest-france': { width: 480, height: 600, alt: 'France landmark destination card art', type: 'tile' },
  'ill-spot-study': { width: 720, height: 560, alt: 'University campus spotlight feature', type: 'tile' },
  'ill-spot-intern': { width: 720, height: 560, alt: 'Professional workplace spotlight feature', type: 'tile' },

  // Journey & Why WCE
  'ill-route': { width: 1440, height: 1000, alt: 'Dotted paper plane route path', type: 'path' },
  'ill-step-1': { width: 96, height: 96, alt: 'Step 1: Free counselling icon', type: 'icon' },
  'ill-step-2': { width: 96, height: 96, alt: 'Step 2: Choose program and country icon', type: 'icon' },
  'ill-step-3': { width: 96, height: 96, alt: 'Step 3: Admission or internship offer icon', type: 'icon' },
  'ill-step-4': { width: 96, height: 96, alt: 'Step 4: Visa and documentation icon', type: 'icon' },
  'ill-step-5': { width: 96, height: 96, alt: 'Step 5: Fly and get placed icon', type: 'icon' },
  'ill-why-1': { width: 96, height: 96, alt: 'Personal counselling badge', type: 'badge' },
  'ill-why-2': { width: 96, height: 96, alt: 'Visa and document support badge', type: 'badge' },
  'ill-why-3': { width: 96, height: 96, alt: 'Global network badge', type: 'badge' },
  'ill-why-4': { width: 96, height: 96, alt: 'Support after placement badge', type: 'badge' },

  // CSR, Connect, CTA, 404, Avatars
  'ill-csr': { width: 640, height: 480, alt: 'Corporate social responsibility community scene', type: 'scene' },
  'ill-connect': { width: 640, height: 360, alt: 'Enquiry connection scene', type: 'scene' },
  'ill-cta-scene': { width: 1600, height: 700, alt: 'Sunset runway takeoff final call-to-action scene', type: 'scene' },
  'ill-form-success': { width: 320, height: 240, alt: 'Paper plane confirmation animation', type: 'scene' },
  'ill-404': { width: 600, height: 400, alt: 'Paper plane adrift in clouds 404 scene', type: 'scene' },
  'ill-avatar-1': { width: 128, height: 128, alt: 'Student testimonial avatar 1', type: 'avatar' },
  'ill-avatar-2': { width: 128, height: 128, alt: 'Student testimonial avatar 2', type: 'avatar' },
  'ill-avatar-3': { width: 128, height: 128, alt: 'Student testimonial avatar 3', type: 'avatar' },
  'ill-avatar-4': { width: 128, height: 128, alt: 'Student testimonial avatar 4', type: 'avatar' },
  'ill-avatar-5': { width: 128, height: 128, alt: 'Student testimonial avatar 5', type: 'avatar' },
  'ill-avatar-6': { width: 128, height: 128, alt: 'Student testimonial avatar 6', type: 'avatar' },
};

/**
 * Registry of placed illustration filenames.
 * Updated as actual SVG assets are delivered and placed in /public/illustrations/
 */
export const PLACED_ASSETS: Record<string, string> = {
  // Hero & Plane System
  'ill-hero': '/illustrations/ill-hero.svg',
  'ill-plane-side': '/illustrations/ill-plane-side.svg',
  'ill-plane-top': '/illustrations/ill-plane-top.svg',
  'ill-cloud-1': '/illustrations/ill-cloud-1.svg',
  'ill-cloud-2': '/illustrations/ill-cloud-2.svg',
  'ill-cloud-3': '/illustrations/ill-cloud-3.svg',

  // Program Isometric Tiles
  'ill-iso-study': '/illustrations/ill-iso-study.svg',
  'ill-iso-student': '/illustrations/ill-iso-student.svg',
  'ill-iso-grad': '/illustrations/ill-iso-grad.svg',
  'ill-iso-pdp': '/illustrations/ill-iso-pdp.svg',

  // Placement Sector Tiles
  'ill-sector-hospitality': '/illustrations/ill-sector-hospitality.svg',
  'ill-sector-business': '/illustrations/ill-sector-business.svg',
  'ill-sector-engineering': '/illustrations/ill-sector-engineering.svg',
  'ill-sector-nursing': '/illustrations/ill-sector-nursing.svg',
  'ill-sector-it': '/illustrations/ill-sector-it.svg',

  // About, Destinations, Spotlight
  'ill-about': '/illustrations/ill-about.svg',
  'ill-dest-malaysia': '/illustrations/ill-dest-malaysia.svg',
  'ill-dest-france': '/illustrations/ill-dest-france.svg',
  'ill-spot-study': '/illustrations/ill-spot-study.svg',
  'ill-spot-intern': '/illustrations/ill-spot-intern.svg',

  // Journey Steps & Why WCE Badges
  'ill-route': '/illustrations/ill-route.svg',
  'ill-step-1': '/illustrations/ill-step-1.svg',
  'ill-step-2': '/illustrations/ill-step-2.svg',
  'ill-step-3': '/illustrations/ill-step-3.svg',
  'ill-step-4': '/illustrations/ill-step-4.svg',
  'ill-step-5': '/illustrations/ill-step-5.svg',
  'ill-why-1': '/illustrations/ill-why-1.svg',
  'ill-why-2': '/illustrations/ill-why-2.svg',
  'ill-why-3': '/illustrations/ill-why-3.svg',
  'ill-why-4': '/illustrations/ill-why-4.svg',

  // CSR, Connect, CTA, Form Success, 404
  'ill-csr': '/illustrations/ill-csr.svg',
  'ill-connect': '/illustrations/ill-connect.svg',
  'ill-cta-scene': '/illustrations/ill-cta-scene.svg',
  'ill-form-success': '/illustrations/ill-form-success.svg',
  'ill-404': '/illustrations/ill-404.svg',

  // Avatars
  'ill-avatar-1': '/illustrations/ill-avatar-1.svg',
  'ill-avatar-2': '/illustrations/ill-avatar-2.svg',
  'ill-avatar-3': '/illustrations/ill-avatar-3.svg',
  'ill-avatar-4': '/illustrations/ill-avatar-4.svg',
  'ill-avatar-5': '/illustrations/ill-avatar-5.svg',
  'ill-avatar-6': '/illustrations/ill-avatar-6.svg',
};

/**
 * Canonical SVG path string for 'ill-route' (from public/illustrations/ill-route.svg).
 * PlaneRoute uses this canonical path immediately on render.
 */
export const CANONICAL_ROUTE_DATA: string | null =
  'M 1123.2,60 C 1180.8,192.0 1123.2,384.0 1036.8,480.0 C 950.4,624.0 460.8,768.0 345.6,960.0 C 288.0,1200.0 1094.4,1344.0 1123.2,1584.0 C 1152.0,1776.0 374.4,1872.0 259.2,2064.0 C 316.8,2112.0 432.0,2112.0 489.6,2160.0 C 547.2,2208.0 662.4,2208.0 720.0,2208.0 C 777.6,2208.0 892.8,2112.0 950.4,2160.0 C 1008.0,2160.0 1123.2,2064.0 1180.8,2064.0 C 1238.4,2352.0 518.4,2496.0 403.2,2784.0 C 345.6,3072.0 1065.6,3216.0 1094.4,3456.0 C 1123.2,3744.0 792.0,3888.0 691.2,4080.0 C 648.0,4416.0 720.0,4608.0 720.0,4740.0';


export interface IllustrationProps {
  id: string;
  className?: string;
  alt?: string;
  priority?: boolean;
}

/**
 * Illustration component:
 * 1. receives asset ID from assets-manifest.md
 * 2. looks up exact dimensions and specifications
 * 3. preserves aspect ratio
 * 4. renders real file if placed in PLACED_ASSETS
 * 5. renders documented placeholder block when unavailable
 * 6. exposes proper accessibility information
 * 7. never hotlinks external art
 * 8. never generates fake replacement art
 */
export function Illustration({ id, className = '', alt, priority = false }: IllustrationProps) {
  const spec = ASSET_SPECIFICATIONS[id] || {
    width: 400,
    height: 300,
    alt: id,
    type: 'tile' as const,
  };
  const effectiveAlt = alt !== undefined ? alt : spec.alt;
  const placedPath = PLACED_ASSETS[id];

  // If real asset has been placed, render via next/image
  if (placedPath) {
    return (
      <div
        data-asset-id={id}
        role="img"
        aria-label={effectiveAlt}
        className={`relative overflow-hidden ${className}`}
        style={{
          aspectRatio: `${spec.width} / ${spec.height}`,
          maxWidth: '100%',
        }}
      >
        <Image
          src={placedPath}
          alt={effectiveAlt}
          width={spec.width}
          height={spec.height}
          priority={priority}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  const devPlaceholderProps =
    process.env.NODE_ENV !== 'production' ? { 'data-placeholder': id } : {};

  // Placeholder renderer per docs/assets-manifest.md Section F
  return (
    <div
      role="img"
      aria-label={effectiveAlt || 'Illustration placeholder'}
      data-asset-id={id}
      {...devPlaceholderProps}
      className={`relative flex flex-col items-center justify-center rounded-[var(--radius-card)] border border-dashed border-wce-slate-300 bg-wce-blue-50 p-4 text-center transition-all ${className}`}
      style={{
        aspectRatio: `${spec.width} / ${spec.height}`,
        maxWidth: '100%',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
        <span className="inline-flex items-center rounded-full bg-wce-navy-900/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-wce-navy-900 uppercase">
          {id}
        </span>
        <span className="text-[12px] font-mono text-wce-ink font-medium">
          {spec.width} × {spec.height}
        </span>
      </div>
    </div>
  );
}
