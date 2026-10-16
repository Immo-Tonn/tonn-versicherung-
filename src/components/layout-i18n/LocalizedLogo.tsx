import Link from "next/link";
import styles from "@/components/ui/Logo/Logo.module.css";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

/** Logo wie components/ui/Logo (gleiche Gestaltung); Ziel ist die Startseite der jeweiligen Sprache. */
export default function LocalizedLogo({ locale, tone = "dark" }: { locale: Exclude<Locale, "de">; tone?: "dark" | "light" }) {
  return (
    <Link href={localizedHref("/", locale).href} className={`${styles.logo} ${tone === "light" ? styles.light : ""}`} aria-label={getDictionary(locale).common.homeAria}>
      <span className={styles.bar} aria-hidden="true" />
      <span className={styles.text}>
        <span className={styles.name}>TONN</span>
        <span className={styles.sub}>Versicherung</span>
      </span>
    </Link>
  );
}
