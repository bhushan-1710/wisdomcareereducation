'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface CountUpProps {
  end: number;
  start?: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

export function CountUp({
  end,
  start = 0,
  suffix = '',
  durationMs = 1600,
  className = '',
}: CountUpProps) {
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState<number>(prefersReduced ? end : start);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    if (prefersReduced) {
      return;
    }

    const element = elementRef.current;
    if (!element || hasAnimatedRef.current) return;

    let rafId: number | null = null;
    let startTime: number | null = null;

    const startAnimation = () => {
      hasAnimatedRef.current = true;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / durationMs, 1);
        // easeOutExpo curve: 1 - Math.pow(2, -10 * progress)
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.round(start + (end - start) * easedProgress);

        setCount(currentCount);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.4, // 40% visible per design.md & requirements
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, start, durationMs, prefersReduced]);

  if (prefersReduced) {
    return (
      <span className={`tabular-nums ${className}`}>
        {end}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {count}
      {suffix}
    </span>
  );
}
