# NASAQ · D0 TOKEN_NOTES — Gate / PersistentBrandHeader companion
**DS:** Cerebro v1.1 · **Seat:** NASAQ (نَسَق) · **Date:** 2026-10-21 Cairo  
**Companion to:** `NASAQ_DS_v1_1_BRAND_MATCH_CHECKLIST_GateBrandHeader_20261021_Cairo_v1.0.md`  
**Sources:** PRD v2.1 §12.1 Neural Observatory · Branding brief v1.0.0 white · BANNA Gate/BrandHeader provisional consume · Kinzo TOP10  
**Branch target:** `feat/ds-v1-1` (Cerebro-core unreachable this box — staged only)  
**Status:** INTERNAL · D0 design-library notes · **not a freeze** · review before Fakir / Tarek  
**Alias:** same body as `NASAQ_DS_v1_1_D0_TOKEN_NOTES_GateBrandHeader_20261021_Cairo_v1.0.md`

---

## 1. Authority

| Layer | Rule |
|-------|------|
| **D0 locked set** | Gate chrome may use only the tokens in §2 marked **D0**. Inventing hex = brand-match FAIL. |
| **TEST** | `#0A131A` (`--object-shade`) — in build for evaluation only; **not frozen**; never promote to canvas. |
| **OPEN (Tarek)** | Shadow tone, 6px parallax, status-board 4-col — leave switchable; NASAQ does not pick. |
| **Out of Gate chrome** | AgentCard field accents (e.g. NASAQ `#0F5E5A` / cream `#EEE5D4`), teal orb ramp — roster / voice line only, not BrandHeader logos. |

---

## 2. D0 token table (Gate / BrandHeader)

| CSS token | Hex / value | Role | Freeze |
|-----------|-------------|------|--------|
| `--canvas` | `#101D27` | Gate world / page field | **D0** |
| `--glass-tint` | `#142632` | Cards / pockets / glass UI base | **D0** |
| `--glass-face` | `color-mix(in srgb, #142632 88%, transparent)` | Frosted face; solid `#142632` fallback when `prefers-reduced-transparency` | **D0** (mix recipe) |
| `--text-primary` | `#F2F6F8` | Primary UI type | **D0** |
| `--text-secondary` | `#BDCBD3` | Secondary / muted (family anchor) | **D0** |
| `--logo-flat` | `#FFFFFF` | Flat white logos / Basmala on obsidian | **D0** |
| `--focus` | `#65ACFF` | Focus ring | **D0** |
| `--focus-glow` | `#B4DDFF` | Focus glow sparingly (≤35% opacity) | **D0** (use sparingly) |
| `--highlight` | `#FFF1D4` | **Single** most important focal element only | **D0** |
| `--status-ok` | `#36E88D` | Tracking / success **only** — never decorate | **D0** |
| `--status-err` | `#FF5666` | Hard error **only** — never decorate | **D0** |
| `--divider` | `#FFFFFF24` | Hairline dividers only | **D0** |
| `--object-shade` | `#0A131A` | 3D object / tile trial shade | **TEST — not frozen** |
| `--shadow-tone` | `unset` | Shadow colour id | **OPEN (Tarek)** |

### Banned (brand-match FAIL)
- Purple / violet glows or themes  
- Gold orbital jewellery  
- YAH light-pack bleed  
- Cream `#EEE5D4` as Gate logo fill (AgentCard text-on-colour only)  
- Boxed / white-background logo PNGs  
- Any hex not in this table for Gate chrome  

---

## 3. Material split (2D vs 3D)

| Surface | Treatment |
|---------|-----------|
| BrandHeader / Gate logos (Basmala, future wordmark) | **Flat white** on canvas / glass — no refraction, no volcanic-glass fill |
| 3D sphere / tiles | Volcanic glass / obsidian **study** allowed; obsidian tiles **NOT final** |
| `#0A131A` on objects | Label **TEST** in notes; do not replace `#101D27` canvas |

---

## 4. Contrast notes (library)

| Pair | Approx intent | Check |
|------|---------------|-------|
| `#FFFFFF` logo on `#101D27` | Flat white on canvas | Composited screenshot ≥ 4.5:1 for any visible text; logos eyedropper white |
| `#F2F6F8` on `#101D27` / `#142632` | Primary type | FAIL if washed out on glass stack |
| `#BDCBD3` on `#101D27` | Secondary | Muted only — not primary CTA |
| `#65ACFF` ring on canvas | Focus | Visible; no purple substitute |
| `#0A131A` on `#101D27` | Object trial | Low delta — **TEST** only; not a text/logo field |

Measure logos on the **composited** Gate stack, not token pairs alone.

---

## 5. Basmala (token-adjacent)

| Viewport | State |
|----------|-------|
| Phone | **PASS path confirmed** — visual stamp waits on verified 468×76 |
| Tablet | **PASS path confirmed** — same |
| Desktop retina | **HOLD** |

See `NASAQ_DS_v1_1_BASMALA_PASS_PATH_phone-tablet_20261021_Cairo_v1.0.md`. Wordmark: **BLOCKED** (placeholder only).

---

## 6. Consume path (BANNA)

1. Import / declare CSS vars from this table — do not hard-fork new hex.  
2. Wire `--object-shade` only behind a TEST attribute / comment; never as `--canvas`.  
3. `--shadow-tone`, parallax, status-board cols → switchables `unset` until Tarek.  
4. After lit Gate frames exist: NASAQ brand-match → Fakir ECD → Tarek freeze.

---

## 7. Related files (this lane)

| File | Role |
|------|------|
| `NASAQ_DS_v1_1_BRAND_MATCH_CHECKLIST_GateBrandHeader_20261021_Cairo_v1.0.md` | Pass / Fail / Hold / Open checks |
| `NASAQ_DS_v1_1_BASMALA_PASS_PATH_phone-tablet_20261021_Cairo_v1.0.md` | Phone/tablet PASS path · desktop HOLD |
| `LANE_STATUS.md` | Live seat status |
