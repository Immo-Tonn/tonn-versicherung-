"use client";

import { saveConsent, useConsent } from "@/components/consent/consent-store";
import styles from "@/components/consent/Consent.module.css";

type Props = { src: string; title: string; notice: string; load: string };

/** Wie ConsentMap (gleiche Einwilligung, gleiche Gestaltung), aber mit übersetzten Texten. */
export default function LocalizedConsentMap({ src, title, notice, load }: Props) {
  const consent = useConsent();
  if (consent?.maps) {
    return <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />;
  }
  return (
    <div className={styles.mapPlaceholder}>
      <p>{notice}</p>
      <button type="button" className={styles.btn} onClick={() => saveConsent({ maps: true })} disabled={consent === undefined}>
        {load}
      </button>
    </div>
  );
}
