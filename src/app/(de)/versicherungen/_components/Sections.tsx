import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import InsuranceGroup from "./InsuranceGroup";
import { consulting, contactHref, faq, finalCta, hero, overview, review } from "./content";
import styles from "./Wv.module.css";

const Dot = () => <i className={styles.dot} aria-hidden="true" />;
const num = (i: number) => String(i + 1).padStart(2, "0");

export function WvHero() {
  return (
    <section className={styles.hero} aria-labelledby="wv-title">
      <div className={styles.heroCopy}>
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 id="wv-title" className={styles.heroTitle}>
          {hero.title.map((l, i) => (
            <span key={l} className={styles.line}>
              {l}
              {i === hero.title.length - 1 && <Dot />}
            </span>
          ))}
        </h1>
        <p className={styles.heroText}>{hero.text}</p>
        <Button href={hero.cta.href} size="lg">
          {hero.cta.label}
        </Button>
      </div>
      <Photo src={hero.image} alt={hero.imageAlt} priority sizes="(max-width: 767px) 100vw, 55vw" position="50% 55%" className={styles.heroPhoto} />
    </section>
  );
}

export function WvOverview() {
  return (
    <section className={styles.overview} aria-labelledby="wv-overview">
      <Container className={styles.overviewHead}>
        <SectionLabel>{overview.eyebrow}</SectionLabel>
        <h2 id="wv-overview" className={`h2 ${styles.h2}`}>
          {overview.title}
        </h2>
        <p className={styles.body}>{overview.text}</p>
      </Container>
      {overview.groups.map((g, i) => (
        <InsuranceGroup key={g.num} group={g} questionsLabel={overview.questionsLabel} link={overview.link} contactHref={contactHref} tone={i % 2 === 1 ? "off" : "white"} />
      ))}
      <Container>
        <p className={styles.note}>{overview.note}</p>
      </Container>
    </section>
  );
}

export function WvReview() {
  return (
    <section className={styles.navy} aria-labelledby="wv-review">
      <Container className={styles.reviewGrid}>
        <div>
          <SectionLabel tone="light">{review.eyebrow}</SectionLabel>
          <h2 id="wv-review" className={`h2 ${styles.h2} ${styles.onDark}`}>
            {review.title}
          </h2>
          <p className={styles.bodyDark}>{review.text}</p>
        </div>
        <ul className={styles.reviewList}>
          {review.items.map((r) => (
            <li key={r.title}>
              <h3>{r.title}</h3>
              <span className={styles.accent} aria-hidden="true" />
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function WvConsulting() {
  return (
    <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="wv-consulting">
      <Container className={styles.cGrid}>
        <Photo src={consulting.image} alt={consulting.imageAlt} ratio="4 / 3" position="50% 50%" sizes="(max-width: 767px) 100vw, 50vw" className={styles.cPhoto} />
        <div className={styles.cCopy}>
          <SectionLabel>{consulting.eyebrow}</SectionLabel>
          <h2 id="wv-consulting" className={`h2 ${styles.h2}`}>
            {consulting.title.map((l, i) => (
              <span key={l} className={styles.line}>
                {l}
                {i === consulting.title.length - 1 && <Dot />}
              </span>
            ))}
          </h2>
          <p className={styles.body}>{consulting.text}</p>
        </div>
        <ol className={styles.steps}>
          {consulting.steps.map((s, i) => (
            <li key={s.title}>
              <span className={styles.num}>{num(i)}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function WvFaq() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="wv-faq">
      <Container className={styles.faqGrid}>
        <div>
          <SectionLabel>{faq.eyebrow}</SectionLabel>
          <h2 id="wv-faq" className={`h2 ${styles.h2}`}>
            {faq.title}
            <Dot />
          </h2>
          <p className={styles.body}>{faq.text}</p>
        </div>
        <div className={styles.faqList}>
          {faq.items.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary>
                <span>{item.q}</span>
                <span className={styles.plus} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WvFinalCta() {
  return (
    <section className={styles.final} aria-labelledby="wv-final">
      <Container className={styles.finalInner}>
        <div>
          <SectionLabel tone="light">{finalCta.eyebrow}</SectionLabel>
          <h2 id="wv-final" className={`h2 ${styles.h2} ${styles.onDark}`}>
            {finalCta.title}
            <Dot />
          </h2>
          <p className={styles.bodyDark}>{finalCta.text}</p>
        </div>
        <Button href={finalCta.cta.href} variant="light" size="lg">
          {finalCta.cta.label}
        </Button>
      </Container>
    </section>
  );
}

