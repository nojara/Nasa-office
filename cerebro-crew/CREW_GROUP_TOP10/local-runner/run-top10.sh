#!/usr/bin/env bash
# Local TOP10 Cerebro crew — no cloud, no Drive, no external APIs.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
exec node "$ROOT/run-top10.mjs"
