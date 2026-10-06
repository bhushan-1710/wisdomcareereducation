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
  // Empty until assets are delivered and placed in public/illustrations/
};

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

  // Placeholder renderer per docs/assets-manifest.md Section F
  return (
    <div
      role="img"
      aria-label={effectiveAlt || 'Illustration placeholder'}
      data-placeholder={id}
      className={`relative flex flex-col items-center justify-center rounded-[var(--radius-card)] border border-dashed border-wce-slate-300 bg-wce-blue-100/50 p-4 text-center transition-all ${className}`}
      style={{
        aspectRatio: `${spec.width} / ${spec.height}`,
        maxWidth: '100%',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
        <span className="inline-flex items-center rounded-full bg-wce-navy-900/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-wce-navy-900 uppercase">
          {id}
        </span>
        <span className="text-[12px] font-mono text-wce-slate-600">
          {spec.width} × {spec.height}
        </span>
      </div>
    </div>
  );
}
