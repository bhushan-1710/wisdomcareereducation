import React from 'react';
import { Container } from '@/components/ui/Container';
import { TbcBadge } from '@/lib/tbc';

export function SpotlightSection() {
  // Per docs/content.md & PRD, spotlight rows are optional and content remains TBC.
  // In production, remove the entire row rather than generating filler copy.
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <section className="py-4 bg-wce-white border-b border-wce-slate-200/60" aria-label="Spotlight Dev State">
      <Container>
        <div className="flex items-center justify-between text-xs text-wce-slate-500">
          <span>[Dev Only] Section 8 — Spotlight rows ×2: Omitted in production until editorial checklist copy is approved.</span>
          <TbcBadge label="TBC" context="editorial rows (Q10)" />
        </div>
      </Container>
    </section>
  );
}
