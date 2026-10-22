"use client";

import { useEffect, useId, useRef, useState } from "react";
import { USERCENTRICS_ENABLED } from "@/lib/usercentrics";
import { CLOSE_EVENT, CONSENT_MAX_AGE_DAYS, OPEN_EVENT, saveConsent, useConsent } from "./consent-store";
import styles from "./Consent.module.css";

export type ConsentTexts = {
  title: string;
  /** Einleitungstext inkl. Link zur Datenschutzerklärung */
  intro: React.ReactNode;
  necessaryName: string;
  necessaryDesc: string;
  analyticsName: string;
  analyticsDesc: string;
  mapsName: string;
  mapsDesc: string;
  /** Hinweis zur Speicherung, mit {days} als Platzhalter */
  storageNote: string;
  acceptAll: string;
  rejectOptional: string;
  settings: string;
  saveSelection: string;
  /** Beschriftung der dauerhaften kleinen Schaltfläche */
  reopen: string;
};

/**
 * Eigener Cookie-Banner: Analytics und Maps sind getrennt und standardmäßig aus; "Alle akzeptieren", "Nur notwendige" und "Einstellungen"
 * sind gleich gestaltet. Der Banner steht am Anfang des <body> (Tab-Reihenfolge), ist aber fest am unteren Rand positioniert.
 */
export function ConsentDialog({ t }: { t: ConsentTexts }) {
  const consent = useConsent();
  const [forced, setForced] = useState(false);
  const [details, setDetails] = useState(false);
  const [draft, setDraft] = useState<{ analytics?: boolean; maps?: boolean }>({});
  const titleId = useId();
  const boxRef = useRef<HTMLDivElement>(null);
  const opener = useRef<Element | null>(null);

  useEffect(() => {
    const open = () => {
      opener.current = document.activeElement;
      setDraft({});
      setForced(true);
      setDetails(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const analytics = draft.analytics ?? consent?.analytics ?? false;
  const maps = draft.maps ?? consent?.maps ?? false;
  const visible = !USERCENTRICS_ENABLED && consent !== undefined && (!consent.decided || forced);

  useEffect(() => {
    if (visible && forced) boxRef.current?.focus();
  }, [visible, forced]);

  const close = (next?: { analytics: boolean; maps: boolean }) => {
    if (next) saveConsent({ ...next, decided: true });
    const back = opener.current;
    opener.current = null;
    setForced(false);
    setDetails(false);
    setDraft({});
    window.dispatchEvent(new Event(CLOSE_EVENT));
    if (back instanceof HTMLElement) window.setTimeout(() => back.focus(), 0);
  };

  if (!visible) return null;

  return (
    <div className={styles.wrap}>
      <div
        ref={boxRef}
        className={styles.box}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={(e) => {
          // Escape schließt nur das erneut geöffnete Fenster (ohne zu speichern); beim ersten Besuch ist Schweigen keine Entscheidung
          if (e.key === "Escape" && forced) close();
        }}
      >
        <h2 id={titleId} className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.text}>{t.intro}</p>

        {details && (
          <div className={styles.options}>
            <div className={styles.option}>
              <input type="checkbox" checked disabled aria-label={t.necessaryName} />
              <span>
                <strong>{t.necessaryName}</strong>
                <small>{t.necessaryDesc}</small>
              </span>
            </div>
            <label className={styles.option}>
              <input type="checkbox" checked={analytics} onChange={(e) => setDraft((d) => ({ ...d, analytics: e.target.checked }))} />
              <span>
                <strong>{t.analyticsName}</strong>
                <small>{t.analyticsDesc}</small>
              </span>
            </label>
            <label className={styles.option}>
              <input type="checkbox" checked={maps} onChange={(e) => setDraft((d) => ({ ...d, maps: e.target.checked }))} />
              <span>
                <strong>{t.mapsName}</strong>
                <small>{t.mapsDesc}</small>
              </span>
            </label>
            <p className={styles.note}>{t.storageNote.replace("{days}", String(CONSENT_MAX_AGE_DAYS))}</p>
          </div>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.btn} onClick={() => close({ analytics: true, maps: true })}>
            {t.acceptAll}
          </button>
          <button type="button" className={styles.btn} onClick={() => close({ analytics: false, maps: false })}>
            {t.rejectOptional}
          </button>
          {details ? (
            <button type="button" className={styles.btn} onClick={() => close({ analytics, maps })}>
              {t.saveSelection}
            </button>
          ) : (
            <button type="button" className={styles.btn} onClick={() => setDetails(true)} aria-expanded={false}>
              {t.settings}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/** Dauerhafte kleine graue Schaltfläche zum Ändern oder Widerrufen; verschwindet, solange der Banner offen ist. */
export function ConsentReopenButton({ label, ariaLabel }: { label: string; ariaLabel: string }) {
  const consent = useConsent();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setOpen(true);
    const off = () => setOpen(false);
    window.addEventListener(OPEN_EVENT, on);
    window.addEventListener(CLOSE_EVENT, off);
    return () => {
      window.removeEventListener(OPEN_EVENT, on);
      window.removeEventListener(CLOSE_EVENT, off);
    };
  }, []);
  if (USERCENTRICS_ENABLED || consent === undefined || !consent.decided || open) return null;
  return (
    <button type="button" className={styles.reopen} aria-label={ariaLabel} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {label}
    </button>
  );
}
