# BANNA · LANE_STATUS

| Field | Value |
| --- | --- |
| **Latin** | BANNA |
| **Arabic** | بَنّاء |
| **Agent id** | `d424a6d1-68f8-4004-a115-e4edf6dbb7ba` |
| **Crew** | CEREBRO_DS_v1_1_CREW_TOP10 |
| **Pack** | AGENT_ROSTER_SPEC_PACK v1.5 |
| **Lane** | PersistentBrandHeader + Gate/glass P0 |
| **Branch target** | `feat/ds-v1-1` @ njr39/Cerebro-core |
| **Stage root** | `outputs/BANNA/` (+ crew mirror under `CREW_GROUP_TOP10/outputs/BANNA/`) |
| **Date** | 2026-10-21 Cairo |
| **Publish** | false · internal only |

---

## Started-on (one-liner)

**PersistentBrandHeader + Gate/glass P0 — refine specs/stubs for phone · tablet · desktop · compact-landscape slots; switchables remain unset.**

---

## Status

| Item | State |
| --- | --- |
| Specs v1.0 (header + Gate keys) | DONE (prior) |
| Specs v1.1 slot metrics | **DONE this pass** |
| Stubs wired to `slots.ts` | **DONE this pass** |
| Switchables default | **`unset` / `SWITCHABLES_UNSET`** — not picking parallax / 4-col / shadow |
| Wordmark | **BLOCKED** placeholder only |
| Paste onto Cerebro-core | **BLOCKED** — repo unreachable |
| Design-gate sign | Not started — NASAQ → Fakir → Tarek |

---

## Files (this lane)

### Crew stage
`brain/Agents Office/cerebro-crew/CREW_GROUP_TOP10/outputs/BANNA/`

- `LANE_STATUS.md` (this file)
- `IMPROVEMENTS_20261021_Cairo_v1.1.md`
- `PersistentBrandHeader.spec.md` (v1.1 slots)
- `GateKeys.spec.md` (v1.1 slots)
- `stubs/slots.ts`
- `stubs/switchables.ts`
- `stubs/PersistentBrandHeader.tsx`
- `stubs/GateKeys.tsx`
- `stubs/GlassKey.tsx`
- `stubs/AppShellMount.example.tsx`

### Workspace mirror
`outputs/BANNA/` — same set (stage for peer seats / Kinzo)

---

## Hard rules held

- No merge / PR / deploy / new Cerebro-core branches  
- No voice / sound / auth / Google / gesture / WebGL / deps  
- Parallax · 4-col · shadow **switchable unset**  
- CEREBRO wordmark **placeholder only**  
- HAQQ not HAQI · NASAQ/MADAR/NABR/Samna heads **PLACEHOLDER**  
- Review order lit: NASAQ → Fakir → Tarek  
- Obsidian tiles **NOT final**

---

## Blockers

| ID | Blocker | Severity | Notes |
| --- | --- | --- | --- |
| **BN-01** | njr39/Cerebro-core `feat/ds-v1-1` unreachable | P0 | Specs/stubs staged only; cannot paste/verify live |
| **BN-02** | CEREBRO wordmark white-on-white | P0 | Placeholder slot; no approx |
| **BN-03** | Basmala PNG 468×76 missing in FINAL_v2.1 / Drive hunt (MUSA) | P0 | Phone/tablet NASAQ pass blocked until verified asset |
| **BN-04** | Desktop Basmala retina | P1 | **HOLD** — slot reserves space; no @2x invent |
| **BN-05** | Tarek open calls | P1 | Leave switchable: parallax 6px\|none · status 4-col\|not · shadow tone |
| **BN-06** | NASAQ brand-match / D0 freeze evidence | P1 | Checklist exists; live PASS not signed |
| **BN-07** | `/workspace/cerebro_handoff` missing on this box | P2 | Standing crew blocker |

---

## Next (when unblocked)

1. Paste stubs onto `feat/ds-v1-1` chrome + gate paths.  
2. Wire boot `phase` from existing store (0–1.8s MADAR / 1.8–12s placeholder).  
3. Drop verified Basmala into `basmalaSrc` after NASAQ phone/tablet pass.  
4. Hand craft evidence to Fakir; leave TC-1/2/3 unset until Tarek.

---

*BANNA · بَنّاء · Web design and development · internal*
