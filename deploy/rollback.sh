#!/usr/bin/env bash
# Manueller Rollback (Server, root):  rollback.sh [<voller-sha>]     [GHCR-Token optional auf stdin]
# Ohne Argument: auf .previous_ref. Mit SHA: auf <WEB_REPO>:<sha>. Nach Erfolg tauschen current/previous (Vorwärts-Rollback möglich).
set -euo pipefail
APP_DIR="${APP_DIR:-/opt/tonn-versicherung}"
cd "$APP_DIR"
# shellcheck source=/dev/null
. "$APP_DIR/deploy/lib.sh"

ARG="${1:-}"
if [ -n "$ARG" ]; then
  [[ "$ARG" =~ ^[0-9a-f]{40}$ ]] || die "ungültiger Commit-SHA"
  TARGET="$WEB_REPO:$ARG"
else
  TARGET="$(cat .previous_ref 2>/dev/null || true)"
  [ -n "$TARGET" ] || die "kein vorheriger Stand bekannt – SHA als Argument angeben"
fi

lock
read_token

CURRENT="$(cat .current_ref 2>/dev/null || true)"
[ "$TARGET" != "$CURRENT" ] || die "Ziel läuft bereits ($TARGET)"
echo "→ Rollback: ${CURRENT:-?} → $TARGET"

docker image inspect "$TARGET" >/dev/null 2>&1 || pull_ref "$TARGET"
start_ref "$TARGET"

if health_ok; then
  [ -n "$CURRENT" ] && echo "$CURRENT" > .previous_ref
  echo "$TARGET" > .current_ref
  echo "✓ Rollback erfolgreich: $TARGET"
  exit 0
fi

echo "✗ Gesundheitsprüfung nach Rollback fehlgeschlagen – stelle $CURRENT wieder her" >&2
if [ -n "$CURRENT" ]; then start_ref "$CURRENT"; health_ok || true; fi
exit 1
