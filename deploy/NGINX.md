# Nginx auf dem Hetzner-Server (ohne Secrets)

Konfiguration der öffentlichen Domain: `deploy/nginx-public.conf` → Server: `/etc/nginx/conf.d/tonn-public.conf`.
Globale Zonen (Rate-Limits, anonymisiertes Log-Format): `/etc/nginx/conf.d/00-tonn-global.conf`. Staging-Zugang: `deploy/nginx-staging.conf` (127.0.0.1:8080).
Zertifikat: Let's Encrypt (certbot, `certbot.timer`, Webroot `/var/www/certbot`, Deploy-Hook lädt Nginx neu). Port 80 muss für die Erneuerung offen bleiben.

## Stand 2026-10-18: Bild- und Lastgrenzen
| Location | Einstellung | Grund |
|---|---|---|
| `/_next/static/` | kein `limit_req` | Ein Seitenaufruf löst 40-90 Anfragen aus (Spitze 40-44/s). Mit `burst=40` rutschten 3 gleichzeitige Besucher hinter einer IP in 429 (gemessen: 3/5/10 Besucher → 22/51/201 Ablehnungen). |
| `/_next/image` | `proxy_ignore_client_abort on`, `proxy_read_timeout 120s`, `limit_req … burst=250` | **Schutzmaßnahme.** Next.js 16.3.8 blockiert nach einem Verbindungsabbruch während der AVIF-Kodierung den Bild-Schlüssel dauerhaft (Symptom: 504 nach 30 s, bis zum Container-Neustart). Die Ursache im Next.js-Code ist damit NICHT behoben. Ohne Abbruchweitergabe: 0 blockierte Schlüssel von 54 (2 Läufe), ohne Maßnahme 12-13. |
| `/` | `limit_req zone=general burst=250 nodelay` (vorher 40) | Dauerrate bleibt 20 r/s pro IP; gemessen 0 Ablehnungen bei 10 gleichzeitigen Besuchern. |

Regeln beim Ändern: Kein `X-Robots-Tag` in Nginx setzen (Hauptdomain ist indexierbar; Robots-Regeln kommen aus der Anwendung); `proxy_set_header` in jeder Location vollständig wiederholen.
Die Zone `contact` (6 r/min) ist definiert, aber in keiner Location angewendet.

## Einspielen (root auf dem Server)
```
D=/root/nginx-backup-$(date +%Y%m%d-%H%M); mkdir -p $D && cp -a /etc/nginx/nginx.conf /etc/nginx/conf.d $D/
install -m 644 -o root -g root deploy/nginx-public.conf /etc/nginx/conf.d/tonn-public.conf
nginx -t && systemctl reload nginx          # nur "reload", nie "restart"
curl -sI https://tonn-versicherung.de/ | grep -i x-robots-tag   # darf NICHTS ausgeben (Hauptdomain indexierbar)
```
## Zurückrollen
```
cp -a $D/conf.d/tonn-public.conf /etc/nginx/conf.d/tonn-public.conf && nginx -t && systemctl reload nginx
```
Aktueller Sicherungsstand vor dieser Änderung: `/root/nginx-backup-20261018-pre-image-limits/` (nginx.conf, conf.d/*).
