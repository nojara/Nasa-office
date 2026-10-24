# CRO-CDE · WebGL / Three.js SPEC v0.1
**SPEC / documentation only · do NOT edit the WebGL renderer or dependencies**

| Field | Value |
|---|---|
| Pack | CRO-CDE |
| Audience | **Karsa** · implementers on `feat/ds-v1-1` |
| Authority | D0 · RASMA 21-screen · MADAR loader 0–1.8s · layer map v0.3 **PROPOSED** |
| Hard | No renderer / deps / gesture / voice channel edits from this pack |

## 1 · Scene ownership

| Layer family | Owner seat (design) | Build rule |
|---|---|---|
| Sphere / orbital home | BANNA layout · MADAR motion · lighting elsewhere | Header **never** child of sphere |
| PersistentBrandHeader | BANNA | DOM/CSS chrome · one instance · never remounts · never spins with sphere |
| Loader 0–1.8s | MADAR (Tarek timeline) | Spec only; 1.8–12s PLACEHOLDER |
| Layer motion L0–L13 | MADAR map v0.3 PROPOSED | Attached `CRO-NXS_layer_motion_map_v0.3_PROPOSED_*.md` — **not locked** |
| Voice orb L13 | NABR v0_7f visual **LOCKED** teal/flat | Motion keys PROPOSED — **do not build** easing / ElevenLabs / greeting |

## 2 · Material direction (3D)

| Item | Spec |
|---|---|
| Intent | Volcanic glass / obsidian on **3D surfaces** |
| Logos (2D chrome) | Flat white — not glass-filled |
| Object shade | `#0A131A` PROPOSED objects only |
| Canvas / clear colour | `#101D27` (D0) — do not replace with object shade |
| Obsidian tile test | **FAILS bar** (grey metal, backlight seam, hex gaps, no floor reflection) — **reference only** |

## 3 · Motion envelope (loader)

| Window | Owner | State |
|---|---|---|
| 0–1.8s | Tarek → MADAR spec | Use `MADAR_LOADER_MOTION_SPEC_0_1p8s_…` |
| 1.8–12s | PLACEHOLDER until Tarek | Do not ship MADAR fill as final |
| Reduced motion | Static brand stack | Honour `prefers-reduced-motion` |

## 4 · Loop / layer map (PROPOSED)

- Master loop **72s**; periods must divide 72 (see attached v0.3 map).
- UI layers L9–L12: whole-pixel drift ≤1px; sub-pixel only for orb/3D L0–L8.
- Units: device/render-frame px, no DPR multiply; pass bar ±1px.
- **Do not implement as locked** until Tarek/NASAQ/Fakir clear.

## 5 · Open calls (switchable — do not pick)

1. Parallax `6px` \| `none`  
2. Status board `4-col` \| `not`  
3. Shadow tone  

## 6 · Prototype outputs linked

- BANNA: `../05_prototype_outputs/PersistentBrandHeader.spec.md` + stubs  
- MADAR: loader 0–1.8s spec in `../05_prototype_outputs/`  
- Layer map + orb keys: this folder  

## 7 · Explicit non-goals for CDE pack authors

- No PR/merge/deploy  
- No changes to voice/sound/auth/Google/gesture/WebGL renderer/deps  
- No inventing lit finals or non-D0 brand marks  
- Pack stays in workspace — no Drive unless Tarek says so  

