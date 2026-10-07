import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import ContactForm from "./ContactForm";
import styles from "./Kontakt.module.css";

const hero = {
  title: "Lassen Sie uns sprechen",
  text: "Ihre Fragen. Ein persönliches Gespräch. Ein guter Anfang.",
  image: "/images/kontakt/hero-office.webp",
};

function Calendar() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="4" y="5.500" width="16" height="15" rx="1.500" />
      <path d="M4 10h16M8.500 3.500v4M15.500 3.500v4" />
    </svg>
  );
}

export function KtHero() {
  return (
    <section className={styles.hero} aria-labelledby="kt-title">
      <Photo src={hero.image} alt="" priority sizes="100vw" className={styles.heroBg} imgClassName={styles.heroImg} />
      <div className={styles.heroVeil} aria-hidden="true" />
      <Container className={styles.heroInner}>
        <SectionLabel>Kontakt</SectionLabel>
        <h1 id="kt-title" className={styles.heroTitle}>
          {hero.title}
          <i className={styles.dot} aria-hidden="true" />
        </h1>
        <p className={styles.heroText}>{hero.text}</p>
      </Container>
    </section>
  );
}

export function KtCards() {
  return (
    <section className={styles.cardsSection} aria-label="Kontaktmöglichkeiten">
      <Container>
        <ul className={styles.cards}>
          <li className={styles.card}>
            <span className={styles.cardIcon}>
              <Icon name="phone" size={28} strokeWidth={1.4} />
            </span>
            <span className={styles.cardLine} aria-hidden="true" />
            <h2>Telefon</h2>
            <span />
            <div className={styles.cardAction}>
              <a href="tel:+491743454419" className={styles.cardBtn}>
                0174 3454419
                <Icon name="arrow" size={16} strokeWidth={1.6} />
              </a>
            </div>
          </li>
          <li className={styles.card}>
            <span className={styles.cardIcon}>
              <Icon name="mail" size={28} strokeWidth={1.4} />
            </span>
            <span className={styles.cardLine} aria-hidden="true" />
            <h2>E-Mail</h2>
            <a href="mailto:andreas@tonn-versicherung.de" className={styles.cardMail}>
              andreas@tonn-versicherung.de
            </a>
            <div className={styles.cardAction}>
              <a href="mailto:andreas@tonn-versicherung.de" className={styles.cardLink}>
                E-Mail schreiben
                <Icon name="arrow" size={16} strokeWidth={1.6} />
              </a>
            </div>
          </li>
          <li className={styles.card}>
            <span className={styles.cardIcon}>
              <Calendar />
            </span>
            <span className={styles.cardLine} aria-hidden="true" />
            <h2>Online-Termin</h2>
            <p>Wählen Sie Ihren Wunschtermin.</p>
            <div className={styles.cardAction}>
              {/* Buchungsfunktion folgt separat: bis dahin führt der Link zum Kontaktformular */}
              <a href="#formular" className={styles.cardLink}>
                Online-Termin buchen
                <Icon name="arrow" size={16} strokeWidth={1.6} />
              </a>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export function KtForm() {
  return (
    <section id="formular" className={styles.formSection} aria-labelledby="kt-form">
      <div className={styles.bg} aria-hidden="true" />
      <Container className={styles.formWrap}>
        <div className={styles.formGrid}>
          <div className={styles.formIntro}>
            <h2 id="kt-form" className={`h2 ${styles.formTitle}`}>
              Raum für Ihre Fragen
              <i className={styles.dot} aria-hidden="true" />
            </h2>
            <span className={styles.cardLine} aria-hidden="true" />
            <p className={styles.formLead}>Wählen Sie ein Thema und hinterlassen Sie Ihre Kontaktdaten.</p>
          </div>
          <div className={styles.panel}>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
