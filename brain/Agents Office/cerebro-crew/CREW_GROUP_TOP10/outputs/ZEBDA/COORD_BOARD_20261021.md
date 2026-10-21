# ZEBDA · Coordination Board — 2026-10-21 Cairo

| Field | Value |
|-------|-------|
| **Agent** | ZEBDA (زِبْدَة) · Coordinator · TOP10 #9 |
| **Agent ID** | `c0ba67ad-0789-443e-868e-bc7c568427a4` |
| **bcId (this run)** | `bc-c7d5151f-3284-5df8-97e3-ee3f5438b4f5` |
| **Crew** | CEREBRO_DS_v1_1_CREW_TOP10 |
| **Lead** | Kinzo (Tarek confirmed Kinzo · 21 Oct 19:13 Cairo) |
| **Branch target** | `feat/ds-v1-1` only — no merge / PR / deploy / new branches |
| **Repo target** | `njr39/Cerebro-core` |
| **Pack** | AGENT_ROSTER_SPEC_PACK **v1.5** |
| **Group status** | `LIVE_RUNNING` · wave `LIVE_v2_20261021` |
| **Snapshot** | 2026-10-21 **19:31 Cairo** · cloud agents list + local `outputs/` |
| **Publish** | Internal only — publish nothing |
| **Board by** | ZEBDA · rebuild (COORD + LANE) |

---

## 0. Live crew pulse (RUNNING)

Wave `LIVE_v2_20261021` — **10/10 RUNNING** on `nojara/Nasa-office` (Agents Office). Cerebro-core still unreachable from runners.

| # | Latin | bcId | Cloud status | Local `outputs/<LATIN>/` |
|---|-------|------|--------------|--------------------------|
| 1 | BANNA | `bc-af4c1b3f-e4d6-57c8-a7e6-8c35749ff8a3` | **RUNNING** | Specs + stubs (header / gate / switchables) |
| 2 | NASAQ | `bc-4d0dd0cc-2b08-509b-9835-a2e413892466` | **RUNNING** | Brand-match checklist Gate/BrandHeader |
| 3 | RASMA | `bc-7dbb0aea-6a8a-5385-8675-9522325e4c52` | **RUNNING** | **Empty** — gate seat 1 not landed yet |
| 4 | FAKIR | `bc-eb4cb32d-a72c-5b9b-8dfa-2c4c08ea4dc1` | **RUNNING** | Craft checklist EXEC3 + blockers |
| 5 | MADAR | `bc-e9be0bdb-1f4f-5be5-a0d7-1a14e8a85c78` | **RUNNING** | Loader motion spec 0–1.8s |
| 6 | GRANDY | `bc-2453080c-2f51-508f-bbf7-d2071e34010a` | **RUNNING** | Ops gate INFO/EXEC3/FULL + dispatch + blockers |
| 7 | MUSA | `bc-3ad4dbef-8c1a-5bc1-936e-320ebc3a648e` | **RUNNING** | Provenance INFO + blockers |
| 8 | KATIB | `bc-dd9dda53-c729-5700-ac81-6ec219cd6eaf` | **RUNNING** | Gate/BrandHeader microcopy INTERNAL |
| 9 | ZEBDA | `bc-c7d5151f-3284-5df8-97e3-ee3f5438b4f5` | **RUNNING** | This board + `LANE_STATUS.md` |
| 10 | BILAL | `bc-7f6a2a56-b8a0-58fe-b7e9-556c5535da41` | **RUNNING** | Kinzo→39 status outline + blockers + return JSON |

**Prior wave (IDLE):** earlier `* lane` sessions for all ten remain IDLE — superseded by LIVE_v2; do not double-count.

**Companion lane sheet:** `LANE_STATUS.md` (same folder).

---

## 1. TOP10 status table

| # | Agent | Role | Avatar | Mission (now) | Live lane | Blocked by |
|---|-------|------|--------|---------------|-----------|------------|
| 1 | **BANNA** بَنّاء | Web design & development | READY_v2.1 | PersistentBrandHeader + Gate/glass P0; obsidian NOT final; TC switchable | **RUNNING** · stubs ready · **code HOLD** | Cerebro-core · wordmark · TC-01…03 |
| 2 | **NASAQ** نَسَق | Design-library / brand-match | PLACEHOLDER | Brand-match + D0; Basmala phone/tablet; desktop retina HOLD; before Fakir/Tarek | **RUNNING** · checklist landed · **gate seat 2** | After RASMA · desktop Basmala · avatar PLACEHOLDER |
| 3 | **RASMA** رَسْمَة | Layouts from approved systems | READY_v2.1 | Layouts; AgentCanvas refs; only real lit to Tarek | **RUNNING** · **GATE SEAT 1 NEXT** · no local artifact yet | Lit package · Cerebro-core |
| 4 | **FAKIR** فاكِر | ECD | READY_v2.1 | Craft after NASAQ; no invented visuals; gate seat 3 | **RUNNING** · checklist armed · craft PASS **BLOCKED** | NASAQ N-01…N-05 · peer evidence |
| 5 | **MADAR** مَدَار | Motion / explainers | PLACEHOLDER | Spec 0–1.8s only; 1.8–12s PLACEHOLDER | **RUNNING** · 0–1.8s spec · fill **HOLD** | Loader 1.8–12s (Tarek) · avatar |
| 6 | **GRANDY** غْرانْدِي | COO · gates / routing | READY_v2.1 | Enforce hard rules; A/B after gate | **RUNNING** · ops HOLD · dispatch plan up | Gate + Cerebro-core before A/B |
| 7 | **MUSA** مُصوِّر | Imagery / provenance | READY_v2.1 | Verified assets; no invented heads | **RUNNING** · provenance pack | Wordmark · Basmala PNG hunt · placeholders |
| 8 | **KATIB** كاتِب | Copy EN/AR | READY_v2.1 | Gate + BrandHeader strings; tashkeel; no approx wordmark | **RUNNING** · microcopy pack | Wordmark BLOCKED |
| 9 | **ZEBDA** زِبْدَة | Coordinator | READY_v2.1 | Minutes; queue Rasma→NASAQ→Fakir→Nojj; track TC | **RUNNING** · board rebuild | — |
| 10 | **BILAL** بِلال | PMO Comms | READY_v2.1 | Internal status packs; colour-band INFO/EXEC | **RUNNING** · Kinzo→39 pack | Gate progress · internal-only |

**Avatar note:** NASAQ / MADAR (/ NABR / Samna) = PLACEHOLDER — do not invent.  
**Name:** HAQQ not HAQI.  
**Obsidian tiles:** rendering elsewhere — not final.

---

## 2. Design-gate queue (locked)

**Order (do not skip):** Rasma → NASAQ → Fakir → Nojj

| Order | Seat | Agent | Gate role | State @ snapshot |
|------:|------|-------|-----------|------------------|
| 1 | Layouts | **Rasma** | Layouts from approved systems; lit only | **NEXT UP** · RUNNING · folder empty |
| 2 | Brand-match | **NASAQ** | D0 + brand-match; Basmala phone/tablet | **WAITING** · checklist prep OK · not seat-cleared |
| 3 | ECD craft | **Fakir** | Craft pass; no invent | **WAITING** · checklist armed · PASS blocked |
| 4 | Final internal | **Nojj** | APPROVE / REVISE | **WAITING** |

**Lit-render review (hard):** NASAQ → Fakir → Tarek.  
**Post-gate:** GRANDY A/B — never merge/PR/deploy.

---

## 3. Open Tarek calls — OPEN / SWITCHABLE

Crew **must not pick**. Leave switchable (BANNA stubs: `switchables.ts`).

| ID | Call | Options | State | Owner |
|----|------|---------|-------|-------|
| **TC-01** | Parallax | **6px** OR **none** | **OPEN / SWITCHABLE** | Tarek |
| **TC-02** | Status board columns | **4 columns** OR **not** | **OPEN / SWITCHABLE** | Tarek |
| **TC-03** | Shadow tone | Tone unset — do not freeze | **OPEN / SWITCHABLE** | Tarek |

Related holds (not picks):

| ID | Item | State |
|----|------|-------|
| HOLD-shade | `#0A131A` object shade | TEST — not frozen |
| HOLD-obsidian | Obsidian tile / hero | Not final |
| HOLD-loader-fill | MADAR 1.8–12s | PLACEHOLDER until Tarek |

---

## 4. Blockers

| ID | Blocker | Impact | Who unblocks | Severity |
|----|---------|--------|--------------|----------|
| **BLK-01** | **Cerebro-core access** — `njr39/Cerebro-core` @ `feat/ds-v1-1` not reachable from Nasa-office runners | BANNA paste / Wave 2 build / in-repo token check | Kinzo / 39 / Tarek — grant access | **P0** |
| **BLK-02** | **CEREBRO wordmark** white-on-white — placeholder slot only; no approx | BrandHeader · KATIB · MUSA finish | Tarek / brand | **P0** |
| **BLK-03** | **Basmala PNG 468×76** not verified in FINAL_v2.1 / handoff hits (MUSA) | Header stack · NASAQ phone/tablet pass | Brand / NASAQ / Tarek | **P0** |
| **BLK-04** | **Loader 1.8–12s** PLACEHOLDER until Tarek | MADAR fill · Gate loader completeness | Tarek | **P1** |
| **BLK-05** | **Desktop Basmala retina HOLD** | PersistentBrandHeader desktop close | NASAQ after asset / Tarek | **P1** |
| **BLK-06** | **Design-gate idle** — RASMA seat 1 has no landed package | Serial gate cannot advance | RASMA start → … → Nojj | **P1** |

### Standing constraints (enforced, not “picked”)
- No touch: voice, sound, auth, Google config, gesture, WebGL, dependencies.
- No invent heads for NASAQ / MADAR / NABR / Samna.
- Internal only.
- TC-01…03 stay switchable (§3).

---

## 5. Minutes (coordination)

1. **LIVE_v2** fired ~**19:28:51 Cairo** (2026-10-21); ZEBDA `outputs/` folder was missing on prior local tree — **created/staged** this rebuild.
2. Specs/copy/ops packs are landing in parallel; **design-gate serial still blocked at RASMA** (empty outputs).
3. GRANDY ruling remains **HOLD** (core access + gate). BILAL route Kinzo→39 mirrors B-01…B-03.
4. Drive handoff: `CEREBRO_HANDOFF_KINZO_20261021`. FINAL_v2.1 READY heads usable; placeholders stay empty.
5. ZEBDA does **not** resolve TC-01…03. Next pulse: RASMA gate package **or** Cerebro-core access — whichever first.

---

## 6. File return

| Deliverable | Path |
|-------------|------|
| Coordination board | `CREW_GROUP_TOP10/outputs/ZEBDA/COORD_BOARD_20261021.md` |
| Lane status | `CREW_GROUP_TOP10/outputs/ZEBDA/LANE_STATUS.md` |
| Mirror (stage root) | `outputs/ZEBDA/` (same two files) |

**latin:** ZEBDA  
**started-on:** 2026-10-21 19:28:51 Cairo (LIVE_v2 / this bcId)  
**blockers:** BLK-01…06 (see §4)

— ZEBDA · Coordinator · 2026-10-21 Cairo · internal
