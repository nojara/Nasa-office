# MUSA · BrandHeader / Gate — asset provenance (refresh v1.1)

| Field | Value |
|-------|-------|
| **Agent** | MUSA (مُصوِّر) · TOP10 #7 · verified imagery |
| **Agent ID** | `78873ac9-2d44-48c0-8206-15f9295f8158` |
| **Crew** | CEREBRO_DS_v1_1_CREW_TOP10 |
| **Mission** | Provenance only for PersistentBrandHeader + Gate |
| **Date** | 2026-10-21 Cairo · refresh 19:29 EEST |
| **Prior** | v1.0 INFO in crew pack — this file supersedes for lane status |
| **Sources** | Drive `CEREBRO_HANDOFF_KINZO_20261021` · `FINAL_v2.1_20261021_Cairo` · AgentCards v1.5 · TOP10 memory · Kinzo LIVE_v2 · peer BANNA/NASAQ/FAKIR specs |
| **Hard rules observed** | No invented heads (NASAQ/MADAR/NABR/Samna) · no approx CEREBRO wordmark · Basmala 468×76 verified only · desktop retina HOLD · no merge/PR/deploy |

---

## 1. Verdict (one line)

**FINAL_v2.1 supplies READY avatar packs for Gate roster tiles — BrandHeader chrome (Basmala PNG + CEREBRO wordmark) is not in that set; wordmark stays BLOCKED; Basmala file not found on Drive; desktop Basmala stays HOLD; local `/workspace/cerebro_handoff` MISSING.**

---

## 2. Drive roots checked (refresh)

| Root | Drive ID | Role | Refresh note |
|------|----------|------|--------------|
| Handoff | `1Z6HvmyVdBRiP_MnvEGqYF9KAFGGmlvoK` | `CEREBRO_HANDOFF_KINZO_20261021` | Live on Drive; **not** mirrored at `/workspace/cerebro_handoff` |
| Avatar set | `1McFWijvedH0BGLSIzGkfiak6D9G4jaob` | `FINAL_v2.1_20261021_Cairo` | 14 agent folders + meta only |
| Register | `1xqbf5LJe1ZGjK7JEFUTjSmde0n8biT6a` | `register_FINAL_v2.1.csv` | Present |
| README | `1DelEqjkxT9WV8TExeqRSvasSyMPHWQ61` | `README_FINAL_v2.1.md` | Present |
| Checksums | `12g4FDX0g15LSXpOb6IxDPE2pfS98Wo4C` | `SHA256SUMS_FINAL_v2.1.txt` | Present |
| Contact sheet | `1UNe782DXFv44HBA094csaD71OG9r9jQy` | `contact_sheet_FINAL_v2.1.png` | Present |
| Strip 120 | `1wgCUQaX0x6dGbJ0UTeG8t0sXjGucYzzf` | `strip_120_FINAL_v2.1.png` | Present |
| Colour key | `1zQTSFU4PXAfGevj_GqusxD26LwVPUaWy` | `AGENT_COLOUR_KEY_v1.3.jpg` | Handoff root |

**Hunt method (v1.1):** Drive title queries for `Basmala` / `basmala` / `Bismillah` / `bismillah` → **0 files**. Image titles with `468` / `BrandHeader` / `PersistentBrand` → **no Basmala**. FullText hits are blueprint / status docs mentioning the slot — **not** a PNG asset. Local `find` for `*basmala*` under `/workspace` → **0**.

---

## 3. BrandHeader / Gate asset matrix

| # | Asset | Required state | On FINAL_v2.1? | Drive / note | Use now? |
|---|-------|----------------|----------------|--------------|----------|
| A1 | **Basmala PNG 468×76** | Verified only; NASAQ phone/tablet pass; **desktop retina HOLD** | **NO** | **NOT FOUND** — zero title hits; not in handoff root or FINAL_v2.1 | **Do not invent.** Phone/tablet only after verified file lands. Desktop: **HOLD** |
| A2 | **CEREBRO wordmark** | **BLOCKED** white-on-white — placeholder slot only | **NO** | Briefs: pending. Do **not** approx | Placeholder slot only |
| A3 | YAH `wordmark-*` PNGs | Adjacent libraries only | Outside FINAL_v2.1 | `YAHsocialmedia_Folder/marks/` — **not** CEREBRO | **Not a substitute for A2** |
| A4 | Agent avatar packs | READY_v2.1 where approved | **YES — 14 agents** | Per-agent folders under FINAL_v2.1 (§4) | Yes for READY seats |
| A5 | NASAQ / MADAR / NABR / Samna heads | PLACEHOLDER | **NO folders** | No avatar folders in FINAL_v2.1 listing | **PLACEHOLDER only — do not invent** |
| A6 | Colour key | Roster colour check | Handoff root | `AGENT_COLOUR_KEY_v1.3.jpg` | Yes (v1.5 Arabic spellings win) |
| A7 | Contact sheet + 120 strip | Roster overview | Yes | Final set meta | Yes (reference) |
| A8 | Loader 1.8–12s imagery | MADAR PLACEHOLDER until Tarek | N/A | Outside avatar set | Not MUSA invent — HOLD |

---

## 4. FINAL_v2.1 avatar folders — EXISTS (READY)

| Agent | Folder ID | Status | Gate/Header relevance |
|-------|-----------|--------|------------------------|
| BANNA | `1BwaceOE0FRGYJNwaYsQYZbo2kR8TbuFs` | READY_v2.1 | TOP10 implementer |
| BAREED | `1QKNfUKv63_CDSQ1nuC1BBLIWdfqemNjl` | READY_v2.1 | Roster |
| MONTEER | `1c5905nl1Til0eu9fC0ojeKt54Itsi0hE` | READY_v2.1 | Roster |
| ARD | `1vJOBbk8vdGUyI77MEXeeqZXwy48nhjuU` | READY_v2.1 | Roster |
| HAQQ | `1qjwEitnmple5dD6UgWyqsi1ZfRLFIXZv` | READY_v2.1 | Roster |
| LAMHA | `1vl_Ppm2IxN5LmWPFXfbmDp3JwpmLQcJO` | READY_v2.1 | Roster |
| MEHWAR | `1QTk4VH5SykpMLBjt4zqMT4cb1FGST1dw` | READY_v2.1 | Roster |
| GRANDY | `1fDW-dQqkavWs60FXRBQHOxfzaKCCt5XW` | READY_v2.1 | TOP10 |
| BILAL | `1Itfv2jX1TQNFj08gSTMn8HWQy1YcnlTX` | READY_v2.1 | TOP10 |
| **MUSA** | `1A1pYuMfc7iREmVvxIDK9YpBqDOwpqTFw` | READY_v2.1 | TOP10 |
| RASMA | `1xmKV5bZdNHbyYn7Tkiwiqp61TEf4VgkN` | READY_v2.1 | TOP10 · design gate |
| KATIB | `161di0CEYX1N-GdAP7xma-xFlx1mZzIUG` | READY_v2.1 | TOP10 |
| ZEBDA | `16vE5fXWEVzvujd6Me5Z8uRCpPdtYyitE` | READY_v2.1 | TOP10 |
| FAKIR | `1d90RiDGHSjJRNrAUv-Exf41kLxXfyNSX` | READY_v2.1 | TOP10 · design gate |

---

## 5. FINAL_v2.1 — MISSING (do not invent)

| Agent | Status | Evidence |
|-------|--------|----------|
| **NASAQ** | PLACEHOLDER_NO_REFERENCE_HEAD | No folder under FINAL_v2.1 |
| **MADAR** | PLACEHOLDER_NO_REFERENCE_HEAD | Same |
| **NABR** | PLACEHOLDER_NO_REFERENCE_HEAD | Same |
| **Samna / SAMNA** | PLACEHOLDER / PENDING | Same |

---

## 6. What BANNA may wire vs must leave empty

| Slot | Wire | Leave |
|------|------|-------|
| Basmala above CEREBRO | Only verified 468×76 when supplied; phone/tablet per NASAQ | Desktop retina · invented PNG · unproven Drive substitutes |
| CEREBRO wordmark | Empty / pending slot | Any approx / YAH marks / procedural canvas as “final” |
| Agent tiles | FINAL_v2.1 READY packs | NASAQ/MADAR/NABR/Samna invented heads |
| One PersistentBrandHeader | Layout rule (never remount / never spin with sphere) | N/A (code, not asset) |

Peer alignment: BANNA stub `data-asset="basmala-pending"` + `data-wordmark="blocked"`; NASAQ B1–B4 (468×76 / phone·tablet PASS target / desktop **HOLD**); FAKIR P-02 awaits this pack.

---

## 7. Related refs (not approved BrandHeader chrome)

| Ref | Note |
|-----|------|
| Blueprint lockup | Basmala historically text/slot (e.g. 367×61) — **not** the verified 468×76 PNG |
| `YAHsocialmedia_Folder/marks/wordmark-*` | Different product — **banned as CEREBRO wordmark** |
| FullText “Basmala” docs | Spec/status mentions only — no binary asset |

---

## 8. File return

| Deliverable | Path |
|-------------|------|
| Lane status | `outputs/MUSA/LANE_STATUS.md` |
| This provenance | `outputs/MUSA/MUSA_CEREBRO_BrandHeaderGate_PROVENANCE_20261021_Cairo_v1.1_INFO.md` |
| Inventory CSV | `outputs/MUSA/MUSA_CEREBRO_BrandHeaderGate_INVENTORY_20261021_Cairo_v1.1.csv` |
| Blockers | `outputs/MUSA/MUSA_CEREBRO_BrandHeaderGate_BLOCKERS_20261021_Cairo_v1.1.md` |

— MUSA · مُصوِّر · 2026-10-21 Cairo · provenance only · publish nothing
