# BANNA · Improvements · BrandHeader + Gate/glass P0

| Field | Value |
| --- | --- |
| Agent | BANNA (بَنّاء) |
| Rev | v1.1 |
| Date | 2026-10-21 Cairo |
| Scope | Spec/stub refine — layout slots · switchables unset |
| Prior | v1.0 stubs/specs (header + GateKeys + switchables) |

---

## What improved this pass

1. **Four layout slots named and metric’d** — `phone` · `tablet` · `desktop` · `compact-landscape` in `stubs/slots.ts`, mirrored into both specs §9/§13.
2. **Header stub consumes slots** — `data-slot`, CSS vars, Basmala/wordmark sizes, dock defaults, `data-basmala-policy` (`nasaq-pass` / `desktop-retina-HOLD` / `scale-only`). Resize/orientation updates metrics **without remount**.
3. **GateKeys stub consumes slots** — clearance under brand stack, gap/pad, key min sizes, wrap vs row; never assumes status-board 4-col.
4. **GlassKey** accepts slot-driven `minWidth` / `minHeight` / `fontSize`; shadow tone still defaults `unset`.
5. **Wordmark QA label** opt-in (`showInternalWordmarkQa`); default empty slot per Katib prefer.
6. **Basmala alt** aligned to Katib tashkeel form when asset present.
7. **AppShellMount.example.tsx** — paste reference with `SWITCHABLES_UNSET`.
8. **LANE_STATUS.md** — blockers + started-on one-liner for Kinzo/peers.

## Explicit non-changes (held)

| Item | Stance |
| --- | --- |
| Parallax | `unset` — not 6px, not none |
| Status board cols | `unset` — not 4, not not |
| Shadow tone | `unset` — no invented tone |
| CEREBRO wordmark | BLOCKED placeholder |
| Desktop Basmala @2x | HOLD |
| Obsidian tiles | NOT_FINAL |
| WebGL / voice / auth / Google / gesture / deps | untouched |
| NASAQ/MADAR/NABR/Samna heads | PLACEHOLDER |

## Peer alignment notes

| Peer | Consumed |
| --- | --- |
| NASAQ | D0 token refs; phone/tablet Basmala pass target; desktop HOLD |
| FAKIR | Craft checklist BH/GT — implement artifact now staged (still not live) |
| KATIB | Empty wordmark slot default; tashkeel Basmala alt |
| MUSA | No invent Basmala/wordmark; provenance still missing PNG |
| MADAR | Phase boot/placeholder/ready; no motion after 1.8s in stubs |
| RASMA | Slot map pending in RASMA lane — BANNA names stable for merge later |

## Residual risk

Until Cerebro-core is reachable, slot CSS vars are untested against real shell z-index / safe-area. Compact-landscape clearance (56px) may need RASMA nudge once blueprints land.

---

*Internal · publish false · CEREBRO_DS_v1_1_CREW_TOP10*
