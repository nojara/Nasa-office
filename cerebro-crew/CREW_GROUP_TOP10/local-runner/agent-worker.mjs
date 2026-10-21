#!/usr/bin/env node
/**
 * Local Cerebro crew agent worker — zero external services.
 * Loads AgentCard + capabilities + memory + knowledge from disk, executes lane mission, exits.
 * Usage: node agent-worker.mjs <LATIN>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACK = path.resolve(__dirname, '..');
const CREW = path.resolve(PACK, '..');
const LATIN = (process.argv[2] || '').toUpperCase();
const DATE = '20261021';
const CAIRO = 'Cairo';

if (!LATIN) {
  console.error('Usage: node agent-worker.mjs <LATIN>');
  process.exit(2);
}

const outDir = path.join(PACK, 'outputs', LATIN);
fs.mkdirSync(outDir, { recursive: true });

const logPath = path.join(outDir, 'local-run.log');
const log = (line) => {
  const row = `[${new Date().toISOString()}] ${line}`;
  fs.appendFileSync(logPath, row + '\n');
  console.log(row);
};

function readText(p) {
  return fs.readFileSync(p, 'utf8');
}

function readJson(p) {
  return JSON.parse(readText(p));
}

function write(rel, body) {
  const p = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
  log(`WROTE ${rel} (${Buffer.byteLength(body)} bytes)`);
  return p;
}

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

const blockers = [];
const produced = [];

function noteBlocker(id, title, severity, detail) {
  blockers.push({ id, title, severity, detail });
  log(`BLOCKER ${id} [${severity}] ${title} — ${detail}`);
}

// --- load identity pack (local only) ---
const cardPath = path.join(CREW, `${LATIN}_AgentCard_v1.5_${DATE}_${CAIRO}.json`);
const capsPath = path.join(PACK, 'capabilities', `${LATIN}.md`);
const memPath = path.join(PACK, 'memory', `${LATIN}.md`);
const knowPath = path.join(PACK, 'knowledge', `${LATIN}.md`);
const group = readJson(path.join(PACK, 'GROUP.json'));
const member = (group.members || []).find((m) => m.latin === LATIN);

if (!member) {
  log(`FATAL: ${LATIN} not in GROUP.json members`);
  process.exit(3);
}
for (const [label, p] of [
  ['AgentCard', cardPath],
  ['capabilities', capsPath],
  ['memory', memPath],
  ['knowledge', knowPath],
]) {
  if (!exists(p)) {
    log(`FATAL: missing ${label} at ${p}`);
    process.exit(4);
  }
}

const card = readJson(cardPath);
const capabilities = readText(capsPath);
const memory = readText(memPath);
const knowledge = readText(knowPath);

log(`LOADED ${LATIN} pid=${process.pid}`);
log(`card=${cardPath}`);
log(`mission=${member.mission}`);

// Standing environment probes (local only — no network)
const handoff = '/workspace/cerebro_handoff';
const cerebroCoreHint = path.join(process.env.HOME || '', 'Cerebro-core');
if (!exists(handoff)) {
  noteBlocker(
    'BLK-HANDOFF',
    'cerebro_handoff missing',
    'P1',
    `${handoff} not on this box (Zebda box path)`,
  );
}
if (!exists(cerebroCoreHint) && !exists('/workspace/Cerebro-core')) {
  noteBlocker(
    'BLK-01',
    'Cerebro-core feat/ds-v1-1 unreachable locally',
    'P0',
    'No local checkout of njr39/Cerebro-core; staging under outputs only',
  );
}
noteBlocker(
  'BLK-02',
  'CEREBRO wordmark BLOCKED',
  'P0',
  'White-on-white — placeholder slot only; do not approximate',
);
noteBlocker(
  'BLK-03',
  'Open Tarek calls ×3',
  'P1',
  'Leave switchable: parallax 6px|none · status board 4-col|not · shadow tone',
);

const HARD = [
  'Repo njr39/Cerebro-core branch feat/ds-v1-1 ONLY',
  'No new branches / merges / PRs / deploys',
  'Do not touch voice, sound, auth, Google, gesture thresholds, WebGL renderer, dependencies',
  'Review order lit: NASAQ → Fakir → Tarek',
  'Design gate: Rasma → NASAQ → Fakir → Nojj',
  'Internal only — publish nothing',
  'HAQQ not HAQI',
  'NASAQ/MADAR/NABR/Samna avatars PLACEHOLDER — do not invent',
];

// --- lane executors (deterministic local producers) ---
const lanes = {
  BANNA() {
    const stub = `/**
 * PersistentBrandHeader — local BANNA stub (feat/ds-v1-1 paste target)
 * HARD: single instance · never remounts · never spins with sphere
 * Stack: Basmala above · CEREBRO wordmark SLOT (blocked) below
 * Slots: phone / tablet / desktop / compact-landscape
 */
export type BrandSlot = 'phone' | 'tablet' | 'desktop' | 'compact-landscape';

export const BRAND_SLOTS: Record<BrandSlot, { basmalaMaxW: number; wordmarkW: number; wordmarkH: number }> = {
  phone: { basmalaMaxW: 220, wordmarkW: 140, wordmarkH: 36 },
  tablet: { basmalaMaxW: 320, wordmarkW: 160, wordmarkH: 40 },
  desktop: { basmalaMaxW: 468, wordmarkW: 176, wordmarkH: 44 }, // retina HOLD — use 1x until NASAQ clears
  'compact-landscape': { basmalaMaxW: 260, wordmarkW: 148, wordmarkH: 38 },
};

export function PersistentBrandHeaderSpec() {
  return {
    mount: 'app-shell-once',
    stack: ['basmala', 'wordmark_slot'],
    basmala: { src: 'Basmala_468x76.png', status: 'NASAQ_PASS_phone_tablet', desktopRetina: 'HOLD' },
    wordmark: { status: 'BLOCKED_WHITE_ON_WHITE', render: 'placeholder_slot_only' },
    motion: { withSphere: false, remount: false, animateAsOneStack: true },
    switchables: { parallax: 'unset', statusBoardCols: 'unset', shadowTone: 'unset' },
  };
}
`;
    produced.push(write('stubs/PersistentBrandHeader.local.ts', stub));
    produced.push(
      write(
        'LANE_STATUS.md',
        `# BANNA · local lane status\n\n- Mode: **local terminal worker** (no cloud / Drive / LLM)\n- Started: PersistentBrandHeader + Gate P0 slot map\n- Produced: stubs/PersistentBrandHeader.local.ts\n- Blocked on: BLK-01 (no Cerebro-core checkout) · BLK-02 wordmark\n- Switchables: unset (do not pick)\n`,
      ),
    );
  },

  NASAQ() {
    produced.push(
      write(
        `NASAQ_DS_v1_1_TOKEN_NOTES_GateBrandHeader_${DATE}_${CAIRO}_v1.0.md`,
        `# NASAQ · D0 token notes (local)\n\n| Token | Value | State |\n|---|---|---|\n| Canvas | \`#101D27\` | LOCKED D0 |\n| Glass | \`#142632\` | LOCKED D0 |\n| Text primary | \`#F2F6F8\` | LOCKED D0 |\n| Focus | \`#65ACFF\` | LOCKED D0 |\n| Object shade | \`#0A131A\` | **TEST — not frozen** |\n| Logos | flat white on obsidian | LOCKED rule |\n\n## Basmala 468×76\n- Phone: PASS (standing)\n- Tablet: PASS (standing)\n- Desktop retina: **HOLD**\n\n## Wordmark\n- CEREBRO: **BLOCKED** — placeholder only\n`,
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# NASAQ · local lane status\n\n- Mode: local terminal worker\n- Started: Brand-match + D0 TOKEN_NOTES\n- #0A131A remains TEST\n- Desktop Basmala retina HOLD\n`,
      ),
    );
  },

  RASMA() {
    produced.push(
      write(
        `RASMA_CEREBRO_21_SCREEN_INDEX_${DATE}_${CAIRO}_v1.0.md`,
        `# RASMA · 21-screen index (local staging)\n\nGate-first plan index for DS v1.1. Obsidian hero render is elsewhere — **not** claimed lit-final here.\n\n| # | Screen | BrandHeader slot | Notes |\n|---|---|---|---|\n| 1 | Gate / boot | phone→desktop | Header one instance |\n| 2 | Home / sphere | desktop | Header never spins |\n| 3–21 | (BANNA audit plan) | per slot map | Fill from approved systems only |\n\n## BrandHeader slot map\n- phone · tablet · desktop · compact-landscape\n- Basmala above · wordmark placeholder below\n`,
      ),
    );
    produced.push(
      write(
        `RASMA_CEREBRO_BrandHeader_SLOT_MAP_${DATE}_${CAIRO}_v1.0.md`,
        `# RASMA · BrandHeader slot map\n\n| Slot | Basmala | Wordmark | Remount | Sphere-linked |\n|---|---|---|---|---|\n| phone | 468×76 scaled | placeholder | never | never |\n| tablet | 468×76 scaled | placeholder | never | never |\n| desktop | 468×76 (retina HOLD) | placeholder | never | never |\n| compact-landscape | scaled | placeholder | never | never |\n`,
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# RASMA · local lane status\n\n- Mode: local terminal worker\n- Started: 21-screen index + BrandHeader slot map\n- Lit finals: none invented; hero elsewhere\n`,
      ),
    );
  },

  FAKIR() {
    produced.push(
      write(
        `FAKIR_CEREBRO_Craft_READINESS_${DATE}_${CAIRO}_v1.0.md`,
        `# FAKIR · ECD craft readiness (local)\n\nLive craft PASS: **NOT STARTED — BLOCKED** until NASAQ brand-match clears and real lit evidence exists.\n\n| Check | State |\n|---|---|\n| NASAQ D0 / brand-match | AWAITING / partial local notes |\n| BANNA header stub | staged locally |\n| Wordmark | BLOCKED — fail if approximated |\n| Open Tarek calls | switchable — do not pick |\n| Lit renders | none to Tarek yet |\n`,
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# FAKIR · local lane status\n\n- Mode: local terminal worker\n- Started: craft readiness matrix\n- Craft PASS: withheld\n`,
      ),
    );
  },

  MADAR() {
    produced.push(
      write(
        `MADAR_LOADER_PLACEHOLDER_1p8_12s_${DATE}_${CAIRO}_v1.0.md`,
        `# MADAR · Loader 1.8–12s PLACEHOLDER\n\n**Status:** PLACEHOLDER until Tarek sends real timeline.\nDo not treat as locked motion. Do not touch WebGL / sound.\n\n| Window | Owner |\n|---|---|\n| 0–1.8s | Tarek (spec elsewhere / local 0–1.8s file) |\n| 1.8–12s | PLACEHOLDER (this file) |\n`,
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# MADAR · local lane status\n\n- Mode: local terminal worker\n- Started: 0–1.8s lock + 1.8–12s PLACEHOLDER\n- Avatar: PLACEHOLDER_NO_REFERENCE_HEAD\n`,
      ),
    );
  },

  GRANDY() {
    produced.push(
      write(
        `GRANDY_OPS_GATE_LOCAL_${DATE}_${CAIRO}_v1.0.md`,
        `# GRANDY · Ops gate (local enforce)\n\nStatus: **HOLD**\n\n## Hard rules (enforced)\n${HARD.map((h) => `- ${h}`).join('\n')}\n\n## Gate order\nRasma → NASAQ → Fakir → Nojj\n\n## Dispatch A/B\nAfter gate PASS only.\n`,
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# GRANDY · local lane status\n\n- Mode: local terminal worker\n- Started: ops-gate HOLD + hard-rule enforce\n`,
      ),
    );
  },

  MUSA() {
    const basmalaCandidates = [
      path.join(handoff, 'Basmala_468x76.png'),
      path.join(handoff, 'basmala.png'),
      '/workspace/brain/Agents Office/cerebro-crew/assets/Basmala_468x76.png',
    ];
    const found = basmalaCandidates.filter((p) => exists(p));
    if (found.length === 0) {
      noteBlocker(
        'MUSA-BLK-BASMALA',
        'Basmala PNG 468×76 not found locally',
        'P0',
        'No verified file under cerebro_handoff or crew assets',
      );
    }
    produced.push(
      write(
        `MUSA_PROVENANCE_LOCAL_${DATE}_${CAIRO}_v1.0.md`,
        `# MUSA · provenance (local)\n\n| Asset | State |\n|---|---|\n| Basmala 468×76 | ${found[0] || 'NOT FOUND locally'} |\n| CEREBRO wordmark | BLOCKED — no approx |\n| FINAL_v2.1 avatars | use READY only; NASAQ/MADAR/NABR/Samna PLACEHOLDER |\n\nHandoff path: \`${handoff}\` · present=${exists(handoff)}\n`,
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# MUSA · local lane status\n\n- Mode: local terminal worker\n- Started: BrandHeader/Gate provenance scan\n- Basmala local hits: ${found.length}\n`,
      ),
    );
  },

  KATIB() {
    const strings = {
      'brand.header.aria': { en: 'Cerebro brand', ar: 'عَلامَةُ سِيرِيبْرُو' },
      'brand.wordmark.slot.aria': {
        en: 'CEREBRO wordmark pending — blocked white-on-white',
        ar: 'خَانَةُ عَلامَةِ سِيرِيبْرُو مُعَلَّقَة — مَحْجُوبَة (أَبْيَضُ عَلَى أَبْيَض)',
      },
      'brand.wordmark.visible': { en: null, ar: null, status: 'BLOCKED' },
    };
    produced.push(
      write(
        `KATIB_CEREBRO_Gate-BrandHeader_strings_${DATE}_${CAIRO}_v1.0.json`,
        JSON.stringify({ agent: 'KATIB', internal: true, strings }, null, 2) + '\n',
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# KATIB · local lane status\n\n- Mode: local terminal worker\n- Started: Gate/BrandHeader EN/AR strings JSON\n- Wordmark visible copy: BLOCKED\n`,
      ),
    );
  },

  ZEBDA() {
    const board = `# ZEBDA · COORD_BOARD (local) · ${DATE} ${CAIRO}\n\n| Agent | Mission | Local process |\n|---|---|---|\n${(group.members || [])
      .map((m) => `| ${m.latin} | ${m.mission.split('.')[0]} | agent-worker.mjs ${m.latin} |`)
      .join('\n')}\n\n## Open Tarek calls (switchable)\n1. 6px parallax or none\n2. Status board 4-col or not\n3. Shadow tone\n\n## Gate queue\nRasma → NASAQ → Fakir → Nojj\n`;
    produced.push(write(`COORD_BOARD_${DATE}.md`, board));
    produced.push(
      write(
        'LANE_STATUS.md',
        `# ZEBDA · local lane status\n\n- Mode: local terminal worker\n- Started: COORD_BOARD rebuild\n`,
      ),
    );
  },

  BILAL() {
    produced.push(
      write(
        `BILAL_KINZO39_STATUS_LOCAL_${DATE}_${CAIRO}_v1.0_INFO.md`,
        `# INFO · Kinzo → 39 (local crew run)\n**INTERNAL ONLY**\n\nCrew: CEREBRO_DS_v1_1_CREW_TOP10 · mode=local terminal · no cloud/Drive\n\n## Blockers\n- BLK-01 Cerebro-core access\n- BLK-02 CEREBRO wordmark\n- BLK-03 Open Tarek calls ×3\n- BLK-HANDOFF /workspace/cerebro_handoff missing\n\n## Ask of 39\n1. Attach Cerebro-core feat/ds-v1-1 checkout\n2. Unlock wordmark asset\n3. Decide open calls when ready\n`,
      ),
    );
    produced.push(
      write(
        'LANE_STATUS.md',
        `# BILAL · local lane status\n\n- Mode: local terminal worker\n- Started: Kinzo→39 INFO status (internal)\n`,
      ),
    );
  },
};

if (typeof lanes[LATIN] !== 'function') {
  log(`FATAL: no local lane executor for ${LATIN}`);
  process.exit(5);
}

try {
  lanes[LATIN]();
} catch (err) {
  log(`ERROR ${err?.stack || err}`);
  process.exit(1);
}

const identity = {
  latin: LATIN,
  arabic: member.name?.ar,
  agent_id: member.agent_id,
  role: member.role,
  field_colour: member.field_colour,
  avatar_status: member.avatar_status,
  pid: process.pid,
  mode: 'local-terminal',
  external_services: [],
  loaded: {
    agentcard: cardPath,
    capabilities: capsPath,
    memory: memPath,
    knowledge: knowPath,
    card_keys: Object.keys(card),
    capabilities_bytes: Buffer.byteLength(capabilities),
    memory_bytes: Buffer.byteLength(memory),
    knowledge_bytes: Buffer.byteLength(knowledge),
  },
  mission: member.mission,
  produced,
  blockers,
  hard_rules: HARD,
  earlier_run_check: {
    id: 'run-51679fc3-8284-4c48-91a8-8029a2257458',
    status: 'NOT_AVAILABLE_LOCALLY',
    note: 'No local transcript/artifact for this run id on this box',
  },
  finished_at: new Date().toISOString(),
};

produced.push(write('PROCESS.json', JSON.stringify(identity, null, 2) + '\n'));
log(`DONE ${LATIN} exit=0 produced=${produced.length} blockers=${blockers.length}`);
process.exit(0);
