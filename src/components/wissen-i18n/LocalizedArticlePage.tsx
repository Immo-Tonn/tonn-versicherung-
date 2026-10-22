import Link from "next/link";
import styles from "@/app/(de)/wissen/[slug]/Article.module.css";
import { bySlug, type Block } from "@/app/(de)/wissen/_lib/articles";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedArticleJsonLd from "@/components/seo/LocalizedArticleJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import ArticleReviewNote from "@/components/wissen-i18n/ArticleReviewNote";
import type { Locale } from "@/i18n/config";
import { articleLabels, articleTranslations } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

type L = Exclude<Locale, "de">;

/** Stellt sicher, dass die Übersetzung die Struktur des deutschen Beitrags exakt übernimmt (Blocktypen, Anzahl, Listenlängen, Link-Ziele). */
function assertSameStructure(slug: string, locale: L) {
  const de = bySlug(slug);
  const tr = articleTranslations[locale][slug];
  if (!de || !tr) throw new Error(`Beitrag ${slug} (${locale}): Original oder Übersetzung fehlt`);
  const fail = (m: string) => {
    throw new Error(`Beitrag ${slug} (${locale}): ${m}`);
  };
  if (tr.blocks.length !== de.blocks.length) fail(`Blockanzahl ${tr.blocks.length} ≠ ${de.blocks.length}`);
  de.blocks.forEach((b, i) => {
    const x = tr.blocks[i];
    if (x.t !== b.t) fail(`Block ${i}: Typ ${x.t} ≠ ${b.t}`);
    if (b.t === "ul" && x.t === "ul" && x.items.length !== b.items.length) fail(`Block ${i}: Listenlänge`);
    if (b.t === "link" && x.t === "link" && x.href !== b.href) fail(`Block ${i}: Link-Ziel`);
  });
  if (tr.sourceLabels.length !== de.sources.length) fail("Quellenanzahl");
  return { de, tr };
}

/**
 * Ratgeber-Beitrag für EN/RU. Gleiche CSS-Module, Struktur und Reihenfolge wie die deutsche Beitragsseite
 * (src/app/(de)/wissen/[slug]/page.tsx); Texte aus src/i18n/content. Quellen-Links und verwandte Beiträge stammen vom
 * deutschen Original; Links auf nicht übersetzte Seiten führen zur deutschen Seite und sind mit „DE“ markiert.
 */
export default function LocalizedArticlePage({ slug, locale }: { slug: string; locale: L }) {
  const { de, tr } = assertSameStructure(slug, locale);
  const labels = articleLabels[locale];
  const c = getDictionary(locale).common;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null);
  const sources = de.sources.map((s, i) => ({ label: tr.sourceLabels[i], url: s.url }));
  const related = de.related.map((s) => bySlug(s)).filter((x) => x !== undefined);

  function render(b: Block, i: number) {
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
      case "link":
        return (
          <p key={i}>
            <Link href={lk(b.href).href} className={styles.inlineLink}>
              {b.text}
            </Link>
            {tag(b.href)}
          </p>
        );
      case "example":
        return (
          <aside key={i} className={styles.example}>
            <p className={styles.exampleLabel}>{labels.example}</p>
            <p>{b.text}</p>
          </aside>
        );
    }
  }

  const home = lk("/");
  const guides = lk("/wissen");
  return (
    <article className={styles.page} aria-labelledby="art-title">
      <LocalizedArticleJsonLd slug={slug} locale={locale} headline={tr.title} description={tr.seo.description} section={tr.topic} reviewed={Boolean(de.review)} homeName={labels.home} guidesName={labels.guides} sources={sources} />
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
                <Link href={guides.href}>{labels.guides}</Link>
                {guides.german && <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />}
              </li>
              <li>
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
                <span className={styles.current} aria-current="page">
                  {tr.title}
                </span>
              </li>
            </ol>
          </nav>
          <SectionLabel>{tr.topic}</SectionLabel>
          <h1 id="art-title" className={styles.title}>
            {tr.title}
          </h1>
          {de.review && <ArticleReviewNote review={de.review} locale={locale} />}
          <div className={styles.answer}>
            <p className={styles.answerLabel}>{labels.answerLabel}</p>
            <p>{tr.answer}</p>
          </div>
          <div className={styles.body}>{tr.blocks.map(render)}</div>

          <section className={styles.sources} aria-labelledby="art-sources">
            <h2 id="art-sources" className={styles.h2}>
              {labels.sourcesTitle}
            </h2>
            <ul>
              {sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>{" "}
                  <span lang="de">{labels.sourceLang}</span>
                </li>
              ))}
            </ul>
          </section>

          {related.length > 0 && (
            <section className={styles.related} aria-labelledby="art-related">
              <h2 id="art-related" className={styles.h2}>
                {labels.relatedTitle}
              </h2>
              <ul>
                {related.map((r) => {
                  const target = lk(`/wissen/${r.slug}`);
                  const title = articleTranslations[locale][r.slug]?.title ?? r.title;
                  return (
                    <li key={r.slug}>
                      <Link href={target.href} lang={articleTranslations[locale][r.slug] ? undefined : "de"}>
                        {title}
                      </Link>
                      {target.german && <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <div className={styles.cta}>
            <h2 className={styles.h2}>{tr.cta?.title ?? labels.ctaTitle}</h2>
            <p>{tr.cta?.text ?? labels.ctaText}</p>
            <Button href={lk("/kontakt").href} size="lg" arrow={false}>
              {tr.cta?.label ?? labels.ctaButton}
              {tag("/kontakt")}
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
