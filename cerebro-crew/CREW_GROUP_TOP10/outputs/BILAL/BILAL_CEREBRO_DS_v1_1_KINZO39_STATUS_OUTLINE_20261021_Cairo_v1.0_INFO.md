# INFO STATUS OUTLINE · Kinzo → 39
**INTERNAL ONLY — do not publish / do not client-send**

| Field | Value |
|---|---|
| Owner band | BILAL `#5B3A8C` · text `#EEE5D4` |
| Agent | BILAL (بِلال) · member #10 · PMO Comms / Creator Intelligence |
| Agent id | `08308e9b-dd9e-4bb1-96ba-c4db67c2dea3` |
| Pack | AGENT_ROSTER_SPEC_PACK **v1.5** |
| Crew | `CEREBRO_DS_v1_1_CREW_TOP10` |
| Route | **Kinzo → 39** (internal status uplink) |
| Date | 2026-10-21 Cairo |
| Format | INFO outline (feeds INFO JPEG; not rendered) |
| File | `BILAL_CEREBRO_DS_v1_1_KINZO39_STATUS_OUTLINE_20261021_Cairo_v1.0_INFO.md` |
| Classification | INTERNAL · Cerebro DS v1.1 |

---

## 0 · Frame (INFO header strip)

- **Title:** CEREBRO DS v1.1 — Crew TOP10 dispatch status
- **From:** Kinzo (lead) via BILAL (PMO Comms)
- **To:** 39 — internal only
- **Branch target:** `feat/ds-v1-1` on `njr39/Cerebro-core`
- **Crew status:** `ACTIVE_DISPATCH`
- **Ownership band:** left rail / footer accent `#5B3A8C` (BILAL)

---

## 1 · Dispatch snapshot

| # | Agent | Colour | Mission (one line) | Seat status |
|---|---|---|---|---|
| 1 | BANNA | `#FCCF3F` | PersistentBrandHeader + Gate/glass P0; obsidian tiles not final; leave open calls switchable | DISPATCHED · blocked on repo |
| 2 | NASAQ | `#0F5E5A` | Brand-match + D0 tokens; Basmala phone/tablet pass; desktop retina HOLD; review before Fakir/Tarek | DISPATCHED · avatar PLACEHOLDER |
| 3 | RASMA | `#244CC9` | Layouts from approved systems; only real lit renders to Tarek | DISPATCHED |
| 4 | FAKIR | `#5A1420` | ECD craft pass after NASAQ; design gate third seat | DISPATCHED · awaits NASAQ |
| 5 | MADAR | `#C7A0DC` | Loader 0–1.8s Tarek only; 1.8–12s PLACEHOLDER | DISPATCHED · avatar PLACEHOLDER |
| 6 | GRANDY | `#173349` | COO gates/routing; enforce hard rules; Dispatch A/B after gate | DISPATCHED · gate idle |
| 7 | MUSA | `#DD3D14` | Verified imagery/provenance for header/gate; no invented heads | DISPATCHED |
| 8 | KATIB | `#9F1F2D` | UI copy EN/AR Gate + BrandHeader; tashkeel as v1.5; no approx wordmark | DISPATCHED · wordmark blocked |
| 9 | ZEBDA | `#2E7FB0` | Coordination + minutes; design-gate queue; track open Tarek calls | DISPATCHED |
| 10 | BILAL | `#5B3A8C` | This pack — internal INFO status outline + blockers | **ACTIVE (this deliverable)** |

**Design gate (standing):** Rasma → NASAQ → Fakir → Nojj  
**Lit-render review order:** NASAQ → Fakir → Tarek  
**Lead confirmation:** Tarek — Kinzo takes Cerebro · 21 Oct 19:13 Cairo

---

## 2 · What is green (can proceed without code merge)

- Crew roster + AgentCards v1.5 locked; FINAL_v2.1 avatars READY except NASAQ / MADAR / NABR / Samna (PLACEHOLDER — do not invent).
- Hard rules posted and mirrored in GROUP + README.
- Branding brief v1.0.0 white standing: PersistentBrandHeader **one instance**; Basmala above CEREBRO; never spins with sphere; never remounts.
- Basmala PNG 468×76: NASAQ pass phone/tablet path defined; desktop retina HOLD.
- Loader split defined: Tarek 0–1.8s only; MADAR 1.8–12s = placeholder until Tarek.
- Look direction standing: volcanic glass / obsidian on 3D; logos flat white; D0 palette; `#0A131A` test not frozen.
- Name spelling: **HAQQ** (not HAQI).

---

## 3 · Blockers (summary — detail in companion file)

| ID | Blocker | Severity | Owner | Blocks |
|---|---|---|---|---|
| B-01 | **Repo access** — `njr39/Cerebro-core` `feat/ds-v1-1` not available in this workspace; no clone/write path for crew code work | **P0** | 39 / Kinzo | BANNA P0 impl, GRANDY Dispatch A/B on branch, all code-bound seats |
| B-02 | **CEREBRO wordmark** — white-on-white BLOCKED; placeholder slot only; KATIB must not approx | **P0** | NASAQ / Tarek | BrandHeader lock, KATIB wordmark copy, Gate hero type |
| B-03 | **Open Tarek calls** (switchable — do not pick): (1) 6px parallax or none (2) status board 4-col or not (3) shadow tone | **P1** | Tarek | Final visual lock; BANNA must leave switchable |

Companion: `BILAL_CEREBRO_DS_v1_1_BLOCKERS_20261021_Cairo_v1.0_INFO.md`

---

## 4 · INFO panel layout (for JPEG compose)

```
┌─────────────────────────────────────────────────────────────┐
│ ▌#5B3A8C  BILAL · بِلال · PMO COMMS          INTERNAL ONLY │
│ Kinzo → 39 · CEREBRO DS v1.1 · TOP10 · 2026-10-21 Cairo   │
├─────────────────────────────────────────────────────────────┤
│ STATUS: ACTIVE_DISPATCH · branch feat/ds-v1-1 (target)      │
│ GATE:   Rasma → NASAQ → Fakir → Nojj                        │
├──────────────┬──────────────────────────────────────────────┤
│ CREW 1–10    │ BLOCKERS                                     │
│ colour chips │ B-01 Repo access        P0                   │
│ + mission    │ B-02 Wordmark WoW       P0                   │
│ one-liners   │ B-03 Open calls ×3      P1 (do not pick)     │
├──────────────┴──────────────────────────────────────────────┤
│ ASK OF 39: grant feat/ds-v1-1 access · unlock wordmark      │
│            · decide open calls when ready                   │
│ HARD: no publish · no merge/PR/deploy · no voice/auth/WebGL │
└─────────────────────────────────────────────────────────────┘
```

Ownership banding: left edge + agent chip + footer = `#5B3A8C`; body text on dark = `#EEE5D4`.

---

## 5 · Ask of 39 (Kinzo uplink — decisions needed)

1. **Grant repo access** for crew tooling to `njr39/Cerebro-core` on `feat/ds-v1-1` only (read + commit on that branch; still no merge/PR/deploy).
2. **Unlock CEREBRO wordmark** (fix white-on-white) or confirm placeholder duration.
3. **Queue open calls** for Tarek when ready — keep switchable until decided; do not let seats pick.

---

## 6 · Standing hard rules (reprint on INFO footer)

- Repo `njr39/Cerebro-core`, branch `feat/ds-v1-1` ONLY. No new branches, merges, PRs, deploys.
- Do NOT touch: voice, sound, auth, Google config, gesture thresholds, WebGL renderer, dependencies.
- Open calls for Tarek — leave switchable, do NOT pick.
- Obsidian tile test still rendering — not final.
- NASAQ/MADAR/NABR/Samna avatars: PLACEHOLDER, do not invent.
- Internal only. Publish nothing.
- Review order for lit renders: NASAQ → Fakir → Tarek.

---

## 7 · Next internal beat (after blockers clear)

1. BANNA implements PersistentBrandHeader + Gate/glass P0 on branch.
2. NASAQ brand-match + Basmala phone/tablet; desktop retina remains HOLD.
3. KATIB fills EN/AR copy once wordmark slot is real (no approx).
4. Design gate runs; GRANDY opens Dispatch A/B after gate.
5. BILAL issues follow-up INFO with credits / view snapshot IDs when first lit pass lands.

---

**End outline · BILAL · `#5B3A8C` · internal · v1.0 · 2026-10-21 Cairo**
