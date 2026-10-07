import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

/**
 * Central GSAP registration.
 * Ensures GSAP, ScrollTrigger, and MotionPathPlugin are registered once globally on the client.
 */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export { gsap, ScrollTrigger, MotionPathPlugin };

