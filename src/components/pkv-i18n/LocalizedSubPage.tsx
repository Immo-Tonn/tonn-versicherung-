import Link from "next/link";
import styles from "@/app/(de)/private-krankenversicherung/_sub/Sub.module.css";
import type { SubBlock, SubPageContent } from "@/app/(de)/private-krankenversicherung/_sub/types";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedPageJsonLd from "@/components/seo/LocalizedPageJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { pkvSubLabels } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

type L = Exclude<Locale, "de">;
const PKV_PATH = "/private-krankenversicherung";

/**
 * Unterseite (Angestellte/Selbstständige/Beamte) für EN/RU. Gleiche CSS-Module und Struktur wie
 * (de)/private-krankenversicherung/_sub/SubPage; Texte aus src/i18n/content.
 */
export default function LocalizedSubPage({ content, description, locale }: { content: SubPageContent; description: string; locale: L }) {
  const labels = pkvSubLabels[locale];
  const c = getDictionary(locale).common;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null);

  function render(b: SubBlock, i: number) {
    switch (b.t) {
      case "h2":
        return (
          <h2 key={i} className={styles.h2}>
            {b.text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={i} className={styles.h3}>
            {b.text}
          </h3>
        );
      case "p":
        return <p key={i}>{b.text}</p>;
      case "ul":
        return (
          <ul key={i} className={styles.list}>
            {b.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        );
      case "note":
        return (
          <aside key={i} className={styles.note}>
            <p className={styles.noteLabel}>{b.label}</p>
            <p>{b.text}</p>
          </aside>
        );
      case "link":
        return (
          <p key={i}>
            <Link href={lk(b.href).href} className={styles.inlineLink}>
              {b.text}
            </Link>
            {tag(b.href)}
          </p>
        );
    }
  }

  const home = lk("/");
  const pkv = lk(PKV_PATH);
  return (
    <article className={styles.page} aria-labelledby="pkv-sub-title">
      <LocalizedPageJsonLd
        locale={locale}
        path={content.path}
        name={content.title}
        description={description}
        homeName={c.homeName}
        crumbs={[
          { name: labels.pkvCrumb, path: PKV_PATH },
          { name: content.crumb, path: content.path },
        ]}
      />
      <Container>
        <div className={styles.column}>
          <nav className={styles.crumbs} aria-label={labels.breadcrumbAria}>
            <ol>
              <li>
                <Link href={home.href}>{labels.home}</Link>
                {home.german && <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />}
              </li>
              <li>
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
                <Link href={pkv.href}>{labels.pkvCrumb}</Link>
                {pkv.german && <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />}
              </li>
              <li>
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
                <span className={styles.current} aria-current="page">
                  {content.crumb}
                </span>
              </li>
            </ol>
          </nav>

          <SectionLabel>{labels.section}</SectionLabel>
          <h1 id="pkv-sub-title" className={styles.title}>
            {content.title}
          </h1>

          <div className={styles.answer}>
            <p className={styles.answerLabel}>{labels.answerLabel}</p>
            <p>{content.answer}</p>
          </div>

          <div className={styles.body}>{content.blocks.map(render)}</div>

          <section className={styles.sources} aria-labelledby="pkv-sub-sources">
            <h2 id="pkv-sub-sources" className={styles.h2}>
              {labels.sourcesTitle}
            </h2>
            <ul>
              {content.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>{" "}
                  <span lang="de">{labels.sourceLang}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className={styles.cta}>
            <h2 className={styles.h2}>{labels.ctaTitle}</h2>
            <p>{labels.ctaText}</p>
            <Button href={lk("/kontakt").href} size="lg">
              {labels.ctaButton}
              {tag("/kontakt")}
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
