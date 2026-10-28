import styles from "@/app/(de)/kapitalanlage/_components/Kapital.module.css";
import { finalCta, hero } from "@/app/(de)/kapitalanlage/_components/content";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedPageJsonLd from "@/components/seo/LocalizedPageJsonLd";
import Button from "@/components/ui/Button/Button";
import HeroShine from "@/components/ui/HeroShine/HeroShine";
import shine from "@/components/ui/HeroShine/HeroShine.module.css";
import Container from "@/components/ui/Container/Container";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { kaContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

type L = Exclude<Locale, "de">;
const Dot = () => <i className={styles.dot} aria-hidden="true" />;
const num = (i: number) => String(i + 1).padStart(2, "0");

/** Seite „Kapitalanlage“ für EN/RU: gleiche CSS-Module, Fotos, Reihenfolge und Struktur wie (de)/kapitalanlage; Texte aus src/i18n/content. */
export default function LocalizedKapitalPage({ locale }: { locale: L }) {
  const t = kaContent[locale];
  const c = getDictionary(locale).common;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null);
  const path = "/kapitalanlage";

  return (
    <>
      <LocalizedPageJsonLd
        locale={locale}
        path={path}
        name={t.meta.name}
        description={t.meta.description}
        homeName={c.homeName}
        crumbs={[{ name: t.meta.crumb, path }]}
        service={{ name: t.meta.serviceName, serviceType: t.meta.serviceType, description: t.meta.description }}
        faq={t.faq.items}
      />

      <section className={styles.hero} aria-labelledby="ka-title">
        <div className={styles.heroCopy}>
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>
          <h1 id="ka-title" className={styles.heroTitle}>
            {t.hero.title.map((l, i) => (
              <span key={l} className={styles.line}>
                {l}
                {i === t.hero.title.length - 1 && <Dot />}
              </span>
            ))}
          </h1>
          <p className={styles.heroText}>{t.hero.text}</p>
          <Button href={lk(hero.cta.href).href} size="lg" className={shine.host}>
            {t.hero.cta}
            {tag(hero.cta.href)}
            <HeroShine />
          </Button>
        </div>
        <Photo src={hero.image} alt={t.hero.imageAlt} priority sizes="(max-width: 767px) 100vw, 55vw" position="55% 40%" className={styles.heroPhoto} />
      </section>

      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="ka-goals">
        <Container>
          <SectionLabel>{t.goals.eyebrow}</SectionLabel>
          <h2 id="ka-goals" className={`h2 ${styles.h2}`}>
            {t.goals.title}
          </h2>
          <ul className={styles.goalGrid}>
            {t.goals.items.map((g, i) => (
              <li key={g.title}>
                <span className={styles.num}>{num(i)}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.navy} aria-labelledby="ka-questions">
        <Container className={styles.qGrid}>
          <div>
            <SectionLabel tone="light">{t.questions.eyebrow}</SectionLabel>
            <h2 id="ka-questions" className={`h2 ${styles.h2} ${styles.onDark}`}>
              {t.questions.title}
            </h2>
            <p className={styles.bodyDark}>{t.questions.text}</p>
          </div>
          <ul className={styles.qList}>
            {t.questions.items.map((q) => (
              <li key={q.title}>
                <h3>{q.title}</h3>
                <span className={styles.accent} aria-hidden="true" />
                <p>{q.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="ka-consulting">
        <Container className={styles.cGrid}>
          <Photo src="/images/pkv/pkv-ansprechpartner.webp" alt={t.consulting.imageAlt} ratio="4 / 3" position="50% 50%" sizes="(max-width: 767px) 100vw, 50vw" className={styles.cPhoto} />
          <div className={styles.cCopy}>
            <SectionLabel>{t.consulting.eyebrow}</SectionLabel>
            <h2 id="ka-consulting" className={`h2 ${styles.h2}`}>
              {t.consulting.title.map((l, i) => (
                <span key={l} className={styles.line}>
                  {l}
                  {i === t.consulting.title.length - 1 && <Dot />}
                </span>
              ))}
            </h2>
            <p className={styles.body}>{t.consulting.text}</p>
          </div>
          <ol className={styles.steps}>
            {t.consulting.steps.map((s, i) => (
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

      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="ka-faq">
        <Container className={styles.faqGrid}>
          <div>
            <h2 id="ka-faq" className={`h2 ${styles.h2}`}>
              {t.faq.title}
              <Dot />
            </h2>
            <p className={styles.body}>{t.faq.text}</p>
          </div>
          <div className={styles.faqList}>
            {t.faq.items.map((item) => (
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

      <section className={styles.final} aria-labelledby="ka-final">
        <Container className={styles.finalInner}>
          <div>
            <h2 id="ka-final" className={`h2 ${styles.h2} ${styles.onDark}`}>
              {t.finalCta.title}
            </h2>
            <p className={styles.bodyDark}>{t.finalCta.text}</p>
          </div>
          <Button href={lk(finalCta.cta.href).href} variant="light" size="lg">
            {t.finalCta.cta}
            {tag(finalCta.cta.href)}
          </Button>
        </Container>
      </section>
    </>
  );
}
