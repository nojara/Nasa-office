#!/usr/bin/env bash
# Move staged cerebro-crew pack onto njr39/Cerebro-core @ feat/ds-v1-1.
# Run from Nasa-office workspace once the Cursor token can see Cerebro-core.
set -euo pipefail

SRC_ROOT="$(cd "$(dirname "$0")/.." && pwd)"          # …/cerebro-crew
WORK_PARENT="${TMPDIR:-/tmp}/cerebro-core-migrate-$$"
REPO_URL="${CEREBRO_CORE_URL:-https://github.com/njr39/Cerebro-core.git}"
BRANCH="${CEREBRO_CORE_BRANCH:-feat/ds-v1-1}"

echo "[migrate] source=$SRC_ROOT"
echo "[migrate] target=$REPO_URL @$BRANCH"

# Prefer token from current origin if present
if git -C "$(dirname "$SRC_ROOT")" remote get-url origin >/dev/null 2>&1; then
  ORIGIN="$(git -C "$(dirname "$SRC_ROOT")" remote get-url origin)"
  if [[ "$ORIGIN" =~ x-access-token:([^@]+)@ ]]; then
    TOKEN="${BASH_REMATCH[1]}"
    REPO_URL="https://x-access-token:${TOKEN}@github.com/njr39/Cerebro-core.git"
  fi
fi

mkdir -p "$WORK_PARENT"
cd "$WORK_PARENT"
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" Cerebro-core || {
  echo "[migrate] FAIL: cannot clone $BRANCH from njr39/Cerebro-core" >&2
  echo "[migrate] Grant this runner access to the private repo, then re-run." >&2
  exit 1
}

cd Cerebro-core
DEST="cerebro-crew"
rm -rf "$DEST"
mkdir -p "$DEST"
cp -a "$SRC_ROOT"/. "$DEST/"

# Drop Nasa-office-only note if present; keep pack README honest
if [[ -f "$DEST/README.md" ]]; then
  cat > "$DEST/README.md" << 'EOF'
# Cerebro DS v1.1 — TOP10 crew pack

Lives on `feat/ds-v1-1` in Cerebro-core.

```bash
node cerebro-crew/CREW_GROUP_TOP10/local-runner/run-top10.mjs
```

Hard rules: this branch only · no seat merge/PR/deploy · no voice/sound/auth/Google/gesture/WebGL/deps.
EOF
fi

git add cerebro-crew
git status --short | head -40
git commit -m "$(cat <<'EOF'
Add Cerebro DS v1.1 TOP10 crew pack (migrated from Nasa-office staging)

AgentCards v1.5, capabilities/memory/knowledge, local-runner, lane
outputs, brand/wordmark candidates, and screen-study refs.
EOF
)"
git push -u origin "$BRANCH"
echo "[migrate] done → $(git rev-parse --short HEAD) on $BRANCH"
echo "[migrate] worktree: $WORK_PARENT/Cerebro-core"
