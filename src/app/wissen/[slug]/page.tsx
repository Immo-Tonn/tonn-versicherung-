import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import { siteConfig } from "@/data/site";
import { bySlug, published, type Block } from "../_lib/articles";
import styles from "./Article.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return published().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = bySlug(slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.description,
    alternates: { canonical: `/wissen/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.description, url: `/wissen/${a.slug}`, type: "article" },
  };
}

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
    case "example":
      return (
        <aside key={i} className={styles.example}>
          <p className={styles.exampleLabel}>Beispiel</p>
          <p>{b.text}</p>
        </aside>
      );
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const a = bySlug(slug);
  if (!a) notFound();

  const url = `${siteConfig.url}/wissen/${a.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.description,
      inLanguage: "de-DE",
      mainEntityOfPage: url,
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${siteConfig.url}/wissen` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];
  const related = a.related.map((s) => bySlug(s)).filter((x) => x !== undefined);

  return (
    <article className={styles.page} aria-labelledby="art-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Container>
        <div className={styles.column}>
          <nav className={styles.crumbs} aria-label="Brotkrumen">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">/</span>
            <Link href="/wissen">Ratgeber</Link>
          </nav>
          <SectionLabel>{a.topic}</SectionLabel>
          <h1 id="art-title" className={styles.title}>
            {a.title}
          </h1>
          <div className={styles.answer}>
            <p className={styles.answerLabel}>Kurz beantwortet</p>
            <p>{a.answer}</p>
          </div>
          <div className={styles.body}>{a.blocks.map(render)}</div>

          <section className={styles.sources} aria-labelledby="art-sources">
            <h2 id="art-sources" className={styles.h2}>
              Quellen
            </h2>
            <ul>
              {a.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {related.length > 0 && (
            <section className={styles.related} aria-labelledby="art-related">
              <h2 id="art-related" className={styles.h2}>
                Weiterlesen
              </h2>
              <ul>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/wissen/${r.slug}`}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className={styles.cta}>
            <h2 className={styles.h2}>Noch eine Frage offen?</h2>
            <p>Besprechen wir, was die Informationen für Ihre persönliche Situation bedeuten.</p>
            <Button href="/kontakt" size="lg" arrow={false}>
              Persönliches Gespräch vereinbaren
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
