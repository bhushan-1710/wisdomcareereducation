export type Tbc = { tbc: true };
export type Maybe<T> = T | Tbc;

/**
 * Checks if a value is marked as TBC or empty.
 */
export function isTbc<T>(value: Maybe<T> | undefined | null): boolean {
  if (value === undefined || value === null || value === '') return true;
  if (typeof value === 'object' && value !== null && 'tbc' in value && (value as Tbc).tbc === true) {
    return true;
  }
  return false;
}

/**
 * Safe value accessor:
 * - If value is available and not TBC, returns it.
 * - In development, returns fallback or indicates TBC for layout testing.
 * - In production, returns null so components can safely hide or disable missing items.
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
