# NASAQ · Brand-match checklist — Gate / PersistentBrandHeader
**DS:** Cerebro v1.1 · **Seat:** NASAQ (نَسَق) · **Date:** 2026-10-21 Cairo  
**Pack:** AGENT_ROSTER_SPEC_PACK v1.5 · **Branch target:** `feat/ds-v1-1` (no merge / PR / deploy / new branches)  
**Sources:** Branding brief v1.0.0 white (crew standing) · D0 / PRD v2.1 §12.1 Neural Observatory · MasterSpec Wireframe v0.2 DRAFT · CEREBRO_D1_Design_Prompts v1.1 · Kinzo TOP10 dispatch  
**Status:** INTERNAL · brand-match gate input for BANNA → Fakir → Tarek · **not approval**

---

## Pass / Fail / Hold legend
- **PASS** — locked rule; fail = brand-match reject  
- **HOLD** — do not ship as final; leave placeholder / switchable  
- **TEST** — in build for evaluation only; not frozen  
- **OPEN (Tarek)** — leave switchable; NASAQ does not pick

---

## A. PersistentBrandHeader (structure)

| # | Check | Rule | Verdict if broken |
|---|---|---|---|
| A1 | Single instance | Exactly **one** `PersistentBrandHeader` in the Gate tree | FAIL |
| A2 | No remount | Header never remounts across Gate ↔ home / sphere transitions | FAIL |
| A3 | Basmala above CEREBRO | Basmala sits **above** the CEREBRO wordmark slot | FAIL |
| A4 | Independent of sphere | Header **never** spins / orbits / parallax-locks with the 3D sphere | FAIL |
| A5 | Layer ownership | Header is its own UI layer (Tarek Cerebro layering rule); not flattened into sphere composite | FAIL |
| A6 | Logo treatment (2D chrome) | Marks on header chrome are **flat white** on **obsidian** field — not boxed white-background PNGs, not glass-filled logos | FAIL |
| A7 | 3D material separation | Volcanic glass / obsidian **material** is for **3D** objects/tiles only — do not apply glass fill / refraction to flat header logos | FAIL |

---

## B. Basmala PNG (468×76)

| # | Check | Rule | Verdict |
|---|---|---|---|
| B1 | Asset size | Source PNG **468×76** (logical asset) | FAIL if wrong master |
| B2 | Phone | Brand-match **PASS** on phone viewport | PASS target |
| B3 | Tablet | Brand-match **PASS** on tablet / iPad viewport | PASS target |
| B4 | Desktop retina | Desktop @2x / retina sharpness — **HOLD** (do not claim PASS) | HOLD |
| B5 | Contrast | Flat white Basmala on obsidian / D0 canvas stack; measure on **composited** background, not token pair alone | FAIL if illegible |
| B6 | Motion | Basmala does not animate with sphere; reduced-motion: static | FAIL |

---

## C. CEREBRO wordmark

| # | Check | Rule | Verdict |
|---|---|---|---|
| C1 | White-on-white block | CEREBRO wordmark is **BLOCKED** (white-on-white) | — |
| C2 | Slot only | Keep **placeholder slot** only — no approx wordmark, no invented glyph, no temporary coloured fill pretending to be final | FAIL if faked |
| C3 | Katib boundary | No approximate Latin/Arabic wordmark copy; wait for cleared asset | FAIL |

---

## D. Gate surface · D0 palette (locked — invent nothing)

Use **only** D0 / Neural Observatory v1.1 (PRD §12.1). Full token table → companion `…TOKEN_NOTES…` file.

| # | Check | Rule | Verdict |
|---|---|---|---|
| D1 | Canvas | Gate world / page field = `#101D27` | FAIL |
| D2 | Glass surfaces | Cards / pockets / glass UI = `#142632` (alpha variants from pack only) | FAIL |
| D3 | Text | Primary `#F2F6F8` · secondary/muted per D0 (`#BDCBD3` family) | FAIL |
| D4 | Focus | `#65ACFF` (+ glow `#B4DDFF` sparingly) | FAIL |
| D5 | Highlight | `#FFF1D4` — **single** most important focal element only | FAIL if scattered |
| D6 | Status hues | `#36E88D` / `#FF5666` — tracking / hard error **only**; never decorate | FAIL |
| D7 | Divider | `#FFFFFF24` hairlines only | FAIL |
| D8 | Flat white logos | Header / Gate logos = flat white marks on obsidian (not cream `#EEE5D4`, not boxed PNG) | FAIL |
| D9 | No other hues | No purple/violet, no gold jewellery, no YAH light-pack bleed, no invented hex | FAIL |
| D10 | Object shade `#0A131A` | **TEST only — not frozen.** May appear on 3D object/tile trials; never promote to locked D0 token; never replace `#101D27` canvas without Tarek freeze | TEST |

---

## E. Materials · 2D vs 3D

| # | Check | Rule | Verdict |
|---|---|---|---|
| E1 | Header logos | Flat white · no refraction · no volcanic glass fill | FAIL |
| E2 | 3D sphere / tiles | Volcanic glass / obsidian look allowed as **study**; obsidian tiles **not final** | HOLD final |
| E3 | Glass study honesty | 2D SVG/PNG glass = approximation; annotate; do not claim real-time refraction | FAIL if claimed |
| E4 | Banned surfaces | Boxed / white-background logo PNGs · stock “AI brain” · glitch · gold orbital jewellery | FAIL |

---

## F. Open Tarek calls (switchable — NASAQ does not pick)

| # | Call | Action |
|---|---|---|
| F1 | 6px parallax or none | Leave switchable on Gate / header stack |
| F2 | Status board 4 columns or not | Leave switchable |
| F3 | Shadow tone | Leave switchable — do not freeze shadow hex |

---

## G. Out of scope / must not

- No voice / sound / auth / Google / gesture / WebGL / dependency edits  
- No inventing NASAQ / MADAR / NABR / Samna avatar heads  
- No merging, PRs, deploys, or new branches  
- Agent field accents (`#0F5E5A` cream `#EEE5D4`, etc.) are **AgentCard / avatar pack** — not Gate chrome unless a later pack says so  
- Teal orb ramp is **orb / voice line only** — never on BrandHeader logos or Gate chrome

---

## H. Sign-off path

1. **NASAQ** — this checklist + token notes (brand-match)  
2. **Fakir** — ECD craft on lit renders only  
3. **Tarek** — freeze / open calls  

Obsidian tile / hero lit renders elsewhere: only real lit frames go forward; mockups are not final.

---

## Quick Gate QA script (BANNA)

1. Mount Gate once → confirm **one** BrandHeader; navigate away/back → same instance (no remount flash).  
2. Confirm Basmala above CEREBRO **slot**; wordmark still placeholder.  
3. Spin / orbit sphere → header marks stay fixed (no co-rotation).  
4. Screenshot phone + tablet → Basmala legibility PASS; desktop retina → HOLD.  
5. Eyedropper logos → flat white; canvas `#101D27`; no non-D0 hues.  
6. If `#0A131A` present on objects → label TEST in notes; do not freeze.  
7. Confirm parallax / 4-col / shadow remain toggles.
