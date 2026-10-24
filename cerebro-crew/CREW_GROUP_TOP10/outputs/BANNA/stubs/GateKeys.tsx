/**
 * BANNA stub — Gate P0 glass key row
 * Spec: ../GateKeys.spec.md
 * Paste onto feat/ds-v1-1. INTERNAL ONLY.
 *
 * Layout slots: phone | tablet | desktop | compact-landscape.
 * Status board 4-col is SWITCHABLE (unset) — this row never assumes 4-col.
 */

import { useEffect, useState, type CSSProperties } from 'react';
import { GlassKey } from './GlassKey';
import {
  SWITCHABLES_UNSET,
  parallaxOffsetPx,
  switchablesToDataAttrs,
  type CerebroSwitchables,
} from './switchables';
import {
  GATE_KEYS_SLOTS,
  gateKeysSlotCssVars,
  resolveLayoutSlot,
  type LayoutSlot,
} from './slots';

export type GlassKeyId =
  | 'projects'
  | 'people'
  | 'files'
  | 'media'
  | 'tasks'
  | (string & {});

export type GlassKeyItem = {
  id: GlassKeyId;
  label: string;
  labelAr?: string;
  disabled?: boolean;
};

export type GateKeysProps = {
  keys?: GlassKeyItem[];
  selectedId?: GlassKeyId | null;
  phase?: 'boot' | 'placeholder' | 'ready';
  onSelect?: (id: GlassKeyId) => void;
  slot?: LayoutSlot;
  /** Default SWITCHABLES_UNSET — do not pick Tarek calls */
  switchables?: Partial<CerebroSwitchables>;
  className?: string;
  style?: CSSProperties;
};

/** Gate P0 minimal station set — Katib placeholders */
export const GATE_P0_KEYS: GlassKeyItem[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'people', label: 'People' },
  { id: 'files', label: 'Files' },
  { id: 'media', label: 'Media' },
  { id: 'tasks', label: 'Tasks' },
];

function useResolvedSlot(forced?: LayoutSlot): LayoutSlot {
  const [slot, setSlot] = useState<LayoutSlot>(
    () =>
      forced ??
      (typeof window !== 'undefined'
        ? resolveLayoutSlot(window.innerWidth, window.innerHeight)
        : 'phone'),
  );

  useEffect(() => {
    if (forced) {
      setSlot(forced);
      return;
    }
    const update = () =>
      setSlot(resolveLayoutSlot(window.innerWidth, window.innerHeight));
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, [forced]);

  return slot;
}

export function GateKeys({
  keys = GATE_P0_KEYS,
  selectedId = null,
  phase = 'ready',
  onSelect,
  slot: slotProp,
  switchables = SWITCHABLES_UNSET,
  className,
  style,
}: GateKeysProps) {
  const slot = useResolvedSlot(slotProp);
  const metrics = GATE_KEYS_SLOTS[slot];

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const maxParallax = parallaxOffsetPx(switchables.parallax, Boolean(reduced));
  const dataAttrs = switchablesToDataAttrs(switchables);
  const cssVars = gateKeysSlotCssVars(slot);

  return (
    <nav
      className={['cbr-gate-keys', className].filter(Boolean).join(' ')}
      aria-label="Gate stations"
      data-component="GateKeys"
      data-gate="P0"
      data-phase={phase}
      data-slot={slot}
      data-keys-per-row={String(metrics.keysPerRowHint)}
      data-obsidian-tiles="NOT_FINAL"
      {...dataAttrs}
      style={{
        ...cssVars,
        display: 'flex',
        flexWrap: metrics.direction === 'row-wrap' ? 'wrap' : 'nowrap',
        gap: metrics.gap,
        padding: metrics.pad,
        marginTop: metrics.clearBrandHeader,
        maxWidth: '100%',
        ['--gate-parallax-max' as string]: `${maxParallax}px`,
        ...style,
      }}
    >
      {keys.map((k) => (
        <GlassKey
          key={k.id}
          id={k.id}
          label={k.label}
          labelAr={k.labelAr}
          selected={selectedId === k.id}
          disabled={k.disabled}
          phase={phase}
          shadowTone={switchables.shadowTone ?? 'unset'}
          minWidth={metrics.keyMinWidth}
          minHeight={metrics.keyMinHeight}
          fontSize={metrics.labelFontSize}
          onClick={() => onSelect?.(k.id)}
        />
      ))}
    </nav>
  );
}

export default GateKeys;
