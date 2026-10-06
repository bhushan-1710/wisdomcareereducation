'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  rotateX?: boolean;
  distance?: number;
}

export function Reveal({
  children,
  className = '',
  delayMs = 0,
  durationMs = 700,
  rotateX = false,
  distance = 24,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReduced]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const transformStyle = isVisible
    ? 'translate3d(0, 0, 0) rotateX(0deg)'
    : `translate3d(0, ${distance}px, 0) ${rotateX ? 'rotateX(8deg)' : ''}`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
