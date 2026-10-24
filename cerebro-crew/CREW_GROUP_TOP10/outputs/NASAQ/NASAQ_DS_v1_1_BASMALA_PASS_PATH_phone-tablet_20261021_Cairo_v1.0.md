# NASAQ · Basmala phone / tablet PASS path
**DS:** Cerebro v1.1 · **Seat:** NASAQ (نَسَق) · **Date:** 2026-10-21 Cairo  
**Asset:** Basmala PNG **468×76** · flat white · RTL cell  
**Companion:** Brand-match checklist §B · D0 TOKEN_NOTES  
**Status:** INTERNAL · path **confirmed** · visual PASS **gated on verified asset**

---

## Verdict

| Viewport | NASAQ verdict | Meaning |
|----------|---------------|---------|
| **Phone** (≈320–430 CSS px) | **PASS path confirmed** | When verified 468×76 is mounted: legibility + stack rules below = brand-match PASS |
| **Tablet** (≈768–1024 CSS px) | **PASS path confirmed** | Same rules; no crop, no sphere co-rotation |
| **Desktop retina** (@2x / @3x sharpness) | **HOLD** | Do not claim PASS; do not ship retina as final |

CEREBRO wordmark remains **BLOCKED** (placeholder slot only). Desktop retina HOLD is independent of phone/tablet PASS.

---

## Asset gate (before any PASS stamp)

| # | Condition | Source |
|---|-----------|--------|
| G1 | File is verified Basmala PNG **468×76** (logical master) | Branding brief · MUSA provenance |
| G2 | **Not invented** — no calligraphy fake, no font substitute as final art | HARD |
| G3 | Flat white mark (D0 `--logo-flat`) on canvas / glass stack | TOKEN_NOTES |
| G4 | Present in handoff / operator-supplied verified path | MUSA: **not** in FINAL_v2.1 Drive set as of 2026-10-21 |

**Current box:** verified PNG **absent** (MUSA-BLK-02). Path below is ready; **do not stamp visual PASS** until G1–G4 clear. Placeholder / `data-asset="basmala-pending"` is allowed for layout QA only.

---

## PASS criteria (phone + tablet)

All must hold:

1. **Stack:** Basmala **above** CEREBRO wordmark **slot** (slot empty / blocked — no fake mark).  
2. **Instance:** One `PersistentBrandHeader`; no remount on Gate ↔ home.  
3. **Motion:** Basmala never spins / orbits / remounts with sphere; reduced-motion → static.  
4. **Size:** Intrinsic 468×76 respected; CSS scale may shrink for viewport but **no** soft blur / stretch that breaks calligraphy.  
5. **Contrast:** Flat white on composited `#101D27` / glass — illegible = FAIL.  
6. **RTL:** Basmala cell `dir="rtl"` · `lang="ar"`.  
7. **Chrome:** No volcanic-glass fill on the mark; no boxed white-bg PNG.  
8. **Safe zone:** Not clipped by notch / status bar; Gate keys clear of brand safe zone (BANNA).

### Viewport targets

| Device band | Width guide | Check |
|-------------|-------------|-------|
| Phone | 320–430 CSS px | Full mark readable; no horizontal clip; touch chrome ≥ 44pt elsewhere |
| Tablet | 768–1024 CSS px | Same stack; mark not oversized into Gate primary |

---

## HOLD (desktop retina)

- Do **not** mark desktop @2x/@3x sharpness PASS.  
- Do **not** invent a retina master.  
- Phone/tablet PASS does **not** unlock desktop retina.  
- Unlock only after NASAQ + Tarek on a verified retina asset.

---

## QA script (BANNA / Fakir handoff)

1. Mount verified `basmalaSrc` (468×76) or pending placeholder.  
2. Phone screenshot → criteria 1–8.  
3. Tablet screenshot → criteria 1–8.  
4. Spin sphere → header/Basmala transform stays non-orbiting (parallax only if switchable `6px` and reduced-motion off — Tarek open).  
5. Desktop retina → annotate **HOLD**; stop.  
6. Wordmark slot still empty.  
7. If `#0A131A` on 3D objects → TEST note only.

**Sign-off order:** NASAQ (this path + checklist) → Fakir (lit craft) → Tarek (freeze / open calls).
