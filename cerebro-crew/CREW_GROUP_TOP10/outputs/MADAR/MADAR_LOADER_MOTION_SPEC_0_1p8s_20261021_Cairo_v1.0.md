# MADAR · Loader motion spec · 0–1.8s only

**Agent:** MADAR (مَدَار) · member #5 · `CEREBRO_DS_v1_1_CREW_TOP10`  
**Agent id:** `15e0b024-e7c9-47e6-ba15-97214659b500`  
**Accent:** `#C7A0DC` · text on field `#302B26`  
**Date:** 2026-10-21 Cairo  
**Branch target:** `feat/ds-v1-1` (spec only — no code edit this pass)  
**Status:** INTERNAL · **LOCKED** 2026-10-21 19:29 Cairo · Tarek-owned beat **0–1.8s** · not design-gate signed  
**Lock:** MADAR lane lock — timing, layers, strings, ease, parallax SWITCHABLE, handoff at 1800 ms. No further MADAR edits to this window without Tarek revise.  
**Avatar:** `PLACEHOLDER_NO_REFERENCE_HEAD` — no head invented; no avatar motion assets in this pack

---

## Authority & hard rules

| Rule | MADAR action |
|---|---|
| Tarek timeline **0–1.8s only** | Spec this window. Stop at 1800 ms. |
| **1.8–12s** | See `MADAR_LOADER_PLACEHOLDER_1p8_12s_20261021_Cairo.md` — **PLACEHOLDER until Tarek**. No MADAR fill. |
| Do **not** touch voice / sound / WebGL renderer / deps | Motion layers = DOM / transform / opacity language only. No shader, mesh, or audio edits proposed. |
| Open Tarek call: parallax | Keep **SWITCHABLE** `6px \| none` — do **not** pick. |
| Globe lighting | In progress elsewhere — **document only**, no invented finals. |
| CEREBRO wordmark | BLOCKED (white-on-white) — **placeholder slot only**. |
| Basmala | Still; above CEREBRO; never spins with sphere; never remounts (branding brief v1.0.0 white). |
| Layering (Tarek / Cerebro) | Every element on its own layer with its own motion. No flattened composite. |

**Sources used (read-only):** CREW `GROUP.json` / MADAR AgentCard v1.5 · MADAR memory/capabilities · `MOTION_AND_LAYOUT.md` (loader row: 12000 ms beats) · AS-BUILT `1c16a15` §11 ForgeLoader (current 8 s code — reference, not override) · MADAR motion spec v0.1 (Bismillah static rule) · CEREBRO KB handoff 2026-10-21 (locked 8 s note — conflict logged in blockers).

---

## Full loader envelope (context only)

Proposed cinematic envelope (MOTION_AND_LAYOUT — **PROPOSAL**, not owner-locked):

| Beat | Window (ms) | Owner |
|---|---|---|
| **establish C** | **0 – 1800** | **Tarek timeline → MADAR specs this file** |
| inspect edge | 1800 – 4800 | PLACEHOLDER until Tarek |
| assemble internal structure | 4800 – 9000 | PLACEHOLDER until Tarek |
| pullback / handoff | 9000 – 12000 | PLACEHOLDER until Tarek |

Total proposed: **12000 ms**. Current as-built Forge: **8000 ms** (`FORGE_MAX_MS`) with four equal 2 s status steps — conflict → blockers.

**Readiness gate:** never announce ready from timer alone (MOTION_AND_LAYOUT verification). “Take off” remains an early exit control (as-built). Sound channel: **out of scope** (do not touch).

---

## Phase A — establish C · 0.0 → 1.8 s

**Intent:** Bring the Cerebro identity presence to a calm, settled “C is here” state before any later inspection / assembly beats. One composition: brand stack + core presence + honest progress. No orbit language. No invented globe light pass.

### Layers (own motion each)

| Layer id | Element | Motion 0–1.8s | Notes |
|---|---|---|---|
| `L_canvas` | Boot canvas / space field | Present at t=0; no colour invention; hold D0 field | Obsidian / volcanic glass look is **not final** (tiles still rendering). |
| `L_basmala` | Basmala (PNG slot 468×76) | **Static from t=0** — opacity 1, no fade, no parallax, no translate | NASAQ pass phone/tablet; desktop retina **HOLD**. Never remounts. |
| `L_wordmark_slot` | CEREBRO wordmark | **Placeholder slot only** — no white-on-white invent; opacity hold or soft settle ≤180 ms if slot already reserved | BLOCKED until real mark. |
| `L_brand_header` | PersistentBrandHeader | **Single instance** mounts once at t=0; no remount; does not spin with sphere | Header presence ≠ sphere motion. |
| `L_core_presence` | “C” / core stand-in (DOM or approved flat mark — **not** WebGL light final) | 0→1 opacity + scale **0.98→1.00**, **0–900 ms**, ease `cubic-bezier(0.45, 0, 0.25, 1)` (signature ease from motion tokens) | No mesh / shader change. No invented lighting. |
| `L_status` | Establish-phase status line | Copy window **0–1800 ms** only (see strings). Fade in **0–200 ms**; hold | Do not roll into later Forge strings early. |
| `L_progress` | Thin progress track | Fill maps **elapsed / 1800** for this beat only (or parent 0–12000 if envelope is 12 s — **implementation choice left open**; do not invent %) | Track = rim language; fill uses existing highlight token when wired. |
| `L_takeoff` | Take off control | Visible from t≈200 ms; press ends loader at any time (as-built behaviour preserved) | No sound hook from MADAR. |
| `L_parallax` | Optional pointer parallax on brand stack | **SWITCHABLE** — see below | Default unresolved. |

### Timing chart (ms)

```text
t ms     0        200       600       900      1200      1800
         |---------|---------|---------|---------|---------|
L_basmala ████████████████████████████████████████████████  (static)
L_header  ████ mount once ────────────────────────────────
L_wordmark [PLACEHOLDER SLOT] ────────────────────────────
L_core         ░░████████ settle 0–900 ██████████████████ hold
L_status  ░░ fade ── hold “Establishing Cerebro” ─────────┐
L_progress ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ fill → 1.8s boundary ──────┘
L_takeoff      ░ available ────────────────────────────────
               ▲                                         ▲
             t=0 start                          END MADAR SPEC
                                             → PLACEHOLDER 1.8–12s
```

### Status string (0–1.8s only)

| Window | String (EN) | Notes |
|---|---|---|
| 0 – 1800 ms | `Establishing Cerebro` | Single establish-C line. AR adaptation → KATIB. Do **not** reuse as-built “Forging the core / Lighting the stations / …” inside this window. |

Reduced motion (`prefers-reduced-motion: reduce`):

| Item | Value |
|---|---|
| Phase length | Cap establish beat at **≤300 ms** (or skip to settled hold) within the global reduced loader budget |
| Motion | Opacity cross-fade only; **no** scale, translate, parallax, drift |
| Basmala / header | Still present; no remount |
| Take off | Remains available |

### Parallax — SWITCHABLE (do not pick)

| Mode | Token / behaviour |
|---|---|
| `6px` | `--parallax-max: 6px` (as-built `tokens.css` declares this; currently DEFINED, UNUSED) — pointer-linked translate on `L_brand_header` + `L_core_presence` only; **never** on Basmala |
| `none` | `--parallax-max: 0` / parallax disabled |

**MADAR does not choose.** Implementation must expose both. Reduced motion forces `none`.

### Ease & duration tokens (reuse — do not invent a second system)

| Token role | Value | Use in 0–1.8s |
|---|---|---|
| Signature ease | `cubic-bezier(0.45, 0, 0.25, 1)` | Core settle |
| Exit ease (if Take off mid-phase) | `cubic-bezier(0.7, 0, 0.84, 0)` | Overlay fade out (as-built Forge exit) |
| Micro / fade | 120–200 ms | Status / reduced |
| Exit fade | 280 ms (120 reduced) | Leaving loader |

---

## Explicit non-goals (0–1.8s)

- No WebGL / sphere lighting / bloom / IBL finals (in progress elsewhere — see blockers).
- No voice orb behaviour changes; no sound stems; no NABR / audio.js edits.
- No dependency bumps; no gesture threshold edits.
- No MADAR avatar head; widget avatar stays placeholder.
- No resolution of shadow tone or 4-column status board (other Tarek open calls).
- No invention of CEREBRO wordmark artwork.

---

## Handoff at 1.8 s

At **t = 1800 ms** (if Take off not pressed):

1. Establish-C layers are **settled** (core at scale 1, status line still readable).
2. Control passes to **PLACEHOLDER** beats 1.8–12 s — MADAR does **not** author inspect / assemble / pullback motion until Tarek supplies the timeline.
3. Scene readiness remains a **real gate** for any “ready / handoff” claim after the full envelope (not at 1.8 s).

---

## Companion files

- `MADAR_LOADER_PLACEHOLDER_1p8_12s_20261021_Cairo.md`
- `MADAR_BLOCKERS_20261021_Cairo.md`
- `MADAR_LOADER_TIMELINE_0_1p8s_20261021_Cairo_v1.0.json`

**Try next (for BANNA / Cursor on `feat/ds-v1-1`):** wire only the 0–1.8s establish-C DOM layers + SWITCHABLE parallax; leave 1.8–12s stubbed; do not touch WebGL lighting or audio.
