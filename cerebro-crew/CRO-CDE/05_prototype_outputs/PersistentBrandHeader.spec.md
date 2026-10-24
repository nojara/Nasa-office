# PersistentBrandHeader — build-ready spec

**Agent:** BANNA (بَنّاء) · `d424a6d1-68f8-4004-a115-e4edf6dbb7ba`  
**Pack:** AGENT_ROSTER_SPEC_PACK v1.5 · DS v1.1 · Gate P0  
**Target branch:** `feat/ds-v1-1` (njr39/Cerebro-core) — paste later; repo unreachable from this VM  
**Status:** INTERNAL ONLY · build-ready stub · **slots refined** · not design-gate signed  
**Date:** 2026-10-21 Cairo  
**Rev:** v1.1 — phone / tablet / desktop / compact-landscape slot metrics  
**Source brief:** Branding brief v1.0.0 white + crew memory + Rasma blueprint v0.2 logo/Bismillah slots

---

## 1. Purpose

One persistent brand chrome instance that sits **outside** the sphere / WebGL scene and **above** all rotating content. It shows Basmala over the CEREBRO wordmark slot and must survive route changes, sphere spins, loader phases, and panel open/close without remounting.

## 2. Hard invariants (do not violate)

| # | Rule |
|---|------|
| H1 | **Exactly one** `PersistentBrandHeader` in the app shell. Mount once at shell root. |
| H2 | **Never remounts.** No key that changes on route, station, or sphere frame. |
| H3 | **Never spins with the sphere.** Not a child of the WebGL / R3F canvas / orbit group. CSS `transform` on the sphere must not inherit. |
| H4 | **Stack order:** Basmala (top) → CEREBRO wordmark slot (below). Vertical stack, centered or top-safe as layout token. |
| H5 | **CEREBRO wordmark is BLOCKED** (white-on-white). Render **placeholder slot only** — no wordmark asset, no invented lettering, no temporary type-as-logo. |
| H6 | Do **not** touch voice, sound, auth, Google, gesture, WebGL renderer, or dependencies. |
| H7 | Obsidian tile surfaces are **NOT final** — do not lock materials to current tile test. |
| H8 | Leave Tarek open calls **switchable** (do not pick): parallax `6px \| none`, status board `4-col \| not`, shadow tone. |

## 3. Anatomy

```
┌─────────────────────────────────────────┐
│  shell (fixed / absolute, pointer-pass) │
│  ┌───────────────────────────────────┐  │
│  │  [Basmala]  PNG 468×76 intrinsic  │  │
│  │  dir=rtl · .ar                    │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  [WORDMARK SLOT]  placeholder     │  │
│  │  176×44 logical · labelled blocked│  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### 3.1 Basmala

| Prop | Value |
|------|--------|
| Asset | Basmala PNG **468×76** (flat white logos rule) |
| NASAQ | Pass phone / tablet |
| Desktop retina | **HOLD** — do not ship @2x desktop until NASAQ clears |
| Placement | Above wordmark slot |
| Markup | `dir="rtl"` on the Basmala cell; keep Arabic intact |
| Motion | None tied to sphere rotation. Optional opacity fade on boot only (see loader). |
| Fallback | If asset missing: empty reserved box with `aria-hidden` and labelled `data-asset="basmala-pending"` — never invent calligraphy |

### 3.2 CEREBRO wordmark slot (BLOCKED)

| Prop | Value |
|------|--------|
| Logical size | **176×44** (blueprint logo slot) |
| Offset (portrait home ref) | ~40 px from top-left of frame when header is corner-docked; shell may centre on Gate — keep token `header.dock: 'top-start' \| 'top-center'` |
| Content | Placeholder only: `data-wordmark="blocked"` + visually quiet empty glass pocket OR dashed inset — **no** CEREBRO glyph |
| Label (a11y / QA) | `aria-label="CEREBRO wordmark pending — blocked white-on-white"` |
| Copy in slot | Optional micro label for internal builds only: `[Cerebro wordmark pending]` — Katib may replace; not client-facing |

## 4. Mount contract

```tsx
// AppShell.tsx — once
<div id="cerebro-shell" data-shell="v1.1">
  <PersistentBrandHeader />   {/* first paint chrome; never keyed by route */}
  <SphereScene />             {/* WebGL — do not edit */}
  <GateChrome />              {/* glass keys etc. */}
</div>
```

- Parent: `#cerebro-shell` (or existing shell root on feat/ds-v1-1).
- CSS: `position: fixed` (or sticky within shell overlay), `z-index` above canvas overlays but below modal confirmations; `pointer-events: none` on the wrapper, `pointer-events: auto` only if a future interactive mark is approved (Gate P0: none).
- React: no `key={route}`, no conditional unmount on loader end, no Suspense boundary that remounts this node.
- If React Strict Mode double-invokes effects, identity of the DOM node must remain one; use a module-level mount guard in stub if needed.

## 5. Loader coupling (timeline owned by MADAR / Tarek)

| Window | Behaviour |
|--------|-----------|
| **0 – 1.8 s** | Only authorized loader motion (MADAR / Tarek). Header may fade in within this window. |
| **1.8 – 12 s** | **PLACEHOLDER** only — static hold / labelled wait. No invented motion loop. |
| After ready | Header stays; never remounts on ready→idle. |

BANNA does not implement sphere/loader WebGL. Header exposes `phase: 'boot' \| 'placeholder' \| 'ready'` prop driven by existing boot store — stub reads it, does not invent timing.

## 6. Tokens (consume D0; do not freeze tests)

Use NASAQ D0 / Cerebro chrome tokens when present. Provisional refs (proposed, not frozen):

| Token | Provisional | Note |
|-------|-------------|------|
| `--canvas` | `#101D27` | Blueprint chrome |
| `--object-shade` | `#0A131A` | **TEST — not frozen** |
| `--glass-tint` | `#142632` @ ~88% | Frosted glass |
| `--text-primary` | `#F2F6F8` | |
| `--logo-flat` | `#FFFFFF` | Flat white logos |
| `--focus` | `#65ACFF` | |

Logos / Basmala: **flat white**, not volcanic glass fill. Volcanic glass / obsidian applies to 3D materials elsewhere (NOT final for tiles).

## 7. Switchables (wire, do not pick)

Expose on shell / CSS vars; default leave unset or `unset` so Tarek can flip:

```ts
type Switchables = {
  parallax: '6px' | 'none' | 'unset';
  statusBoardCols: '4' | 'not' | 'unset';
  shadowTone: 'unset' | string; // tone id TBD — do not invent palette
};
```

`PersistentBrandHeader` must **not** apply parallax unless `parallax === '6px'` AND `prefers-reduced-motion: no-preference`. When `none` or reduced-motion: zero translate.

## 8. States

| State | Visual |
|-------|--------|
| `boot` (0–1.8s) | Opacity ramp per MADAR tokens if supplied; else static visible |
| `placeholder` (1.8–12s) | Fully visible chrome; no extra animation |
| `ready` | Steady |
| `asset-missing` | Reserved empty boxes; QA attribute `data-qa="brand-header-assets-pending"` |
| `reduced-motion` | No parallax; opacity-only transitions ≤200 ms |

## 9. A11y

- Landmark: `<header aria-label="Cerebro brand">`
- Basmala `alt=""` decorative if wordmark slot carries the product name later; until then `alt="بسم الله الرحمن الرحيم"` when asset present
- Contrast: white mark on canvas ≥ 4.5:1 for any visible text in slot
- `prefers-reduced-motion` respected

## 10. Out of scope

- WebGL / sphere lighting / obsidian tile final
- Wordmark design (BLOCKED)
- Voice widget, auth, Google, gesture thresholds
- Merging, PR, deploy, new branches
- Desktop retina Basmala (HOLD NASAQ)

## 11. Acceptance (paste onto feat/ds-v1-1)

1. React DevTools: one `PersistentBrandHeader` instance across route + sphere spin.
2. Sphere rotate 360°: header DOM transform matrix stays identity (or only intentional switchable parallax).
3. Remount stress: navigate stations 20× — `useEffect` mount count = 1 for header.
4. Wordmark slot empty / pending label only — no CEREBRO bitmap.
5. Basmala above slot; RTL cell present.
6. Loader clock: no custom motion after 1.8 s.
7. Switchables readable from CSS vars / data attributes without choosing defaults for Tarek.

## 12. Paste path (when repo available)

Suggested (adjust to real tree on feat/ds-v1-1):

```
src/components/cerebro/chrome/PersistentBrandHeader.tsx
src/components/cerebro/chrome/PersistentBrandHeader.module.css
src/components/cerebro/chrome/switchables.ts
src/components/cerebro/chrome/slots.ts
```

Stub files in this folder: `stubs/PersistentBrandHeader.tsx`, `stubs/switchables.ts`, `stubs/slots.ts`, `stubs/AppShellMount.example.tsx`.

---

## 13. Layout slots (v1.1 refine)

Four named slots. Header **never remounts** when slot changes — only metrics / CSS vars update. Compact-landscape wins when `orientation: landscape` and `height ≤ 500`.

| Slot | Width / condition | Basmala max W | Wordmark box | Pad top / inline | Gap | Dock default | Basmala policy |
|------|-------------------|---------------|--------------|------------------|-----|--------------|----------------|
| `phone` | ≤429 (else not compact-landscape) | 220 | 148×36 | 16 / 16 | 6 | `top-center` | NASAQ pass |
| `tablet` | 430–1023 | 280 | 176×44 | 24 / 24 | 8 | `top-center` | NASAQ pass |
| `desktop` | ≥1024 | 320 | 176×44 | 40 / 40 | 8 | `top-start` | **desktop retina HOLD** |
| `compact-landscape` | landscape + height ≤500 | 160 | 120×30 | 8 / 12 | 4 | `top-start` | scale-only (same PNG) |

**Rules**

| # | Rule |
|---|------|
| S1 | Emit `data-slot` + CSS vars from `stubs/slots.ts` (`brandHeaderSlotCssVars`). |
| S2 | Intrinsic Basmala asset stays **468×76**; slots only cap display width. |
| S3 | Desktop does **not** invent @2x — `data-basmala-policy="desktop-retina-HOLD"`. |
| S4 | Slot change ≠ remount. Same React instance; resize / orientation listeners only. |
| S5 | Switchables stay **unset** by default (`SWITCHABLES_UNSET`). Slots do not encode parallax / 4-col / shadow. |
| S6 | Internal QA wordmark label default **off** (`showInternalWordmarkQa`); Katib prefers empty slot. |

Acceptance addendum: DevTools `data-slot` flips phone↔tablet↔desktop↔compact-landscape without header remount; mount count stays 1.
