# tonn-versicherung.de

Next.js (App Router), CSS Modules, DE/EN/RU. Hinweise für Entwickler: `AGENTS.md`.

## Werbe-Tracking (Google Ads über Google Tag Manager)

Das Tracking ist **standardmäßig aus**. Nur wenn **beide** Variablen beim Build gesetzt sind, wird der Tag Manager eingebunden:

| Variable | Wert |
| --- | --- |
| `NEXT_PUBLIC_TRACKING_ENABLED` | `true` |
| `NEXT_PUBLIC_GTM_ID` | Container-ID, z. B. `GTM-XXXXXXX` |

Fehlt eine der beiden (oder ist die ID ungültig), erscheint kein Script im HTML und es gibt keine Anfrage an googletagmanager.com.

- `NEXT_PUBLIC_*` wird beim **Build** eingesetzt: Nach dem Ändern ist ein neuer Build/Deploy nötig (lokal in `.env.local`; für Production setzt man die GitHub-Repository-Variablen `NEXT_PUBLIC_TRACKING_ENABLED` und `NEXT_PUBLIC_GTM_ID`, die `deploy.yml` als Build-Args an das Dockerfile reicht).
- Der Tag Manager lädt erst nach Einwilligung: Das Script ist für Usercentrics als Dienst „Google Tag Manager“ markiert. In Usercentrics muss dafür ein Dienst mit genau diesem Namen (Kategorie „Marketing“) angelegt sein; ohne ihn bleibt das Script blockiert.
- Consent Mode v2 steht vorab auf `denied` (ad_storage, analytics_storage, ad_user_data, ad_personalization; wait_for_update 500). Aktualisiert wird er über die Google-Consent-Mode-Integration von Usercentrics.
- dataLayer-Ereignisse: `contact_form_submit` (Danke-Seite, einmal je Sitzung) und `phone_click` (Klick auf einen `tel:`-Link).
