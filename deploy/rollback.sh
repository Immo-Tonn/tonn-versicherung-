#!/usr/bin/env bash
# Manueller Rollback auf die vorherige Version:  /opt/tonn-versicherung/deploy/rollback.sh
# Optional ein bestimmter Tag:                  /opt/tonn-versicherung/deploy/rollback.sh sha-abc1234
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/tonn-versicherung}"
cd "$APP_DIR"

TARGET="${1:-$(cat .previous_tag 2>/dev/null || true)}"
[ -n "$TARGET" ] || { echo "FEHLER: kein vorheriger Tag bekannt – Tag als Argument angeben" >&2; exit 1; }

CURRENT="$(cat .current_tag 2>/dev/null || true)"
echo "→ Rollback: ${CURRENT:-?} → $TARGET"
WEB_TAG="$TARGET" docker compose pull web
WEB_TAG="$TARGET" docker compose up -d web

echo "$TARGET" > .current_tag
[ -n "$CURRENT" ] && echo "$CURRENT" > .previous_tag
echo "✓ Rollback ausgeführt. Status:"
docker compose ps
