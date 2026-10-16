#!/usr/bin/env bash
# SSH-Forced-Command für den Deploy-Nutzer (authorized_keys: command="…/remote-entry.sh",restrict …).
# Erlaubt ausschließlich:  deploy <sha40> <staging|production> | rollback [<sha40>] | status
# Der Schlüssel kann nichts anderes ausführen (keine Shell, kein Forwarding, kein PTY).
set -euo pipefail
APP_DIR=/opt/tonn-versicherung
read -r verb a b extra <<<"${SSH_ORIGINAL_COMMAND:-}"
case "${verb:-}" in
  deploy)
    [[ "${a:-}" =~ ^[0-9a-f]{40}$ && "${b:-}" =~ ^(staging|production)$ && -z "${extra:-}" ]] || { echo "ungültige Argumente" >&2; exit 2; }
    exec sudo -n "$APP_DIR/deploy/deploy.sh" "$a" "$b" ;;
  rollback)
    [[ -z "${a:-}" || "${a:-}" =~ ^[0-9a-f]{40}$ ]] && [ -z "${b:-}" ] || { echo "ungültige Argumente" >&2; exit 2; }
    exec sudo -n "$APP_DIR/deploy/rollback.sh" ${a:+"$a"} ;;
  status)
    echo "current:  $(cat "$APP_DIR/.current_ref" 2>/dev/null || echo –)"
    echo "previous: $(cat "$APP_DIR/.previous_ref" 2>/dev/null || echo –)" ;;
  *) echo "erlaubt: deploy <sha> <modus> | rollback [<sha>] | status" >&2; exit 2 ;;
esac
