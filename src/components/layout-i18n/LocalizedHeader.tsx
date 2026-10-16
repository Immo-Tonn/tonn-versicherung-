import styles from "@/components/layout/Header/Header.module.css";
import local from "./LocalizedHeader.module.css";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import DeTag from "./DeTag";
import LocalizedHeaderNav from "./LocalizedHeaderNav";
import LocalizedLanguageSwitcher from "./LocalizedLanguageSwitcher";
import LocalizedLogo from "./LocalizedLogo";
import LocalizedMobileMenu from "./LocalizedMobileMenu";
import { buildMainNav } from "./nav";

/** Header für EN/RU: gleiche Struktur, Klassen und Anordnung wie components/layout/Header. */
export default function LocalizedHeader({ locale }: { locale: Exclude<Locale, "de"> }) {
  const t = getDictionary(locale);
  const items = buildMainNav(t, locale);
  const cta = { label: t.header.cta, ...localizedHref("/kontakt", locale) };
  const { germanOnlyBadge: badge, germanOnlyHint: hint } = t.common;
  return (
    <header className={`${styles.header} ${local.compact}`}>
      <Container className={styles.inner}>
        <LocalizedLogo locale={locale} />
        <LocalizedHeaderNav items={items} label={t.header.navLabel} badge={badge} hint={hint} />
        <div className={styles.actions}>
          <Button href={cta.href} className={styles.cta}>
            {cta.label}
            {cta.german && <DeTag badge={badge} hint={hint} />}
          </Button>
          <LocalizedLanguageSwitcher locale={locale} />
          <LocalizedMobileMenu items={items} cta={cta} labels={{ open: t.header.menuOpen, close: t.header.menuClose, nav: t.header.mobileNavLabel }} badge={badge} hint={hint} />
        </div>
      </Container>
    </header>
  );
}
