import { TBC, filterPermitted, hasValue } from '@/lib/tbc';
import type { Partner } from './types';

export const partners: Partner[] = [
  {
    name: 'Eastin Penang',
    logo: TBC,
    type: 'hotel',
    permission: false,
  },
  {
    name: 'DY Patil',
    logo: TBC,
    type: 'institute',
    permission: false,
  },
  {
    name: 'Bharti Vidyapeeth Institute',
    logo: TBC,
    type: 'institute',
    permission: false,
  },
];

/**
 * Returns only partners with approved permission and available logo.
 * If none qualify, returns empty array so trust strip component hides itself.
 */
export function getApprovedPartners(): Partner[] {
  return filterPermitted(partners).filter((p) => hasValue(p.logo));
}
