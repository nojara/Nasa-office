# GRANDY · Blockers
**CEREBRO DS v1.1 · 2026-10-21 Cairo · internal**

---

## B0 · Cerebro-core access (CRITICAL)

| | |
|---|---|
| **ID** | `BLK-CORE-ACCESS` |
| **Severity** | CRITICAL · blocks Wave 2 build |
| **Repo** | `njr39/Cerebro-core` |
| **Required branch** | `feat/ds-v1-1` |
| **Evidence** | `gh repo view njr39/Cerebro-core` → *Could not resolve to a Repository* · `git ls-remote` → *Repository not found* · remote ref `feat/ds-v1-1` absent from this runner’s remotes |
| **Runner context** | Cloud agent on `nojara/Nasa-office` (Agents Office) · branch `main` · not Cerebro-core |
| **Impact** | BANNA cannot implement PersistentBrandHeader / Gate P0 on the real branch from this environment; A/B Cerebro packaging for build artifacts stays HOLD |
| **Owner** | Kinzo / Nojj — grant private-repo access (or attach Cerebro-core workspace) for crew runners |
| **GRANDY action** | Documented · **no new branch created** · no PR/merge/deploy attempted |

---

## B1 · Design gate open

| | |
|---|---|
| **ID** | `BLK-DESIGN-GATE` |
| **Severity** | HIGH · blocks A/B into Cerebro + final PASS |
| **Order** | Rasma → NASAQ → Fakir → Nojj (**confirmed**) |
| **Status** | All seats AWAITING · AgentCards `AWAITING_DESIGN_GATE` · `publish: false` |
| **Owner** | RASMA (start) → … → Nojj (APPROVE / REVISE) |
| **Pack** | Drive `AGENTCARDS_v1.5_KINZO_SYNC` + `DESIGN_GATE_REQUEST_AgentCards_v1.5.md` |

---

## B2 · Brand / asset holds (non-blocking for docs; blocking for final UI)

| ID | Item | State |
|---|---|---|
| `BLK-WORDMARK` | CEREBRO wordmark white-on-white | BLOCKED — placeholder slot only |
| `BLK-BASMALA-DESKTOP` | Basmala desktop retina | HOLD (phone/tablet NASAQ pass OK) |
| `BLK-AVATAR-4` | NASAQ / MADAR / NABR / Samna heads | PLACEHOLDER — do not invent |
| `BLK-OBSIDIAN` | Obsidian tile / hero test | Rendering elsewhere — not final |
| `BLK-LOADER-FILL` | Loader 1.8–12s MADAR fill | PLACEHOLDER until Tarek |

---

## B3 · Open Tarek calls (do not resolve)

Leave switchable — agents must not pick:

1. 6px parallax or none  
2. Status board 4 columns or not  
3. Shadow tone  

---

## Cleared / non-blockers

| Item | Note |
|---|---|
| GRANDY AgentCard / memory / caps / knowledge | Read · OK |
| HAQQ spelling | Confirmed HAQQ on card (not HAQI) |
| Drive handoff folder | Reachable · `CEREBRO_HANDOFF_KINZO_20261021` |
| FINAL_v2.1 GRANDY avatar | READY_v2.1 |
| Hard-rule compliance this run | No merge/PR/deploy/new branch · no voice/auth/WebGL/deps edits |

---

## Resume condition

GRANDY re-opens PASS path when:

1. Cerebro-core readable on `feat/ds-v1-1`, **and**  
2. Design-gate reaches Nojj with Rasma→NASAQ→Fakir complete (or Nojj early REVISE routed), **and**  
3. Checklist §1–4 green with no invented placeholders.
