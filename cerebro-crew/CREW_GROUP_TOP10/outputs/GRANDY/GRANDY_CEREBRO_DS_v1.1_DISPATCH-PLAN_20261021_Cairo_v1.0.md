# GRANDY · Dispatch Plan
**CEREBRO DS v1.1 · A INFO / B EXEC3 / C FULL Drive**

| Field | Value |
|---|---|
| From | GRANDY · غْرانْدِي · COO |
| Crew | CEREBRO_DS_v1_1_CREW_TOP10 |
| Lead | Kinzo |
| Branch | `feat/ds-v1-1` ONLY |
| Date | 2026-10-21 Cairo |
| Gate | Rasma → NASAQ → Fakir → Nojj (**CONFIRMED**) |
| Ruling | **HOLD** pending Cerebro-core access + design-gate APPROVE |

---

## Design-gate confirmation

| Seat | Role in gate | Status |
|---|---|---|
| 1 Rasma | Layouts from approved systems | AWAITING |
| 2 NASAQ | Brand-match / D0 | AWAITING · avatar PLACEHOLDER |
| 3 Fakir | ECD craft | AWAITING |
| 4 Nojj | Owner APPROVE / REVISE | AWAITING |

AgentCards pack: `DESIGN_GATE_REQUEST_AgentCards_v1.5.md` · Drive `AGENTCARDS_v1.5_KINZO_SYNC/`.  
GRANDY does not skip seats. Dispatch A/B to Cerebro **after** gate PASS + ops checklist green.

---

## Channel map (output_standard v1.5)

| Ch | Artifact | Format | Destination | When |
|---|---|---|---|---|
| **A INFO** | One-glance status | JPEG 3840×2160 sRGB q92 | Cerebro widget tiles | After design-gate + GRANDY PASS |
| **B EXEC3** | 3-page exec | PDF 1920×1080 ×3 | Cerebro viewer | Same |
| **C FULL** | Complete pack | PDF (+ sources/QA) | Google Drive `elwalaagents` only | Same; never to Cerebro UI |

Stand-in text packs for this run live beside this file (`*_INFO.md`, `*_EXEC3.md`, `*_FULL.md`). Binary INFO/EXEC3 renders after NASAQ→Fakir visual pass — no invented composites.

---

## Wave 0 · Ops (now · GRANDY + ZEBDA)

| Owner | Task | Output |
|---|---|---|
| GRANDY | Ops gate checklist + this dispatch + blockers | `outputs/GRANDY/` |
| ZEBDA | Minutes; hold queue Rasma→NASAQ→Fakir→Nojj; track open Tarek calls | `outputs/ZEBDA/` |
| BILAL | Internal status colour-band ownership for INFO/EXEC | `outputs/BILAL/` |

**Do not:** merge · PR · deploy · new branch · touch voice/auth/Google-config/gesture/WebGL/deps.

---

## Wave 1 · Design gate (serial)

| Step | Owner | Mission | Exit |
|---|---|---|---|
| 1.1 | RASMA | Layouts from approved systems; AgentCanvas refs; no fake lit | Layout package → NASAQ |
| 1.2 | NASAQ | Brand-match + D0; Basmala phone/tablet pass; desktop retina HOLD; `#0A131A` test not frozen | Brand pass → Fakir |
| 1.3 | FAKIR | ECD craft; no invented visuals | Craft pass → Nojj |
| 1.4 | Nojj | APPROVE / REVISE: … | Gate closed |

Parallel support (no gate skip):
- **KATIB** — Gate + BrandHeader copy EN/AR; tashkeel; no approx CEREBRO wordmark  
- **MUSA** — Provenance for READY_v2.1 assets; placeholders stay empty for NASAQ/MADAR/NABR/Samna  
- **MADAR** — Loader 0–1.8s only; 1.8–12s placeholder  

---

## Wave 2 · Build on `feat/ds-v1-1` (after gate · BANNA lead)

| Owner | Mission | Constraints |
|---|---|---|
| BANNA | PersistentBrandHeader + Gate/glass P0 | One header instance; Basmala above CEREBRO; never spins/remounts; open calls switchable; obsidian tiles not final |
| NASAQ | Token check on build | Wordmark slot placeholder until white-on-white fixed |
| MADAR | Motion only in Tarek 0–1.8s window | No WebGL / deps changes outside brief |
| KATIB | UI strings EN/AR | HAQQ not HAQI |

**Blocker:** Cerebro-core (`njr39/Cerebro-core`) not reachable from this runner — Wave 2 cannot start until access granted on `feat/ds-v1-1`.

---

## Wave 3 · A / B / C packaging (after Wave 2 green or card-gate-only packs)

### A · INFO — owners & content contract
- **Owner:** BILAL (colour-band) + agent owner avatar  
- **GRANDY:** approve facts list before Cerebro tile  
- **Facts for DS v1.1 INFO (draft):**  
  1. Pack v1.5 LOCKED · 18 AgentCards · design-gate open  
  2. Branch `feat/ds-v1-1` only · hard rules enforced  
  3. Avatars: 14 READY_v2.1 · 4 PLACEHOLDER (NASAQ/MADAR/NABR/Samna)  

### B · EXEC3 — slide owners
| Page | Owner | Content |
|---|---|---|
| 1 What + status | GRANDY + ZEBDA | Crew ACTIVE_DISPATCH · gate order · HOLD reason |
| 2 Findings / decisions | NASAQ + FAKIR | Brand holds · open Tarek calls (unpicked) · wordmark BLOCKED |
| 3 Next / owners / dates | GRANDY | Wave exits · Cairo dates · Nojj decision needed |

### C · FULL — Drive
- **Folder:** `CEREBRO_HANDOFF_KINZO_20261021` (id `1Z6HvmyVdBRiP_MnvEGqYF9KAFGGmlvoK`)  
- **Sub:** prefer `AGENTCARDS_v1.5_KINZO_SYNC` sibling / GRANDY ops pack  
- **Includes:** checklist · dispatch · blockers · QA log · version history · AgentCard index refs  
- **Not for:** public · client · Cerebro publish flag  

---

## Routing matrix (who may fire what)

| Action | Allowed | Blocked |
|---|---|---|
| Read handoff / FINAL_v2.1 READY avatars | All TOP10 | — |
| Edit AgentCard fields outside v1.5 | — | All |
| Invent placeholder heads | — | All (esp. MUSA/MADAR/NASAQ) |
| Resolve parallax / 4-col / shadow | — | All → Tarek only |
| Merge / PR / deploy / new branch | — | All |
| A/B into Cerebro UI | After GRANDY PASS | Before gate |
| C to Drive (elwalaagents) | After GRANDY PASS | Publish elsewhere |

---

## Sequence diagram (ops)

```
Kinzo dispatch
    → GRANDY Wave0 (checklist + plan + blockers)
    → ZEBDA queue lock: Rasma → NASAQ → Fakir → Nojj
    → [HOLD if Cerebro-core inaccessible]
    → Design gate serial
    → GRANDY PASS/HOLD
    → BANNA Wave2 on feat/ds-v1-1
    → A INFO + B EXEC3 → Cerebro
    → C FULL → Drive
    → Lit renders: NASAQ → Fakir → Tarek
```

---

## Immediate next actions

1. **Kinzo / Nojj:** grant runner access to `njr39/Cerebro-core` @ `feat/ds-v1-1` (see blockers).  
2. **Rasma:** start design-gate seat 1 on AgentCards v1.5.  
3. **ZEBDA:** log gate start time Cairo; no seat skip.  
4. **GRANDY:** remain HOLD; re-run checklist when access + seat 1 land.  

---

*Internal only · no publish · HAQQ not HAQI · 2026-10-21 Cairo*
