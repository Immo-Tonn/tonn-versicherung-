# EN/RU – Entwürfe, Vorschau, Veröffentlichung

- **Entwurf**: `src/app/(en)/_drafts/<deutscher Pfad>/page.tsx` (bzw. `(ru)`; muss `default` und `generateMetadata` exportieren). Ordner mit `_` sind keine Routen →
  in Production unter keiner URL erreichbar. Status im Register: `draft`.
- **Vorschau (nur lokal)**: `node scripts/i18n-preview.mjs` – startet auf einer temporären Kopie einen Dev-Server (Port 3100),
  in der Entwürfe als Routen eingehängt sind. Das Repository selbst bleibt unverändert.
- **Vorschau als Production-Build (empfohlen, stabil)**: `npm run preview:i18n` (Port 3300, ca. 30 s Build bei jedem Start). Der Dev-Server von `i18n-preview.mjs` fällt nach einigen hundert Anfragen mit 500 aus (reiner Dev-Modus-Fehler von Next.js); der Production-Build nicht.
- **Veröffentlichen** (bewusste, getrennte Schritte):
  1. `src/app/(en)/en/<pfad>/page.tsx` mit `export { default, generateMetadata } from "<relativ>/_drafts/<pfad>/page";`
     (Startseite: `en/route.ts` durch `en/page.tsx` ersetzen)
  2. Status im Register `src/i18n/registry.ts` auf `live` setzen
  3. `node scripts/check-i18n.mjs` muss grün sein.
- Einzelne Ratgeber-Artikel bekommen je eine eigene Seitendatei (kein `[slug]`), damit unbekannte Artikel in die
  sprachrichtige 404 des Catch-all-Handlers fallen.

## Vor der Veröffentlichung von EN/RU (Pflicht)

- **Rechtstexte:** Übersetzungen von **Datenschutzerklärung und Impressum** müssen vor der Veröffentlichung von EN/RU mit einer
  Juristin/einem Juristen abgestimmt werden. Bis dahin bleiben beide Dokumente deutsch (Links aus EN/RU führen auf die deutschen
  Seiten und sind mit „DE“ markiert).
- Ebenfalls abstimmen: Einwilligungstext im Kontaktformular, Cookie-Texte, Versicherungsbegriffe (Beihilfe, Krankentagegeld usw.),
  Berufsbezeichnung („Versicherungsvertreter (Mehrfachagent)“).
- Das Kontaktformular sendet die Sprache der Anfrage (`locale`: de/en/ru) an `/api/contact`; sie erscheint als Zeile
  „Sprache der Anfrage“ in der E-Mail. Fehlt `locale`, gilt Deutsch; ungültige Werte werden mit HTTP 400 abgelehnt.

## Warnung: serviceType der Seite „Kapitalanlage“

Der **deutsche** `serviceType` („Anlageberatung und -vermittlung: Kapitalanlage“, `src/app/(de)/kapitalanlage/page.tsx`) muss **vor der
Veröffentlichung der Übersetzungen** daraufhin geprüft werden, ob er durch die beruflichen Erlaubnisse von Andreas Tonn gedeckt ist
(„Anlageberatung“ und „-vermittlung“ können in Deutschland erlaubnispflichtig sein). Die EN/RU-Entwürfe verwenden bewusst neutrale
Formulierungen („Investment planning and information“ / „Информация и планирование капиталовложений“). Der deutsche Wert wurde nicht geändert.
