import Link from "next/link";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import { siteConfig } from "@/data/site";
import styles from "./Footer.module.css";

export type FooterLinkItem = { label: string; href: string; /** öffnet die Cookie-Einstellungen statt eine Seite */ cookie?: boolean; /** Link führt auf eine nur deutsche Seite (Kennzeichnung „DE“) */ german?: boolean };

type Props = {
  contactTitle: string;
  hours: { title: string; rows: [string, string][] };
  social: { label: string; linkedin: string; google: string; email: string };
  legalLabel: string;
  legal: FooterLinkItem[];
  /** Kennzeichnung für nur deutsche Ziele (EN/RU), sonst leer */
  tag?: React.ReactNode;
};

/**
 * Gemeinsame, rein CSS-gesteuerte Footer-Struktur für DE/EN/RU (Desktop, Tablet, Mobil):
 * drei Spalten (rechtliche Links + Symbole · Geschäftszeiten · Kontakt), darunter Linie und Copyright.
 */
export default function FooterLayout({ contactTitle, hours, social, legalLabel, legal, tag }: Props) {
  const { contact, profiles } = siteConfig;
  const link = (l: FooterLinkItem) =>
    l.cookie || l.href === "#cookie-einstellungen" ? (
      <CookieSettingsButton className={styles.linkButton}>{l.label}</CookieSettingsButton>
    ) : (
      <Link href={l.href}>
        {l.label}
        {l.german && (
          <>
            <span className={styles.brk} />
            {tag}
          </>
        )}
      </Link>
    );
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main}>
          <div className={styles.colLegal}>
            <nav aria-label={legalLabel}>
              <ul className={styles.legal}>
                {legal.map((l) => (
                  <li key={l.href}>{link(l)}</li>
                ))}
              </ul>
            </nav>
            <ul className={styles.social} aria-label={social.label}>
              <li>
                <a href={profiles.linkedinAndreasTonn} aria-label={social.linkedin}>
                  <Icon name="linkedin" size={22} />
                </a>
              </li>
              <li>
                <a href={profiles.googleBusinessProfile} aria-label={social.google}>
                  <Icon name="google" size={22} />
                </a>
              </li>
              <li>
                <a href={contact.emailHref} aria-label={social.email}>
                  <Icon name="mail" size={22} />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h2>{hours.title}</h2>
            <dl className={styles.hours}>
              {hours.rows.map(([days, time]) => (
                <div key={days}>
                  <dt>{days}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`${styles.col} ${styles.colContact}`}>
            <h2>{contactTitle}</h2>
            <ul className={styles.contact}>
              <li className={styles.addressItem}>
                <Icon name="pin" size={18} />
                <address className={styles.address}>
                  {contact.address.street}
                  <br />
                  {contact.address.zip} {contact.address.city}
                </address>
              </li>
              <li>
                <Icon name="mobile" size={18} />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <a href={contact.phoneSecondaryHref}>{contact.phoneSecondary}</a>
              </li>
              <li>
                <Icon name="mail" size={18} />
                <a href={contact.emailHref} className={styles.email}>
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} {contact.name}
        </p>
      </Container>
    </footer>
  );
}
