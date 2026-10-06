import { TBC, filterPermitted } from '@/lib/tbc';
import type { Testimonial } from './types';

export const testimonialsHeading = {
  eyebrow: 'Feedback that inspires us',
  heading: 'Stories from our students',
};

export const testimonials: Testimonial[] = [
  {
    id: 'sathya-naidu',
    name: 'Sathya Naidu',
    context: "Thanked the WCE team for visa help, naming Deepti ma'am, Sachin sir and Priyanka ma'am",
    destination: TBC,
    quote: TBC,
    permission: false,
  },
  {
    id: 'avinash-chaudary',
    name: 'Avinash Chaudary',
    context: 'DY Patil student; internship arranged at a 5-star hotel, Eastin Penang',
    destination: 'Malaysia',
    quote: TBC,
    permission: false,
  },
  {
    id: 'kshitija-adsul',
    name: 'Kshitija Adsul',
    context: 'France admission process, praised professionalism and patience',
    destination: 'France',
    quote: TBC,
    permission: false,
  },
  {
    id: 'aishwarya-more',
    name: 'Aishwarya More',
    context: 'Bharti Vidyapeeth Institute; text not on the page',
    destination: TBC,
    quote: TBC,
    permission: false,
  },
  {
    id: 'chef-vishnu-manohar',
    name: 'Chef Vishnu Manohar',
    context: 'Congratulatory message from a celebrity gourmet chef',
    destination: TBC,
    quote: TBC,
    permission: false,
    isFeaturedChef: true,
  },
];

/**
 * Returns only testimonials that have explicit client permission to publish.
 * Guaranteed empty until signed releases/approvals are received.
 */
export function getApprovedTestimonials(): Testimonial[] {
  return filterPermitted(testimonials);
}
