/**
 * BANNA stub — Tarek open calls (DS v1.1).
 * Leave switchable; do NOT pick a side in product code.
 * Paste onto feat/ds-v1-1 when njr39/Cerebro-core is reachable.
 */

export type ParallaxSwitch = '6px' | 'none' | 'unset';
export type StatusBoardColsSwitch = '4' | 'not' | 'unset';
/** Tone id TBD by Tarek — never invent a named tone as the chosen default. */
export type ShadowToneSwitch = 'unset' | (string & {});

export type CerebroSwitchables = {
  parallax: ParallaxSwitch;
  statusBoardCols: StatusBoardColsSwitch;
  shadowTone: ShadowToneSwitch;
};

/** Safe unset defaults — not a design decision. */
export const SWITCHABLES_UNSET: CerebroSwitchables = {
  parallax: 'unset',
  statusBoardCols: 'unset',
  shadowTone: 'unset',
};

export function switchablesToDataAttrs(
  s: Partial<CerebroSwitchables> = SWITCHABLES_UNSET,
): Record<string, string> {
  return {
    'data-parallax': s.parallax ?? 'unset',
    'data-status-board-cols': s.statusBoardCols ?? 'unset',
    'data-shadow-tone': s.shadowTone ?? 'unset',
  };
}

/** Parallax translate only when explicitly 6px and motion allowed. */
export function parallaxOffsetPx(
  parallax: ParallaxSwitch | undefined,
  prefersReducedMotion: boolean,
): number {
  if (prefersReducedMotion) return 0;
  if (parallax === '6px') return 6;
  return 0;
}
