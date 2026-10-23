import Link from "next/link";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import { siteConfig } from "@/data/site";
import styles from "./Footer.module.css";

export type FooterLinkItem = { label: string; href: string; /** öffnet die Cookie-Einstellungen statt eine Seite */ cookie?: boolean; /** Link führt auf eine nur deutsche Seite (Kennzeichnung „DE“) */ german?: boolean };

type Props = {
  claim: string;
  cta: { label: string; href: string; german?: boolean };
  columns: { title: string; links: FooterLinkItem[] }[];
  contactTitle: string;
  hours: { title: string; lines: string[] };
  social: { label: string; linkedin: string; google: string; email: string };
  legalLabel: string;
  legal: FooterLinkItem[];
  /** Kennzeichnung für nur deutsche Ziele (EN/RU), sonst leer */
  tag?: React.ReactNode;
};

/**
 * Gemeinsame, rein CSS-gesteuerte Footer-Struktur für DE/EN/RU (Desktop, Tablet, Mobil):
 * obere Zeile (Claim + Kontaktlink) · Navigation und Kontakt · untere Zeile (Symbole, rechtliche Links, Copyright).
 */
export default function FooterLayout({ claim, cta, columns, contactTitle, hours, social, legalLabel, legal, tag }: Props) {
  const { contact, profiles } = siteConfig;
  const link = (l: FooterLinkItem) =>
    l.cookie || l.href === "#cookie-einstellungen" ? (
      <CookieSettingsButton className={styles.linkButton}>{l.label}</CookieSettingsButton>
    ) : (
      <Link href={l.href}>
        {l.label}
        {l.german && tag}
      </Link>
    );
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <p className={styles.claim}>{claim}</p>
          <Link href={cta.href} className={styles.topLink}>
            <span>
              {cta.label}
              {cta.german && tag}
            </span>
            <Icon name="arrow" size={18} strokeWidth={1.6} />
          </Link>
        </div>

        <div className={styles.main}>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className={styles.col}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>{link(l)}</li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.col}>
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
                <Icon name="phone" size={18} />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={18} />
                <a href={contact.emailHref} className={styles.email}>
                  {contact.email}
                </a>
              </li>
              <li className={styles.hoursItem}>
                <Icon name="clock" size={18} />
                <div className={styles.hours}>
                  <span className={styles.hoursTitle}>{hours.title}</span>
                  {hours.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
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
          <nav aria-label={legalLabel} className={styles.legalNav}>
            <ul className={styles.legal}>
              {legal.map((l) => (
                <li key={l.href}>{link(l)}</li>
              ))}
            </ul>
          </nav>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {contact.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
