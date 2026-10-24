# GRANDY · Ops Gate Checklist
**غْرانْدِي · COO · final internal gate**

| Field | Value |
|---|---|
| Agent | GRANDY (`e100862f-a1c7-48ef-9a8e-490d3332c5ec`) |
| Pack | AGENT_ROSTER_SPEC_PACK **v1.5 LOCKED** |
| Crew | CEREBRO_DS_v1_1_CREW_TOP10 · member #6 |
| Branch target | `feat/ds-v1-1` only |
| Date | 2026-10-21 Cairo |
| Status | INTERNAL · `publish: false` |
| Accent | `#173349` / text `#EEE5D4` |

---

## 0 · Design-gate order (CONFIRMED)

**AgentCard / Kinzo sync gate (mandatory):**

1. **Rasma** — layouts from approved brand systems  
2. **NASAQ** — brand-match + D0 tokens  
3. **Fakir** — ECD craft pass  
4. **Nojj** — final owner approve / revise  

**Pack output review chain (after craft, before Cerebro surface):**  
Rasma → NASAQ → Fakir → **Grandy ops gate** → Tarek (Nojj)

ZEBDA keeps the queue. GRANDY does not reorder seats.

---

## 1 · Hard-rules lock (fail any → STOP)

- [ ] Work scoped to `feat/ds-v1-1` artifacts only  
- [ ] No new branches · no merges · no PRs · no deploys  
- [ ] Untouched: voice · sound · auth · Google config · gesture thresholds · WebGL · dependencies  
- [ ] Open Tarek calls left **switchable** (do not pick): (1) 6px parallax or none (2) status board 4-col or not (3) shadow tone  
- [ ] Obsidian tile test = **not final**  
- [ ] NASAQ / MADAR / NABR / Samna avatars = **PLACEHOLDER** (no invented heads)  
- [ ] Name spelling **HAQQ** (not HAQI)  
- [ ] Internal only · publish nothing · no client send  

---

## 2 · Pre-dispatch identity / brand

- [ ] Source pack v1.5 LOCKED; AgentCards `AWAITING_DESIGN_GATE`  
- [ ] HAQQ spelling verified on card + colour key  
- [ ] Arabic names + tashkeel match v1.5 (Katib)  
- [ ] Field colours match AGENT_COLOUR_KEY_v1.3 / v1.5 `avatar.field_colour`  
- [ ] Widget layers/buttons/toggles/chat match `widget_spec_shared`  
- [ ] FINAL_v2.1 avatars used where `READY_v2.1`; placeholders only for NASAQ/MADAR/NABR/Samna  
- [ ] PersistentBrandHeader: one instance; Basmala above CEREBRO; never spins with sphere; never remounts  
- [ ] CEREBRO wordmark: **BLOCKED** (white-on-white) — placeholder slot only  
- [ ] Basmala PNG 468×76: NASAQ pass phone/tablet; desktop retina **HOLD**  
- [ ] Loader: Tarek 0–1.8s only; 1.8–12s = placeholder  
- [ ] Object shade `#0A131A` = test, not frozen  

---

## 3 · Crew mission readiness (TOP10)

| # | Agent | Gate check | Go? |
|---|---|---|---|
| 1 | BANNA | PersistentBrandHeader + Gate/glass P0 on `feat/ds-v1-1`; open calls switchable | ☐ |
| 2 | NASAQ | Brand-match / D0; Basmala phone/tablet; review before Fakir | ☐ |
| 3 | RASMA | Layouts from approved systems; only real lit renders forward | ☐ |
| 4 | FAKIR | ECD after NASAQ; no invented visuals | ☐ |
| 5 | MADAR | Loader 0–1.8s only; 1.8–12s placeholder; avatar PLACEHOLDER | ☐ |
| 6 | GRANDY | This checklist + A/B/C dispatch | ☐ |
| 7 | MUSA | Provenance only; no invented heads | ☐ |
| 8 | KATIB | Gate + BrandHeader copy EN/AR; tashkeel; no approx wordmark | ☐ |
| 9 | ZEBDA | Minutes; queue Rasma→NASAQ→Fakir→Nojj; track open calls | ☐ |
| 10 | BILAL | Internal status packs; colour-band on INFO/EXEC | ☐ |

---

## 4 · Output-standard gate (A / B / C)

### A · INFO (→ Cerebro)
- [ ] JPEG sRGB q92 · 3840×2160 (16:9)  
- [ ] One-glance: title EN/AR · status · 3 key facts · owner avatar · Cairo date  
- [ ] Naming: `{AGENT}_CEREBRO_DS_v1.1_{DELIVERABLE}_20261021_Cairo_v{X.Y}_INFO.jpg`  

### B · EXEC3 (→ Cerebro)
- [ ] PDF · 3 pages · 1920×1080  
- [ ] p1 What it is + status · p2 Key findings / decisions · p3 Next steps / owners / Cairo dates  
- [ ] Naming: `…_EXEC3.pdf`  

### C · FULL (→ Drive only · elwalaagents)
- [ ] Complete deliverable + sources + QA log + version history  
- [ ] Destination: Drive `CEREBRO_HANDOFF_KINZO_20261021` (not Cerebro UI)  
- [ ] Naming: `…_FULL.pdf` (or md stand-in until design-gate binary pass)  
- [ ] Never overwrite — bump version  

### Shared
- [ ] Bilingual EN/AR; Arabic RTL with tashkeel on names  
- [ ] NJR_SYS_26 palette & fonts  
- [ ] Design-gate order respected before Nojj  

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

**Current GRANDY ruling:** **HOLD** — see `GRANDY_CEREBRO_DS_v1.1_BLOCKERS_20261021_Cairo_v1.0.md` (Cerebro-core access blocker; design gate still open).

---

*Internal only · Kinzo lead · GRANDY COO gate · 2026-10-21 Cairo*
