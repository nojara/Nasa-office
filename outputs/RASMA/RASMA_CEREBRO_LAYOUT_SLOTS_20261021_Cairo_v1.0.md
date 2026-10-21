# RASMA · Layout slots — Cerebro DS v1.1
**Agent:** RASMA (رَسْمَة) · `7b0ebc02-4f25-4cd3-9798-60ba042b89eb`  
**Pack:** AGENT_ROSTER_SPEC_PACK **v1.5** · Crew TOP10  
**Branch target:** `feat/ds-v1-1` (njr39/Cerebro-core) — paste later; no merge / PR / deploy  
**Date:** 2026-10-21 Cairo  
**Status:** INTERNAL ONLY · design-gate seat 1 · layout slots from approved systems  
**Sources:** Branding brief v1.0.0 white · BANNA PersistentBrandHeader + GateKeys specs · PRD UI UPDATE v0_3i · Blueprint RASMA v0.3 · Design prompts S01–S12 · Kinzo TOP10 dispatch  

**Hard:** open Tarek calls stay switchable · CEREBRO wordmark BLOCKED · obsidian hero elsewhere ≠ final · only real lit renders to Tarek (via NASAQ → Fakir)

---

## 0 · Shell layer stack (outside WebGL)

```
#cerebro-shell  data-shell="v1.1"
├── PersistentBrandHeader     ← one instance · never remounts · never spins
├── SphereScene / WebGL       ← DO NOT EDIT (RASMA / BANNA boundary)
├── GateChrome / GlassKeys    ← 2D overlay · Gate P0
├── StatusBoard (optional)    ← switchable 4-col | not | unset
├── Panel stack               ← glass cards · station detail
└── Voice / widget layer      ← out of RASMA scope this wave (do not touch)
```

Pointer: header wrapper `pointer-events: none` (Gate P0). Keys/panels receive hits outside brand safe zone.

---

## 1 · Global chrome slots

| Slot id | Purpose | Logical size / rule | Asset / content | Freeze |
|---|---|---|---|---|
| `slot.brand.basmala` | Basmala above wordmark | PNG **468×76** intrinsic; `dir=rtl` | Flat white Basmala; phone/tablet NASAQ pass; **desktop retina HOLD** | PASS path phone/tablet |
| `slot.brand.wordmark` | CEREBRO mark | **176×44** (blueprint logo slot) | **PLACEHOLDER only** · `data-wordmark="blocked"` · no approx glyph | **BLOCKED** white-on-white |
| `slot.brand.dock` | Header dock token | `top-start` \| `top-center` | Portrait home ~40 px from top-left when corner-docked | PROPOSED |
| `slot.chrome.clock` | CAIRO / UTC | Mono 13 | L11b PRD | PROPOSED |
| `slot.chrome.sample` | Sample-line pocket | glass Mono 13 | “Sample layout — not real data.” when illustrative | PRD-traced |
| `slot.gate.keys` | Gate P0 glass keys | ≥44×44 hit · 5 keys | projects · people · files · media · tasks | Gate P0 |
| `slot.gate.statusBoard` | Status board near keys | **switchable** | `4` \| `not` \| `unset` — **do not pick** | OPEN Tarek |
| `slot.station.pill` | Station label pocket | glass `.st-label` | EN + JP secondary (JP open) | D0 |
| `slot.panel.glass` | Side / centre glass card | `.glass` #142632 @ ~88% · blur 12 static | Station lists, player, people | D0 PROPOSED |
| `slot.loader.boot` | 0–1.8 s | MADAR / Tarek only | Authorized loader motion | LOCKED window |
| `slot.loader.hold` | 1.8–12 s | PLACEHOLDER | Static hold — no invented loop | LOCKED |
| `slot.agent.canvas` | AgentCanvas / AgentCard | widget_spec_shared layers | READY_v2.1 L3 heads only; NASAQ/MADAR/NABR/Samna = PLACEHOLDER | Roster honesty |
| `slot.switch.parallax` | Parallax | `6px` \| `none` \| `unset` | Header/keys only if `6px` + reduced-motion off | OPEN Tarek |
| `slot.switch.shadow` | Shadow tone | `unset` \| string | Do not invent palette | OPEN Tarek |

---

## 2 · Viewport frames (layout artboards)

| Frame | Size | Use |
|---|---|---|
| `ipad-landscape` | **1366×1024** | Primary reference (PRD 01–09, design prompts) |
| `iphone-portrait` | **1170×2532** @3x / **390×844** logical | Phone home + Gate |
| `desktop` | **1440** / **1920×1080** | Desktop Gate + BrandHeader; Basmala retina **HOLD** |
| `tablet-portrait` | **1024×1366** | Review reflow variant |

Safe margin: **32 px** (design-prompt default) unless a screen prompt says otherwise.

---

## 3 · Station map (5 + control)

| Station | Key id | Blueprint / OrbitalHome | Notes |
|---|---|---|---|
| Projects | `projects` | Key projects · tracker | CP1 sample nodes SYNTHETIC |
| People | `people` | Agents list lives here | Roster real names pending Tarek; placeholders OK labelled |
| Files | `files` | Drive bridge | PENDING until connected |
| Media | `media` | Showreel / portfolio | Amber media station in DS; player panel |
| Tasks | `tasks` | Meetings cluster inside | SYNTHETIC sample OK labelled |
| Settings | — | Control group **not** a P0 station key | Do not invent P0 Agents/Gallery keys |

---

## 4 · D0 chrome tokens (consume — do not freeze tests)

| Token | Value | Note |
|---|---|---|
| `--canvas` | `#101D27` | World / page field |
| `--glass-tint` | `#142632` | Cards / pockets |
| `--text-primary` | `#F2F6F8` | |
| `--text-secondary` | `#BDCBD3` | |
| `--focus` | `#65ACFF` | |
| `--highlight` | `#FFF1D4` | Single focal only |
| `--logo-flat` | `#FFFFFF` | Flat white logos on header |
| `--object-shade` | `#0A131A` | **TEST — not frozen** |
| `--shadow-tone` | unset | Tarek open |

Volcanic glass / obsidian = **3D materials study only** · tiles **NOT final**.

---

## 5 · Layout rules (absolute)

1. Exactly **one** `PersistentBrandHeader` · Basmala **above** wordmark slot · never remounts · never inherits sphere transform.  
2. Wordmark slot empty / pending QA only — **no** invented CEREBRO lettering.  
3. Shape + label (never colour alone) for status.  
4. All controls: white outline **40%**; focus `#65ACFF`.  
5. Touch ≥ **44 px**.  
6. Pending stations stay visible as labelled placeholders (LOCKED decision 11).  
7. Switchables wired as `data-*` / CSS vars — defaults `unset` where Tarek has not ruled.  
8. No voice / sound / auth / Google / gesture / WebGL / dependency edits from this seat.  
9. AgentCanvas: READY_v2.1 only; do not invent NASAQ / MADAR / NABR / Samna heads.  
10. Lit composites: mockups and obsidian hero stills elsewhere are **not** craft-final; only real lit frames go NASAQ → Fakir → Tarek.

---

## 6 · Companion files

| File | Role |
|---|---|
| `RASMA_CEREBRO_21_SCREEN_INDEX_20261021_Cairo_v1.0.md` | Full 21-screen index + crosswalk |
| `RASMA_CEREBRO_BrandHeader_SLOT_MAP_20261021_Cairo_v1.0.md` | BrandHeader per-breakpoint slot map |
| `LANE_STATUS.md` | Lane status + blockers |

— RASMA · رَسْمَة · 2026-10-21 Cairo · internal only
