"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import styles from "@/app/(de)/kontakt/danke/Danke.module.css";
import DeTag from "@/components/layout-i18n/DeTag";
import Icon from "@/components/ui/Icon/Icon";
import type { Locale } from "@/i18n/config";
import { dankeContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import { CONTACT_OK_KEY } from "./contact-ok";

type L = Exclude<Locale, "de">;

// Server/Hydration: false (kein Erfolg behauptet); im Browser: nur wahr, wenn das Formular den bestätigten Erfolg vermerkt hat
const subscribe = () => () => {};
const read = () => {
  try {
    return window.sessionStorage.getItem(CONTACT_OK_KEY) !== null;
  } catch {
    return false;
  }
};

/**
 * „Danke“-Seite für EN/RU. Gleiche Gestaltung wie (de)/kontakt/danke. Die Erfolgsmeldung erscheint nur, wenn das Formular
 * zuvor die Bestätigung des Servers erhalten hat; bei direktem Aufruf wird eine neutrale Fassung angezeigt.
 */
export default function LocalizedDankePage({ locale }: { locale: L }) {
  const t = dankeContent[locale];
  const c = getDictionary(locale).common;
  const confirmed = useSyncExternalStore(subscribe, read, () => false);
  const home = localizedHref("/", locale);
  const form = localizedHref("/kontakt", locale);
  const target = confirmed ? home : { href: `${form.href}#formular`, german: form.german };
  const tag = target.german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null;

  return (
    <section className={styles.page} aria-labelledby="danke-title">
      <div className={styles.waves} aria-hidden="true">
        <svg className={`${styles.wave} ${styles.waveBl}`} viewBox="0 0 900 600" preserveAspectRatio="xMinYMax slice" focusable="false">
          <defs>
            <linearGradient id="dk-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#c9d8e8" stopOpacity="0.55" />
              <stop offset="1" stopColor="#dfe8f2" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="dk-b" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#b8cbe0" stopOpacity="0.5" />
              <stop offset="1" stopColor="#e6edf5" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0 140 C 180 190, 330 330, 470 600 L 0 600 Z" fill="url(#dk-a)" />
          <path d="M0 260 C 160 300, 280 420, 340 600 L 0 600 Z" fill="url(#dk-b)" />
          <path d="M0 370 C 120 400, 200 480, 230 600 L 0 600 Z" fill="url(#dk-a)" />
        </svg>
        <svg className={`${styles.wave} ${styles.waveTr}`} viewBox="0 0 900 600" preserveAspectRatio="xMaxYMin slice" focusable="false">
          <defs>
            <linearGradient id="dk-c" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c9d8e8" stopOpacity="0.5" />
              <stop offset="1" stopColor="#e3ebf3" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="dk-glow" cx="1" cy="0" r="0.8">
              <stop offset="0" stopColor="#fbefd9" stopOpacity="0.55" />
              <stop offset="1" stopColor="#fbefd9" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="900" height="600" fill="url(#dk-glow)" />
          <path d="M240 0 C 420 60, 640 150, 900 330 L 900 0 Z" fill="url(#dk-c)" />
          <path d="M470 0 C 620 70, 780 140, 900 220 L 900 0 Z" fill="url(#dk-c)" />
        </svg>
      </div>

      <div className={styles.inner}>
        {confirmed && (
          <svg className={styles.check} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
            <circle className={styles.glow} cx="40" cy="40" r="38" />
            <circle className={styles.circle} cx="40" cy="40" r="34" pathLength="1" />
            <path className={styles.tick} d="M25.500 41.500 L35.500 51 L55 30" pathLength="1" />
          </svg>
        )}
        <div className={styles.text}>
          {confirmed ? (
            <>
              <p className={styles.eyebrow}>{t.eyebrow}</p>
              <h1 id="danke-title" className={styles.title}>
                <span>{t.title[0]}</span> <span>{t.title[1]}</span>
              </h1>
              <p className={styles.lead}>{t.lead}</p>
              <p className={styles.note}>{t.note}</p>
            </>
          ) : (
            <>
              <p className={styles.eyebrow}>{t.unconfirmed.eyebrow}</p>
              <h1 id="danke-title" className={styles.title}>
                <span>{t.unconfirmed.title}</span>
              </h1>
              <p className={styles.lead}>{t.unconfirmed.lead}</p>
            </>
          )}
          <Link href={target.href} className={styles.link}>
            {confirmed ? t.home : t.unconfirmed.toForm}
            {tag}
            <Icon name="arrow" size={20} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}
