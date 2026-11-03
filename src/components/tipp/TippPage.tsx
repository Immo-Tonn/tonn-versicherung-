import Link from "next/link";
import DeTag from "@/components/layout-i18n/DeTag";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { tippContent } from "@/i18n/content/tipp";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import styles from "./Tipp.module.css";

/** Seite /tippgeberpraemie (DE/EN/RU): Beschreibung, drei Schritte, Kontakt für Neukunden, Teilnahmebedingungen (ENTWURF zur juristischen Prüfung). */
export default function TippPage({ locale }: { locale: Locale }) {
  const t = tippContent[locale].page;
  const contact = localizedHref("/kontakt#formular", locale).href;
  const privacy = localizedHref("/datenschutz", locale);
  const tag = locale === "de" ? null : <DeTag badge={getDictionary(locale).common.germanOnlyBadge} hint={getDictionary(locale).common.germanOnlyHint} />;
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="tipp-title">
        <Container>
          <SectionLabel>{t.eyebrow}</SectionLabel>
          <h1 id="tipp-title" className={styles.heroTitle}>
            {t.title}
          </h1>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.heroActions}>
            <Button href="#so-funktionierts">{t.heroCta}</Button>
            <Link href="#teilnahmebedingungen" className={styles.textLink}>
              {t.heroTermsLink}
            </Link>
          </div>
        </Container>
      </section>

      <section id="so-funktionierts" className={`${styles.section} ${styles.terms}`} aria-labelledby="tipp-steps">
        <Container>
          <h2 id="tipp-steps" className={styles.sectionTitle}>
            {t.stepsTitle}
          </h2>
          <ol className={styles.steps}>
            {t.steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="tipp-self">
        <Container>
          <div className={styles.self}>
            <div>
              <h2 id="tipp-self" className={styles.selfTitle}>
                {t.selfTitle}
              </h2>
              <p className={styles.selfText}>{t.selfText}</p>
              <p className={styles.selfHint}>{t.selfHint}</p>
            </div>
            <Button href={contact} variant="light">
              {t.selfCta}
            </Button>
          </div>
        </Container>
      </section>

      <section id="teilnahmebedingungen" className={`${styles.section} ${styles.terms}`} aria-labelledby="tipp-terms">
        <Container>
          <h2 id="tipp-terms" className={styles.sectionTitle}>
            {t.termsTitle}
          </h2>
          <ol className={styles.termsList}>
            {t.terms.map((c) => (
              <li key={c.title} className={styles.termsItem}>
                <h3 className={styles.termsItemTitle}>{c.title}</h3>
                <p className={styles.termsItemText}>{c.text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.privacy}>
            {t.termsPrivacy[0]}
            <Link href={privacy.href}>{t.termsPrivacy[1]}</Link>
            {privacy.german && tag}.
          </p>
        </Container>
      </section>
    </div>
  );
}
