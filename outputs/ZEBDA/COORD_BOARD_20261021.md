# ZEBDA · Coordination Board — 2026-10-21 Cairo

| Field | Value |
|-------|-------|
| **Agent** | ZEBDA (زِبْدَة) · Coordinator · TOP10 #9 |
| **Agent ID** | `c0ba67ad-0789-443e-868e-bc7c568427a4` |
| **Crew** | CEREBRO_DS_v1_1_CREW_TOP10 |
| **Lead** | Kinzo |
| **Branch target** | `feat/ds-v1-1` only (no new branches / merges / PRs / deploys) |
| **Repo** | `njr39/Cerebro-core` |
| **Pack** | AGENT_ROSTER_SPEC_PACK **v1.5** |
| **Group status** | `ACTIVE_DISPATCH` |
| **Publish** | Internal only — publish nothing |
| **Board by** | ZEBDA · 2026-10-21 Cairo |
| **Sources** | `GROUP.json`, `README.md`, `ZEBDA_AgentCard_v1.5`, TOP10 memory/capabilities |

---

## 1. TOP10 status table

| # | Agent | Role | Avatar | Mission (now) | Status | Blocked by |
|---|-------|------|--------|---------------|--------|------------|
| 1 | **BANNA** بَنّاء | Web design & development | READY_v2.1 | PersistentBrandHeader + Gate/glass P0; obsidian tiles NOT final; leave parallax/4-col/shadow switchable | **DISPATCHED** — awaiting Cerebro-core checkout | Cerebro-core access · wordmark · open Tarek calls |
| 2 | **NASAQ** نَسَق | Design-library / brand-match | PLACEHOLDER | Brand-match + D0 tokens; `#0A131A` test not frozen; Basmala phone/tablet pass; desktop retina HOLD; review before Fakir/Tarek | **QUEUED** — design-gate seat 2; avatar placeholder | Desktop Basmala HOLD · own avatar PLACEHOLDER · Cerebro-core |
| 3 | **RASMA** رَسْمَة | Layouts from approved systems | READY_v2.1 | Layouts from approved systems; AgentCanvas refs; only real lit renders to Tarek; obsidian hero elsewhere | **GATE SEAT 1** — first in design-gate queue | Lit renders pipeline · Cerebro-core |
| 4 | **FAKIR** فاكِر | Executive Creative Director | READY_v2.1 | ECD craft pass after NASAQ; no invented visuals; design-gate third seat | **QUEUED** — design-gate seat 3 (after NASAQ) | NASAQ brand-match · Cerebro-core |
| 5 | **MADAR** مَدَار | Cinematic motion / explainers | PLACEHOLDER | Loader: Tarek owns 0–1.8s only; 1.8–12s MADAR fill = PLACEHOLDER until Tarek; globe lighting elsewhere | **HOLD** — loader fill blocked | Loader 1.8–12s (Tarek) · avatar PLACEHOLDER |
| 6 | **GRANDY** غْرانْدِي | COO · gates / routing | READY_v2.1 | Enforce hard rules; dispatch A/B after gate | **ACTIVE** — rules enforcement | Gate completion before A/B dispatch |
| 7 | **MUSA** مُصوِّر | Verified imagery / provenance | READY_v2.1 | Header/gate assets; provenance only; no invented heads for NASAQ/MADAR/NABR/Samna | **READY** — can supply verified assets | Wordmark slot (no approx) · placeholder avatars rule |
| 8 | **KATIB** كاتِب | Copy EN/AR · proofreading | READY_v2.1 | Gate + BrandHeader UI copy EN/AR; tashkeel as v1.5; no approx wordmark | **READY** — copy path open | Wordmark BLOCKED (placeholder slot only) |
| 9 | **ZEBDA** زِبْدَة | Coordinator | READY_v2.1 | Coordination + minutes; design-gate queue; track open Tarek calls | **ACTIVE** — this board | — |
| 10 | **BILAL** بِلال | PMO Comms / Creator Intelligence | READY_v2.1 | Internal-only status packs; colour-band ownership on INFO/EXEC | **STANDBY** — packs after gate movement | Gate progress · internal-only rule |

**Avatar note:** NASAQ / MADAR (and NABR / Samna outside TOP10) = PLACEHOLDER — do not invent heads.  
**Name note:** HAQQ not HAQI.  
**Obsidian tiles:** still rendering elsewhere — not final.

---

## 2. Design-gate queue

Card / index status: **AWAITING_DESIGN_GATE**

| Order | Seat | Agent | Gate role | State |
|------:|------|-------|-----------|-------|
| 1 | Layouts | **Rasma** | First review — layouts from approved brand systems; lit renders only | **NEXT UP** |
| 2 | Brand-match | **NASAQ** | D0 tokens + brand-match; Basmala phone/tablet; before Fakir | **WAITING** (after Rasma) |
| 3 | ECD craft | **Fakir** | Craft pass; no invented visuals | **WAITING** (after NASAQ) |
| 4 | Final internal | **Nojj** | Final design-gate seat | **WAITING** (after Fakir) |

**Lit-render review order (hard rule):** NASAQ → Fakir → Tarek.

**Post-gate:** GRANDY dispatches A/B. Do not merge / PR / deploy.

---

## 3. Open Tarek calls — OPEN / SWITCHABLE

Crew must **not pick**. Leave switchable in implementation (BANNA / layouts).

| ID | Call | Options | State | Owner |
|----|------|---------|-------|-------|
| TC-01 | Parallax | **6px parallax** OR **none** | **OPEN / SWITCHABLE** | Tarek |
| TC-02 | Status board columns | **4 columns** OR **not** | **OPEN / SWITCHABLE** | Tarek |
| TC-03 | Shadow tone | Tone TBD (do not freeze) | **OPEN / SWITCHABLE** | Tarek |

Related non-call holds (not for crew to resolve):

| ID | Item | State |
|----|------|-------|
| HOLD-shade | Object shade `#0A131A` | Test — **not frozen** |
| HOLD-obsidian | Obsidian tile / hero render | Still rendering — **not final** |

---

## 4. Blockers

| ID | Blocker | Impact | Who unblocks | Severity |
|----|---------|--------|--------------|----------|
| **BLK-01** | **Cerebro-core access** — `njr39/Cerebro-core` not resolvable from this environment (no checkout of `feat/ds-v1-1`) | BANNA P0 (header/gate), NASAQ tokens-in-repo, RASMA layout wiring, all code-path work | Kinzo / Tarek — grant repo access or mount branch | **P0** |
| **BLK-02** | **CEREBRO wordmark** — white-on-white BLOCKED; placeholder slot only; no approx mark | BrandHeader, KATIB copy pairing, MUSA asset finish | Tarek / brand — deliver correct wordmark | **P0** |
| **BLK-03** | **Loader 1.8–12s** — MADAR fill = PLACEHOLDER until Tarek; crew may only treat **0–1.8s** as Tarek timeline | MADAR motion mission; Gate loader completeness | Tarek | **P1** |
| **BLK-04** | **Desktop Basmala** — PNG 468×76: NASAQ pass phone/tablet; **desktop retina HOLD** | PersistentBrandHeader desktop; NASAQ brand-match close | NASAQ after retina asset / Tarek OK | **P1** |

### Soft / standing constraints (not blockers, still enforced)

- No touch: voice, sound, auth, Google config, gesture thresholds, WebGL renderer, dependencies.
- No invent avatars for NASAQ / MADAR / NABR / Samna.
- Internal only — no publish.
- Open Tarek calls stay switchable (see §3).

---

## 5. Coordination notes (minutes)

1. Group is **ACTIVE_DISPATCH**; AgentCards pack status remains **AWAITING_DESIGN_GATE**.
2. ZEBDA keeps queue order **Rasma → NASAQ → Fakir → Nojj** and does not resolve TC-01…03.
3. Drive handoff folder available: `CEREBRO_HANDOFF_KINZO_20261021` (`1Z6HvmyVdBRiP_MnvEGqYF9KAFGGmlvoK`); FINAL_v2.1 avatars set id `1McFWijvedH0BGLSIzGkfiak6D9G4jaob`.
4. Until BLK-01 clears, code work on Cerebro-core is blocked; crew may prep specs, copy, provenance lists, and status packs (BILAL) as internal artifacts only.
5. Next coordination pulse: after Rasma gate movement or Cerebro-core access grant — whichever lands first.

---

## 6. File return

| Deliverable | Path |
|-------------|------|
| This board | `CREW_GROUP_TOP10/outputs/ZEBDA/COORD_BOARD_20261021.md` |

**Blockers returned:** BLK-01 Cerebro-core access · BLK-02 wordmark · BLK-03 loader 1.8–12s · BLK-04 desktop Basmala.

— ZEBDA · Coordinator · 2026-10-21 Cairo
