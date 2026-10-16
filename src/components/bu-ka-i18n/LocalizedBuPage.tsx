import Link from "next/link";
import styles from "@/app/(de)/berufsunfaehigkeitsversicherung/_components/Bu.module.css";
import local from "./LocalizedBu.module.css";
import BuIcon from "@/app/(de)/berufsunfaehigkeitsversicherung/_components/BuIcon";
import { existing, finalCta, groups, health, hero, power, process, reality, rente } from "@/app/(de)/berufsunfaehigkeitsversicherung/_components/content";
import Reveal from "@/app/(de)/berufsunfaehigkeitsversicherung/_components/Reveal";
import DeTag from "@/components/layout-i18n/DeTag";
import LocalizedPageJsonLd from "@/components/seo/LocalizedPageJsonLd";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import type { Locale } from "@/i18n/config";
import { buContent } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

type L = Exclude<Locale, "de">;
const Dot = () => <i className={styles.dot} aria-hidden="true" />;

/**
 * Seite „Berufsunfähigkeitsversicherung“ für EN/RU. Gleiche CSS-Module, Fotos, Icons, Animationen (Reveal), Reihenfolge und
 * Struktur wie die deutsche Seite; nur die Texte stammen aus src/i18n/content. Links auf nicht übersetzte Seiten führen zur
 * deutschen Seite und sind mit „DE“ markiert.
 */
export default function LocalizedBuPage({ locale }: { locale: L }) {
  const t = buContent[locale];
  const c = getDictionary(locale).common;
  const lk = (h: string) => localizedHref(h, locale);
  const tag = (h: string) => (lk(h).german ? <DeTag badge={c.germanOnlyBadge} hint={c.germanOnlyHint} /> : null);
  const path = "/berufsunfaehigkeitsversicherung";

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

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="bu-title">
        <Photo src={hero.image} alt={t.hero.imageAlt} priority sizes="100vw" position="62% 55%" className={styles.heroBg} />
        <div className={styles.heroVeil} aria-hidden="true" />
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={`${styles.heroIn} ${styles.d0}`}>
              <SectionLabel>{t.hero.eyebrow}</SectionLabel>
            </div>
            <h1 id="bu-title" className={`${styles.heroTitle} ${styles.heroIn} ${styles.d1}`}>
              {t.hero.title}
              <Dot />
            </h1>
            <p className={`${styles.heroText} ${styles.heroIn} ${styles.d2}`}>{t.hero.text}</p>
            <div className={`${styles.heroActions} ${styles.heroIn} ${styles.d3}`}>
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
        </Container>
      </section>

      {/* Arbeitskraft */}
      <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="bu-power">
        <Container className={styles.powerGrid}>
          <Reveal>
            <SectionLabel>{t.power.eyebrow}</SectionLabel>
            <h2 id="bu-power" className={`h2 ${styles.h2}`}>
              {t.power.title}
              <Dot />
            </h2>
            <p className={styles.body}>{t.power.text}</p>
          </Reveal>
          <Reveal delay={90}>
            <ol className={styles.chain}>
              {power.chain.map((item, i) => (
                <li key={item.icon}>
                  <span className={styles.ring}>
                    <BuIcon name={item.icon} size={26} />
                  </span>
                  {i < power.chain.length - 1 && <Icon name="arrow" size={14} strokeWidth={1.2} className={styles.chainArrow} />}
                  <div className={styles.chainText}>
                    <h3>{t.power.chain[i].title}</h3>
                    <p>{t.power.chain[i].text}</p>
                    <span className={styles.accent} aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Realität */}
      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="bu-reality">
        <Container className={styles.realityGrid}>
          <Reveal>
            <Photo src={reality.image} alt={t.reality.imageAlt} ratio="4 / 3" position="50% 55%" sizes="(max-width: 767px) 100vw, 55vw" className={styles.realityPhoto} />
          </Reveal>
          <Reveal delay={90} className={styles.realityCopy}>
            <SectionLabel>{t.reality.eyebrow}</SectionLabel>
            <h2 id="bu-reality" className={`h2 ${styles.h2}`}>
              {t.reality.title}
              <Dot />
            </h2>
            <p className={styles.body}>{t.reality.text}</p>
            <Link href={lk(reality.link.href).href} className={styles.textLink}>
              {t.reality.link}
              {tag(reality.link.href)}
              <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Zielgruppen */}
      <section id="zielgruppen" className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="bu-groups">
        <Container>
          <Reveal className={styles.groupsHead}>
            <SectionLabel>{t.groups.eyebrow}</SectionLabel>
            <h2 id="bu-groups" className={`h2 ${styles.h2}`}>
              {t.groups.title}
              <Dot />
            </h2>
          </Reveal>
          <div className={styles.groupsGrid}>
            <Reveal className={styles.groupLarge}>
              <Link href={lk(groups.href).href} className={styles.group}>
                <Photo src={groups.large.image} alt={t.groups.large.alt} sizes="(max-width: 767px) 100vw, 55vw" position="50% 50%" className={styles.groupPhoto} imgClassName={styles.zoom} />
                <div className={styles.groupBody}>
                  <h3>{t.groups.large.title}</h3>
                  <p>{t.groups.large.text}</p>
                  <span className={styles.more}>
                    {t.groups.cta}
                    {tag(groups.href)}
                    <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
            {groups.small.map((card, i) => (
              <Reveal key={card.image} delay={90 * (i + 1)} className={styles.groupSmall}>
                <Link href={lk(groups.href).href} className={`${styles.group} ${styles.groupRow}`}>
                  <Photo src={card.image} alt={t.groups.small[i].alt} sizes="(max-width: 767px) 100vw, 20vw" position="50% 50%" className={styles.groupPhoto} imgClassName={styles.zoom} />
                  <div className={styles.groupBody}>
                    <h3>{t.groups.small[i].title}</h3>
                    <p>{t.groups.small[i].text}</p>
                    <span className={styles.more}>
                      {t.groups.cta}
                      {tag(groups.href)}
                      <Icon name="arrow" size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BU-Rente */}
      <section className={styles.navy} aria-labelledby="bu-rente">
        <Container className={styles.renteGrid}>
          <Reveal from="left">
            <SectionLabel tone="light">{t.rente.eyebrow}</SectionLabel>
            <h2 id="bu-rente" className={`h2 ${styles.h2} ${styles.onDark}`}>
              {t.rente.title}
            </h2>
            <p className={styles.bodyDark}>{t.rente.text}</p>
            <Button href={lk(rente.cta.href).href} variant="light">
              {t.rente.cta}
              {tag(rente.cta.href)}
            </Button>
          </Reveal>
          <Reveal from="right" delay={120} className={local.softRight}>
            <div className={styles.calc}>
              <h3>{t.rente.card.title}</h3>
              <dl>
                {t.rente.card.rows.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <p>{t.rente.card.note}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Gesundheitsfragen */}
      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="bu-health">
        <Container className={styles.mediaGrid}>
          <Reveal>
            <Photo src={health.image} alt={t.health.imageAlt} ratio="3 / 2" position="50% 50%" sizes="(max-width: 767px) 100vw, 45vw" className={styles.mediaPhoto} />
          </Reveal>
          <Reveal delay={90}>
            <SectionLabel>{t.health.eyebrow}</SectionLabel>
            <h2 id="bu-health" className={`h2 ${styles.h2}`}>
              {t.health.title}
              <Dot />
            </h2>
            <p className={styles.body}>{t.health.text}</p>
            <Button href={lk(health.cta.href).href}>
              {t.health.cta}
              {tag(health.cta.href)}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Beratungsprozess */}
      <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="bu-process">
        <Container className={styles.processGrid}>
          <Reveal>
            <SectionLabel>{t.process.eyebrow}</SectionLabel>
            <h2 id="bu-process" className={`h2 ${styles.h2}`}>
              {t.process.title}
              <Dot />
            </h2>
            <ol className={styles.timeline}>
              {t.process.steps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={90}>
            <Photo src={process.image} alt={t.process.imageAlt} ratio="4 / 5" position="55% 50%" sizes="(max-width: 767px) 100vw, 40vw" className={styles.processPhoto} />
          </Reveal>
        </Container>
      </section>

      {/* Bestehender Vertrag */}
      <section className={styles.existing} aria-labelledby="bu-existing">
        <Container className={styles.existingInner}>
          <div>
            <SectionLabel>{t.existing.eyebrow}</SectionLabel>
            <h2 id="bu-existing" className={`h2 ${styles.h2}`}>
              {t.existing.title}
              <Dot />
            </h2>
            <p className={styles.body}>{t.existing.text}</p>
          </div>
          <Button href={lk(existing.cta.href).href}>
            {t.existing.cta}
            {tag(existing.cta.href)}
          </Button>
        </Container>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="bu-faq">
        <Container className={styles.faqGrid}>
          <div>
            <SectionLabel>{t.faq.eyebrow}</SectionLabel>
            <h2 id="bu-faq" className={`h2 ${styles.h2}`}>
              {t.faq.title}
              <Dot />
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
            <Link href={lk("/wissen").href} className={styles.faqMore}>
              {t.faq.more}
              {tag("/wissen")}
              <Icon name="arrow" size={15} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Abschluss-CTA */}
      <section className={styles.final} aria-labelledby="bu-final">
        <Photo src={finalCta.image} alt="" sizes="100vw" position="60% 40%" className={styles.finalBg} />
        <div className={styles.finalVeil} aria-hidden="true" />
        <Container className={styles.finalInner}>
          <div>
            <SectionLabel>{t.finalCta.eyebrow}</SectionLabel>
            <h2 id="bu-final" className={`h2 ${styles.h2}`}>
              {t.finalCta.title}
            </h2>
            <p className={styles.finalText}>{t.finalCta.text}</p>
            <Button href={lk(finalCta.cta.href).href} className={styles.finalBtn}>
              {t.finalCta.cta}
              {tag(finalCta.cta.href)}
            </Button>
          </div>
          <ul className={styles.finalBox}>
            {finalCta.checks.map((ck, i) => (
              <li key={ck.icon}>
                <span className={styles.finalIcon}>
                  <BuIcon name={ck.icon} size={20} />
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
