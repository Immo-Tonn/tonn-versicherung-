import Link from "next/link";
import styles from "@/app/(de)/wissen/_components/Ratgeber.module.css";
import { published } from "@/app/(de)/wissen/_lib/articles";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedCollectionJsonLd from "@/components/seo/LocalizedCollectionJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { articleLabels, articleTranslations, ratgeberContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

type L = Exclude<Locale, "de">;

/** Link zum Beitrag (übersetzt, sobald "live"; sonst deutsch mit „DE“) */
function Art({ slug, className, children, locale }: { slug: string; className?: string; children: React.ReactNode; locale: L }) {
  const c = getDictionary(locale).common;
  const target = localizedHref(`/wissen/${slug}`, locale);
  return (
    <>
      <Link href={target.href} className={className}>
        {children}
      </Link>
      {target.german && <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />}
    </>
  );
}

/**
 * Ratgeber-Übersicht (/wissen) für EN/RU. Gleiche CSS-Module, Fotos, Anker, Reihenfolge und Struktur wie die deutsche Seite
 * (src/app/(de)/wissen); Texte aus src/i18n/content. Beitragslinks führen auf die übersetzten Beiträge, sobald diese
 * veröffentlicht ("live") sind; sonst auf die deutsche Seite mit „DE“-Kennzeichnung.
 */
export default function LocalizedRatgeberPage({ locale }: { locale: L }) {
  const t = ratgeberContent[locale];
  const labels = articleLabels[locale];
  const c = getDictionary(locale).common;
  const de = <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? de : null);

  const items = published()
    .filter((a) => articleTranslations[locale][a.slug])
    .map((a) => ({ slug: a.slug, headline: articleTranslations[locale][a.slug].title }));

  return (
    <>
      <LocalizedCollectionJsonLd path="/wissen" locale={locale} name={t.meta.name} description={t.meta.description} homeName={c.homeName} guidesName={labels.guides} articles={items} />

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="rg-title">
        <Photo src="/images/wissen/ratgeber-hero-office.webp" alt="" priority sizes="(max-width: 767px) 620vw, (max-width: 1199px) 240vw, 100vw" className={styles.heroBg} imgClassName={styles.heroImg} />
        <div className={styles.heroVeil} aria-hidden="true" />
        <Container className={styles.heroInner}>
          <SectionLabel>{t.hero.label}</SectionLabel>
          <h1 id="rg-title" className={styles.heroTitle}>
            <span>{t.hero.title[0]}</span> <span>{t.hero.title[1]}</span>
          </h1>
          <p className={styles.heroText}>{t.hero.text}</p>
        </Container>
      </section>

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="rg-intro">
        <Container>
          <div className={styles.introGrid}>
            <h2 id="rg-intro" className={styles.h2}>
              {t.intro.title}
            </h2>
            <p className={styles.introText}>{t.intro.text}</p>
          </div>
          <nav className={styles.topicNav} aria-label={t.intro.navAria}>
            <a href="#pkv" className={styles.topicLink}>
              {t.intro.topics[0]}
            </a>
            <span className={styles.sep} aria-hidden="true">
              /
            </span>
            <a href="#berufsunfaehigkeit" className={styles.topicLink}>
              {t.intro.topics[1]}
            </a>
            <span className={styles.sep} aria-hidden="true">
              /
            </span>
            <a href="#kapitalanlage" className={styles.topicLink}>
              {t.intro.topics[2]}
            </a>
          </nav>
        </Container>
      </section>

      {/* PKV */}
      <section id="pkv" className={`${styles.sky} ${styles.anchor}`} aria-labelledby="rg-pkv">
        <Container>
          <SectionLabel>{t.pkv.label}</SectionLabel>
          <h2 id="rg-pkv" className={styles.h2}>
            {t.pkv.title}
          </h2>
          <p className={styles.sectionLead}>{t.pkv.lead}</p>
          <div className={styles.pkvGrid}>
            <div className={styles.pkvMain}>
              <h3 className={styles.h3}>{t.pkv.mainTitle}</h3>
              <p className={styles.body}>{t.pkv.mainBody}</p>
              <Art locale={locale} slug="pkv-oder-gkv" className={styles.textLink}>
                {t.pkv.mainLink}
              </Art>
            </div>
            <div className={styles.pkvSide}>
              <div className={styles.sideItem}>
                <Art locale={locale} slug="anonyme-risikovoranfrage" className={styles.titleLink}>
                  {t.pkv.side[0].title}
                </Art>
                <p>{t.pkv.side[0].text}</p>
              </div>
              <div className={styles.sideItem}>
                <Art locale={locale} slug="tarifwechsel-pkv" className={styles.titleLink}>
                  {t.pkv.side[1].title}
                </Art>
                <p>{t.pkv.side[1].text}</p>
              </div>
            </div>
          </div>
          <p className={styles.groups}>{t.pkv.groups}</p>
        </Container>
      </section>

      {/* BU */}
      <section id="berufsunfaehigkeit" className={`${styles.bu} ${styles.anchor}`} aria-labelledby="rg-bu">
        <Container>
          <div className={styles.buGrid}>
            <div className={styles.buCopy}>
              <SectionLabel>{t.bu.label}</SectionLabel>
              <h2 id="rg-bu" className={styles.h2}>
                {t.bu.title[0]}
                <br />
                {t.bu.title[1]}
              </h2>
              <p className={styles.body}>{t.bu.p1}</p>
              <p className={styles.body}>{t.bu.p2}</p>
            </div>
            <Photo src="/images/home/beratung.webp" alt={t.bu.photoAlt} sizes="(max-width: 1023px) 100vw, 40vw" position="50% 60%" className={styles.buPhoto} />
            <ul className={styles.buLinks}>
              <li>
                <Art locale={locale} slug="bu-rente-planen" className={styles.titleLink}>
                  {t.bu.links[0]}
                </Art>
              </li>
              <li>
                <Art locale={locale} slug="gesundheitsfragen-bu" className={styles.titleLink}>
                  {t.bu.links[1]}
                </Art>
              </li>
              <li>
                <Art locale={locale} slug="bu-vertragsbedingungen" className={styles.titleLink}>
                  {t.bu.links[2]}
                </Art>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Kapitalanlage */}
      <section id="kapitalanlage" className={`${styles.kapital} ${styles.anchor}`} aria-labelledby="rg-kapital">
        <Container>
          <div className={styles.kapitalGrid}>
            <div className={styles.kapitalCopy}>
              <SectionLabel>{t.kapital.label}</SectionLabel>
              <h2 id="rg-kapital" className={styles.h2}>
                {t.kapital.title[0]}
                <br />
                {t.kapital.title[1]}
              </h2>
              <p className={styles.body}>{t.kapital.text}</p>
              <ul className={styles.kapitalLinks}>
                <li>
                  <Art locale={locale} slug="grundlagen-kapitalanlage" className={styles.titleLink}>
                    {t.kapital.links[0]}
                  </Art>
                </li>
                <li>
                  <Art locale={locale} slug="streuung-kapitalanlage" className={styles.titleLink}>
                    {t.kapital.links[1]}
                  </Art>
                </li>
              </ul>
            </div>
            <div className={styles.kapitalBox}>
              <h3 className={styles.boxTitle}>{t.kapital.boxTitle}</h3>
              <dl className={styles.trio}>
                {t.kapital.trio.map((x) => (
                  <div key={x.dt}>
                    <dt>{x.dt}</dt>
                    <dd>{x.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-labelledby="rg-faq">
        <Container>
          <h2 id="rg-faq" className={styles.h2}>
            {t.faq.title}
          </h2>
          <div className={styles.faqList}>
            {t.faq.items.map((f) => (
              <div key={f.q} className={styles.faqRow}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Erfahrung */}
      <section className={styles.exp} aria-labelledby="rg-exp">
        <Container>
          <div className={styles.expGrid}>
            <Photo src="/images/wissen/ratgeber-unterlagen-besprechen.webp" alt={t.experience.photoAlt} ratio="3 / 2" sizes="(max-width: 1023px) 100vw, 540px" className={styles.expPhoto} />
            <div className={styles.expCopy}>
              <h2 id="rg-exp" className={styles.h2}>
                {t.experience.title}
              </h2>
              <p className={styles.expName}>
                <strong>Andreas Tonn</strong> · {t.experience.nameRole}
              </p>
              <p className={`${styles.body} ${styles.expText}`}>{t.experience.text}</p>
              <Link href={lk("/ueber-uns").href} className={styles.textLink}>
                {t.experience.link}
              </Link>
              {tag("/ueber-uns")}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="rg-cta">
        <Container>
          <div className={styles.ctaGrid}>
            <div>
              <h2 id="rg-cta" className={styles.h2}>
                {t.cta.title}
              </h2>
              <p className={styles.sectionLead}>{t.cta.lead}</p>
            </div>
            <Button href={lk("/kontakt").href} size="lg" arrow={false}>
              {t.cta.button}
              {tag("/kontakt")}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
