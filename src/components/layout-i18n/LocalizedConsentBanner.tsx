"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "@/components/consent/Consent.module.css";
import { OPEN_EVENT, saveConsent, useConsent } from "@/components/consent/consent-store";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import DeTag from "./DeTag";

/**
 * Cookie-Einwilligung für EN/RU. Logik, Speicherung (consent-store, Schlüssel "tonn-consent-v1") und Gestaltung
 * sind identisch mit components/consent/ConsentBanner – nur die Texte sind übersetzt.
 * Die Datenschutzerklärung bleibt vorerst die deutsche Originalfassung (mit „DE“ markiert).
 */
export default function LocalizedConsentBanner({ locale }: { locale: Exclude<Locale, "de"> }) {
  const t = getDictionary(locale);
  const c = t.consent;
  const consent = useConsent();
  const [forced, setForced] = useState(false);
  const [details, setDetails] = useState(false);
  const [draft, setDraft] = useState<{ analytics?: boolean; maps?: boolean }>({});
  const titleId = useId();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const open = () => {
      setForced(true);
      setDetails(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const analytics = draft.analytics ?? consent?.analytics ?? false;
  const maps = draft.maps ?? consent?.maps ?? false;
  const visible = consent !== undefined && (!consent.decided || forced);

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
          {c.title}
        </h2>
        <p className={styles.text}>
          {c.textBefore}
          <Link href="/datenschutz#cookies">{c.privacyLink}</Link>
          <DeTag badge={t.common.germanOnlyBadge} hint={t.common.germanOnlyHint} />
          {c.textAfter}
        </p>

        {details && (
          <div className={styles.options}>
            <label className={styles.option}>
              <input type="checkbox" checked={analytics} onChange={(e) => setDraft((d) => ({ ...d, analytics: e.target.checked }))} />
              <span>
                <strong>{c.analyticsName}</strong>
                <small>{c.analyticsDesc}</small>
              </span>
            </label>
            <label className={styles.option}>
              <input type="checkbox" checked={maps} onChange={(e) => setDraft((d) => ({ ...d, maps: e.target.checked }))} />
              <span>
                <strong>{c.mapsName}</strong>
                <small>{c.mapsDesc}</small>
              </span>
            </label>
          </div>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.btn} onClick={() => close({ analytics: true, maps: true })}>
            {c.acceptAll}
          </button>
          <button type="button" className={styles.btn} onClick={() => close({ analytics: false, maps: false })}>
            {c.rejectAll}
          </button>
          {details ? (
            <button type="button" className={styles.btnLink} onClick={() => close({ analytics, maps })}>
              {c.saveSelection}
            </button>
          ) : (
            <button type="button" className={styles.btnLink} onClick={() => setDetails(true)} aria-expanded={false}>
              {c.settings}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
