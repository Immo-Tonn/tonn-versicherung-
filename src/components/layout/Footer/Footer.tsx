import Link from "next/link";
import { footerColumns } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Logo from "@/components/ui/Logo/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  const { contact, social } = siteConfig;
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div className={styles.brand}>
          <Logo tone="light" />
          <p>
            Persönlich in Münster.
            <br />
            Digital in ganz Deutschland.
          </p>
          <ul className={styles.social} aria-label="Soziale Netzwerke und Kontakt">
            <li>
              <a href={social.linkedin} aria-label="LinkedIn">
                <Icon name="linkedin" size={22} />
              </a>
            </li>
            <li>
              <a href={social.google} aria-label="Google-Profil">
                <Icon name="google" size={22} />
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} aria-label="E-Mail">
                <Icon name="mail" size={22} />
              </a>
            </li>
          </ul>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title} className={styles.col}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className={styles.col}>
          <h2>Kontakt</h2>
          <ul className={styles.contact}>
            <li>
              <Icon name="pin" size={18} />
              {siteConfig.city}
            </li>
            <li>
              <Icon name="phone" size={18} />
              {/* TODO(PLACEHOLDER): echte Telefonnummer in data/site.ts */}
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
          <Button href="/kontakt" variant="light" className={styles.btn}>
            Kontakt aufnehmen
          </Button>
        </div>
      </Container>
    </footer>
  );
}
