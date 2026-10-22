"use client";

import Link from "next/link";
import { ConsentDialog, ConsentReopenButton, type ConsentTexts } from "./ConsentUI";

const de: ConsentTexts = {
  title: "Ihre Privatsphäre",
  intro: (
    <>
      Wir nutzen Google Analytics zur Reichweitenmessung und Google Maps zur Anzeige der Karte, aber nur mit Ihrer Einwilligung. Technisch notwendig ist nur die Speicherung Ihrer Auswahl. Details finden Sie in der{" "}
      <Link href="/datenschutz#cookies">Datenschutzerklärung</Link>.
    </>
  ),
  necessaryName: "Notwendig",
  necessaryDesc: "Speicherung Ihrer Auswahl in diesem Browser (Nachweis der Einwilligung); kein Tracking",
  analyticsName: "Google Analytics",
  analyticsDesc: "Reichweitenmessung (Google Ireland Limited)",
  mapsName: "Google Maps",
  mapsDesc: "Anzeige der Karte; dabei wird u. a. Ihre IP-Adresse an Google übertragen",
  storageNote:
    "Ihre Auswahl wird nur in diesem Browser gespeichert und nach {days} Tagen oder bei geänderten Einstellungen erneut abgefragt. Sie können sie jederzeit über die Schaltfläche „Cookies“ oder „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen.",
  acceptAll: "Alle akzeptieren",
  rejectOptional: "Nur notwendige",
  settings: "Einstellungen",
  saveSelection: "Auswahl speichern",
  reopen: "Cookies",
};

export const consentTextsDe = de;

/** Cookie-Banner (Deutsch). Die Logik steckt in ConsentUI; Speicherung und Versionierung in consent-store. */
export default function ConsentBanner() {
  return <ConsentDialog t={de} />;
}

/** Dauerhafte kleine Schaltfläche zum Ändern oder Widerrufen (Deutsch). */
export function ConsentReopen() {
  return <ConsentReopenButton label={de.reopen} ariaLabel="Cookie-Einstellungen öffnen" />;
}
