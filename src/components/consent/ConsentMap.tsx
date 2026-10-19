"use client";

import { saveConsent, useConsent } from "./consent-store";
import styles from "./Consent.module.css";

type Props = { src: string; title: string };

/** Google-Karte erst nach Einwilligung laden; vorher Platzhalter ohne Verbindung zu Google. */
export default function ConsentMap({ src, title }: Props) {
  const consent = useConsent();
  if (consent?.maps) {
    return <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />;
  }
  return (
    <div className={styles.mapPlaceholder}>
      <p>Die Karte wird von Google Maps bereitgestellt. Beim Laden werden Daten, unter anderem Ihre IP-Adresse, an Google übertragen. Mit „Karte laden“ willigen Sie nur in Google Maps ein.</p>
      <button type="button" className={styles.btn} onClick={() => saveConsent({ maps: true })} disabled={consent === undefined}>
        Karte laden
      </button>
    </div>
  );
}
