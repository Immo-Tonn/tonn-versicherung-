import Link from "next/link";
import PageJsonLd from "@/components/seo/PageJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { SubBlock, SubPageContent } from "./types";
import styles from "./Sub.module.css";

const PKV_PATH = "/private-krankenversicherung";

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
          <Link href={b.href} className={styles.inlineLink}>
            {b.text}
          </Link>
        </p>
      );
  }
}

type Props = { content: SubPageContent; description: string };

export default function SubPage({ content, description }: Props) {
  return (
    <article className={styles.page} aria-labelledby="pkv-sub-title">
      {/* WebPage + BreadcrumbList; Organization/WebSite stammen aus dem globalen Markup */}
      <PageJsonLd
        path={content.path}
        name={content.title}
        description={description}
        crumbs={[
          { name: "Private Krankenversicherung", path: PKV_PATH },
          { name: content.crumb, path: content.path },
        ]}
      />
      <Container>
        <div className={styles.column}>
          <nav className={styles.crumbs} aria-label="Brotkrumen">
            <ol>
              <li>
                <Link href="/">Startseite</Link>
              </li>
              <li>
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
                <Link href={PKV_PATH}>Private Krankenversicherung</Link>
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

          <SectionLabel>Private Krankenversicherung</SectionLabel>
          <h1 id="pkv-sub-title" className={styles.title}>
            {content.title}
          </h1>

          <div className={styles.answer}>
            <p className={styles.answerLabel}>Kurz beantwortet</p>
            <p>{content.answer}</p>
            <p className={styles.answerLink}>
              <Link href="/kontakt#formular" className={styles.earlyLink}>
                Beratung anfragen
                <Icon name="arrow" size={18} strokeWidth={1.6} />
              </Link>
            </p>
          </div>

          <div className={styles.body}>{content.blocks.map(render)}</div>

          <section className={styles.sources} aria-labelledby="pkv-sub-sources">
            <h2 id="pkv-sub-sources" className={styles.h2}>
              Quellen
            </h2>
            <ul>
              {content.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className={styles.cta}>
            <h2 className={styles.h2}>Wie passt die private Krankenversicherung zu Ihrer Situation?</h2>
            <p>Wir besprechen Ihre Situation persönlich und vergleichen gemeinsam passende Tarife unserer Versicherungspartner.</p>
            <Button href="/kontakt" size="lg">
              Kostenloses Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
