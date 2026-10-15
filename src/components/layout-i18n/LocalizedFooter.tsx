import Link from "next/link";
import styles from "@/components/layout/Footer/Footer.module.css";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import { isPlaceholder, siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import DeTag from "./DeTag";
import LocalizedLogo from "./LocalizedLogo";

function FooterLink({ href, label, locale, tag }: { href: string; label: string; locale: Exclude<Locale, "de">; tag: React.ReactNode }) {
  const target = localizedHref(href, locale);
  return (
    <Link href={target.href}>
      {label}
      {target.german && tag}
    </Link>
  );
}

/**
 * Footer für EN/RU: gleiche Struktur, Klassen und Reihenfolge wie components/layout/Footer.
 * Links auf nicht übersetzte Seiten (inkl. Impressum/Datenschutz) führen zu den deutschen Seiten und sind mit „DE“ markiert.
 */
export default function LocalizedFooter({ locale }: { locale: Exclude<Locale, "de"> }) {
  const t = getDictionary(locale);
  const f = t.footer;
  const { contact, social } = siteConfig;
  const contactTarget = localizedHref("/kontakt", locale);
  const tag = <DeTag badge={t.common.germanOnlyBadge} hint={t.common.germanOnlyHint} />;
  const columns: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: f.servicesTitle,
      links: [
        { label: f.privateHealth, href: "/private-krankenversicherung" },
        { label: f.disability, href: "/berufsunfaehigkeitsversicherung" },
        { label: f.insurances, href: "/versicherungen" },
        { label: f.capital, href: "/kapitalanlage" },
      ],
    },
    {
      title: f.companyTitle,
      links: [
        { label: f.about, href: "/ueber-uns" },
        { label: f.knowledge, href: "/wissen" },
        { label: f.contact, href: "/kontakt" },
      ],
    },
    {
      title: f.legalTitle,
      links: [
        { label: f.imprint, href: "/impressum" },
        { label: f.privacy, href: "/datenschutz" },
        { label: f.cookieSettings, href: "#cookie-einstellungen" },
      ],
    },
  ];
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div className={styles.brand}>
          <LocalizedLogo locale={locale} tone="light" />
          <p>
            {f.taglineLine1}
            <br />
            {f.taglineLine2}
          </p>
          <ul className={styles.social} aria-label={f.socialLabel}>
            {/* Profil-Links nur anzeigen, wenn eine echte Adresse hinterlegt ist (siehe siteConfig.social) */}
            {!isPlaceholder(social.linkedin) && (
              <li>
                <a href={social.linkedin} aria-label={f.linkedin}>
                  <Icon name="linkedin" size={22} />
                </a>
              </li>
            )}
            {!isPlaceholder(social.google) && (
              <li>
                <a href={social.google} aria-label={f.googleProfile}>
                  <Icon name="google" size={22} />
                </a>
              </li>
            )}
            <li>
              <a href={contact.emailHref} aria-label={f.email}>
                <Icon name="mail" size={22} />
              </a>
            </li>
          </ul>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className={styles.col}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  {l.href === "#cookie-einstellungen" ? (
                    <CookieSettingsButton className={styles.linkButton}>{l.label}</CookieSettingsButton>
                  ) : (
                    <FooterLink href={l.href} label={l.label} locale={locale} tag={tag} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className={styles.col}>
          <h2>{f.contactTitle}</h2>
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
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
          </ul>
          <Button href={contactTarget.href} variant="light" className={styles.btn}>
            {f.contactCta}
            {contactTarget.german && tag}
          </Button>
        </div>
      </Container>
    </footer>
  );
}
