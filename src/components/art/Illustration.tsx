import React from 'react';

// Dimensions catalog from docs/assets-manifest.md and docs/design.md 4.4
export const ASSET_DIMENSIONS: Record<string, { width: number; height: number; alt: string }> = {
  'ill-hero': { width: 1600, height: 900, alt: 'Runway scene with students and campus buildings' },
  'ill-plane-side': { width: 96, height: 64, alt: 'Paper plane side view' },
  'ill-plane-top': { width: 96, height: 96, alt: 'Paper plane top-down view' },
  'ill-cloud-1': { width: 240, height: 140, alt: 'Soft cloud decoration' },
  'ill-cloud-2': { width: 240, height: 140, alt: 'Soft cloud decoration' },
  'ill-cloud-3': { width: 240, height: 140, alt: 'Soft cloud decoration' },
  'ill-iso-study': { width: 480, height: 480, alt: 'Study abroad and university admissions illustration' },
  'ill-iso-student': { width: 480, height: 480, alt: 'Student internships abroad illustration' },
  'ill-iso-grad': { width: 480, height: 480, alt: 'Graduate internships abroad illustration' },
  'ill-iso-pdp': { width: 480, height: 480, alt: 'Professional development programs illustration' },
  'ill-sector-hospitality': { width: 240, height: 240, alt: 'Hospitality and catering sector' },
  'ill-sector-business': { width: 240, height: 240, alt: 'Business and finance sector' },
  'ill-sector-engineering': { width: 240, height: 240, alt: 'Engineering and construction sector' },
  'ill-sector-nursing': { width: 240, height: 240, alt: 'Nursing and midwifery sector' },
  'ill-sector-it': { width: 240, height: 240, alt: 'Information technology and computer science sector' },
  'ill-about': { width: 640, height: 560, alt: 'Counsellor guiding student at desk' },
  'ill-dest-malaysia': { width: 480, height: 600, alt: 'Malaysia landmark destination' },
  'ill-dest-france': { width: 480, height: 600, alt: 'France landmark destination' },
  'ill-spot-study': { width: 720, height: 560, alt: 'University campus spotlight' },
  'ill-spot-intern': { width: 720, height: 560, alt: 'Hotel and professional workplace spotlight' },
  'ill-route': { width: 1440, height: 1000, alt: 'Dotted paper plane route' },
  'ill-step-1': { width: 96, height: 96, alt: 'Free counselling icon' },
  'ill-step-2': { width: 96, height: 96, alt: 'Choose program and country icon' },
  'ill-step-3': { width: 96, height: 96, alt: 'Admission and offer letter icon' },
  'ill-step-4': { width: 96, height: 96, alt: 'Visa and documentation icon' },
  'ill-step-5': { width: 96, height: 96, alt: 'Fly and get placed icon' },
  'ill-why-1': { width: 96, height: 96, alt: 'Personal counselling badge' },
  'ill-why-2': { width: 96, height: 96, alt: 'Visa and document support badge' },
  'ill-why-3': { width: 96, height: 96, alt: 'Global network badge' },
  'ill-why-4': { width: 96, height: 96, alt: 'Support after placement badge' },
  'ill-csr': { width: 640, height: 480, alt: 'Corporate social responsibility scene' },
  'ill-connect': { width: 640, height: 360, alt: 'Enquiry connection scene' },
  'ill-cta-scene': { width: 1600, height: 700, alt: 'Sunset runway takeoff scene' },
  'ill-form-success': { width: 320, height: 240, alt: 'Form submission confirmation plane' },
  'ill-404': { width: 600, height: 400, alt: 'Plane in clouds 404 scene' },
  'ill-avatar-1': { width: 128, height: 128, alt: 'Student avatar placeholder' },
};

export interface IllustrationProps {
  id: string;
  className?: string;
  alt?: string;
  priority?: boolean;
}

export function Illustration({ id, className = '', alt }: IllustrationProps) {
  const meta = ASSET_DIMENSIONS[id] || { width: 400, height: 300, alt: id };
  const effectiveAlt = alt !== undefined ? alt : meta.alt;

  // Placeholder renderer per docs/assets-manifest.md Section F
  // Displays asset ID and size, role="img", data-placeholder attribute
  return (
    <div
      role="img"
      aria-label={effectiveAlt || 'Illustration placeholder'}
      data-placeholder={id}
      className={`relative flex flex-col items-center justify-center rounded-[var(--radius-card)] border border-dashed border-wce-slate-300 bg-wce-blue-100/50 p-4 text-center transition-all ${className}`}
      style={{
        aspectRatio: `${meta.width} / ${meta.height}`,
        maxWidth: '100%',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
        <span className="inline-flex items-center rounded-full bg-wce-navy-900/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-wce-navy-900 uppercase">
          {id}
        </span>
        <span className="text-[12px] font-mono text-wce-slate-600">
          {meta.width} × {meta.height}
        </span>
      </div>
    </div>
  );
}
