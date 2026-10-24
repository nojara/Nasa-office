# GRANDY · Ops Gate Checklist
**غْرانْدِي · COO · final internal gate · v1.1 refresh**

| Field | Value |
|---|---|
| Agent | GRANDY (`e100862f-a1c7-48ef-9a8e-490d3332c5ec`) |
| Pack | AGENT_ROSTER_SPEC_PACK **v1.5 LOCKED** |
| Crew | CEREBRO_DS_v1_1_CREW_TOP10 · member #6 |
| Branch target | `feat/ds-v1-1` only |
| Date | 2026-10-21 Cairo · refresh **19:29** |
| Status | INTERNAL · `publish: false` |
| Accent | `#173349` / text `#EEE5D4` |
| Prior | v1.0 kept beside this file (never overwrite) |

---

## 0 · Design-gate order (CONFIRMED)

**AgentCard / Kinzo sync gate (mandatory):**

1. **Rasma** — layouts from approved brand systems  
2. **NASAQ** — brand-match + D0 tokens  
3. **Fakir** — ECD craft pass  
4. **Nojj** — final owner approve / revise  

**Pack output review chain (after craft, before Cerebro surface):**  
Rasma → NASAQ → Fakir → **Grandy ops gate** → Tarek (Nojj)

ZEBDA keeps the queue. GRANDY does not reorder seats. Parallel prep ≠ gate PASS.

---

## 1 · Hard-rules lock (fail any → STOP)

- [x] Work scoped to `feat/ds-v1-1` artifacts only *(core unreachable → stage `outputs/GRANDY/` only; no fake branch)*  
- [x] No new branches · no merges · no PRs · no deploys *(this turn)*  
- [x] Untouched: voice · sound · auth · Google config · gesture thresholds · WebGL · dependencies  
- [x] Open Tarek calls left **switchable** (do not pick): (1) 6px parallax or none (2) status board 4-col or not (3) shadow tone  
- [x] Obsidian tile test = **not final**  
- [x] NASAQ / MADAR / NABR / Samna avatars = **PLACEHOLDER** (no invented heads)  
- [x] Name spelling **HAQQ** (not HAQI)  
- [x] Internal only · publish nothing · no client send  

---

## 2 · Pre-dispatch identity / brand

- [x] Source pack v1.5 LOCKED; AgentCards `AWAITING_DESIGN_GATE`  
- [x] HAQQ spelling verified (roster + MUSA provenance row)  
- [ ] Arabic names + tashkeel match v1.5 (Katib) — microcopy staged; gate not closed  
- [ ] Field colours match AGENT_COLOUR_KEY_v1.3 / v1.5 `avatar.field_colour` — pending NASAQ brand-match PASS  
- [ ] Widget layers/buttons/toggles/chat match `widget_spec_shared`  
- [x] FINAL_v2.1 avatars used where `READY_v2.1`; placeholders only for NASAQ/MADAR/NABR/Samna  
- [ ] PersistentBrandHeader: one instance; Basmala above CEREBRO; never spins with sphere; never remounts — BANNA stubs only  
- [x] CEREBRO wordmark: **BLOCKED** (white-on-white) — placeholder slot only  
- [x] Basmala PNG 468×76: NASAQ pass phone/tablet path; desktop retina **HOLD**  
- [x] Loader: Tarek 0–1.8s only; 1.8–12s = placeholder (MADAR spec staged)  
- [x] Object shade `#0A131A` = test, not frozen  

---

## 3 · Crew mission readiness (TOP10) — live refresh

| # | Agent | Lane prep | Gate check | Go? |
|---|---|---|---|---|
| 1 | BANNA | `PersistentBrandHeader.spec.md` · `GateKeys.spec.md` · stubs | P0 on `feat/ds-v1-1` blocked (no core) | ☐ |
| 2 | NASAQ | Brand-match checklist staged | Brand PASS not signed; avatar PLACEHOLDER | ☐ |
| 3 | RASMA | `outputs/RASMA/` empty | Seat 1 layout package missing | ☐ |
| 4 | FAKIR | Craft checklist + blockers | Craft NOT STARTED — blocked on NASAQ | ☐ |
| 5 | MADAR | Loader 0–1.8s motion spec | 1.8–12s PLACEHOLDER; avatar PLACEHOLDER | ☐ |
| 6 | GRANDY | This checklist + dispatch v1.1 + LANE_STATUS | Ops HOLD enforced | ☑ HOLD |
| 7 | MUSA | Provenance + blockers | No invented heads; Basmala file not in pack | ☐ |
| 8 | KATIB | Gate/BrandHeader microcopy INTERNAL | No approx wordmark; HAQQ noted | ☐ |
| 9 | ZEBDA | `outputs/ZEBDA/` empty this box | Queue minutes TBD | ☐ |
| 10 | BILAL | Kinzo→39 status + blockers INFO | Colour-band ownership ready for A/B later | ☐ |

---

## 4 · Output-standard gate (A / B / C)

### A · INFO (→ Cerebro)
- [ ] JPEG sRGB q92 · 3840×2160 (16:9)  
- [x] Stand-in facts EN/AR · status · 3 key facts · owner · Cairo date (`*_INFO.md` v1.1)  
- [ ] Naming binary: `{AGENT}_CEREBRO_DS_v1.1_{DELIVERABLE}_20261021_Cairo_v{X.Y}_INFO.jpg`  

### B · EXEC3 (→ Cerebro)
- [ ] PDF · 3 pages · 1920×1080  
- [x] Stand-in p1/p2/p3 (`*_EXEC3.md` v1.1)  
- [ ] Naming binary: `…_EXEC3.pdf`  

### C · FULL (→ Drive only · elwalaagents)
- [x] Complete deliverable + sources + QA log + version history (md pack)  
- [ ] Drive upload `CEREBRO_HANDOFF_KINZO_20261021` when PASS  
- [x] Naming: `…_FULL.md` stand-in · never overwrite — bump version  
- [x] Not for Cerebro UI  

### Shared
- [x] Design-gate order respected before Nojj  
- [ ] Binary bilingual visual pass after NASAQ→Fakir  
- [ ] NJR_SYS_26 palette & fonts on binary renders  

**Dispatch A/B to Cerebro: AFTER design-gate + GRANDY PASS only.**

---

## 5 · Lit-render review (separate from AgentCard gate)

Order for lit renders: **NASAQ → Fakir → Tarek**.  
Only real lit renders leave the queue. Obsidian hero elsewhere = do not forward as final.

---

## 6 · GRANDY pass / hold

| Result | Meaning |
|---|---|
| **PASS** | Hard rules green · design-gate seats complete · A/B ready for Cerebro · C filed to Drive |
| **HOLD** | Any hard-rule red · Cerebro-core unreachable · placeholder head invented · open call resolved without Tarek · wordmark approx |
| **REJECT** | Publish attempted · merge/PR/deploy · HAQI spelling · branch other than `feat/ds-v1-1` |

**Current GRANDY ruling:** **HOLD** — Cerebro-core access + design gate open (see blockers v1.1). Hard rules compliance this turn: green.

---

*Internal only · Kinzo lead · GRANDY COO gate · 2026-10-21 Cairo v1.1*
