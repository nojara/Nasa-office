# MUSA · BrandHeader / Gate — asset provenance

| Field | Value |
|-------|-------|
| **Agent** | MUSA (مُصوِّر) · TOP10 #7 · verified imagery |
| **Agent ID** | `78873ac9-2d44-48c0-8206-15f9295f8158` |
| **Crew** | CEREBRO_DS_v1_1_CREW_TOP10 |
| **Mission** | Provenance only for PersistentBrandHeader + Gate |
| **Date** | 2026-10-21 Cairo |
| **Sources** | Drive `CEREBRO_HANDOFF_KINZO_20261021` · `FINAL_v2.1_20261021_Cairo` · AgentCards v1.5 · TOP10 memory · Kinzo dispatch |
| **Hard rules observed** | No invented heads (NASAQ/MADAR/NABR/Samna) · no approx CEREBRO wordmark · Basmala 468×76 listed · desktop retina HOLD |

---

## 1. Verdict (one line)

**FINAL_v2.1 supplies READY avatar packs for Gate roster tiles — BrandHeader chrome (Basmala PNG + CEREBRO wordmark) is not in that set; wordmark stays BLOCKED; desktop Basmala stays HOLD.**

---

## 2. Drive roots checked

| Root | Drive ID | Role |
|------|----------|------|
| Handoff | `1Z6HvmyVdBRiP_MnvEGqYF9KAFGGmlvoK` | `CEREBRO_HANDOFF_KINZO_20261021` |
| Avatar set | `1McFWijvedH0BGLSIzGkfiak6D9G4jaob` | `FINAL_v2.1_20261021_Cairo` |
| Register | `1xqbf5LJe1ZGjK7JEFUTjSmde0n8biT6a` | `register_FINAL_v2.1.csv` |
| README | `1DelEqjkxT9WV8TExeqRSvasSyMPHWQ61` | `README_FINAL_v2.1.md` |
| Checksums | `12g4FDX0g15LSXpOb6IxDPE2pfS98Wo4C` | `SHA256SUMS_FINAL_v2.1.txt` |
| Contact sheet | `1UNe782DXFv44HBA094csaD71OG9r9jQy` | `contact_sheet_FINAL_v2.1.png` |
| Strip 120 | `1wgCUQaX0x6dGbJ0UTeG8t0sXjGucYzzf` | `strip_120_FINAL_v2.1.png` |
| Colour key | `1zQTSFU4PXAfGevj_GqusxD26LwVPUaWy` | `AGENT_COLOUR_KEY_v1.3.jpg` (handoff root; spellings → v1.5) |

Search method: Drive title/fullText queries for `Basmala` / `basmala` / `Bismillah` / `468` / `BrandHeader` / `PersistentBrand` / CEREBRO wordmark image assets. **No Basmala PNG file and no approved CEREBRO wordmark PNG were found in FINAL_v2.1 or under searchable Drive titles.**

---

## 3. BrandHeader / Gate asset matrix

| # | Asset (for PersistentBrandHeader / Gate) | Required state | On FINAL_v2.1? | Drive / note | Use now? |
|---|------------------------------------------|----------------|----------------|--------------|----------|
| A1 | **Basmala PNG 468×76** | Listed; NASAQ phone/tablet pass; **desktop retina HOLD** | **NO** — not in pack | No Drive file titled Basmala/Bismillah/468 under handoff or FINAL_v2.1 | Phone/tablet: only if operator supplies verified file outside this pack. **Do not invent.** Desktop: **HOLD** |
| A2 | **CEREBRO wordmark** (flat white logos rule) | **BLOCKED** white-on-white — placeholder slot only | **NO** | Blueprint / briefs: `[Cerebro wordmark pending]`. Procedural `identity.wordmark` in `cerebro.assets.manifest.json` = canvas text, **not** approved brand art — **do not approximate** | Placeholder slot only |
| A3 | NOJARA white logos (library) | Adjacent chrome only | Outside FINAL_v2.1 | e.g. `njr_logo_*_white.png`, `logo-white.png` — **NOJARA**, not CEREBRO wordmark | Not a substitute for A2 |
| A4 | Agent avatar packs (Gate / AgentCard tiles) | READY_v2.1 where approved | **YES — 14 agents** | Per-agent folders under FINAL_v2.1 (see §4) | Yes for READY seats |
| A5 | NASAQ / MADAR / NABR / Samna heads | PLACEHOLDER | **NO folders / no L3** | Register: PENDING / no reference head | **PLACEHOLDER only — do not invent** |
| A6 | Colour key | Roster colour check | Handoff root | `AGENT_COLOUR_KEY_v1.3.jpg` | Yes (v1.5 Arabic spellings win) |
| A7 | Contact sheet + 120 strip | Roster overview | Yes | Final set meta | Yes (reference) |
| A8 | Loader 1.8–12s imagery | MADAR fill PLACEHOLDER until Tarek | N/A in FINAL_v2.1 | Outside avatar set | Not MUSA invent — HOLD |

---

## 4. FINAL_v2.1 avatar folders — EXISTS (READY)

Per AgentCard index + register. Each READY folder expected: L0–L6 + `master` + `flat` + `1024`/`512`/`256`/`120` named `*_AVATAR_FINAL_v2.1_20261021_Cairo_*`.

| Agent | Folder ID | Status | Gate/Header relevance |
|-------|-----------|--------|------------------------|
| BANNA | `1BwaceOE0FRGYJNwaYsQYZbo2kR8TbuFs` | READY_v2.1 | TOP10 implementer |
| BAREED | `1QKNfUKv63_CDSQ1nuC1BBLIWdfqemNjl` | READY_v2.1 | Roster |
| MONTEER | `1c5905nl1Til0eu9fC0ojeKt54Itsi0hE` | READY_v2.1 | Roster |
| ARD | `1vJOBbk8vdGUyI77MEXeeqZXwy48nhjuU` | READY_v2.1 | Roster |
| HAQQ | `1qjwEitnmple5dD6UgWyqsi1ZfRLFIXZv` | READY_v2.1 | Roster (name HAQQ not HAQI) |
| LAMHA | `1vl_Ppm2IxN5LmWPFXfbmDp3JwpmLQcJO` | READY_v2.1 | Roster |
| MEHWAR | `1QTk4VH5SykpMLBjt4zqMT4cb1FGST1dw` | READY_v2.1 | Roster |
| GRANDY | `1fDW-dQqkavWs60FXRBQHOxfzaKCCt5XW` | READY_v2.1 | TOP10 |
| BILAL | `1Itfv2jX1TQNFj08gSTMn8HWQy1YcnlTX` | READY_v2.1 | TOP10 |
| **MUSA** | `1A1pYuMfc7iREmVvxIDK9YpBqDOwpqTFw` | READY_v2.1 | TOP10 · verified L3 head present |
| RASMA | `1xmKV5bZdNHbyYn7Tkiwiqp61TEf4VgkN` | READY_v2.1 | TOP10 · design gate |
| KATIB | `161di0CEYX1N-GdAP7xma-xFlx1mZzIUG` | READY_v2.1 | TOP10 |
| ZEBDA | `16vE5fXWEVzvujd6Me5Z8uRCpPdtYyitE` | READY_v2.1 | TOP10 |
| FAKIR | `1d90RiDGHSjJRNrAUv-Exf41kLxXfyNSX` | READY_v2.1 | TOP10 · design gate |

**MUSA sample (verified on Drive):** master, flat, L0, L3–L5 present among listed files (full 13-file set per README naming).

---

## 5. FINAL_v2.1 — MISSING (do not invent)

| Agent | Status | Evidence |
|-------|--------|----------|
| **NASAQ** | PLACEHOLDER_NO_REFERENCE_HEAD | No folder in `avatar_folders`; register open item |
| **MADAR** | PLACEHOLDER_NO_REFERENCE_HEAD | Same |
| **NABR** | PLACEHOLDER_NO_REFERENCE_HEAD | Same |
| **Samna / SAMNA** | PLACEHOLDER / PENDING | Register row: no files, not on contact sheet |

README open items also flag soft Phase-2 hi-res sources for REF+AR heads (GRANDY, BILAL, MUSA, RASMA, KATIB, ZEBDA, FAKIR) — **usable as READY_v2.1**, soft detail noted, not a Gate blocker for tile presence.

---

## 6. What BANNA may wire vs must leave empty

| Slot | Wire | Leave |
|------|------|-------|
| Basmala above CEREBRO | Only verified 468×76 when supplied; phone/tablet per NASAQ | Desktop retina · invented PNG |
| CEREBRO wordmark | Empty / pending slot | Any approx / procedural canvas mark as “final” |
| Agent tiles | FINAL_v2.1 READY packs (prefer L3 head or 120/256 exports per UI) | NASAQ/MADAR/NABR/Samna invented heads |
| One PersistentBrandHeader instance | Layout rule (never remount / never spin with sphere) | N/A (code, not asset) |

---

## 7. Related refs (not FINAL_v2.1 chrome)

| Ref | ID | Note |
|-----|-----|------|
| Blueprint lockup slot | RASMA blueprints v0.1–v0.3 | Logo 176×44; wordmark pending; Bismillah historically **367×61 text**, not the 468×76 PNG |
| `cerebro.assets.manifest.json` | `1RSwkefP0nQFWTITVwPBsG2LFuClnHoUo` | Procedural identity only — **not** brand-approved wordmark art |
| Upgrade manifest `notCreated` | includes **approved logos** | Confirms logos not shipped in that export |

---

## 8. File return

| Deliverable | Path |
|-------------|------|
| This provenance | `CREW_GROUP_TOP10/outputs/MUSA/MUSA_CEREBRO_BrandHeaderGate_PROVENANCE_20261021_Cairo_v1.0_INFO.md` |
| Inventory CSV | `CREW_GROUP_TOP10/outputs/MUSA/MUSA_CEREBRO_BrandHeaderGate_INVENTORY_20261021_Cairo_v1.0.csv` |
| Blockers | `CREW_GROUP_TOP10/outputs/MUSA/MUSA_CEREBRO_BrandHeaderGate_BLOCKERS_20261021_Cairo_v1.0.md` |

— MUSA · مُصوِّر · 2026-10-21 Cairo · provenance only · publish nothing
