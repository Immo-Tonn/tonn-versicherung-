import styles from "@/app/(de)/versicherungen/_components/Wv.module.css";
import { consulting, contactHref, finalCta, hero, overview } from "@/app/(de)/versicherungen/_components/content";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedPageJsonLd from "@/components/seo/LocalizedPageJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { wvContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import LocalizedInsuranceGroup from "./LocalizedInsuranceGroup";

type L = Exclude<Locale, "de">;
const Dot = () => <i className={styles.dot} aria-hidden="true" />;
const num = (i: number) => String(i + 1).padStart(2, "0");

/** Seite „Weitere Versicherungen“ für EN/RU: gleiche CSS-Module, Fotos, Icons, Reihenfolge und Struktur wie (de)/versicherungen; Texte aus src/i18n/content. */
export default function LocalizedWvPage({ locale }: { locale: L }) {
  const t = wvContent[locale];
  const c = getDictionary(locale).common;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null);
  const path = "/versicherungen";

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

      <section className={styles.hero} aria-labelledby="wv-title">
        <div className={styles.heroCopy}>
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>
          <h1 id="wv-title" className={styles.heroTitle}>
            {t.hero.title.map((l, i) => (
              <span key={l} className={styles.line}>
                {l}
                {i === t.hero.title.length - 1 && <Dot />}
              </span>
            ))}
          </h1>
          <p className={styles.heroText}>{t.hero.text}</p>
          <Button href={lk(hero.cta.href).href} size="lg">
            {t.hero.cta}
            {tag(hero.cta.href)}
          </Button>
        </div>
        <Photo src={hero.image} alt={t.hero.imageAlt} priority sizes="(max-width: 767px) 100vw, 55vw" position="50% 55%" className={styles.heroPhoto} />
      </section>

      <section className={styles.overview} aria-labelledby="wv-overview">
        <Container className={styles.overviewHead}>
          <SectionLabel>{t.overview.eyebrow}</SectionLabel>
          <h2 id="wv-overview" className={`h2 ${styles.h2}`}>
            {t.overview.title}
          </h2>
          <p className={styles.body}>{t.overview.text}</p>
        </Container>
        {overview.groups.map((g, gi) => (
          <LocalizedInsuranceGroup
            key={g.num}
            group={{ num: g.num, title: t.overview.groups[gi].title, items: g.items.map((it, ii) => ({ icon: it.icon, ...t.overview.groups[gi].items[ii] })) }}
            questionsLabel={t.overview.questionsLabel}
            link={t.overview.link}
            contactHref={lk(contactHref).href}
            tag={lk(contactHref).german ? { badge: c.germanOnlyBadge, hint: c.germanOnlyHint } : null}
            tone={gi % 2 === 1 ? "off" : "white"}
          />
        ))}
        <Container>
          <p className={styles.note}>{t.overview.note}</p>
        </Container>
      </section>

      <section className={styles.navy} aria-labelledby="wv-review">
        <Container className={styles.reviewGrid}>
          <div>
            <SectionLabel tone="light">{t.review.eyebrow}</SectionLabel>
            <h2 id="wv-review" className={`h2 ${styles.h2} ${styles.onDark}`}>
              {t.review.title}
            </h2>
            <p className={styles.bodyDark}>{t.review.text}</p>
          </div>
          <ul className={styles.reviewList}>
            {t.review.items.map((r) => (
              <li key={r.title}>
                <h3>{r.title}</h3>
                <span className={styles.accent} aria-hidden="true" />
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="wv-consulting">
        <Container className={styles.cGrid}>
          <Photo src={consulting.image} alt={t.consulting.imageAlt} ratio="4 / 3" position="50% 50%" sizes="(max-width: 767px) 100vw, 50vw" className={styles.cPhoto} />
          <div className={styles.cCopy}>
            <SectionLabel>{t.consulting.eyebrow}</SectionLabel>
            <h2 id="wv-consulting" className={`h2 ${styles.h2}`}>
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

      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="wv-faq">
        <Container className={styles.faqGrid}>
          <div>
            <SectionLabel>{t.faq.eyebrow}</SectionLabel>
            <h2 id="wv-faq" className={`h2 ${styles.h2}`}>
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

      <section className={styles.final} aria-labelledby="wv-final">
        <Container className={styles.finalInner}>
          <div>
            <SectionLabel tone="light">{t.finalCta.eyebrow}</SectionLabel>
            <h2 id="wv-final" className={`h2 ${styles.h2} ${styles.onDark}`}>
              {t.finalCta.title}
              <Dot />
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
