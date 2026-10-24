/**
 * BANNA stub — PersistentBrandHeader
 * Spec: ../PersistentBrandHeader.spec.md
 * Paste onto feat/ds-v1-1 (njr39/Cerebro-core). INTERNAL ONLY.
 *
 * INVARIANTS:
 * - One shell instance; never remount; never child of sphere / WebGL.
 * - Basmala above CEREBRO wordmark slot.
 * - Wordmark BLOCKED (white-on-white) — placeholder slot only.
 * - Loader: 0–1.8s boot; 1.8–12s placeholder (no invented motion).
 * - Layout slots: phone | tablet | desktop | compact-landscape.
 * - Switchables remain unset unless host passes them (do not pick).
 */

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  SWITCHABLES_UNSET,
  parallaxOffsetPx,
  switchablesToDataAttrs,
  type CerebroSwitchables,
} from './switchables';
import {
  BRAND_HEADER_SLOTS,
  brandHeaderSlotCssVars,
  resolveLayoutSlot,
  type LayoutSlot,
} from './slots';

export type BrandHeaderPhase = 'boot' | 'placeholder' | 'ready';

export type PersistentBrandHeaderProps = {
  phase?: BrandHeaderPhase;
  /** Path to Basmala PNG 468×76 — NASAQ pass phone/tablet; desktop retina HOLD */
  basmalaSrc?: string;
  /** Force a slot (tests). Default: resolve from viewport. */
  slot?: LayoutSlot;
  dock?: 'top-start' | 'top-center';
  /** Default SWITCHABLES_UNSET — do not pick Tarek calls */
  switchables?: Partial<CerebroSwitchables>;
  /** Internal builds may show QA micro label; Gate builds prefer omit (Katib) */
  showInternalWordmarkQa?: boolean;
  className?: string;
  style?: CSSProperties;
};

const BASMALA_INTRINSIC = { width: 468, height: 76 } as const;

let shellMountCount = 0;

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

export function PersistentBrandHeader({
  phase = 'ready',
  basmalaSrc,
  slot: slotProp,
  dock,
  switchables = SWITCHABLES_UNSET,
  showInternalWordmarkQa = false,
  className,
  style,
}: PersistentBrandHeaderProps) {
  const mountRef = useRef(false);
  const slot = useResolvedSlot(slotProp);
  const metrics = BRAND_HEADER_SLOTS[slot];
  const effectiveDock = dock ?? metrics.dockDefault;

  useEffect(() => {
    if (mountRef.current) return;
    mountRef.current = true;
    shellMountCount += 1;
    if (shellMountCount > 1 && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        '[BANNA] PersistentBrandHeader mounted more than once — violates H1/H2. Keep a single shell instance.',
      );
    }
  }, []);

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const maxParallax = parallaxOffsetPx(switchables.parallax, Boolean(reduced));
  const dataAttrs = switchablesToDataAttrs(switchables);
  const cssVars = brandHeaderSlotCssVars(slot);

  return (
    <header
      className={['cbr-brand-header', className].filter(Boolean).join(' ')}
      aria-label="Cerebro brand"
      data-component="PersistentBrandHeader"
      data-phase={phase}
      data-slot={slot}
      data-dock={effectiveDock}
      data-basmala-policy={metrics.basmalaPolicy}
      data-wordmark="blocked"
      data-obsidian-tiles="NOT_FINAL"
      {...dataAttrs}
      style={{
        ...cssVars,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: effectiveDock === 'top-start' ? 'flex-start' : 'center',
        padding:
          effectiveDock === 'top-start'
            ? `${metrics.padTop}px 0 0 ${metrics.padInline}px`
            : `${metrics.padTop}px ${metrics.padInline}px 0`,
        gap: metrics.stackGap,
        pointerEvents: 'none',
        // Sphere must not inherit — identity transform unless switchable parallax
        transform:
          maxParallax > 0
            ? undefined /* wire pointer parallax in host if desired */
            : 'none',
        ...style,
      }}
    >
      {/* Layer: Basmala — above wordmark */}
      <div
        className="cbr-brand-header__basmala"
        dir="rtl"
        lang="ar"
        data-asset={basmalaSrc ? 'basmala' : 'basmala-pending'}
        data-basmala-policy={metrics.basmalaPolicy}
        style={{
          width: Math.min(BASMALA_INTRINSIC.width, metrics.basmalaMaxWidth),
          maxWidth: '72vw',
          aspectRatio: `${BASMALA_INTRINSIC.width} / ${BASMALA_INTRINSIC.height}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {basmalaSrc ? (
          <img
            src={basmalaSrc}
            width={BASMALA_INTRINSIC.width}
            height={BASMALA_INTRINSIC.height}
            alt="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
            draggable={false}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        ) : (
          <span
            aria-hidden
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              border: '1px dashed rgba(255,255,255,0.24)',
              borderRadius: 4,
            }}
          />
        )}
      </div>

      {/* Layer: CEREBRO wordmark — BLOCKED placeholder slot only */}
      <div
        className="cbr-brand-header__wordmark-slot"
        role="img"
        aria-label="CEREBRO wordmark pending — blocked white-on-white"
        data-qa="wordmark-slot-blocked"
        style={{
          width: metrics.wordmarkWidth,
          height: metrics.wordmarkHeight,
          maxWidth: '70vw',
          boxSizing: 'border-box',
          border: '1px dashed rgba(255,255,255,0.28)',
          borderRadius: 6,
          background: 'color-mix(in srgb, #142632 88%, transparent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#BDCBD3',
          fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
          fontSize: 10,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        {showInternalWordmarkQa ? '[Cerebro wordmark pending]' : null}
      </div>
    </header>
  );
}

export default PersistentBrandHeader;
