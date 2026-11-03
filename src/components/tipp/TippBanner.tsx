import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import type { Locale } from "@/i18n/config";
import { tippContent } from "@/i18n/content/tipp";
import { localizedHref } from "@/i18n/links";
import styles from "./Tipp.module.css";

/** Banner „Tippgeberprämie“ auf der PKV-Seite (DE/EN/RU), zwischen Vorteilsleiste und „Für wen ist die PKV interessant?“. */
export default function TippBanner({ locale }: { locale: Locale }) {
  const b = tippContent[locale].banner;
  const page = localizedHref("/tippgeberpraemie", locale).href;
  const terms = localizedHref("/tippgeberpraemie#teilnahmebedingungen", locale).href;
  return (
    <section className={styles.bannerWrap} aria-label={b.ariaLabel}>
      <Container>
        <div className={styles.banner}>
          <div>
            <span className={styles.accent} aria-hidden="true" />
            <h2 className={styles.bannerTitle}>{b.title}</h2>
            <p className={styles.bannerText}>{b.text}</p>
          </div>
          <p className={styles.bannerNote}>
            {b.note[0]}
            <Link href={terms}>{b.note[1]}</Link>
            {b.note[2]}
          </p>
          <Button href={page} variant="light" className={styles.bannerBtn}>
            {b.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
