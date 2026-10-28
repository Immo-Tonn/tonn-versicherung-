import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import { consulting, faq, finalCta, goals, hero, questions } from "./content";
import styles from "./Kapital.module.css";

const Dot = () => <i className={styles.dot} aria-hidden="true" />;
const num = (i: number) => String(i + 1).padStart(2, "0");

export function KaHero() {
  return (
    <section className={styles.hero} aria-labelledby="ka-title">
      <div className={styles.heroCopy}>
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 id="ka-title" className={styles.heroTitle}>
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
      <Photo src={hero.image} alt={hero.imageAlt} priority sizes="(max-width: 767px) 100vw, 55vw" position="55% 40%" className={styles.heroPhoto} />
    </section>
  );
}

export function KaGoals() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="ka-goals">
      <Container>
        <SectionLabel>{goals.eyebrow}</SectionLabel>
        <h2 id="ka-goals" className={`h2 ${styles.h2}`}>
          {goals.title}
        </h2>
        <ul className={styles.goalGrid}>
          {goals.items.map((g, i) => (
            <li key={g.title}>
              <span className={styles.num}>{num(i)}</span>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function KaQuestions() {
  return (
    <section className={styles.navy} aria-labelledby="ka-questions">
      <Container className={styles.qGrid}>
        <div>
          <SectionLabel tone="light">{questions.eyebrow}</SectionLabel>
          <h2 id="ka-questions" className={`h2 ${styles.h2} ${styles.onDark}`}>
            {questions.title}
          </h2>
          <p className={styles.bodyDark}>{questions.text}</p>
        </div>
        <ul className={styles.qList}>
          {questions.items.map((q) => (
            <li key={q.title}>
              <h3>{q.title}</h3>
              <span className={styles.accent} aria-hidden="true" />
              <p>{q.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function KaConsulting() {
  return (
    <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="ka-consulting">
      <Container className={styles.cGrid}>
        <Photo src={consulting.image} alt={consulting.imageAlt} ratio="4 / 3" position="50% 50%" sizes="(max-width: 767px) 100vw, 50vw" className={styles.cPhoto} />
        <div className={styles.cCopy}>
          <SectionLabel>{consulting.eyebrow}</SectionLabel>
          <h2 id="ka-consulting" className={`h2 ${styles.h2}`}>
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

export function KaFaq() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="ka-faq">
      <Container className={styles.faqGrid}>
        <div>
          <h2 id="ka-faq" className={`h2 ${styles.h2}`}>
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

export function KaFinalCta() {
  return (
    <section className={styles.final} aria-labelledby="ka-final">
      <Container className={styles.finalInner}>
        <div>
          <h2 id="ka-final" className={`h2 ${styles.h2} ${styles.onDark}`}>
            {finalCta.title}
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
