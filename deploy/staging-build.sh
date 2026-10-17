#!/usr/bin/env bash
# Prüf-Build auf dem Server (Staging, noindex; EN/RU sind im Quellstand veröffentlicht). Aufruf: /opt/tonn-versicherung/deploy/staging-build.sh <tag>
# Erwartet: Quellen in /opt/tonn-versicherung/src, Secrets in /opt/tonn-versicherung/.env.production (chmod 600).
# Der Places-Key geht nur als BuildKit-Secret in den Build; öffentliche Werte (Maps-Embed-Key, Place-ID) als Build-Args. Werte werden nie ausgegeben.
set -euo pipefail
APP_DIR="${APP_DIR:-/opt/tonn-versicherung}"
TAG="${1:?Aufruf: staging-build.sh <tag>}"
cd "$APP_DIR"
get() { grep -E "^$1=" .env.production | head -1 | cut -d= -f2- ; }
get GOOGLE_PLACES_API_KEY > /run/places_key.tmp; chmod 600 /run/places_key.tmp
trap 'rm -f /run/places_key.tmp' EXIT
DOCKER_BUILDKIT=1 docker build \
  --secret id=google_places_api_key,src=/run/places_key.tmp \
  --build-arg GOOGLE_PLACE_ID="$(get GOOGLE_PLACE_ID)" \
  --build-arg NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY="$(get NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY)" \
  --build-arg SITE_NOINDEX=1 \
  -t "tonn-versicherung-staging:$TAG" src
echo "✓ Image tonn-versicherung-staging:$TAG gebaut"
