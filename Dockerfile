# syntax=docker/dockerfile:1.7

# ---------------------------------------------------------------
# tonn-versicherung – Next.js (standalone) Production-Image
#
# Secrets:
#   - GOOGLE_PLACES_API_KEY wird NUR als BuildKit-Secret in den Build gereicht
#     (--mount=type=secret). Er landet weder in einer Image-Schicht noch in der
#     Image-Historie. Nach dem Build wird geprüft, dass der Wert nicht im
#     Build-Ergebnis steht.
#   - Laufzeit-Secrets (RESEND_API_KEY, GOOGLE_PLACES_API_KEY, ...) kommen
#     erst beim Start per env_file vom Server, nie aus dem Image.
#   - NEXT_PUBLIC_* und GOOGLE_PLACE_ID sind keine Secrets (landen im Client-
#     Bundle bzw. in der öffentlichen Karten-URL) und werden als Build-Args gesetzt.
# ---------------------------------------------------------------

FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# --- 1) Abhängigkeiten (nur package*.json -> guter Layer-Cache) ---
FROM base AS deps
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# --- 2) Build ---
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Öffentliche Build-Konfiguration (keine Secrets)
ARG NEXT_PUBLIC_SITE_URL=https://tonn-versicherung.de
ARG NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY
ARG GOOGLE_PLACE_ID
# Google-Analytics-ID: leer lassen = kein Analytics-Code im Build (z. B. Testversion)
ARG NEXT_PUBLIC_GA_MEASUREMENT_ID
# Indexierung: 1 = alle Seiten per X-Robots-Tag noindex sperren (Standard, sicher). 0 = Indexierung freigeben (erst nach Endprüfung).
ARG SITE_NOINDEX=1
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} \
    NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY=${NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY} \
    GOOGLE_PLACE_ID=${GOOGLE_PLACE_ID} \
    NEXT_PUBLIC_GA_MEASUREMENT_ID=${NEXT_PUBLIC_GA_MEASUREMENT_ID} \
    SITE_NOINDEX=${SITE_NOINDEX}

# Der Places-Key wird nur für diesen einen Befehl als Umgebungsvariable gesetzt, damit die
# Startseite beim Build bereits mit Bewertungen vorgerendert wird (danach aktualisiert
# Next.js sie per ISR alle 24 h mit dem Laufzeit-Key).
RUN --mount=type=secret,id=google_places_api_key \
    set -eu; \
    if [ -s /run/secrets/google_places_api_key ]; then \
      KEY="$(cat /run/secrets/google_places_api_key)"; \
      GOOGLE_PLACES_API_KEY="$KEY" npm run build; \
      if grep -rqF -- "$KEY" .next/standalone .next/static .next/server 2>/dev/null; then \
        echo "FEHLER: Google-API-Key im Build-Ergebnis gefunden" >&2; exit 1; \
      fi; \
    else \
      echo "HINWEIS: kein google_places_api_key-Secret – Build ohne Bewertungen" >&2; \
      npm run build; \
    fi

# Prüfung: Ist eine Google-Analytics-ID übergeben, muss sie im Browser-Code stehen (sonst wäre sie auf dem Weg
# Repository-Variable -> Workflow -> Build-Arg -> next build verloren gegangen). Ohne ID: Build ohne Analytics (Absicht, z. B. Staging).
RUN if [ -n "${NEXT_PUBLIC_GA_MEASUREMENT_ID:-}" ]; then \
      grep -rqF -- "$NEXT_PUBLIC_GA_MEASUREMENT_ID" .next/static \
        || { echo "FEHLER: Google-Analytics-ID fehlt im Build-Ergebnis" >&2; exit 1; }; \
      echo "OK: Google-Analytics-ID ist im Build enthalten"; \
    else \
      echo "HINWEIS: ohne Google-Analytics-ID gebaut" >&2; \
    fi

# --- 3) Laufzeit-Image ---
FROM base AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

# Nur das, was die Standalone-Ausgabe braucht
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Schreibbare Cache-Verzeichnisse (ISR, Bildoptimierung) für den unprivilegierten Nutzer
RUN mkdir -p /app/.next/cache && chown -R nextjs:nodejs /app/.next

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/robots.txt || exit 1

# SIGTERM erreicht Node direkt (exec-Form); in Compose zusätzlich "init: true"
CMD ["node", "server.js"]
