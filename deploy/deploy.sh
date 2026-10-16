#!/usr/bin/env bash
# Läuft auf dem Server als root (nur über sudo vom Deploy-Nutzer, siehe remote-entry.sh):
#   deploy.sh <voller-40-stelliger-commit-sha> <staging|production>     [GHCR-Token optional auf stdin]
# Zieht das Image aus GHCR, startet es per Docker Compose, prüft die Gesundheit und rollt bei Fehlern automatisch zurück.
# Zustand: .current_ref / .previous_ref (volle Image-Referenz, z. B. ghcr.io/…:<sha>). current wird erst nach bestandener Prüfung gesetzt.
set -euo pipefail
APP_DIR="${APP_DIR:-/opt/tonn-versicherung}"
cd "$APP_DIR"
# shellcheck source=/dev/null
. "$APP_DIR/deploy/lib.sh"

SHA="${1:-}"; MODE_ARG="${2:-}"
[[ "$SHA" =~ ^[0-9a-f]{40}$ ]] || die "ungültiger Commit-SHA (voller 40-stelliger Hash erwartet)"
[ "$MODE_ARG" = "$MODE" ] || die "Modus '$MODE_ARG' passt nicht zur Server-Konfiguration ('$MODE') – abgebrochen"

lock
read_token

NEW="$WEB_REPO:$SHA"
CURRENT="$(cat .current_ref 2>/dev/null || true)"
echo "→ Ziel: $NEW (aktuell: ${CURRENT:-–})"

pull_ref "$NEW"

echo "→ Starte neue Version"
start_ref "$NEW"

if health_ok; then
  if [ -n "$CURRENT" ] && [ "$CURRENT" != "$NEW" ]; then echo "$CURRENT" > .previous_ref; fi
  echo "$NEW" > .current_ref
  prune_images
  echo "✓ Deploy erfolgreich: $NEW (vorher: ${CURRENT:-–})"
  exit 0
fi

echo "✗ Gesundheitsprüfung fehlgeschlagen – Rollback" >&2
docker compose logs --tail 40 web >&2 || true
if [ -n "$CURRENT" ] && [ "$CURRENT" != "$NEW" ]; then
  start_ref "$CURRENT"
  if health_ok; then echo "↩ Zurück auf $CURRENT (läuft)" >&2; else echo "↩ Zurück auf $CURRENT, aber auch dort Prüfung fehlgeschlagen!" >&2; fi
else
  docker compose stop web
  echo "↩ Kein Vorgänger vorhanden – Container gestoppt" >&2
fi
exit 1
