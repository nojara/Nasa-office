# RASMA · 21-screen index — Cerebro DS v1.1
**Agent:** RASMA (رَسْمَة) · design-gate seat 1  
**Date:** 2026-10-21 Cairo · **INTERNAL ONLY**  
**Branch target:** `feat/ds-v1-1`  
**Authority:** BANNA audit “Gate + 21-screen plan” · Design prompts **S01–S12** · PRD UI UPDATE **v0_3i** · Blueprint RASMA **v0.3** · Gate P0 chrome  

Obsidian hero / tile stills rendered elsewhere are **mock / study — not lit-final**. AgentCanvas refs = READY_v2.1 packs only.

---

## Legend

| Col | Meaning |
|---|---|
| **#** | Index 01–21 (this pack) |
| **ID** | Stable layout id for BANNA paste |
| **Prompt** | Design-prompt S## when applicable |
| **PRD** | v0_3i screen ## |
| **BP** | Blueprint v0.3 frame |
| **Header** | BrandHeader presence / dock |
| **Lit** | May send lit frame? |

---

## Index (exactly 21)

| # | ID | Name | Prompt | PRD | BP | Header | Primary slots | Lit |
|---|---|---|---|---|---|---|---|---|
| 01 | `scr.gate.unlock` | Gate / Unlock (owner code) | S01 entry-lock | 01 | — | yes · centred dock OK | basmala · wordmark-blocked · C16 code field · glass card | no invent |
| 02 | `scr.boot.wake` | Wake / loader 0–1.8s → hold | S02 wake-sequence | — | — | fade-in OK · no remount | loader.boot · loader.hold (1.8–12s PLACEHOLDER) | MADAR owns motion |
| 03 | `scr.home.orbital` | Orbital Home (5 stations) | S03 orbital-home | 02 | 06 sphere | yes · top-start / top-center | stations×5 · sample · clock · dock keys · orb (out of scope) | study only |
| 04 | `scr.flight.projects` | Flight to Projects (mid) | S04 station-focus (flight) | 03 | — | pinned · letterbox OK | letterbox · station focus · sample | study only |
| 05 | `scr.station.projects` | Projects portfolio | S05 projects-portfolio | 04 | — | yes | glass list · back · status chips · SYNTHETIC rows | no invent numbers |
| 06 | `scr.station.files` | Files (Drive pending) | S06 files | 05 | — | yes | PENDING chip · honest empty copy | placeholder |
| 07 | `scr.station.media` | Media player panel | S07 media-player | 06 | 03 showreel | yes | player glass 960×640 · header · controls | no real film |
| 08 | `scr.station.tasks` | Tasks / build status | S08 tasks-build-status | 07 | — | yes | progress rings · chips · meetings cluster | SYNTHETIC |
| 09 | `scr.station.people` | People (HQ + agents) | — (PRD 08) | 08 | 06B station open | yes | HQ rows · agent chips · PLACEHOLDER heads where required | no invent heads |
| 10 | `scr.sphere.inside` | Inside the sphere | S09 spatial-entry | 09 | — | yes · pinned | dome L8e · station labels · back | study only |
| 11 | `scr.spatial.interact` | Spatial interaction HUD | S10 spatial-interaction | — | — | yes | cursor / touch indicators · reduced-motion | no gesture code |
| 12 | `scr.system.states` | System states board | S11 system-states | — | — | yes | offline · denied · empty · error · pending | honest labels |
| 13 | `scr.settings` | Settings control group | S12 settings | — | 06 Settings | yes | General / Camera / Hands (panels) — **no** P0 key invent | hold extras |
| 14 | `scr.home.iphone` | iPhone Orbital Home | — | 10 | 01 portrait | yes · compact | station pills · wordmark 16px · CAIRO clock | study only |
| 15 | `scr.dash.horizontal` | Horizontal HQ dashboard | — | — | 05 dashboard | yes | panels · KAST TBD · status | cognitive-load open |
| 16 | `scr.brief.seven` | SEVEN brief frame | — | — | 04 SEVEN | yes · logo slot | pager dots · TBD date | SYNTHETIC |
| 17 | `scr.ambassador` | Ambassador / placeholder frame | — | — | 07 ambassador | yes | **AWAITING REFERENCE** — content not invented | placeholder |
| 18 | `scr.gate.keys` | Gate P0 glass keys row | — | — | — | sibling under header | 5 keys · outline 40% · switchable board | layout only |
| 19 | `scr.status.board` | Status board (4-col switchable) | — | — | — | near keys | `4` \| `not` \| `unset` — **do not pick** | OPEN Tarek |
| 20 | `scr.agent.canvas` | AgentCanvas / AgentCard | — | — | — | outside sphere | READY_v2.1 L3 · widget layers · HAQQ not HAQI | no invent heads |
| 21 | `scr.brand.header` | PersistentBrandHeader (chrome) | — | L11 | all frames logo slot | **this screen is the chrome** | basmala 468×76 · wordmark 176×44 blocked · dock token | slot map companion |

---

## Crosswalk notes

1. **S01–S12** are the design-prompt spine; index 01–13 cover them plus People (PRD 08) inserted as 09 so station set is complete.  
2. **PRD 01–10** map into 01, 03–10, 14.  
3. **Blueprint v0.3** frames (portrait, showreel, SEVEN, dashboard, sphere, station-open, ambassador) land in 03, 07, 09, 14–17.  
4. **18–21** are Gate / DS v1.1 chrome production surfaces BANNA must wire on `feat/ds-v1-1` (keys, switchable board, AgentCanvas, BrandHeader).  
5. Gate P0 ≠ full 21 — P0 ships unlock + home chrome + 5 keys; remaining screens stay indexed for layout continuity.

---

## Per-screen BrandHeader behaviour

| Screens | Dock | Notes |
|---|---|---|
| 01 Gate | `top-center` preferred | Above unlock card; never inside card |
| 02 Boot | same instance | Opacity only in 0–1.8s; no remount at ready |
| 03–13, 15–20 | `top-start` or `top-center` token | Never child of sphere / flight group |
| 14 iPhone | compact top bar | Wordmark 16px slot still **blocked** (empty) |
| 21 | definition | See BrandHeader slot map |

---

## Open (do not resolve)

- Parallax `6px` \| `none`  
- Status board `4-col` \| `not`  
- Shadow tone  
- Sphere vs busy dashboard home direction (Fakir leans sphere)  
- JP secondary labels  
- Real People roster names  
- Ambassador frame content (await Nojj reference)

---

## Hand-off

Next seat: **NASAQ** brand-match on these slots → **Fakir** craft on **real lit** only → **Nojj**.  
BANNA implements header + Gate P0 stubs against this index when `feat/ds-v1-1` is reachable.

— RASMA · رَسْمَة · 2026-10-21 Cairo · internal only
