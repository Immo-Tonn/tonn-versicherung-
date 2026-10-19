"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { USERCENTRICS_ENABLED } from "@/lib/usercentrics";
import { OPEN_EVENT, saveConsent, useConsent } from "./consent-store";
import styles from "./Consent.module.css";

export default function ConsentBanner() {
  const consent = useConsent();
  const [forced, setForced] = useState(false);
  const [details, setDetails] = useState(false);
  const [draft, setDraft] = useState<{ analytics?: boolean; maps?: boolean }>({});
  const titleId = useId();
  const boxRef = useRef<HTMLDivElement>(null);

  // Footer-Link „Cookie-Einstellungen“: Fenster erneut öffnen, aktuelle Auswahl anzeigen
  useEffect(() => {
    const open = () => {
      setForced(true);
      setDetails(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  // Checkboxen zeigen die gespeicherte Auswahl, bis der Nutzer sie ändert
  const analytics = draft.analytics ?? consent?.analytics ?? false;
  const maps = draft.maps ?? consent?.maps ?? false;

  const visible = !USERCENTRICS_ENABLED && consent !== undefined && (!consent.decided || forced); // mit Usercentrics zeigt dieser Banner nichts an

  useEffect(() => {
    if (visible && forced) boxRef.current?.focus();
  }, [visible, forced]);

  if (!visible) return null;

  const close = (next: { analytics: boolean; maps: boolean }) => {
    saveConsent({ ...next, decided: true });
    setForced(false);
    setDetails(false);
    setDraft({});
  };

  return (
    <div className={styles.wrap}>
      <div ref={boxRef} className={styles.box} role="dialog" aria-modal="false" aria-labelledby={titleId} tabIndex={-1}>
        <h2 id={titleId} className={styles.title}>
          Ihre Privatsphäre
        </h2>
        <p className={styles.text}>
          Wir nutzen Google Analytics zur Reichweitenmessung und Google Maps zur Anzeige der Karte, aber nur mit Ihrer Einwilligung. Technisch notwendig ist nur die Speicherung Ihrer Auswahl. Details finden Sie in der{" "}
          <Link href="/datenschutz#cookies">Datenschutzerklärung</Link>.
        </p>

        {details && (
          <div className={styles.options}>
            <label className={styles.option}>
              <input type="checkbox" checked={analytics} onChange={(e) => setDraft((d) => ({ ...d, analytics: e.target.checked }))} />
              <span>
                <strong>Google Analytics</strong>
                <small>Reichweitenmessung (Google Ireland Limited)</small>
              </span>
            </label>
            <label className={styles.option}>
              <input type="checkbox" checked={maps} onChange={(e) => setDraft((d) => ({ ...d, maps: e.target.checked }))} />
              <span>
                <strong>Google Maps</strong>
                <small>Anzeige der Karte; dabei wird u. a. Ihre IP-Adresse an Google übertragen</small>
              </span>
            </label>
          </div>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.btn} onClick={() => close({ analytics: true, maps: true })}>
            Alle akzeptieren
          </button>
          <button type="button" className={styles.btn} onClick={() => close({ analytics: false, maps: false })}>
            Alle ablehnen
          </button>
          {details ? (
            <button type="button" className={styles.btnLink} onClick={() => close({ analytics, maps })}>
              Auswahl speichern
            </button>
          ) : (
            <button type="button" className={styles.btnLink} onClick={() => setDetails(true)} aria-expanded={false}>
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
