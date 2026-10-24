# GRANDY · Blockers v1.1
**CEREBRO DS v1.1 · 2026-10-21 Cairo 19:29 · internal**

Prior: `…_BLOCKERS_…_v1.0.md` kept (never overwrite).

---

## B0 · Cerebro-core access (CRITICAL)

| | |
|---|---|
| **ID** | `BLK-CORE-ACCESS` |
| **Severity** | CRITICAL · blocks Wave 2 build + live A/B against tree |
| **Repo** | `njr39/Cerebro-core` |
| **Required branch** | `feat/ds-v1-1` |
| **Evidence (re-verified)** | `gh repo view njr39/Cerebro-core` → *Could not resolve to a Repository* · `git ls-remote` → *Repository not found* · remote ref `feat/ds-v1-1` absent |
| **Runner** | Cloud agent `bc-2453080c-2f51-508f-bbf7-d2071e34010a` on `nojara/Nasa-office` · GRANDY session started Cairo **19:28:52** |
| **Impact** | BANNA cannot land PersistentBrandHeader / Gate P0 on real branch; Dispatch A/B stays HOLD |
| **Owner** | Kinzo / Nojj — grant private-repo access or attach Cerebro-core workspace |
| **GRANDY action** | Documented · staged `outputs/GRANDY/` · **no new branch / PR / merge / deploy** |

---

## B1 · Design gate open

| | |
|---|---|
| **ID** | `BLK-DESIGN-GATE` |
| **Severity** | HIGH · blocks A/B into Cerebro + final PASS |
| **Order** | Rasma → NASAQ → Fakir → Nojj (**confirmed**) |
| **Live** | RASMA package missing · NASAQ/FAKIR prep docs ≠ seat PASS · Nojj AWAITING |
| **Owner** | RASMA (start) → … → Nojj (APPROVE / REVISE) |
| **Pack** | Drive `AGENTCARDS_v1.5_KINZO_SYNC` + `DESIGN_GATE_REQUEST_AgentCards_v1.5.md` |

---

## B2 · Brand / asset holds

| ID | Item | State |
|---|---|---|
| `BLK-WORDMARK` | CEREBRO wordmark white-on-white | BLOCKED — placeholder slot only |
| `BLK-BASMALA-DESKTOP` | Basmala desktop retina | HOLD |
| `BLK-BASMALA-FILE` | Verified 468×76 in FINAL_v2.1 | Missing per MUSA provenance |
| `BLK-AVATAR-4` | NASAQ / MADAR / NABR / Samna heads | PLACEHOLDER — do not invent |
| `BLK-OBSIDIAN` | Obsidian tile / hero test | Not final |
| `BLK-LOADER-FILL` | Loader 1.8–12s | PLACEHOLDER until Tarek |
| `BLK-HANDOFF-LOCAL` | `/workspace/cerebro_handoff` | Missing on this box (LIVE_SESSIONS) |

---

## B3 · Open Tarek calls (do not resolve)

1. 6px parallax or none  
2. Status board 4 columns or not  
3. Shadow tone  

---

## Cleared / non-blockers (this refresh)

| Item | Note |
|---|---|
| Hard-rule compliance this turn | No merge/PR/deploy/new branch · no voice/auth/WebGL/deps |
| HAQQ spelling | HAQQ (not HAQI) |
| Design-gate order | Confirmed Rasma→NASAQ→Fakir→Nojj |
| Parallel prep packs | BANNA/NASAQ/FAKIR/KATIB/MUSA/MADAR/BILAL staged — do not treat as gate PASS |
| GRANDY LANE_STATUS | Written |

---

## Resume condition (PASS path)

1. Cerebro-core readable on `feat/ds-v1-1`, **and**  
2. Design-gate reaches Nojj with Rasma→NASAQ→Fakir complete, **and**  
3. Checklist §1–4 green with no invented placeholders  

Then GRANDY may dispatch **A/B** (not before).
