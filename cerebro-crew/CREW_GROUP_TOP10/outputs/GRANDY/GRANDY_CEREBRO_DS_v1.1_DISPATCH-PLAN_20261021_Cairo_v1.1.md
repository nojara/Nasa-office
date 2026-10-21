# GRANDY · Dispatch Plan v1.1
**CEREBRO DS v1.1 · A INFO / B EXEC3 / C FULL Drive**

| Field | Value |
|---|---|
| From | GRANDY · غْرانْدِي · COO |
| Crew | CEREBRO_DS_v1_1_CREW_TOP10 |
| Lead | Kinzo |
| Branch | `feat/ds-v1-1` ONLY |
| Date | 2026-10-21 Cairo · refresh 19:29 |
| Gate | Rasma → NASAQ → Fakir → Nojj (**CONFIRMED**) |
| Ruling | **HOLD** · A/B **not** dispatched |
| Prior | v1.0 kept (never overwrite) |

---

## Design-gate confirmation + live seat prep

| Seat | Role in gate | Lane prep | Status |
|---|---|---|---|
| 1 Rasma | Layouts from approved systems | `outputs/RASMA/` empty | **AWAITING** |
| 2 NASAQ | Brand-match / D0 | Checklist staged | **PREP** · not PASS · avatar PLACEHOLDER |
| 3 Fakir | ECD craft | Craft checklist staged | **BLOCKED** until NASAQ |
| 4 Nojj | Owner APPROVE / REVISE | — | **AWAITING** |

GRANDY does not skip seats. **Dispatch A/B to Cerebro only after gate PASS + ops checklist green.**

---

## Channel map (output_standard v1.5)

| Ch | Artifact | Format | Destination | When |
|---|---|---|---|---|
| **A INFO** | One-glance status | JPEG 3840×2160 sRGB q92 | Cerebro widget tiles | After design-gate + GRANDY PASS |
| **B EXEC3** | 3-page exec | PDF 1920×1080 ×3 | Cerebro viewer | Same |
| **C FULL** | Complete pack | PDF (+ sources/QA) | Google Drive `elwalaagents` only | Same; never to Cerebro UI |

Stand-in text packs: `*_INFO.md` / `*_EXEC3.md` / `*_FULL.md` v1.1. Binary renders after NASAQ→Fakir visual pass — no invented composites.

---

## Wave 0 · Ops (active · GRANDY)

| Owner | Task | Output |
|---|---|---|
| GRANDY | Hard-rule enforce · HOLD · checklist/dispatch/blockers v1.1 · LANE_STATUS | `outputs/GRANDY/` |
| ZEBDA | Minutes; hold queue Rasma→NASAQ→Fakir→Nojj | `outputs/ZEBDA/` (TBD this box) |
| BILAL | Internal status colour-band for INFO/EXEC | `outputs/BILAL/` staged |

**Do not:** merge · PR · deploy · new branch · touch voice/auth/Google-config/gesture/WebGL/deps · fire A/B before gate.

---

## Wave 1 · Design gate (serial)

| Step | Owner | Mission | Exit |
|---|---|---|---|
| 1.1 | RASMA | Layouts from approved systems; AgentCanvas refs; no fake lit | Layout package → NASAQ |
| 1.2 | NASAQ | Brand-match + D0; Basmala phone/tablet; desktop retina HOLD; `#0A131A` test | Brand pass → Fakir |
| 1.3 | FAKIR | ECD craft; no invented visuals | Craft pass → Nojj |
| 1.4 | Nojj | APPROVE / REVISE: … | Gate closed |

Parallel support (no gate skip):
- **KATIB** — microcopy staged · no approx CEREBRO wordmark  
- **MUSA** — provenance staged · placeholders empty for NASAQ/MADAR/NABR/Samna  
- **MADAR** — 0–1.8s spec staged · 1.8–12s PLACEHOLDER  
- **BANNA** — BrandHeader/Gate specs + stubs · implement only on `feat/ds-v1-1` when reachable  

---

## Wave 2 · Build on `feat/ds-v1-1` (after gate · BANNA lead)

| Owner | Mission | Constraints |
|---|---|---|
| BANNA | PersistentBrandHeader + Gate/glass P0 | One header; Basmala above CEREBRO; never spins/remounts; open calls switchable; obsidian not final |
| NASAQ | Token check on build | Wordmark slot placeholder until white-on-white fixed |
| MADAR | Motion only in Tarek 0–1.8s window | No WebGL / deps outside brief |
| KATIB | UI strings EN/AR | HAQQ not HAQI |

**Blocker:** Cerebro-core unreachable — Wave 2 cannot start from this runner.

---

## Wave 3 · A / B / C packaging (AFTER gate)

### A · INFO
- Owners: BILAL (colour-band) + agent avatar · GRANDY facts approve  
- Facts draft: (1) Pack v1.5 LOCKED · gate open (2) `feat/ds-v1-1` only · hard rules (3) 14 READY / 4 PLACEHOLDER  

### B · EXEC3
| Page | Owner | Content |
|---|---|---|
| 1 | GRANDY + ZEBDA | ACTIVE_DISPATCH · gate · HOLD |
| 2 | NASAQ + FAKIR | Brand holds · open calls unpicked · wordmark BLOCKED |
| 3 | GRANDY | Wave exits · Cairo dates · Nojj decision |

### C · FULL → Drive
`CEREBRO_HANDOFF_KINZO_20261021` · elwalaagents only · `publish: false`

---

## Routing matrix

| Action | Allowed | Blocked |
|---|---|---|
| Stage docs under `outputs/GRANDY/` | GRANDY now | — |
| A/B into Cerebro UI | After GRANDY PASS | **Now** |
| Merge / PR / deploy / new branch | — | All |
| Invent placeholder heads | — | All |
| Resolve parallax / 4-col / shadow | — | All → Tarek |

---

## Sequence (ops)

```
Kinzo LIVE_v2
  → GRANDY Wave0 HOLD + hard rules (v1.1 refresh)
  → ZEBDA queue: Rasma → NASAQ → Fakir → Nojj
  → [HOLD: Cerebro-core inaccessible]
  → Design gate serial (prep ≠ PASS)
  → GRANDY PASS/HOLD
  → BANNA Wave2 on feat/ds-v1-1
  → A INFO + B EXEC3 → Cerebro   ← AFTER GATE
  → C FULL → Drive
```

---

## Immediate next actions

1. **Kinzo / Nojj:** grant `njr39/Cerebro-core` @ `feat/ds-v1-1` to crew runners.  
2. **RASMA:** deliver seat-1 layout package into `outputs/RASMA/`.  
3. **NASAQ:** sign brand-match PASS (phone/tablet Basmala) after Rasma.  
4. **GRANDY:** remain HOLD; no A/B dispatch until gate closes.

---

*Internal only · no publish · HAQQ not HAQI · 2026-10-21 Cairo v1.1*
