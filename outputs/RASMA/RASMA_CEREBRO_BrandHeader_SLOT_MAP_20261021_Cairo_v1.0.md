# RASMA · PersistentBrandHeader — slot map
**Agent:** RASMA (رَسْمَة) · layouts from approved systems  
**Companion:** BANNA `PersistentBrandHeader.spec.md` · NASAQ brand-match · KATIB microcopy · MUSA provenance  
**Date:** 2026-10-21 Cairo · **INTERNAL ONLY**  
**Branch target:** `feat/ds-v1-1`

---

## 1 · Invariants (layout)

| # | Rule |
|---|---|
| H1 | Exactly **one** instance in `#cerebro-shell` |
| H2 | **Never remounts** (no route / station / sphere key) |
| H3 | **Never spins** with the sphere / WebGL / orbit group |
| H4 | Stack: **Basmala → wordmark slot** (vertical) |
| H5 | Wordmark = **BLOCKED** placeholder only |
| H6 | Logos = **flat white**; volcanic glass is 3D-only (tiles NOT final) |

---

## 2 · Anatomy → slots

```
┌─ slot.brand.header (fixed / absolute · pointer-pass) ─────────┐
│  ┌─ slot.brand.basmala  dir=rtl · PNG 468×76 ───────────────┐ │
│  └──────────────────────────────────────────────────────────┘ │
│  ┌─ slot.brand.wordmark  176×44 · data-wordmark="blocked" ──┐ │
│  │   empty / optional internal QA label only                 │ │
│  └──────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

| Slot | Size | Content | a11y / QA |
|---|---|---|---|
| `slot.brand.basmala` | 468×76 master | Flat white PNG when present; else empty box `data-asset="basmala-pending"` | `alt` = بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ when asset present (KATIB) |
| `slot.brand.wordmark` | **176×44** | **No** CEREBRO bitmap / type-as-logo | `aria-label` = “CEREBRO wordmark pending — blocked white-on-white” |
| `slot.brand.dock` | token | `top-start` \| `top-center` | Portrait home ref: ~40 px from top-left when corner-docked |

Internal QA microcopy only (omit in client Gate): `[Cerebro wordmark pending]` — KATIB may replace; default **omit**.

---

## 3 · Breakpoint map

| Breakpoint | Frame | Basmala | Wordmark slot | Dock default | NASAQ |
|---|---|---|---|---|---|
| **phone** | 390–430 / 1170×2532 | Scale down from 468×76; keep aspect | 176×44 scaled · still empty | `top-center` or compact top bar | **PASS** target |
| **tablet** | iPad landscape 1366×1024 · portrait 1024×1366 | Full logical / mild scale | 176×44 | `top-center` on Gate; `top-start` on home OK | **PASS** target |
| **desktop** | ≥1440 | 468×76; **@2x retina HOLD** | 176×44 | `top-start` or `top-center` | **HOLD** retina |
| **compact-landscape** | short height | Scale; never clip calligraphy | keep 176×44 reserve | prefer `top-center` | measure contrast on composite |

Safe clearance: Gate keys / panels must not overlap Basmala or wordmark reserve.

---

## 4 · Screen coverage (which index rows keep the header)

| Index # | Screen | Header visible | Remount? | Co-rotate with sphere? |
|---|---|---|---|---|
| 01 | Gate unlock | yes | no | no |
| 02 | Wake / loader | yes (fade) | no | no |
| 03–13 | Home → settings | yes | no | no |
| 14 | iPhone home | yes compact | no | no |
| 15–17 | Dashboard / SEVEN / ambassador | yes | no | no |
| 18–20 | Keys / board / AgentCanvas | header sibling | no | no |
| 21 | BrandHeader chrome itself | — | — | — |

Flight (04) and inside-sphere (10): header stays **screen-plane pinned** (parallax only if switchable `6px` and reduced-motion off).

---

## 5 · Phase coupling (do not invent motion)

| Phase | Window | Header |
|---|---|---|
| `boot` | 0–1.8 s | Opacity ramp OK per MADAR; no custom choreography |
| `placeholder` | 1.8–12 s | Fully visible · **static** |
| `ready` | after | Steady · same DOM instance |
| `asset-missing` | any | Reserved empty boxes · `data-qa="brand-header-assets-pending"` |

---

## 6 · Switchables on header host

```ts
data-parallax="6px|none|unset"
data-status-board-cols="4|not|unset"   // board is sibling — header does not become the board
data-shadow-tone="unset|…"             // do not invent
```

RASMA / BANNA wire flags; **Tarek picks**.

---

## 7 · Provenance / blockers (layout view)

| Asset | Layout action |
|---|---|
| Basmala PNG 468×76 | Slot reserved; wire only when MUSA/operator supplies verified file |
| CEREBRO wordmark | Slot reserved empty — **BLOCKED** |
| Desktop retina Basmala | **HOLD** — do not claim PASS |
| Obsidian tile under header | Temporary study — do not lock materials |

---

## 8 · Acceptance (layout)

1. One header across 20 navigations + sphere spin.  
2. Basmala cell above empty wordmark pocket on phone + tablet composites.  
3. Wordmark pocket never shows invented CEREBRO art.  
4. Switchables readable; defaults do not pick Tarek’s side.  
5. No WebGL / voice / auth / deps touched to place this chrome.

Paste path (when repo up): `src/components/cerebro/chrome/PersistentBrandHeader.tsx` (BANNA stub).

— RASMA · رَسْمَة · 2026-10-21 Cairo · internal only
