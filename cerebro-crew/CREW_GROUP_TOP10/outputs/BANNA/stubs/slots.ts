/**
 * BANNA stub — layout slots for PersistentBrandHeader + Gate P0
 * Spec: ../PersistentBrandHeader.spec.md §13 · ../GateKeys.spec.md §9
 * Paste onto feat/ds-v1-1 when njr39/Cerebro-core is reachable.
 *
 * Four named slots only. Switchables stay unset elsewhere (switchables.ts).
 * Desktop Basmala retina remains HOLD — desktop slot reserves space, does not ship @2x.
 */

export type LayoutSlot =
  | 'phone'
  | 'tablet'
  | 'desktop'
  | 'compact-landscape';

/** Match media queries — host may use container queries instead; keep names stable. */
export const SLOT_MEDIA: Record<LayoutSlot, string> = {
  phone: '(max-width: 429px) and (orientation: portrait), (max-width: 429px) and (min-height: 501px)',
  tablet: '(min-width: 430px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  /** Phone / short-height landscape — header must compress, not remount */
  'compact-landscape':
    '(orientation: landscape) and (max-height: 500px)',
};

export type BrandHeaderSlotMetrics = {
  /** Outer header padding (top, inline-start for top-start dock, else equal) */
  padTop: number;
  padInline: number;
  stackGap: number;
  /** Display width cap for Basmala cell (intrinsic asset remains 468×76) */
  basmalaMaxWidth: number;
  /** Wordmark placeholder logical box — blueprint 176×44; may scale down */
  wordmarkWidth: number;
  wordmarkHeight: number;
  dockDefault: 'top-start' | 'top-center';
  /**
   * Basmala asset policy for this slot.
   * phone/tablet → NASAQ pass target; desktop → HOLD (no @2x invent);
   * compact-landscape → same PNG, scaled, never remount.
   */
  basmalaPolicy: 'nasaq-pass' | 'desktop-retina-HOLD' | 'scale-only';
};

export type GateKeysSlotMetrics = {
  gap: number;
  pad: number;
  /** Flex direction for the key row */
  direction: 'row' | 'row-wrap';
  /** Max keys per visual row hint (layout only — not a Tarek 4-col pick) */
  keysPerRowHint: number | 'wrap';
  /** Clearance below brand header safe zone (px) */
  clearBrandHeader: number;
  keyMinWidth: number;
  keyMinHeight: number;
  labelFontSize: number;
};

export const BRAND_HEADER_SLOTS: Record<LayoutSlot, BrandHeaderSlotMetrics> = {
  phone: {
    padTop: 16,
    padInline: 16,
    stackGap: 6,
    basmalaMaxWidth: 220,
    wordmarkWidth: 148,
    wordmarkHeight: 36,
    dockDefault: 'top-center',
    basmalaPolicy: 'nasaq-pass',
  },
  tablet: {
    padTop: 24,
    padInline: 24,
    stackGap: 8,
    basmalaMaxWidth: 280,
    wordmarkWidth: 176,
    wordmarkHeight: 44,
    dockDefault: 'top-center',
    basmalaPolicy: 'nasaq-pass',
  },
  desktop: {
    padTop: 40,
    padInline: 40,
    stackGap: 8,
    basmalaMaxWidth: 320,
    wordmarkWidth: 176,
    wordmarkHeight: 44,
    dockDefault: 'top-start',
    /** HOLD — reserve slot; do not invent @2x Basmala */
    basmalaPolicy: 'desktop-retina-HOLD',
  },
  'compact-landscape': {
    padTop: 8,
    padInline: 12,
    stackGap: 4,
    basmalaMaxWidth: 160,
    wordmarkWidth: 120,
    wordmarkHeight: 30,
    dockDefault: 'top-start',
    basmalaPolicy: 'scale-only',
  },
};

export const GATE_KEYS_SLOTS: Record<LayoutSlot, GateKeysSlotMetrics> = {
  phone: {
    gap: 8,
    pad: 12,
    direction: 'row-wrap',
    keysPerRowHint: 'wrap',
    clearBrandHeader: 96,
    keyMinWidth: 44,
    keyMinHeight: 44,
    labelFontSize: 13,
  },
  tablet: {
    gap: 10,
    pad: 14,
    direction: 'row',
    keysPerRowHint: 5,
    clearBrandHeader: 120,
    keyMinWidth: 44,
    keyMinHeight: 44,
    labelFontSize: 14,
  },
  desktop: {
    gap: 12,
    pad: 16,
    direction: 'row',
    keysPerRowHint: 5,
    clearBrandHeader: 140,
    keyMinWidth: 48,
    keyMinHeight: 44,
    labelFontSize: 14,
  },
  'compact-landscape': {
    gap: 6,
    pad: 8,
    direction: 'row',
    keysPerRowHint: 5,
    clearBrandHeader: 56,
    keyMinWidth: 44,
    keyMinHeight: 40,
    labelFontSize: 12,
  },
};

/**
 * Resolve active slot. Compact-landscape wins over phone/tablet when short+landscape.
 * Does not read or set Tarek switchables.
 */
export function resolveLayoutSlot(
  width: number,
  height: number,
  orientation: 'portrait' | 'landscape' = height >= width ? 'portrait' : 'landscape',
): LayoutSlot {
  if (orientation === 'landscape' && height <= 500) {
    return 'compact-landscape';
  }
  if (width >= 1024) return 'desktop';
  if (width >= 430) return 'tablet';
  return 'phone';
}

/** CSS custom properties emitted by stubs — host theme may override. */
export function brandHeaderSlotCssVars(
  slot: LayoutSlot,
): Record<string, string> {
  const m = BRAND_HEADER_SLOTS[slot];
  return {
    '--cbr-slot': slot,
    '--cbr-brand-pad-top': `${m.padTop}px`,
    '--cbr-brand-pad-inline': `${m.padInline}px`,
    '--cbr-brand-gap': `${m.stackGap}px`,
    '--cbr-basmala-max': `${m.basmalaMaxWidth}px`,
    '--cbr-wordmark-w': `${m.wordmarkWidth}px`,
    '--cbr-wordmark-h': `${m.wordmarkHeight}px`,
  };
}

export function gateKeysSlotCssVars(slot: LayoutSlot): Record<string, string> {
  const m = GATE_KEYS_SLOTS[slot];
  return {
    '--cbr-slot': slot,
    '--cbr-gate-gap': `${m.gap}px`,
    '--cbr-gate-pad': `${m.pad}px`,
    '--cbr-gate-clear-header': `${m.clearBrandHeader}px`,
    '--cbr-key-min-w': `${m.keyMinWidth}px`,
    '--cbr-key-min-h': `${m.keyMinHeight}px`,
    '--cbr-key-label-size': `${m.labelFontSize}px`,
  };
}
