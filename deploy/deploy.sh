#!/usr/bin/env bash
# Auf dem Server ausführen:  /opt/tonn-versicherung/deploy/deploy.sh sha-abc1234
# Zieht das fertige Image, startet es und rollt bei fehlgeschlagenem Healthcheck automatisch zurück.
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/tonn-versicherung}"
NEW_TAG="${1:?Aufruf: deploy.sh <image-tag>}"
STATE_FILE="$APP_DIR/.current_tag"
PREV_FILE="$APP_DIR/.previous_tag"
WAIT_SECONDS="${WAIT_SECONDS:-90}"

cd "$APP_DIR"
[ -f .env.production ] || { echo "FEHLER: $APP_DIR/.env.production fehlt" >&2; exit 1; }

CURRENT_TAG="$(cat "$STATE_FILE" 2>/dev/null || true)"

echo "→ Ziehe Image mit Tag $NEW_TAG"
WEB_TAG="$NEW_TAG" docker compose pull web

echo "→ Starte neue Version"
WEB_TAG="$NEW_TAG" docker compose up -d web

echo "→ Warte auf Healthcheck (max. ${WAIT_SECONDS}s)"
healthy=0
for _ in $(seq 1 $((WAIT_SECONDS / 3))); do
  status="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' tonn-web 2>/dev/null || echo missing)"
  if [ "$status" = "healthy" ]; then healthy=1; break; fi
  sleep 3
done

if [ "$healthy" -eq 1 ]; then
  [ -n "$CURRENT_TAG" ] && echo "$CURRENT_TAG" > "$PREV_FILE"
  echo "$NEW_TAG" > "$STATE_FILE"
  echo "✓ Deploy erfolgreich: $NEW_TAG (vorher: ${CURRENT_TAG:-–})"
  exit 0
fi

echo "✗ Healthcheck fehlgeschlagen – Rollback" >&2
docker compose logs --tail 40 web >&2 || true
if [ -n "$CURRENT_TAG" ]; then
  WEB_TAG="$CURRENT_TAG" docker compose up -d web
  echo "↩ Zurück auf $CURRENT_TAG" >&2
else
  docker compose stop web
  echo "↩ Kein Vorgänger vorhanden – Container gestoppt" >&2
fi
exit 1
