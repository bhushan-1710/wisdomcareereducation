'use client';

import React, { useEffect, useRef, useState, useId } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from './useReducedMotion';
import { Illustration, PLACED_ASSETS, CANONICAL_ROUTE_DATA } from '@/components/art/Illustration';

export interface PlaneRouteProps {
  containerId?: string;
}

interface DebugState {
  progress: number;
  milestone: string;
  x: number;
  y: number;
  mode: 'desktop' | 'mobile';
  reducedMotion: boolean;
}

const MILESTONES = [
  { threshold: 0.05, name: 'Takeoff: Programs Explorer' },
  { threshold: 0.20, name: 'Sectors of Excellence' },
  { threshold: 0.38, name: 'Milestone 1: Free Counselling' },
  { threshold: 0.44, name: 'Milestone 2: Choose Program & Country' },
  { threshold: 0.50, name: 'Milestone 3: Admission or Internship Offer' },
  { threshold: 0.56, name: 'Milestone 4: Visa & Documentation' },
  { threshold: 0.62, name: 'Milestone 5: Fly & Get Placed' },
  { threshold: 0.72, name: 'Why WCE Global Advantage' },
  { threshold: 0.84, name: 'Success Stories & Testimonials' },
  { threshold: 0.94, name: 'Final Landing: Career Runway' },
];

/**
 * Builds the canonical smooth cubic bezier path for desktop viewports (>= 1024px).
 * The path weaves gracefully through page gutters and transitions,
 * aligning with journey milestones while staying behind text and cards.
 */
function buildDesktopRoute(w: number, h: number): string {
  const c = (cx1: number, cy1: number, cx2: number, cy2: number, ex: number, ey: number) =>
    `C ${(w * cx1).toFixed(1)},${(h * cy1).toFixed(1)} ${(w * cx2).toFixed(1)},${(h * cy2).toFixed(1)} ${(w * ex).toFixed(1)},${(h * ey).toFixed(1)}`;

  return [
    `M ${(w * 0.78).toFixed(1)},60`,
    // Descent past About and towards Programs band
    c(0.82, 0.04, 0.78, 0.08, 0.72, 0.10),
    c(0.66, 0.13, 0.32, 0.16, 0.24, 0.20),
    // Glide past Programs band across to Sectors
    c(0.20, 0.25, 0.76, 0.28, 0.78, 0.33),
    // Journey Section entrance (Aligns with Step 1: Free Counselling)
    c(0.80, 0.37, 0.26, 0.39, 0.18, 0.43),
    // Step 1 -> Step 2 (Choose program & country)
    c(0.22, 0.44, 0.30, 0.44, 0.34, 0.45),
    // Step 2 -> Step 3 (Admission or internship offer)
    c(0.38, 0.46, 0.46, 0.46, 0.50, 0.46),
    // Step 3 -> Step 4 (Visa and documentation)
    c(0.54, 0.46, 0.62, 0.44, 0.66, 0.45),
    // Step 4 -> Step 5 (Fly and get placed)
    c(0.70, 0.45, 0.78, 0.43, 0.82, 0.43),
    // Sweeping out of Journey down to Why WCE
    c(0.86, 0.49, 0.36, 0.52, 0.28, 0.58),
    // Gliding past Why WCE to Success Stories
    c(0.24, 0.64, 0.74, 0.67, 0.76, 0.72),
    // Gliding through Stories & FAQ
    c(0.78, 0.78, 0.55, 0.81, 0.48, 0.85),
    // Landing into Final CTA Runway
    `C ${(w * 0.45).toFixed(1)},${(h * 0.92).toFixed(1)} ${(w * 0.50).toFixed(1)},${(h * 0.96).toFixed(1)} ${(w * 0.50).toFixed(1)},${(h - 60).toFixed(1)}`,
  ].join(' ');
}

export function PlaneRoute({ containerId = 'journey-route-container' }: PlaneRouteProps) {
  const prefersReduced = useReducedMotion();
  const maskId = useId();

  // Canonical ill-route asset resolution
  const placedRouteUrl = PLACED_ASSETS['ill-route'];
  const [canonicalPathD, setCanonicalPathD] = useState<string | null>(CANONICAL_ROUTE_DATA);

  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 1440,
    height: 4800,
  });
  const [debugState, setDebugState] = useState<DebugState>(() => ({
    progress: 0,
    milestone: prefersReduced ? 'Reduced Motion (Static Path)' : 'Ready for takeoff',
    x: 0,
    y: 0,
    mode: 'desktop',
    reducedMotion: prefersReduced,
  }));
  const [isDebuggerCollapsed, setIsDebuggerCollapsed] = useState<boolean>(true);

  const routePathRef = useRef<SVGPathElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const mobilePlaneRef = useRef<HTMLDivElement>(null);
  const mobileMaskPathRef = useRef<SVGPathElement>(null);

  // Background cloud refs for subtle parallax depth
  const cloud1Ref = useRef<HTMLDivElement>(null);
  const cloud2Ref = useRef<HTMLDivElement>(null);
  const cloud3Ref = useRef<HTMLDivElement>(null);

  const isDesktop = dimensions.width >= 1024;

  // Asynchronously resolve canonical SVG asset path if placed in PLACED_ASSETS
  useEffect(() => {
    if (!placedRouteUrl || typeof window === 'undefined') return;

    let isSubscribed = true;
    fetch(placedRouteUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((svgText) => {
        if (!isSubscribed) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const pathEl = doc.querySelector('path');
        if (pathEl) {
          const d = pathEl.getAttribute('d');
          if (d) setCanonicalPathD(d);
        }
      })
      .catch((err) => {
        console.warn('PlaneRoute: using procedural fallback for ill-route.', err);
      });

    return () => {
      isSubscribed = false;
    };
  }, [placedRouteUrl]);

  // Measure container dimensions via ResizeObserver
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = document.getElementById(containerId);
    if (!container) return;

    let resizeTimer: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver((entries) => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const entry = entries[0];
        if (!entry) return;

        const rect = entry.contentRect;
        const newWidth = Math.max(320, Math.round(rect.width));
        const newHeight = Math.max(1200, Math.round(container.offsetHeight));

        setDimensions((prev) => {
          if (prev.width === newWidth && Math.abs(prev.height - newHeight) < 10) {
            return prev;
          }
          return { width: newWidth, height: newHeight };
        });
      }, 120);
    });

    resizeObserver.observe(container);

    return () => {
      clearTimeout(resizeTimer);
      resizeObserver.disconnect();
    };
  }, [containerId]);

  const isUsingCanonical = Boolean(canonicalPathD);
  const desktopPathD = canonicalPathD || buildDesktopRoute(dimensions.width, dimensions.height);
  const mobilePathD = `M 16,40 L 16,${dimensions.height - 40}`;

  // Main Motion Engine: Single central ScrollTrigger driving MotionPath + Progressive Reveal
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = document.getElementById(containerId);
    if (!container) return;

    // Set central route flag so downstream components avoid duplicate triggers
    (window as unknown as { __WCE_CENTRAL_ROUTE__?: boolean }).__WCE_CENTRAL_ROUTE__ = true;

    // Under reduced motion: render static path, no animations or ScrollTriggers
    if (prefersReduced) {
      if (maskPathRef.current) {
        gsap.set(maskPathRef.current, { strokeDashoffset: 0 });
      }
      if (mobileMaskPathRef.current) {
        gsap.set(mobileMaskPathRef.current, { strokeDashoffset: 0 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      if (isDesktop) {
        // --- DESKTOP MOTION PATH (>= 1024px) ---
        const pathEl = routePathRef.current;
        const maskEl = maskPathRef.current;
        const planeEl = planeRef.current;

        if (!pathEl || !maskEl || !planeEl) return;

        const pathLength = maskEl.getTotalLength();
        gsap.set(maskEl, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        // Initialize plane at start point
        gsap.set(planeEl, {
          motionPath: {
            path: pathEl,
            align: pathEl,
            alignOrigin: [0.5, 0.5],
            autoRotate: 90,
            start: 0,
            end: 0,
          },
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 90%',
            scrub: 1.2,
            onUpdate: (self) => {
              const p = self.progress;

              // Determine active journey milestone
              let activeMilestone = 'En Route';
              for (const m of MILESTONES) {
                if (p >= m.threshold) activeMilestone = m.name;
              }

              // Synchronize JourneySection milestones directly
              // Journey Section corresponds to route interval ~0.38 to ~0.64
              const journeyStart = 0.38;
              const journeyEnd = 0.64;
              if (p >= journeyStart && p <= journeyEnd) {
                const jProgress = Math.min(1, Math.max(0, (p - journeyStart) / (journeyEnd - journeyStart)));
                const activeStep = Math.min(5, Math.max(1, Math.ceil(jProgress * 5)));
                window.dispatchEvent(
                  new CustomEvent('wce:journey-step', {
                    detail: { step: activeStep, progress: jProgress },
                  })
                );
              } else if (p > journeyEnd) {
                window.dispatchEvent(
                  new CustomEvent('wce:journey-step', {
                    detail: { step: 5, progress: 1 },
                  })
                );
              } else if (p < journeyStart) {
                window.dispatchEvent(
                  new CustomEvent('wce:journey-step', {
                    detail: { step: 1, progress: 0 },
                  })
                );
              }

              // Update Dev HUD in development
              if (process.env.NODE_ENV !== 'production') {
                const currentPoint = pathEl.getPointAtLength(p * pathLength);
                setDebugState({
                  progress: p,
                  milestone: activeMilestone,
                  x: currentPoint.x,
                  y: currentPoint.y,
                  mode: 'desktop',
                  reducedMotion: false,
                });
              }
            },
          },
        });

        // 1. Plane follows the canonical path and tangent
        tl.to(
          planeEl,
          {
            motionPath: {
              path: pathEl,
              align: pathEl,
              alignOrigin: [0.5, 0.5],
              autoRotate: 90,
              start: 0,
              end: 1,
            },
            ease: 'none',
          },
          0
        );

        // 2. Dotted path progressively revealed behind the plane via SVG mask
        tl.to(
          maskEl,
          {
            strokeDashoffset: 0,
            ease: 'none',
          },
          0
        );

        // 3. Subtle bank & scale landing micro-interactions at journey milestones
        tl.to(
          planeEl,
          {
            scale: 0.94,
            duration: 0.04,
            repeat: 4,
            yoyo: true,
            ease: 'power1.inOut',
          },
          0.38
        );

        // 4. Subtle background cloud parallax depth
        if (cloud1Ref.current) {
          tl.to(cloud1Ref.current, { y: -40, ease: 'none' }, 0);
        }
        if (cloud2Ref.current) {
          tl.to(cloud2Ref.current, { y: -65, ease: 'none' }, 0);
        }
        if (cloud3Ref.current) {
          tl.to(cloud3Ref.current, { y: -50, ease: 'none' }, 0);
        }
      } else {
        // --- MOBILE DELIBERATELY SIMPLIFIED GUTTER ROUTE (< 1024px) ---
        const mobilePlaneEl = mobilePlaneRef.current;
        const mobileMaskEl = mobileMaskPathRef.current;

        if (!mobilePlaneEl || !mobileMaskEl) return;

        const mobileLength = mobileMaskEl.getTotalLength();
        gsap.set(mobileMaskEl, {
          strokeDasharray: mobileLength,
          strokeDashoffset: mobileLength,
        });

        gsap.set(mobilePlaneEl, {
          y: 40,
          rotation: 180, // Pointing downwards along vertical track
        });

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 90%',
            scrub: 1,
            onUpdate: (self) => {
              const p = self.progress;

              // Synchronize Journey milestones on mobile
              const jProgress = Math.min(1, Math.max(0, (p - 0.35) / 0.30));
              const activeStep = Math.min(5, Math.max(1, Math.ceil(jProgress * 5)));
              window.dispatchEvent(
                new CustomEvent('wce:journey-step', {
                  detail: { step: activeStep, progress: jProgress },
                })
              );

              if (process.env.NODE_ENV !== 'production') {
                setDebugState({
                  progress: p,
                  milestone: `Mobile Step ${activeStep}`,
                  x: 20,
                  y: 40 + p * (dimensions.height - 80),
                  mode: 'mobile',
                  reducedMotion: false,
                });
              }
            },
          },
        });

        // Simplified vertical descent down the left gutter
        mobileTl.to(
          mobilePlaneEl,
          {
            y: dimensions.height - 60,
            ease: 'none',
          },
          0
        );

        // Subtle micro-sway in the gutter (±3px) for living feel without obstruction
        mobileTl.to(
          mobilePlaneEl,
          {
            x: 3,
            repeat: 12,
            yoyo: true,
            duration: 0.08,
            ease: 'sine.inOut',
          },
          0
        );

        // Progressive reveal of mobile vertical dotted line
        mobileTl.to(
          mobileMaskEl,
          {
            strokeDashoffset: 0,
            ease: 'none',
          },
          0
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, [containerId, dimensions, isDesktop, prefersReduced, desktopPathD]);

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
        aria-hidden="true"
      >
      {/* ================= DESKTOP FLIGHT ROUTE (>= 1024px) ================= */}
      {isDesktop && (
        <>
          {/* Master Route SVG (ill-route canonical path) */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            width={dimensions.width}
            height={dimensions.height}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            fill="none"
            data-asset-id="ill-route"
            data-route-source={isUsingCanonical ? 'canonical-asset' : 'procedural-fallback'}
          >
            <defs>
              {/* Progressive Reveal Mask */}
              <mask id={maskId} maskUnits="userSpaceOnUse">
                <path
                  ref={maskPathRef}
                  d={desktopPathD}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="32"
                  strokeLinecap="round"
                />
              </mask>
            </defs>

            {/* Static Guide Route (Subtle pastel blue tone) */}
            <path
              d={desktopPathD}
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeDasharray="6 10"
              strokeLinecap="round"
              className="opacity-30"
            />

            {/* Active Progressively Revealed Route (Vibrant brand blue/coral trail) */}
            <path
              ref={routePathRef}
              d={desktopPathD}
              fill="none"
              stroke="#1D4ED8"
              strokeWidth="2.5"
              strokeDasharray="6 10"
              strokeLinecap="round"
              mask={prefersReduced ? undefined : `url(#${maskId})`}
              className="opacity-85"
            />
          </svg>

          {/* Understated Parallax Clouds (ill-cloud-1, ill-cloud-2, ill-cloud-3) */}
          <div
            ref={cloud1Ref}
            className="pointer-events-none absolute z-[2] opacity-75"
            style={{
              top: '12%',
              right: '6%',
              filter: 'drop-shadow(0 14px 28px rgba(15, 27, 61, 0.08))',
            }}
          >
            <Illustration id="ill-cloud-1" className="h-auto w-52" />
          </div>

          <div
            ref={cloud2Ref}
            className="pointer-events-none absolute z-[2] opacity-70"
            style={{
              top: '36%',
              left: '4%',
              filter: 'drop-shadow(0 14px 28px rgba(15, 27, 61, 0.08))',
            }}
          >
            <Illustration id="ill-cloud-2" className="h-auto w-56" />
          </div>

          <div
            ref={cloud3Ref}
            className="pointer-events-none absolute z-[2] opacity-75"
            style={{
              top: '68%',
              right: '5%',
              filter: 'drop-shadow(0 14px 28px rgba(15, 27, 61, 0.08))',
            }}
          >
            <Illustration id="ill-cloud-3" className="h-auto w-52" />
          </div>

          {/* Top-Down Paper Plane (ill-plane-top) — Hidden under reduced motion */}
          {!prefersReduced && (
            <div
              ref={planeRef}
              className="pointer-events-none absolute z-[4] -translate-x-1/2 -translate-y-1/2"
              style={{
                filter: 'drop-shadow(0 12px 20px rgba(15, 27, 61, 0.22))',
              }}
            >
              <Illustration
                id="ill-plane-top"
                className="h-20 w-20 md:h-24 md:w-24 object-contain"
                alt="Paper plane traveling through career journey"
              />
            </div>
          )}
        </>
      )}

      {/* ================= MOBILE SIMPLIFIED VERTICAL ROUTE (< 1024px) ================= */}
      {!isDesktop && (
        <>
          {/* Vertical gutter SVG track */}
          <svg
            className="pointer-events-none absolute top-0 bottom-0 left-2.5 sm:left-4 z-[2] h-full w-8"
            width="32"
            height={dimensions.height}
            viewBox={`0 0 32 ${dimensions.height}`}
            fill="none"
          >
            <defs>
              <mask id={`${maskId}-mobile`} maskUnits="userSpaceOnUse">
                <path
                  ref={mobileMaskPathRef}
                  d={mobilePathD}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
              </mask>
            </defs>

            {/* Static background dotted line in left gutter */}
            <path
              d={mobilePathD}
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeDasharray="5 7"
              strokeLinecap="round"
              className="opacity-35"
            />

            {/* Revealed active line */}
            <path
              d={mobilePathD}
              fill="none"
              stroke="#1D4ED8"
              strokeWidth="2.5"
              strokeDasharray="5 7"
              strokeLinecap="round"
              mask={prefersReduced ? undefined : `url(#${maskId}-mobile)`}
              className="opacity-80"
            />
          </svg>

          {/* Small mobile plane in the left gutter */}
          {!prefersReduced && (
            <div
              ref={mobilePlaneRef}
              className="pointer-events-none absolute left-2.5 sm:left-4 z-[4] -translate-x-1/2 -translate-y-1/2"
              style={{
                filter: 'drop-shadow(0 6px 12px rgba(15, 27, 61, 0.18))',
              }}
            >
              <Illustration
                id="ill-plane-top"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                alt="Paper plane mobile journey guide"
              />
            </div>
          )}
        </>
      )}

      {/* Close aria-hidden route container before accessible interactive dev HUD */}
      </div>

      {/* ================= DEVELOPMENT FLIGHT HUD ================= */}
      {process.env.NODE_ENV !== 'production' && (
        <aside
          aria-label="Development Route Monitor"
          data-dev-debugger="true"
          className="pointer-events-auto fixed bottom-5 left-5 z-50 max-w-xs rounded-2xl border border-wce-slate-700/60 bg-wce-navy-900/95 p-3.5 font-mono text-xs text-white shadow-2xl backdrop-blur-md transition-all"
        >
          <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-1.5 font-bold text-wce-coral-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Flight Monitor
            </span>
            <button
              type="button"
              onClick={() => setIsDebuggerCollapsed(!isDebuggerCollapsed)}
              className="cursor-pointer text-[10px] uppercase tracking-wider text-wce-slate-400 hover:text-white"
            >
              {isDebuggerCollapsed ? 'Open' : 'Hide'}
            </button>
          </div>

          {!isDebuggerCollapsed && (
            <div className="space-y-1 text-[11px] leading-tight">
              <div>
                Progress:{' '}
                <span className="font-bold text-wce-coral-300">
                  {(debugState.progress * 100).toFixed(1)}%
                </span>
              </div>
              <div>
                Milestone:{' '}
                <span className="text-sky-300">{debugState.milestone}</span>
              </div>
              <div>
                Coords:{' '}
                <span className="text-emerald-300">
                  ({debugState.x.toFixed(0)}, {debugState.y.toFixed(0)})
                </span>
              </div>
              <div>
                Mode:{' '}
                <span className="text-amber-300 uppercase">{debugState.mode}</span>
              </div>
              <div>
                Route Source:{' '}
                <span className={isUsingCanonical ? 'text-emerald-300 font-bold' : 'text-amber-300'}>
                  {isUsingCanonical ? 'CANONICAL (ill-route)' : 'PROCEDURAL FALLBACK'}
                </span>
              </div>
              <div>
                Reduced Motion:{' '}
                <span
                  className={
                    debugState.reducedMotion ? 'text-rose-400 font-bold' : 'text-emerald-400'
                  }
                >
                  {debugState.reducedMotion ? 'ENABLED' : 'OFF'}
                </span>
              </div>
            </div>
          )}
        </aside>
      )}
    </>
  );
}
