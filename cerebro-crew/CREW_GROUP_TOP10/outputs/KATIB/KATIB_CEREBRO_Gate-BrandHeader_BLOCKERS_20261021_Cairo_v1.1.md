# KATIB · Gate + BrandHeader microcopy — blockers

| Field | Value |
| --- | --- |
| Agent | KATIB (كاتِب) |
| Pack | AGENT_ROSTER_SPEC_PACK **v1.5** |
| Companion | `KATIB_CEREBRO_Gate-BrandHeader_strings_20261021_Cairo_v1.1.json` |
| Status | **INTERNAL ONLY** |
| Date | 2026-10-21 Cairo |

| ID | Blocker | Severity | Impact on KATIB lane | Who unblocks | KATIB rule |
| --- | --- | --- | --- | --- | --- |
| **KATIB-BLK-01** | **CEREBRO wordmark BLOCKED** (white-on-white) | **P0** | No visible brand lettering; slot empty / internal QA only | Owner / NASAQ asset unlock | **No approx wordmark** (EN or AR) |
| **KATIB-BLK-02** | Cerebro-core `feat/ds-v1-1` unreachable here | **P0** | Cannot paste strings into live BANNA components on branch | 39 / repo access | Stage JSON in crew outputs only; no merge/PR/deploy |
| **KATIB-BLK-03** | Basmala PNG 468×76 — desktop retina **HOLD** | **P1** | Text alt + tashkeel ready; image path still pending on desktop | MUSA / NASAQ | Prefer PNG; alt = `brand.basmala.alt` |
| **KATIB-BLK-04** | `KATIB_PROPOSED` field states (wrong / lockout / unlocking / a11y delete·key) | **P2** | Ship-ready as proposed; may need Nojj / Tarek nod if contested | Nojj / Tarek | Keep until contested — not brand invent |
| **KATIB-BLK-05** | Open Tarek calls (parallax / 4-col / shadow) | **P1** (switchable) | No copy implication; do not invent UI labels for those modes | Tarek | **Do not pick** |

## Standing (crew-wide, still open)

- `/workspace/cerebro_handoff` missing on this box  
- HAQQ spelling locked (**not** HAQI) — no copy debt  
- NASAQ / MADAR / NABR / Samna heads PLACEHOLDER — out of KATIB scope  

## Cleared this advance (v1.1)

| Item | Was | Now |
| --- | --- | --- |
| Strings JSON missing | Referenced by v1.0 pack, file absent | **EXISTS** `…_strings_…_v1.1.json` |
| GateKeys row a11y | Hardcoded EN in BANNA stub | Key `gate.keys.row.aria` EN/AR locked |
| MADAR establish line AR | Handed to KATIB | Key `gate.loader.establish` EN/AR |

---

*KATIB · internal · 2026-10-21 Cairo*
