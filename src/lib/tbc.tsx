import React from 'react';

export type Tbc = { tbc: true };
export type Maybe<T> = T | Tbc;

/**
 * Standard singleton marker for missing/to-be-confirmed content.
 */
export const TBC: Tbc = { tbc: true };

/**
 * Checks whether a given value is marked as TBC, null, or undefined.
 */
export function isTbc<T>(value: Maybe<T> | undefined | null): value is Tbc | undefined | null {
  if (value === undefined || value === null) return true;
  if (typeof value === 'object' && value !== null && 'tbc' in value && (value as Tbc).tbc === true) {
    return true;
  }
  return false;
}

/**
 * Type guard asserting that a value is available (not TBC, undefined, or null).
 */
export function hasValue<T>(value: Maybe<T> | undefined | null): value is T {
  return !isTbc(value);
}

export interface TbcBadgeProps {
  label?: string;
  context?: string;
  className?: string;
}

/**
 * Development-only visual badge for TBC items.
 * Guaranteed to return null in production so zero markers leak into shipped bundles.
 */
export function TbcBadge({ label = 'TBC', context, className = '' }: TbcBadgeProps) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <span
      className={`tbc-badge inline-flex items-center gap-1 rounded border border-amber-400/80 bg-amber-100 px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 ${className}`}
      title={context ? `To Be Confirmed: ${context}` : 'To Be Confirmed — Client content required'}
    >
      <span>{label}</span>
      {context && <span className="font-semibold lowercase text-amber-950">({context})</span>}
    </span>
  );
}

/**
 * Renders a value or gracefully falls back.
 * - If value is available, returns it directly or passes it through `renderFn`.
 * - If value is TBC:
 *     - In development: renders a visible TbcBadge.
 *     - In production: returns null, allowing parent components to conditionally hide themselves.
 */
export function show<T>(
  value: Maybe<T> | undefined | null,
  renderFn?: (val: T) => React.ReactNode,
  context?: string
): React.ReactNode | null {
  if (hasValue(value)) {
    if (renderFn) {
      return renderFn(value);
    }
    return value as unknown as React.ReactNode;
  }

  if (process.env.NODE_ENV !== 'production') {
    return <TbcBadge context={context} />;
  }

  return null;
}

/**
 * Filters an array to include only items that are not TBC.
 */
export function filterTbc<T>(items: Maybe<T>[]): T[] {
  return items.filter(hasValue);
}

/**
 * Filters an array of permission-gated items (e.g. testimonials, partners)
 * returning only items where `permission === true`.
 */
export function filterPermitted<T extends { permission: boolean }>(items: T[]): T[] {
  return items.filter((item) => item.permission === true);
}

/**
 * Resolves a value for plain string/number logic without JSX:
 * - Returns the real value if available.
 * - In development, can optionally return a fallback string/value if provided.
 * - In production, strictly returns null.
 */
export function resolveValue<T>(value: Maybe<T> | undefined | null, fallbackDev?: T): T | null {
  if (isTbc(value)) {
    if (process.env.NODE_ENV !== 'production' && fallbackDev !== undefined) {
      return fallbackDev;
    }
    return null;
  }
  return value as T;
}
