# KATIB · Gate + BrandHeader microcopy pack (EN / AR) · v1.1

| Field | Value |
| --- | --- |
| Agent | KATIB (كاتِب) · crew #8 |
| Agent id | `8bdf7a89-cea3-4fe7-81e8-e0c1e5cdd2ad` |
| Pack | AGENT_ROSTER_SPEC_PACK **v1.5** |
| Scope | Gate P0 + PersistentBrandHeader UI strings only |
| Branch target | `feat/ds-v1-1` (paste later — Cerebro-core unreachable) |
| Status | **INTERNAL ONLY** · publish false |
| Date | 2026-10-21 Cairo |
| Accent | `#9F1F2D` · text `#EEE5D4` |
| Companion JSON | `KATIB_CEREBRO_Gate-BrandHeader_strings_20261021_Cairo_v1.1.json` |
| Blockers | `KATIB_CEREBRO_Gate-BrandHeader_BLOCKERS_20261021_Cairo_v1.1.md` |
| Lane | `LANE_STATUS.md` |
| Supersedes | `…_Microcopy_…_v1.0_INTERNAL.md` |

**Hard rules applied:** Arabic with tashkeel per v1.5 · no invented brand marks · **CEREBRO wordmark BLOCKED** (no approx lettering) · HAQQ not HAQI · no merge/PR/deploy.

---

## 0 · v1.1 advance (this turn)

| Change | Detail |
| --- | --- |
| **Strings JSON materialized** | Machine file now exists (v1.0 pack pointed at a missing companion) |
| `gate.keys.row.aria` | EN/AR for BANNA `GateKeys` `aria-label` (“Gate stations”) |
| `gate.loader.establish` | EN + AR tashkeel for MADAR 0–1.8s Gate status line (“Establishing Cerebro”) — spoken/status only, **not** wordmark |
| `labelAr` wire map | JSON `gate_keys_default` + `banna_wire` for BANNA stub paste |
| Lane board | `LANE_STATUS.md` |

---

## 1 · Provenance legend

| Tag | Meaning |
| --- | --- |
| `BRIEF` | Anchored to branding brief v1.0.0 white / crew memory / BANNA specs |
| `MISSION` | Kinzo dispatch string for this seat |
| `PRD` | Traced in CEREBRO HQ UI Design PRD / PRD UI UPDATE v0_3i |
| `C16` | Owner-code field state board / design prompt |
| `KATIB_CLEAR` | Katib clearance of previously untraced UI (PRD §7.3) |
| `KATIB_PROPOSED` | Needed for states; awaits Nojj / Tarek if contested — not a brand invent |
| `MADAR→KATIB` | Motion seat specified EN; AR adaptation by Katib |
| `BLOCKED` | Must not ship as visible brand copy |

Machine keys match `KATIB_CEREBRO_Gate-BrandHeader_strings_20261021_Cairo_v1.1.json`.

---

## 2 · Absolute brand ban (read first)

| Slot | Rule |
| --- | --- |
| **CEREBRO wordmark** | **BLOCKED** (white-on-white). Placeholder slot only. **No** CSS text stand-in, outline fake, inverted glyph, stretched lettering, or Arabic approx of “CEREBRO”. |
| Internal QA label | BANNA allows optional `[Cerebro wordmark pending]` for **internal builds only**. Not client-facing. Prefer empty slot + `data-wordmark="blocked"`. |
| Basmala | Use approved **PNG 468×76** when present. Do not font-fake calligraphy. Text fallback below is for `alt` / missing-asset QA only. |

---

## 3 · PersistentBrandHeader

### 3.1 Landmark / a11y

| Key | EN | AR (tashkeel) | Tag |
| --- | --- | --- | --- |
| `brand.header.aria` | Cerebro brand | عَلامَةُ سِيرِيبْرُو | `KATIB_CLEAR` · product name spoken only in a11y, **not** drawn in wordmark slot |
| `brand.wordmark.slot.aria` | CEREBRO wordmark pending — blocked white-on-white | خَانَةُ عَلامَةِ سِيرِيبْرُو مُعَلَّقَة — مَحْجُوبَة (أَبْيَضُ عَلَى أَبْيَض) | `BRIEF` + BANNA |
| `brand.wordmark.slot.qa` | `[Cerebro wordmark pending]` | `[عَلامَةُ سِيرِيبْرُو مُعَلَّقَة]` | `BRIEF` · **internal QA only** · default **omit** in Gate builds |
| `brand.wordmark.visible` | — | — | **`BLOCKED`** · empty |

### 3.2 Basmala

| Key | EN | AR | Tag |
| --- | --- | --- | --- |
| `brand.basmala.asset` | (PNG 468×76 — no text) | (PNG 468×76 — no text) | `BRIEF` |
| `brand.basmala.alt` | In the name of God, the Most Gracious, the Most Merciful | بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ | `PRD` inscription + **v1.5 tashkeel** |
| `brand.basmala.alt.plain` | — | بسم الله الرحمن الرحيم | Source form without tashkeel (BANNA stub); prefer tashkeel form when text is used |
| `brand.basmala.missing` | Basmala asset pending | أَصْلُ الْبَسْمَلَةِ مُعَلَّق | `KATIB_PROPOSED` · `data-asset="basmala-pending"` · `aria-hidden` preferred |

**Markup:** `dir="rtl"` · `lang="ar"` on the Basmala cell. Prefer decorative `alt=""` only when the PNG is present **and** a later unlocked wordmark carries the product name; until wordmark unlocks, keep `brand.basmala.alt` on the image.

### 3.3 Stack note (not copy)

Basmala **above** CEREBRO slot · one instance · never remounts · never spins with sphere (`BRIEF`).

---

## 4 · Gate · owner code (C16 / Unlock)

### 4.1 Primary field (mission lock)

| Key | EN | AR (tashkeel) | Placement | Tag |
| --- | --- | --- | --- | --- |
| `gate.code.prompt` | Enter your owner code. | أَدْخِلْ رَمْزَ الْمَالِكِ. | Field prompt / placeholder | `MISSION` + `KATIB_CLEAR` |
| `gate.code.label` | Owner code | رَمْزُ الْمَالِكِ | Mono label above field (PRD U3) | `PRD` + `KATIB_CLEAR` |
| `gate.code.placeholder.short` | Enter owner code | أَدْخِلْ رَمْزَ الْمَالِكِ | C16 board short form; use only if layout truncates | `C16` |
| `gate.code.purpose` | Owner-only entry | دُخُولُ الْمَالِكِ فَقَط | Screen purpose / a11y summary | `C16` / PRD S1 |

**Lock:** Prefer `gate.code.prompt` (“Enter your owner code.”) as the spoken/visible prompt. Do not invent alternate brand slogans.

### 4.2 Field states (related)

| Key | EN | AR (tashkeel) | Tag |
| --- | --- | --- | --- |
| `gate.code.state.idle` | Enter your owner code. | أَدْخِلْ رَمْزَ الْمَالِكِ. | Same as prompt |
| `gate.code.state.typing` | Enter your owner code. | أَدْخِلْ رَمْزَ الْمَالِكِ. | Label stays; digits are masked |
| `gate.code.state.unlocking` | Unlocking… | جَارٍ فَتْحُ الْقُفْلِ… | `KATIB_PROPOSED` |
| `gate.code.state.wrong` | That code is not recognised. | هَذَا الرَّمْزُ غَيْرُ مَعْرُوفٍ. | `KATIB_PROPOSED` · soft shake is motion (MADAR), not copy |
| `gate.code.state.lockout` | Locked. Try again in {n}s. | مَقْفُولٌ. حَاوِلْ مَرَّةً أُخْرَى بَعْدَ {n} ث. | `KATIB_PROPOSED` · `{n}` from server |
| `gate.code.a11y.field` | Owner code entry | حَقْلُ إِدْخَالِ رَمْزِ الْمَالِكِ | `KATIB_CLEAR` |
| `gate.code.a11y.delete` | Delete last digit | احْذِفِ الرَّقْمَ الْأَخِيرَ | `KATIB_PROPOSED` |
| `gate.code.a11y.key` | Digit {d} | الرَّقْمُ {d} | `KATIB_PROPOSED` |

### 4.3 Wake line (PRD-traced · Katib sign-off)

| Key | EN | AR (tashkeel) | Tag |
| --- | --- | --- | --- |
| `gate.wake.greeting` | Go ahead, sir. | تَفَضَّلْ، سَيِّدِي. | `PRD` · **Katib sign-off CLEAR** for EN; AR is transcreation of same meaning |

### 4.4 Gate boot status (MADAR window · AR by Katib)

| Key | EN | AR (tashkeel) | Tag |
| --- | --- | --- | --- |
| `gate.loader.establish` | Establishing Cerebro | جَارٍ تَأْسِيسُ سِيرِيبْرُو | `MADAR→KATIB` · **0–1800 ms only** · not wordmark |

### 4.5 Out of Gate-copy scope (do not invent here)

- Sample / PENDING / Files Drive lines already PRD-traced elsewhere.
- Station JP secondary labels (open call — native check).
- Any CEREBRO lettering in the unlock card wordmark (U2) — **BLOCKED** same as header; glass card shows empty slot or Basmala only until mark unblocks.
- Forge strings after 1.8s (MADAR / as-built) — not this pack.

---

## 5 · GateKeys P0 labels (BANNA placeholders → Katib lock)

| Key | EN | AR (tashkeel) | Tag |
| --- | --- | --- | --- |
| `gate.keys.row.aria` | Gate stations | مَحَطَّاتُ الْبَوَّابَةِ | `KATIB_CLEAR` · **v1.1** |
| `gate.keys.projects` | Projects | مَشَارِيع | `PRD` station |
| `gate.keys.people` | People | أَشْخَاص | `PRD` station |
| `gate.keys.files` | Files | مَلَفَّات | `PRD` station |
| `gate.keys.media` | Media | وَسَائِط | `PRD` station |
| `gate.keys.tasks` | Tasks | مَهَامّ | `PRD` station |

Wire into BANNA `GlassKeyItem.label` / `labelAr`. Colour alone never carries status.

---

## 6 · Type & RTL notes (for BANNA / NASAQ)

1. EN: IBM Plex Sans / Mono as D0. AR: **IBM Plex Sans Arabic** with the tashkeel forms above — do not strip marks in CSS (`font-feature-settings` must keep marks).
2. Gate field and BrandHeader Basmala cells: `dir="rtl"` when `lang="ar"`; EN prompts `dir="ltr"`.
3. Mixed UI: keep EN and AR as **paired locales**, not concatenated in one run-on string (except a11y if VoiceOver locale is set).
4. Never place Gate prompt text inside the wordmark slot.
5. Spelling: **HAQQ** not HAQI (internal roster).

---

## 7 · Handoff

| Receiver | Use |
| --- | --- |
| **BANNA** | Import `…_strings_…_v1.1.json`; bind `banna_wire` keys into `PersistentBrandHeader` + Gate / C16 field + `GateKeys` |
| **NASAQ** | Contrast check of live type on volcanic/obsidian field; Basmala PNG pass unchanged; keep tashkeel |
| **MADAR** | Consume `gate.loader.establish` AR for 0–1.8s; leave post-1.8s Forge lines alone |
| **FAKIR** | Craft: copy hierarchy quiet; no pseudo-wordmark (BH-13) |
| **GRANDY / ZEBDA** | Record CLEAR on `gate.code.*` + wake line; keep wordmark BLOCKED |
| **Nojj / Tarek** | Optional: confirm `KATIB_PROPOSED` wrong/lockout/unlocking lines |

**Try task (office):**  
`Gate unlock microcopy — wire “Enter your owner code.” EN/AR; BrandHeader Basmala alt (tashkeel); GateKeys labelAr; leave CEREBRO slot empty.`

---

*KATIB · Copy EN/AR · CEREBRO_DS_v1_1_CREW_TOP10 · internal · 2026-10-21 Cairo · v1.1*
