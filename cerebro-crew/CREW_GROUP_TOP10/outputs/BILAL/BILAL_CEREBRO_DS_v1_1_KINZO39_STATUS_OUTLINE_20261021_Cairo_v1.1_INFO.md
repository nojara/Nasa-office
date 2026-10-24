# INFO STATUS OUTLINE · Kinzo → 39 · LIVE_v2 refresh
**INTERNAL ONLY — do not publish / do not client-send**

| Field | Value |
|---|---|
| Owner band | BILAL `#5B3A8C` · text `#EEE5D4` |
| Agent | BILAL (بِلال) · member #10 · PMO Comms / Creator Intelligence |
| Agent id | `08308e9b-dd9e-4bb1-96ba-c4db67c2dea3` |
| Session | `bc-7f6a2a56-b8a0-58fe-b7e9-556c5535da41` |
| Pack | AGENT_ROSTER_SPEC_PACK **v1.5** |
| Crew | `CEREBRO_DS_v1_1_CREW_TOP10` |
| Wave | **LIVE_v2_20261021** |
| Route | **Kinzo → 39** (internal status uplink) |
| Date | 2026-10-21 ~19:29 Cairo |
| Format | INFO outline (feeds INFO JPEG; not rendered) |
| File | `BILAL_CEREBRO_DS_v1_1_KINZO39_STATUS_OUTLINE_20261021_Cairo_v1.1_INFO.md` |
| Supersedes | v1.0 outline (same folder — kept) |
| Classification | INTERNAL · Cerebro DS v1.1 |

---

## 0 · Frame (INFO header strip)

- **Title:** CEREBRO DS v1.1 — Crew TOP10 LIVE re-dispatch status
- **From:** Kinzo (lead) via BILAL (PMO Comms)
- **To:** 39 — internal only
- **Branch target:** `feat/ds-v1-1` on `njr39/Cerebro-core`
- **Crew status:** `LIVE_RUNNING` · wave `LIVE_v2_20261021`
- **Ownership band:** left rail / footer accent `#5B3A8C` (BILAL)

---

## 1 · Dispatch snapshot (LIVE seats)

| # | Agent | Colour | Started on (LIVE) | Seat status |
|---|---|---|---|---|
| 1 | BANNA | `#FCCF3F` | PersistentBrandHeader + Gate/glass P0 stubs/slots | LIVE · specs+stubs in `outputs/BANNA/` · paste blocked B-01 |
| 2 | NASAQ | `#0F5E5A` | Brand-match + D0 TOKEN_NOTES; Basmala phone/tablet | LIVE · checklist filed · avatar PLACEHOLDER |
| 3 | RASMA | `#244CC9` | Layout slots + 21-screen index + BrandHeader slot map | LIVE · `outputs/RASMA/` empty at this refresh |
| 4 | FAKIR | `#5A1420` | ECD readiness matrix (craft BLOCKED until NASAQ) | LIVE · checklist+blockers filed · craft HOLD |
| 5 | MADAR | `#C7A0DC` | Loader 0–1.8s lock + 1.8–12s PLACEHOLDER | LIVE · 0–1.8s motion spec filed · avatar PLACEHOLDER |
| 6 | GRANDY | `#173349` | Ops-gate HOLD + hard-rule enforce | LIVE · ops-gate + dispatch plan filed · gate HOLD |
| 7 | MUSA | `#DD3D14` | BrandHeader/Gate asset provenance + Basmala hunt | LIVE · provenance + blockers filed |
| 8 | KATIB | `#9F1F2D` | Gate/BrandHeader EN/AR microcopy + strings JSON | LIVE · microcopy INTERNAL filed · wordmark BLOCKED |
| 9 | ZEBDA | `#2E7FB0` | COORD_BOARD rebuild + live crew snapshot | LIVE · `outputs/ZEBDA/` empty at this refresh |
| 10 | BILAL | `#5B3A8C` | Kinzo→39 INFO status refresh (internal) | **ACTIVE (this deliverable)** |

**Design gate (standing):** Rasma → NASAQ → Fakir → Nojj  
**Lit-render review order:** NASAQ → Fakir → Tarek  
**Lead confirmation:** Tarek — Kinzo takes Cerebro · 21 Oct 19:13 Cairo  
**Sessions file:** `LIVE_SESSIONS_20261021_Cairo.md` · `GROUP.json` status `LIVE_RUNNING`

---

## 2 · What is green (can proceed without code merge)

- Crew roster + AgentCards v1.5 locked; FINAL_v2.1 avatars READY except NASAQ / MADAR / NABR / Samna (PLACEHOLDER — do not invent).
- Hard rules posted and mirrored in GROUP + README.
- Branding brief v1.0.0 white standing: PersistentBrandHeader **one instance**; Basmala above CEREBRO; never spins with sphere; never remounts.
- Basmala PNG 468×76: NASAQ pass phone/tablet path defined; desktop retina HOLD.
- Loader split defined: Tarek 0–1.8s only; MADAR 1.8–12s = placeholder until Tarek — MADAR 0–1.8s motion spec now filed.
- Look direction standing: volcanic glass / obsidian on 3D; logos flat white; D0 palette; `#0A131A` test not frozen.
- Name spelling: **HAQQ** (not HAQI).
- LIVE_v2: 10/10 Cursor sessions seated; brain-side artifacts landing under `outputs/<SEAT>/` (BANNA stubs, NASAQ checklist, FAKIR/GRANDY/MUSA/KATIB/MADAR packs).

---

## 3 · Blockers (summary — detail in companion file)

| ID | Blocker | Severity | Owner | Blocks |
|---|---|---|---|---|
| B-01 | **Repo access** — `njr39/Cerebro-core` `feat/ds-v1-1` not available in this workspace; no clone/write path for crew code work | **P0** | 39 / Kinzo | BANNA paste to branch, GRANDY Dispatch A/B on branch, all code-bound seats |
| B-02 | **CEREBRO wordmark** — white-on-white BLOCKED; placeholder slot only; KATIB must not approx | **P0** | NASAQ / Tarek | BrandHeader lock, KATIB wordmark copy, Gate hero type |
| B-03 | **Open Tarek calls** (switchable — do not pick): (1) 6px parallax or none (2) status board 4-col or not (3) shadow tone | **P1** | Tarek | Final visual lock; BANNA must leave switchable |
| B-04 | **Handoff path missing** — `/workspace/cerebro_handoff` absent on this box (Drive `CEREBRO_HANDOFF_KINZO_20261021` not mounted here) | **P0** | 39 / Kinzo | MUSA path verify vs Drive; seats needing local handoff assets |

Companion: `BILAL_CEREBRO_DS_v1_1_BLOCKERS_20261021_Cairo_v1.1_INFO.md`  
Lane card: `LANE_STATUS.md`

---

## 4 · INFO panel layout (for JPEG compose)

```
┌─────────────────────────────────────────────────────────────┐
│ ▌#5B3A8C  BILAL · بِلال · PMO COMMS          INTERNAL ONLY │
│ Kinzo → 39 · CEREBRO DS v1.1 · LIVE_v2 · 2026-10-21 Cairo │
├─────────────────────────────────────────────────────────────┤
│ STATUS: LIVE_RUNNING · branch feat/ds-v1-1 (target)         │
│ GATE:   Rasma → NASAQ → Fakir → Nojj · HOLD                 │
├──────────────┬──────────────────────────────────────────────┤
│ CREW 1–10    │ BLOCKERS                                     │
│ LIVE seats   │ B-01 Repo access        P0                   │
│ + started-on │ B-02 Wordmark WoW       P0                   │
│              │ B-03 Open calls ×3      P1 (do not pick)     │
│              │ B-04 cerebro_handoff    P0 (box missing)     │
├──────────────┴──────────────────────────────────────────────┤
│ ASK OF 39: grant feat/ds-v1-1 access · mount handoff        │
│            · unlock wordmark · queue open calls             │
│ HARD: no publish · no merge/PR/deploy · no voice/auth/WebGL │
└─────────────────────────────────────────────────────────────┘
```

Ownership banding: left edge + agent chip + footer = `#5B3A8C`; body text on dark = `#EEE5D4`.

---

## 5 · Ask of 39 (Kinzo uplink — decisions needed)

1. **Grant repo access** for crew tooling to `njr39/Cerebro-core` on `feat/ds-v1-1` only (read + commit on that branch; still no merge/PR/deploy).
2. **Mount / provide** `cerebro_handoff` (or equivalent) on crew runners so Drive handoff + FINAL_v2.1 paths resolve locally.
3. **Unlock CEREBRO wordmark** (fix white-on-white) or confirm placeholder duration.
4. **Queue open calls** for Tarek when ready — keep switchable until decided; do not let seats pick.

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

1. BANNA pastes PersistentBrandHeader + Gate/glass P0 stubs onto `feat/ds-v1-1`.
2. NASAQ brand-match + Basmala phone/tablet; desktop retina remains HOLD.
3. KATIB fills EN/AR copy once wordmark slot is real (no approx).
4. Design gate runs; GRANDY opens Dispatch A/B after gate.
5. BILAL issues follow-up INFO with credits / view snapshot IDs when first lit pass lands.

---

**End outline · BILAL · `#5B3A8C` · internal · v1.1 · 2026-10-21 Cairo**
