import { TBC, hasValue } from '@/lib/tbc';
import type { Stat } from './types';

export const stats: Stat[] = [
  {
    key: 'years',
    label: 'Years of experience',
    value: 15,
    suffix: '+',
    status: 'live',
  },
  {
    key: 'placements',
    label: 'International placements',
    value: TBC,
    suffix: '+',
    status: 'proposed',
  },
  {
    key: 'admissions',
    label: 'University admission offers',
    value: TBC,
    suffix: '+',
    status: 'proposed',
  },
  {
    key: 'countries',
    label: 'Countries',
    value: TBC,
    suffix: '+',
    status: 'proposed',
  },
];

/**
 * Returns only stats that have a verified numeric value.
 * In production, stat tiles with TBC values hide themselves.
 */
export function getPublishedStats(): Stat[] {
  return stats.filter((stat) => hasValue(stat.value));
}
