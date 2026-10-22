import Image from "next/image";
import Link from "next/link";
import styles from "@/app/(de)/ueber-uns/_components/Ueber.module.css";
import Disclosure from "@/app/(de)/ueber-uns/_components/Disclosure";
import { cta, hero, intro, people } from "@/app/(de)/ueber-uns/_components/content";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedPageJsonLd from "@/components/seo/LocalizedPageJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { ueContent } from "@/i18n/content";
import type { UePart } from "@/i18n/content/wv-ue.types";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

type L = Exclude<Locale, "de">;

function Parts({ parts, locale }: { parts: UePart[]; locale: L }) {
  const c = getDictionary(locale).common;
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === "string") return part;
        const target = localizedHref(part.href, locale);
        return (
          <span key={i}>
            <Link href={target.href} className={styles.inlineLink}>
              {part.text}
            </Link>
            {target.german && <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} />}
          </span>
        );
      })}
    </>
  );
}

function Profile({ name, role, image, alt, paragraphs, children, person, locale }: { name: string; role: string; image: string; alt: string; paragraphs: UePart[][]; children: React.ReactNode; person: string; locale: L }) {
  return (
    <article className={styles.profile}>
      <Image src={image} alt={alt} width={1254} height={1254} sizes="(max-width: 767px) 100vw, 45vw" className={styles.portrait} data-person={person} />
      <h3>{name}</h3>
      <p className={styles.role}>{role}</p>
      {paragraphs.map((parts, i) => (
        <p key={i} className={styles.para}>
          <Parts parts={parts} locale={locale} />
        </p>
      ))}
      {children}
    </article>
  );
}

/** Seite „Über uns“ für EN/RU: gleiche CSS-Module, Fotos, Reihenfolge und Struktur wie (de)/ueber-uns; Texte aus src/i18n/content. */
export default function LocalizedUeberPage({ locale }: { locale: L }) {
  const t = ueContent[locale];
  const c = getDictionary(locale).common;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null);
  const path = "/ueber-uns";

  const { andreas, natalia } = people;
  return (
    <>
      <LocalizedPageJsonLd locale={locale} path={path} name={t.meta.name} description={t.meta.description} homeName={c.homeName} pageType="AboutPage" crumbs={[{ name: t.meta.crumb, path }]} aboutPerson />

      <section className={styles.hero} aria-labelledby="ue-title">
        <Photo src={hero.image as string} alt="" priority sizes="100vw" position="center center" className={styles.heroBg} imgClassName={styles.heroImg} />
        <div className={styles.heroVeil} aria-hidden="true" />
        <Container className={styles.heroInner}>
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>
          <h1 id="ue-title" className={styles.heroTitle}>
            {t.hero.title.map((l, i) => (
              <span key={l} className={styles.line}>
                {l}
                {i === t.hero.title.length - 1 && <i className={styles.dot} aria-hidden="true" />}
              </span>
            ))}
          </h1>
          <p className={styles.heroText}>{t.hero.text}</p>
        </Container>
      </section>

      <section className={styles.intro} aria-labelledby="ue-intro">
        <Container className={styles.introGrid}>
          <Image src={intro.image} alt={t.intro.imageAlt} width={intro.width} height={intro.height} loading="eager" sizes="(max-width: 767px) 100vw, 55vw" className={styles.introPhoto} />
          <div className={styles.introCopy}>
            <span className={styles.accent} aria-hidden="true" />
            <h2 id="ue-intro" className={`h2 ${styles.h2}`}>
              {t.intro.title}
              <i className={styles.dot} aria-hidden="true" />
            </h2>
            <p className={styles.body}>{t.intro.text}</p>
            <p className={styles.body}>{t.intro.text2}</p>
            <p className={styles.tags}>{t.intro.tags}</p>
          </div>
        </Container>
      </section>

      <section className={styles.people} aria-labelledby="ue-people">
        <Container>
          <h2 id="ue-people" className={`h2 ${styles.h2} ${styles.peopleTitle}`}>
            {t.people.title}
            <i className={styles.dot} aria-hidden="true" />
          </h2>
          <span className={styles.accent} aria-hidden="true" />
          <div className={styles.peopleGrid}>
            <Profile locale={locale} name={t.people.andreas.name} role={t.people.andreas.role} image={andreas.image} alt={t.people.andreas.alt} paragraphs={t.people.andreas.paragraphs} person="andreas">
              <Disclosure label={t.people.andreas.accordion}>
                <dl className={styles.timeline}>
                  {t.people.andreas.timeline.map(([period, text]) => (
                    <div key={period}>
                      <dt>{period}</dt>
                      <dd>{text}</dd>
                    </div>
                  ))}
                </dl>
              </Disclosure>
            </Profile>
            <Profile locale={locale} name={t.people.natalia.name} role={t.people.natalia.role} image={natalia.image} alt={t.people.natalia.alt} paragraphs={t.people.natalia.paragraphs} person="natalia">
              <Disclosure label={t.people.natalia.accordion}>
                <p className={styles.qual}>
                  {t.people.natalia.qualification.map((l) => (
                    <span key={l} className={styles.line}>
                      {l}
                    </span>
                  ))}
                </p>
              </Disclosure>
              <ul className={styles.contacts}>
                <li>
                  <Icon name="phone" size={18} />
                  <a href={natalia.phone.href}>{natalia.phone.label}</a>
                </li>
                <li>
                  <Icon name="mail" size={18} />
                  <a href={natalia.email.href}>{natalia.email.label}</a>
                </li>
              </ul>
            </Profile>
          </div>
        </Container>
      </section>

      <section className={styles.cta} aria-labelledby="ue-cta">
        <Photo src={cta.image} alt={t.cta.imageAlt} sizes="(max-width: 767px) 100vw, 55vw" position="25% 55%" className={styles.ctaPhoto} />
        <div className={styles.ctaCopy}>
          <span className={styles.ctaLine} aria-hidden="true" />
          <h2 id="ue-cta" className={`h2 ${styles.ctaTitle}`}>
            {t.cta.title}
            <i className={styles.dot} aria-hidden="true" />
          </h2>
          <p className={styles.ctaText}>{t.cta.text}</p>
          <Button href={lk(cta.button.href).href} variant="light" size="lg">
            {t.cta.button}
            {tag(cta.button.href)}
          </Button>
        </div>
      </section>
    </>
  );
}
