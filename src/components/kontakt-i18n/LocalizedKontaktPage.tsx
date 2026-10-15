import styles from "@/app/(de)/kontakt/_components/Kontakt.module.css";
import LocalizedPageJsonLd from "@/components/seo/LocalizedPageJsonLd";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { kontaktContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import LocalizedContactForm from "./LocalizedContactForm";

type L = Exclude<Locale, "de">;

function Calendar() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="4" y="5.500" width="16" height="15" rx="1.500" />
      <path d="M4 10h16M8.500 3.500v4M15.500 3.500v4" />
    </svg>
  );
}

/** Kontaktseite für EN/RU: gleiche CSS-Module, Fotos, Reihenfolge und Struktur wie (de)/kontakt; Texte aus src/i18n/content. */
export default function LocalizedKontaktPage({ locale }: { locale: L }) {
  const t = kontaktContent[locale];
  const { contact } = siteConfig;
  return (
    <>
      <LocalizedPageJsonLd locale={locale} path="/kontakt" name={t.meta.name} description={t.meta.description} homeName={getDictionary(locale).common.homeName} pageType="ContactPage" crumbs={[{ name: t.meta.crumb, path: "/kontakt" }]} />

      <section className={styles.hero} aria-labelledby="kt-title">
        <Photo src="/images/kontakt/hero-office.webp" alt="" priority sizes="100vw" className={styles.heroBg} imgClassName={styles.heroImg} />
        <div className={styles.heroVeil} aria-hidden="true" />
        <Container className={styles.heroInner}>
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>
          <h1 id="kt-title" className={styles.heroTitle}>
            {t.hero.title}
            <i className={styles.dot} aria-hidden="true" />
          </h1>
          <p className={styles.heroText}>{t.hero.text}</p>
        </Container>
      </section>

      <section className={styles.cardsSection} aria-label={t.cardsAria}>
        <Container>
          <ul className={styles.cards}>
            <li className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon name="phone" size={28} strokeWidth={1.4} />
              </span>
              <span className={styles.cardLine} aria-hidden="true" />
              <h2>{t.cards.phone}</h2>
              <span />
              <div className={styles.cardAction}>
                <a href={contact.phoneHref} className={styles.cardBtn}>
                  {contact.phone}
                  <Icon name="arrow" size={16} strokeWidth={1.6} />
                </a>
              </div>
            </li>
            <li className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon name="mail" size={28} strokeWidth={1.4} />
              </span>
              <span className={styles.cardLine} aria-hidden="true" />
              <h2>{t.cards.email}</h2>
              <a href={contact.emailHref} className={styles.cardMail}>
                {contact.email}
              </a>
              <div className={styles.cardAction}>
                <a href={contact.emailHref} className={styles.cardLink}>
                  {t.cards.emailAction}
                  <Icon name="arrow" size={16} strokeWidth={1.6} />
                </a>
              </div>
            </li>
            <li className={styles.card}>
              <span className={styles.cardIcon}>
                <Calendar />
              </span>
              <span className={styles.cardLine} aria-hidden="true" />
              <h2>{t.cards.appointment}</h2>
              <p>{t.cards.appointmentText}</p>
              <div className={styles.cardAction}>
                <a href="#formular" className={styles.cardLink}>
                  {t.cards.appointmentAction}
                  <Icon name="arrow" size={16} strokeWidth={1.6} />
                </a>
              </div>
            </li>
          </ul>
        </Container>
      </section>

      <section id="formular" className={styles.formSection} aria-labelledby="kt-form">
        <div className={styles.bg} aria-hidden="true" />
        <Container className={styles.formWrap}>
          <div className={styles.formGrid}>
            <div className={styles.formIntro}>
              <h2 id="kt-form" className={`h2 ${styles.formTitle}`}>
                {t.formIntro.title}
                <i className={styles.dot} aria-hidden="true" />
              </h2>
              <span className={styles.cardLine} aria-hidden="true" />
              <p className={styles.formLead}>{t.formIntro.lead}</p>
            </div>
            <div className={styles.panel}>
              <LocalizedContactForm locale={locale} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
