# Gemeinsame Funktionen für deploy.sh / rollback.sh (wird nur eingebunden). Konfiguration: /opt/tonn-versicherung/.deploy.env (root, 644)
#   MODE=staging|production   WEB_REPO=ghcr.io/immo-tonn/tonn-versicherung-staging   GHCR_USER=github-actions
#   HEALTH_PATHS="/ /en /ru"   NGINX_URL=http://127.0.0.1:8080   REQUIRE_NOINDEX=1
#   optional (nur für isolierte Tests): CONTAINER_NAME (Standard tonn-web), APP_PORT (Standard 3000)
die() { echo "FEHLER: $*" >&2; exit 1; }
[ -f "$APP_DIR/.deploy.env" ] || die "$APP_DIR/.deploy.env fehlt"
[ -f "$APP_DIR/.env.production" ] || die "$APP_DIR/.env.production fehlt"
# shellcheck source=/dev/null
. "$APP_DIR/.deploy.env"
: "${MODE:?}" "${WEB_REPO:?}" "${HEALTH_PATHS:?}" "${NGINX_URL:?}"

lock() { exec 9>/var/lock/tonn-deploy.lock; flock -n 9 || die "ein anderes Deploy/Rollback läuft bereits"; }

TOKEN=""
read_token() { if [ ! -t 0 ]; then IFS= read -r -t 5 TOKEN || true; fi; }

# Anmeldung nur in einem temporären Docker-Config-Verzeichnis; Token wird nirgends gespeichert.
pull_ref() {
  local cfg; cfg="$(mktemp -d)"
  if [ -n "$TOKEN" ]; then printf '%s' "$TOKEN" | DOCKER_CONFIG="$cfg" docker login ghcr.io -u "${GHCR_USER:-github-actions}" --password-stdin >/dev/null; fi
  echo "→ Ziehe $1"
  DOCKER_CONFIG="$cfg" docker pull "$1" >/dev/null || { rm -rf "$cfg"; die "Image konnte nicht gezogen werden: $1"; }
  rm -rf "$cfg"
}

start_ref() { WEB_IMAGE="${1%:*}" WEB_TAG="${1##*:}" docker compose up -d --pull never --force-recreate web; }

# Container "healthy" UND Seiten über Container (3000) und Nginx antworten mit 200; im Staging zusätzlich noindex.
health_ok() {
  local i status p
  echo "→ Warte auf Healthcheck (max. 90 s)"
  for i in $(seq 1 30); do
    status="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' "${CONTAINER_NAME:-tonn-web}" 2>/dev/null || echo missing)"
    [ "$status" = "healthy" ] && break
    sleep 3
  done
  [ "$status" = "healthy" ] || { echo "Container nicht healthy ($status)" >&2; return 1; }
  for p in $HEALTH_PATHS; do
    for base in "http://127.0.0.1:${APP_PORT:-3000}" "$NGINX_URL"; do
      curl -fsS -o /dev/null --max-time 20 "$base$p" || { echo "Prüfung fehlgeschlagen: $base$p" >&2; return 1; }
    done
  done
  if [ "${REQUIRE_NOINDEX:-0}" = "1" ]; then
    curl -fsSI --max-time 20 "$NGINX_URL/" | grep -qi '^x-robots-tag: noindex' || { echo "noindex-Header fehlt" >&2; return 1; }
  fi
  echo "✓ Gesundheitsprüfung bestanden"
}

# Alte Images dieses Projekts entfernen – nur Repositories dieses Projekts, nie current/previous.
prune_images() {
  local keep_a keep_b img
  keep_a="$(cat "$APP_DIR/.current_ref" 2>/dev/null || true)"; keep_b="$(cat "$APP_DIR/.previous_ref" 2>/dev/null || true)"
  docker image ls --format '{{.Repository}}:{{.Tag}}' | grep -E "^(${WEB_REPO//./\\.}|tonn-versicherung-staging):" | while read -r img; do
    [ "$img" = "$keep_a" ] || [ "$img" = "$keep_b" ] || docker rmi "$img" >/dev/null 2>&1 || true
  done
}
