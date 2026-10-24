/**
 * BANNA stub — single Gate P0 glass key
 * Spec: ../GateKeys.spec.md
 * Paste onto feat/ds-v1-1. Do not touch WebGL / voice / auth / deps.
 */

import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type GlassKeyVisualState =
  | 'default'
  | 'selected'
  | 'disabled'
  | 'error';

export type GlassKeyProps = {
  id: string;
  label: string;
  labelAr?: string;
  icon?: ReactNode;
  selected?: boolean;
  error?: boolean;
  phase?: 'boot' | 'placeholder' | 'ready';
  /** Tarek open — leave unset; do not invent tone */
  shadowTone?: 'unset' | string;
  /** From layout slot metrics */
  minWidth?: number;
  minHeight?: number;
  fontSize?: number;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id'>;

export function GlassKey({
  id,
  label,
  labelAr,
  icon,
  selected = false,
  error = false,
  phase = 'ready',
  shadowTone = 'unset',
  minWidth = 44,
  minHeight = 44,
  fontSize = 13,
  disabled,
  className,
  style,
  ...rest
}: GlassKeyProps) {
  const isBootOrPlaceholder = phase === 'boot' || phase === 'placeholder';
  const isDisabled = Boolean(disabled) || isBootOrPlaceholder;

  const state: GlassKeyVisualState = error
    ? 'error'
    : isDisabled
      ? 'disabled'
      : selected
        ? 'selected'
        : 'default';

  const mergedStyle: CSSProperties = {
    minWidth,
    minHeight,
    padding: '10px 14px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    boxSizing: 'border-box',
    borderRadius: 'var(--key-radius, 12px)' /* PROVISIONAL — radius open call */,
    border: error
      ? '1px solid #FF5666'
      : selected
        ? '1px solid #FFF1D4'
        : '1px solid rgba(255,255,255,0.40)',
    background: 'color-mix(in srgb, #142632 88%, transparent)',
    color: '#F2F6F8',
    fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
    fontSize,
    fontWeight: 500,
    letterSpacing: '0.02em',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: state === 'disabled' ? 0.45 : 1,
    // Shadow tone: structural only when unset — do NOT pick Tarek's tone
    boxShadow:
      shadowTone === 'unset'
        ? '0 1px 0 rgba(0,0,0,0.25)'
        : `var(--shadow-tone-${shadowTone}, 0 1px 0 rgba(0,0,0,0.25))`,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    transition:
      'opacity 160ms ease-out, border-color 160ms ease-out, transform 120ms ease-out',
    ...style,
  };

  return (
    <button
      type="button"
      data-glass-key={id}
      data-state={state}
      data-phase={phase}
      data-shadow-tone={shadowTone}
      data-obsidian-tiles="NOT_FINAL"
      aria-pressed={selected || undefined}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      className={['cbr-glass-key', className].filter(Boolean).join(' ')}
      style={mergedStyle}
      {...rest}
    >
      {icon ? (
        <span aria-hidden className="cbr-glass-key__icon" style={{ display: 'inline-flex' }}>
          {icon}
        </span>
      ) : null}
      <span className="cbr-glass-key__label">{label}</span>
      {labelAr ? (
        <span className="cbr-glass-key__label-ar" dir="rtl" lang="ar" style={{ opacity: 0.85 }}>
          {labelAr}
        </span>
      ) : null}
    </button>
  );
}

export default GlassKey;
