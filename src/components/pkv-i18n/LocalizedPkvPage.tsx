import Link from "next/link";
import styles from "@/app/(de)/private-krankenversicherung/_components/Pkv.module.css";
import PkvIcon from "@/app/(de)/private-krankenversicherung/_components/PkvIcon";
import { about, compare, faq, finalCta, hero, process, risk, secondOpinion, targets, trust } from "@/app/(de)/private-krankenversicherung/_components/content";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedPageJsonLd from "@/components/seo/LocalizedPageJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { pkvContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

type L = Exclude<Locale, "de">;

const Dot = () => <i className={styles.dot} aria-hidden="true" />;

function Lines({ lines, dotOnLast, dotOnAll }: { lines: readonly string[]; dotOnLast?: boolean; dotOnAll?: boolean }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={l} className={styles.line}>
          {l}
          {(dotOnAll || (dotOnLast && i === lines.length - 1)) && <Dot />}
        </span>
      ))}
    </>
  );
}

/**
 * Seite „Private Krankenversicherung“ für EN/RU. Gleiche CSS-Module, Fotos, Icons, Reihenfolge und Struktur wie die deutsche
 * Seite (src/app/(de)/private-krankenversicherung); nur die Texte stammen aus src/i18n/content. Links auf nicht übersetzte
 * Seiten führen zur deutschen Seite und sind mit „DE“ markiert.
 */
export default function LocalizedPkvPage({ locale }: { locale: L }) {
  const t = pkvContent[locale];
  const c = getDictionary(locale).common;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null);

  return (
    <>
      <LocalizedPageJsonLd
        locale={locale}
        path="/private-krankenversicherung"
        name={t.meta.name}
        description={t.meta.description}
        homeName={getDictionary(locale).common.homeName}
        crumbs={[{ name: t.meta.crumb, path: "/private-krankenversicherung" }]}
        service={{ name: t.meta.serviceName, serviceType: t.meta.serviceType, description: t.meta.description }}
        faq={t.faq.items.map((i) => ({ q: i.q, a: i.a }))}
      />

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="pkv-title">
        <div className={styles.heroCopy}>
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>
          <h1 id="pkv-title" className={styles.heroTitle}>
            <Lines lines={t.hero.title} dotOnLast />
            <span className={`${styles.line} ${styles.soft}`}>
              {t.hero.soft}
              <Dot />
            </span>
          </h1>
          <p className={styles.heroSub}>
            <Lines lines={t.hero.subtitle} />
          </p>
          <div className={styles.heroActions}>
            <Button href={lk(hero.primary.href).href}>
              {t.hero.primary}
              {tag(hero.primary.href)}
            </Button>
            <Link href={lk(hero.secondary.href).href} className={styles.textLink}>
              {t.hero.secondary}
              {tag(hero.secondary.href)}
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
        <Photo src={hero.image} alt={t.hero.imageAlt} priority sizes="(max-width: 767px) 100vw, 55vw" position="62% 25%" className={styles.heroPhoto} />
      </section>

      {/* Vorteile */}
      <section className={styles.trust} aria-label={t.trust.ariaLabel}>
        <Container>
          <ul className={styles.trustList}>
            {trust.map((item, i) => (
              <li key={item.icon}>
                <span className={styles.ring}>
                  <PkvIcon name={item.icon === "shield" ? "shield" : item.icon === "document" ? "document" : "people"} size={24} />
                </span>
                <div>
                  <h2 className={styles.trustTitle}>{t.trust.items[i].title}</h2>
                  <p>{t.trust.items[i].text}</p>
                  <span className={styles.accent} aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Zielgruppen */}
      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="pkv-targets">
        <Container>
          <div className={styles.split}>
            <div>
              <SectionLabel>{t.targets.eyebrow}</SectionLabel>
              <h2 id="pkv-targets" className={`h2 ${styles.h2}`}>
                <Lines lines={t.targets.title} dotOnLast dotOnAll />
              </h2>
            </div>
            <p className={styles.intro}>{t.targets.text}</p>
          </div>
          <ul className={styles.targetGrid}>
            {targets.cards.map((card, i) => (
              <li key={card.href}>
                <div className={styles.target}>
                  <Photo src={card.image} alt={t.targets.cards[i].alt} ratio="2 / 1" sizes="(max-width: 767px) 90vw, 30vw" className={styles.targetPhoto} imgClassName={styles.zoom} />
                  <h3>{t.targets.cards[i].title}</h3>
                  <p>{t.targets.cards[i].text}</p>
                  <Link href={lk(card.href).href} className={styles.more}>
                    {t.targets.cta}
                    {tag(card.href)}
                    <Icon name="arrow" size={16} />
                    <span className="sr-only">{t.targets.srSuffix.replace("{title}", t.targets.cards[i].title)}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ablauf */}
      <section className={`${styles.section} ${styles.bgNavy}`} aria-labelledby="pkv-process">
        <Container>
          <div className={styles.processHead}>
            <div>
              <SectionLabel tone="light">{t.process.eyebrow}</SectionLabel>
              <h2 id="pkv-process" className={`h2 ${styles.h2} ${styles.onDark}`}>
                {t.process.title}
                <Dot />
              </h2>
            </div>
            <Button href={lk(process.cta.href).href} variant="light">
              {t.process.cta}
              {tag(process.cta.href)}
            </Button>
          </div>
          <ol className={styles.steps}>
            {process.steps.map((s, i) => (
              <li key={s.icon + i}>
                <div className={styles.stepHead}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <PkvIcon name={s.icon} size={26} strokeWidth={1.2} className={styles.stepIcon} />
                  {i < process.steps.length - 1 && <Icon name="arrow" size={16} strokeWidth={1.2} className={styles.stepArrow} />}
                </div>
                <div className={styles.stepBody}>
                  <span className={styles.stepDot} aria-hidden="true" />
                  <div>
                    <h3>{t.process.steps[i].title}</h3>
                    <p>{t.process.steps[i].text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Risikovoranfrage */}
      <section id={risk.id} className={`${styles.section} ${styles.bgOff}`} aria-labelledby="pkv-risk">
        <Container className={styles.riskGrid}>
          <div>
            <SectionLabel>{t.risk.eyebrow}</SectionLabel>
            <h2 id="pkv-risk" className={`h2 ${styles.h2}`}>
              <Lines lines={t.risk.title} dotOnLast />
            </h2>
            <p className={styles.body}>{t.risk.text}</p>
            <Button href={lk(risk.cta.href).href}>
              {t.risk.cta}
              {tag(risk.cta.href)}
            </Button>
          </div>
          <div className={styles.riskVisual}>
            <ol className={styles.flow} aria-label={t.risk.flowAria}>
              {risk.flow.map((f, i) => (
                <li key={f.icon}>
                  <div className={styles.flowItem}>
                    <span className={styles.flowCircle}>
                      <PkvIcon name={f.icon} size={24} />
                    </span>
                    <span className={styles.flowLabel}>
                      {t.risk.flow[i].map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </span>
                  </div>
                  {i < risk.flow.length - 1 && <Icon name="arrow" size={16} strokeWidth={1.2} className={styles.flowArrow} />}
                </li>
              ))}
            </ol>
            <div className={styles.results}>
              <p>{t.risk.resultsLabel}</p>
              <ul>
                {t.risk.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* PKV oder GKV */}
      <section className={`${styles.bleed} ${styles.bgOff}`} aria-labelledby="pkv-compare">
        <Container className={styles.bleedGrid}>
          <Photo src={compare.image} alt={t.compare.imageAlt} sizes="(max-width: 767px) 100vw, 47vw" position="78% 70%" className={styles.bleedPhoto} />
          <div className={styles.bleedCopy}>
            <SectionLabel>{t.compare.eyebrow}</SectionLabel>
            <h2 id="pkv-compare" className={`h2 ${styles.h2}`}>
              <Lines lines={t.compare.title} />
            </h2>
            <table className={styles.table}>
              <caption className="sr-only">{t.compare.caption}</caption>
              <thead>
                <tr>
                  {t.compare.head.map((h, i) => (
                    <th key={i} scope="col" title={i === 0 ? undefined : t.compare.headTitles[i - 1]}>
                      {h || <span className="sr-only">{t.compare.criterion}</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compare.rows.map((r) => (
                  <tr key={r[0]}>
                    <th scope="row">{r[0]}</th>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.note}>
              <span className={styles.noteIcon}>
                <PkvIcon name="document" size={20} />
              </span>
              <p>
                {t.compare.note}
                <br />
                {t.compare.noteText}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ansprechpartner */}
      <section className={`${styles.bleed} ${styles.bgOff}`} aria-labelledby="pkv-about">
        <Container className={`${styles.bleedGrid} ${styles.bleedRight}`}>
          <div className={styles.bleedCopy}>
            <SectionLabel>{t.about.eyebrow}</SectionLabel>
            <h2 id="pkv-about" className={`h2 ${styles.h2}`}>
              {t.about.title}
              <Dot />
            </h2>
            <p className={styles.body}>{t.about.text}</p>
            <Button href={lk(about.cta.href).href}>
              {t.about.cta}
              {tag(about.cta.href)}
            </Button>
          </div>
          <Photo src={about.image} alt={t.about.imageAlt} position="50% 50%" sizes="(max-width: 767px) 100vw, 40vw" className={styles.bleedPhoto} />
        </Container>
      </section>

      {/* Zweite Meinung */}
      <section className={`${styles.section} ${styles.bgOff} ${styles.tight}`} aria-labelledby="pkv-second">
        <Container className={styles.secondGrid}>
          <Photo src={secondOpinion.image} alt={t.secondOpinion.imageAlt} ratio="2.3 / 1" position="50% 60%" sizes="(max-width: 767px) 90vw, 45vw" className={styles.secondPhoto} />
          <div>
            <SectionLabel>{t.secondOpinion.eyebrow}</SectionLabel>
            <h2 id="pkv-second" className={`h2 ${styles.h2}`}>
              {t.secondOpinion.title}
              <Dot />
            </h2>
            <p className={styles.body}>{t.secondOpinion.text}</p>
            <Button href={lk(secondOpinion.cta.href).href}>
              {t.secondOpinion.cta}
              {tag(secondOpinion.cta.href)}
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="pkv-faq">
        <Container className={styles.faqGrid}>
          <div>
            <SectionLabel>{t.faq.eyebrow}</SectionLabel>
            <h2 id="pkv-faq" className={`h2 ${styles.h2}`}>
              <Lines lines={t.faq.title} dotOnLast />
            </h2>
          </div>
          <div>
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
            <Link href={lk(faq.more.href).href} className={styles.faqMore}>
              {t.faq.more}
              {tag(faq.more.href)}
              <Icon name="arrow" size={15} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Abschluss-CTA */}
      <section className={styles.final} aria-labelledby="pkv-final">
        <Photo src={finalCta.image} alt="" sizes="100vw" position="60% 40%" className={styles.finalBg} />
        <div className={styles.finalVeil} aria-hidden="true" />
        <Container className={styles.finalInner}>
          <div>
            <SectionLabel>{t.finalCta.eyebrow}</SectionLabel>
            <h2 id="pkv-final" className={`h2 ${styles.h2}`}>
              <Lines lines={t.finalCta.title} />
            </h2>
            <p className={styles.finalText}>{t.finalCta.text}</p>
            <Button href={lk(finalCta.cta.href).href}>
              {t.finalCta.cta}
              {tag(finalCta.cta.href)}
            </Button>
          </div>
          <ul className={styles.finalBox}>
            {finalCta.checks.map((ck, i) => (
              <li key={ck.icon}>
                <span className={styles.finalIcon}>
                  <PkvIcon name={ck.icon} size={20} />
                </span>
                <div>
                  {t.finalCta.checks[i]}
                  <span className={styles.accent} aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
