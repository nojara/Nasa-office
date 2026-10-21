# Gate P0 · Glass Keys — build-ready spec

**Agent:** BANNA (بَنّاء) · `d424a6d1-68f8-4004-a115-e4edf6dbb7ba`  
**Pack:** AGENT_ROSTER_SPEC_PACK v1.5 · DS v1.1 · **Gate P0**  
**Target branch:** `feat/ds-v1-1` (njr39/Cerebro-core) — paste later; repo unreachable from this VM  
**Status:** INTERNAL ONLY · build-ready stub · **slots refined** · Obsidian tiles NOT final  
**Date:** 2026-10-21 Cairo  
**Rev:** v1.1 — phone / tablet / desktop / compact-landscape slot metrics  
**Look:** volcanic glass / obsidian language on 3D elsewhere; **keys** are flat glass chrome (CSS), not WebGL

---

## 1. Purpose

**Gate P0 glass keys** are the first-ship interactive glass control keys on the Gate / home chrome: station or action keys with frosted glass face, white 40% outline, focus ring, and honest pending/disabled states. They sit in the **2D overlay shell**, not inside the spinning sphere.

Gate P0 = minimum interactive set for DS v1.1 gate review — not the full 21-screen plan.

## 2. Hard invariants

| # | Rule |
|---|------|
| G1 | CSS / DOM glass only for P0 keys. **Do not** edit WebGL renderer, gesture thresholds, voice, sound, auth, Google, or package.json deps. |
| G2 | Keys must not remount the `PersistentBrandHeader` or sit under sphere transform. |
| G3 | Shape + label (or icon + label) — **never colour alone** for status (NASAQ station rule). |
| G4 | Obsidian tile **test** may appear behind keys — treat as temporary; do not bake tile look into key tokens. |
| G5 | Tarek switchables stay switchable: parallax `6px\|none`, status board `4-col\|not`, shadow tone. |
| G6 | Loader: keys idle/disabled during 0–1.8s boot; 1.8–12s stay **placeholder** (no fake busy shimmer). |
| G7 | Internal only — no publish. |

## 3. Anatomy of one `GlassKey`

```
┌────────────────────────┐
│  glass face (#142632@%)│
│  ┌──────┐              │
│  │ icon │  Label       │  ← min 44×44 hit
│  └──────┘              │
│  1px outline white 40% │
└────────────────────────┘
```

| Part | Spec |
|------|------|
| Face | Frosted glass: `background: color-mix(in srgb, var(--glass-tint) 88%, transparent)`; `backdrop-filter: blur(12px)` with solid fallback `#142632` when `prefers-reduced-transparency` |
| Outline | `1px solid rgba(255,255,255,0.40)` — measured ~3.77:1 on canvas / ~3.68:1 on glass (blueprint) |
| Focus | `2px` ring `--focus` `#65ACFF`; optional glow `#B4DDFF` ≤35% opacity — not purple |
| Radius | Token `--key-radius` — leave switchable with global radius open call; default provisional `12px` for stub only, flagged PROVISIONAL |
| Padding | ≥12 px; label 13–16 px IBM Plex Sans 500; Arabic via Plex Sans Arabic when AR |
| Hit target | Visible ≥44×44; invisible pad OK |
| Shadow | Bound to `--shadow-tone` switchable — **do not pick** tone; if unset, use minimal `0 1px 0 rgba(0,0,0,0.25)` as structural only and mark `data-shadow="unset"` |

## 4. Key set — Gate P0 (minimal)

Ship these ids; labels are Katib placeholders until copy lock:

| id | Label (EN placeholder) | Role |
|----|------------------------|------|
| `projects` | Projects | Station |
| `people` | People | Station |
| `files` | Files | Station |
| `media` | Media | Station |
| `tasks` | Tasks | Station |

Mapping note (blueprint): nav+dock → 5 stations. Do not invent Agents/Gallery/Settings keys in P0 unless already on feat/ds-v1-1 — extend via props `keys` array.

### Status board coupling

When `statusBoardCols === '4'`, a 4-column status board may sit near keys (owned by layout / RASMA). When `'not'` or `'unset'`, keys do not assume 4-col grid. **Do not pick.** Stub exposes `data-status-board-cols={switchables.statusBoardCols}`.

## 5. States

| State | Behaviour |
|-------|-----------|
| `default` | Glass face, outline, label+icon |
| `hover` | Outline → white 55%; no scale >1.02 |
| `pressed` | Scale 0.98, 120 ms |
| `focused` | Focus ring visible (keyboard) |
| `selected` | Highlight rim `--highlight` `#FFF1D4` 1px inner or solid head rule — not colour-only |
| `disabled` | Opacity 0.45; `aria-disabled`; no press |
| `loading` (0–1.8s boot) | Disabled; optional single progress affordance **owned by MADAR** — BANNA stub uses static disabled |
| `placeholder` (1.8–12s) | Visible, non-interactive or soft-disabled; `data-phase="placeholder"`; **no shimmer** |
| `error` | Rim `--tracking-invalid` `#FF5666` + icon + label |

## 6. Motion (MADAR boundary)

- Press / focus only: ≤180 ms ease-out.
- **0–1.8 s:** defer to Tarek/MADAR loader; keys do not run their own intro choreography beyond opacity if shell fades.
- **1.8–12 s:** placeholder — no looping glass caustics, no fake progress.
- `prefers-reduced-motion`: disable hover lift / parallax; use opacity only.

Parallax on the key row: only if `parallax === '6px'` and reduced-motion off; max translate 6px tied to pointer — stub wires the flag, default `'unset'`.

## 7. Tokens (provisional D0 / chrome)

| Token | Value | Freeze? |
|-------|-------|---------|
| `--canvas` | `#101D27` | proposed |
| `--glass-tint` | `#142632` | proposed |
| `--text-primary` | `#F2F6F8` | proposed |
| `--text-secondary` | `#BDCBD3` | proposed |
| `--focus` | `#65ACFF` | proposed |
| `--highlight` | `#FFF1D4` | proposed |
| `--object-shade` | `#0A131A` | **TEST not frozen** |
| `--shadow-tone` | unset | **Tarek open** |

Banned: purple/violet glow, gold orbital jewellery, emoji keys, colour-only status.

## 8. API (stub)

```ts
export type GlassKeyId =
  | 'projects' | 'people' | 'files' | 'media' | 'tasks'
  | (string & {});

export type GlassKeyItem = {
  id: GlassKeyId;
  label: string;
  labelAr?: string;
  icon?: 'projects' | 'people' | 'files' | 'media' | 'tasks' | 'custom';
  disabled?: boolean;
};

export type GateKeysProps = {
  keys?: GlassKeyItem[];
  selectedId?: GlassKeyId | null;
  phase?: 'boot' | 'placeholder' | 'ready';
  onSelect?: (id: GlassKeyId) => void;
  /** Tarek switchables — do not resolve defaults that pick a side */
  switchables?: {
    parallax?: '6px' | 'none' | 'unset';
    statusBoardCols?: '4' | 'not' | 'unset';
    shadowTone?: 'unset' | string;
  };
};
```

## 9. Layout slots (v1.1 refine)

Do not place keys over Basmala / wordmark slot. Status board **4-col** remains a Tarek switchable (`unset` default) — keys advertise `data-status-board-cols` only; they never become the board.

| Slot | Direction | Gap / pad | Clear header | Key min | Label size | Keys/row hint |
|------|-----------|-----------|--------------|---------|------------|---------------|
| `phone` | wrap | 8 / 12 | 96 | 44×44 | 13 | wrap |
| `tablet` | row | 10 / 14 | 120 | 44×44 | 14 | 5 |
| `desktop` | row | 12 / 16 | 140 | 48×44 | 14 | 5 |
| `compact-landscape` | row | 6 / 8 | 56 | 44×40 | 12 | 5 |

**Rules:** `data-slot` + `gateKeysSlotCssVars`; compact-landscape compresses clearance so brand stack stays visible; `keysPerRowHint` is layout only — **not** a pick of TC-2 status board 4-col.

## 10. Acceptance

1. Five P0 keys render with outline + label; colour alone never signals selected.
2. Keyboard focus ring visible; touch ≥44 px.
3. `phase='boot'|'placeholder'` → no shimmer / no fake busy animation after 1.8s.
4. Switchables reflected on `data-*` attributes; parallax off under reduced-motion.
5. Header still single instance; keys outside canvas.
6. No new deps; no WebGL / voice / auth edits.
7. Obsidian tile not referenced as final material in code comments beyond `NOT_FINAL`.

## 11. Paste path

```
src/components/cerebro/gate/GateKeys.tsx
src/components/cerebro/gate/GlassKey.tsx
src/components/cerebro/gate/GateKeys.module.css
```

Stubs: `stubs/GateKeys.tsx`, `stubs/GlassKey.tsx`, `stubs/gateKeys.css`.
