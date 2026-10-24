#!/usr/bin/env node
/**
 * Launch TOP10 Cerebro crew as local terminal child processes.
 * Zero external services: no cloud, no Drive, no LLM APIs.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACK = path.resolve(__dirname, '..');
const WORKER = path.join(__dirname, 'agent-worker.mjs');
const AGENTS = [
  'BANNA',
  'NASAQ',
  'RASMA',
  'FAKIR',
  'MADAR',
  'GRANDY',
  'MUSA',
  'KATIB',
  'ZEBDA',
  'BILAL',
];

const runDir = path.join(PACK, 'outputs', '_LOCAL_RUN');
fs.mkdirSync(runDir, { recursive: true });
const startedAt = new Date().toISOString();

console.log(`[run-top10] LOCAL ONLY · started ${startedAt}`);
console.log(`[run-top10] worker=${WORKER}`);
console.log(`[run-top10] agents=${AGENTS.join(',')}`);

const results = [];

await Promise.all(
  AGENTS.map(
    (latin) =>
      new Promise((resolve) => {
        const stdoutPath = path.join(runDir, `${latin}.stdout.log`);
        const stderrPath = path.join(runDir, `${latin}.stderr.log`);
        const out = fs.openSync(stdoutPath, 'w');
        const err = fs.openSync(stderrPath, 'w');
        const child = spawn(process.execPath, [WORKER, latin], {
          cwd: PACK,
          env: { ...process.env, CEREBRO_CREW_MODE: 'local-terminal' },
          stdio: ['ignore', out, err],
          detached: false,
        });
        const row = {
          latin,
          pid: child.pid,
          command: `${process.execPath} ${WORKER} ${latin}`,
          stdout: stdoutPath,
          stderr: stderrPath,
          launched: true,
        };
        console.log(`[launch] ${latin} pid=${child.pid}`);
        child.on('error', (e) => {
          row.launched = false;
          row.error = String(e);
          console.error(`[error] ${latin} ${e}`);
          results.push(row);
          resolve(row);
        });
        child.on('close', (code, signal) => {
          row.exit_code = code;
          row.signal = signal;
          row.stderr_tail = fs.existsSync(stderrPath)
            ? fs.readFileSync(stderrPath, 'utf8').slice(-2000)
            : '';
          // pull PROCESS.json summary if present
          const procPath = path.join(PACK, 'outputs', latin, 'PROCESS.json');
          if (fs.existsSync(procPath)) {
            try {
              const p = JSON.parse(fs.readFileSync(procPath, 'utf8'));
              row.produced = p.produced;
              row.blockers = (p.blockers || []).map((b) => b.id);
              row.mission = p.mission;
            } catch {
              /* ignore */
            }
          }
          console.log(`[close] ${latin} code=${code}`);
          results.push(row);
          resolve(row);
        });
      }),
  ),
);

results.sort((a, b) => AGENTS.indexOf(a.latin) - AGENTS.indexOf(b.latin));
const summary = {
  mode: 'local-terminal',
  external_services: [],
  started_at: startedAt,
  finished_at: new Date().toISOString(),
  pack: PACK,
  earlier_run: {
    id: 'run-51679fc3-8284-4c48-91a8-8029a2257458',
    local_status: 'NOT_AVAILABLE',
  },
  cerebro_handoff: fs.existsSync('/workspace/cerebro_handoff') ? 'PRESENT' : 'MISSING',
  agents: results,
};
const summaryPath = path.join(runDir, 'RUN_SUMMARY.json');
fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + '\n');

const md = [
  '# TOP10 local terminal run',
  '',
  `| Field | Value |`,
  `|---|---|`,
  `| Mode | local-terminal (zero external) |`,
  `| Started | ${summary.started_at} |`,
  `| Finished | ${summary.finished_at} |`,
  `| Handoff | ${summary.cerebro_handoff} |`,
  `| Prior run 51679fc3… | NOT_AVAILABLE locally |`,
  '',
  '| Agent | Launched | PID | Exit | Command | Blockers |',
  '|---|---|---|---|---|---|',
  ...results.map(
    (r) =>
      `| ${r.latin} | ${r.launched} | ${r.pid} | ${r.exit_code} | \`${path.basename(WORKER)} ${r.latin}\` | ${(r.blockers || []).join(', ') || '—'} |`,
  ),
  '',
];
fs.writeFileSync(path.join(runDir, 'RUN_SUMMARY.md'), md.join('\n'));
console.log(`[run-top10] summary → ${summaryPath}`);
const failed = results.filter((r) => !r.launched || r.exit_code !== 0);
process.exit(failed.length ? 1 : 0);
