import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import BuIcon from "./BuIcon";
import Reveal from "./Reveal";
import { existing, faq, finalCta, groups, health, hero, power, process, reality, rente } from "./content";
import styles from "./Bu.module.css";

const Dot = () => <i className={styles.dot} aria-hidden="true" />;

export function BuHero() {
  return (
    <section className={styles.hero} aria-labelledby="bu-title">
      <Photo src={hero.image} alt={hero.imageAlt} priority sizes="100vw" position="62% 55%" className={styles.heroBg} />
      <div className={styles.heroVeil} aria-hidden="true" />
      <Container className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={`${styles.heroIn} ${styles.d0}`}>
            <SectionLabel>{hero.eyebrow}</SectionLabel>
          </div>
          <h1 id="bu-title" className={`${styles.heroTitle} ${styles.heroIn} ${styles.d1}`}>
            {hero.title}
            <Dot />
          </h1>
          <p className={`${styles.heroText} ${styles.heroIn} ${styles.d2}`}>{hero.text}</p>
          <div className={`${styles.heroActions} ${styles.heroIn} ${styles.d3}`}>
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Link href={hero.secondary.href} className={styles.textLink}>
              {hero.secondary.label}
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function BuPower() {
  return (
    <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="bu-power">
      <Container className={styles.powerGrid}>
        <Reveal>
          <SectionLabel>{power.eyebrow}</SectionLabel>
          <h2 id="bu-power" className={`h2 ${styles.h2}`}>
            {power.title}
            <Dot />
          </h2>
          <p className={styles.body}>{power.text}</p>
        </Reveal>
        <Reveal delay={90}>
          <ol className={styles.chain}>
            {power.chain.map((c, i) => (
              <li key={c.title}>
                <span className={styles.ring}>
                  <BuIcon name={c.icon} size={26} />
                </span>
                {i < power.chain.length - 1 && <Icon name="arrow" size={14} strokeWidth={1.2} className={styles.chainArrow} />}
                <div className={styles.chainText}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <span className={styles.accent} aria-hidden="true" />
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}

export function BuReality() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="bu-reality">
      <Container className={styles.realityGrid}>
        <Reveal>
          <Photo src={reality.image} alt={reality.imageAlt} ratio="4 / 3" position="50% 55%" sizes="(max-width: 767px) 100vw, 55vw" className={styles.realityPhoto} />
        </Reveal>
        <Reveal delay={90} className={styles.realityCopy}>
          <SectionLabel>{reality.eyebrow}</SectionLabel>
          <h2 id="bu-reality" className={`h2 ${styles.h2}`}>
            {reality.title}
            <Dot />
          </h2>
          <p className={styles.body}>{reality.text}</p>
          <Link href={reality.link.href} className={styles.textLink}>
            {reality.link.label}
            <Icon name="arrow" size={16} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export function BuGroups() {
  const { large, small } = groups;
  return (
    <section id="zielgruppen" className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="bu-groups">
      <Container>
        <Reveal className={styles.groupsHead}>
          <SectionLabel>{groups.eyebrow}</SectionLabel>
          <h2 id="bu-groups" className={`h2 ${styles.h2}`}>
            {groups.title}
            <Dot />
          </h2>
        </Reveal>
        <div className={styles.groupsGrid}>
          <Reveal className={styles.groupLarge}>
            <Link href={groups.href} className={styles.group}>
              <Photo src={large.image} alt={large.alt} sizes="(max-width: 767px) 100vw, 55vw" position="50% 50%" className={styles.groupPhoto} imgClassName={styles.zoom} />
              <div className={styles.groupBody}>
                <h3>{large.title}</h3>
                <p>{large.text}</p>
                <span className={styles.more}>
                  {groups.cta}
                  <Icon name="arrow" size={16} />
                </span>
              </div>
            </Link>
          </Reveal>
          {small.map((c, i) => (
            <Reveal key={c.title} delay={90 * (i + 1)} className={styles.groupSmall}>
              <Link href={groups.href} className={`${styles.group} ${styles.groupRow}`}>
                <Photo src={c.image} alt={c.alt} sizes="(max-width: 767px) 100vw, 20vw" position="50% 50%" className={styles.groupPhoto} imgClassName={styles.zoom} />
                <div className={styles.groupBody}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <span className={styles.more}>
                    {groups.cta}
                    <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BuRente() {
  return (
    <section className={styles.navy} aria-labelledby="bu-rente">
      <Container className={styles.renteGrid}>
        <Reveal from="left">
          <SectionLabel tone="light">{rente.eyebrow}</SectionLabel>
          <h2 id="bu-rente" className={`h2 ${styles.h2} ${styles.onDark}`}>
            {rente.title}
          </h2>
          <p className={styles.bodyDark}>{rente.text}</p>
          <Button href={rente.cta.href} variant="light">
            {rente.cta.label}
          </Button>
        </Reveal>
        <Reveal from="right" delay={120}>
          <div className={styles.calc}>
            <h3>{rente.card.title}</h3>
            <dl>
              {rente.card.rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p>{rente.card.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function BuHealth() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="bu-health">
      <Container className={styles.mediaGrid}>
        <Reveal>
          <Photo src={health.image} alt={health.imageAlt} ratio="3 / 2" position="50% 50%" sizes="(max-width: 767px) 100vw, 45vw" className={styles.mediaPhoto} />
        </Reveal>
        <Reveal delay={90}>
          <SectionLabel>{health.eyebrow}</SectionLabel>
          <h2 id="bu-health" className={`h2 ${styles.h2}`}>
            {health.title}
            <Dot />
          </h2>
          <p className={styles.body}>{health.text}</p>
          <Button href={health.cta.href}>{health.cta.label}</Button>
        </Reveal>
      </Container>
    </section>
  );
}

export function BuProcess() {
  return (
    <section className={`${styles.section} ${styles.bgWhite}`} aria-labelledby="bu-process">
      <Container className={styles.processGrid}>
        <Reveal>
          <SectionLabel>{process.eyebrow}</SectionLabel>
          <h2 id="bu-process" className={`h2 ${styles.h2}`}>
            {process.title}
            <Dot />
          </h2>
          <ol className={styles.timeline}>
            {process.steps.map((s, i) => (
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
          <Photo src={process.image} alt={process.imageAlt} ratio="4 / 5" position="55% 50%" sizes="(max-width: 767px) 100vw, 40vw" className={styles.processPhoto} />
        </Reveal>
      </Container>
    </section>
  );
}

export function BuExisting() {
  return (
    <section className={styles.existing} aria-labelledby="bu-existing">
      <Container className={styles.existingInner}>
        <div>
          <SectionLabel>{existing.eyebrow}</SectionLabel>
          <h2 id="bu-existing" className={`h2 ${styles.h2}`}>
            {existing.title}
            <Dot />
          </h2>
          <p className={styles.body}>{existing.text}</p>
        </div>
        <Button href={existing.cta.href}>{existing.cta.label}</Button>
      </Container>
    </section>
  );
}

export function BuFaq() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="bu-faq">
      <Container className={styles.faqGrid}>
        <div>
          <SectionLabel>{faq.eyebrow}</SectionLabel>
          <h2 id="bu-faq" className={`h2 ${styles.h2}`}>
            {faq.title}
            <Dot />
          </h2>
        </div>
        <div>
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
          <Link href={faq.more.href} className={styles.faqMore}>
            {faq.more.label}
            <Icon name="arrow" size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function BuFinalCta() {
  return (
    <section className={styles.final} aria-labelledby="bu-final">
      <Photo src={finalCta.image} alt="" sizes="100vw" position="60% 40%" className={styles.finalBg} />
      <div className={styles.finalVeil} aria-hidden="true" />
      <Container className={styles.finalInner}>
        <div>
          <SectionLabel>{finalCta.eyebrow}</SectionLabel>
          <h2 id="bu-final" className={`h2 ${styles.h2}`}>
            {finalCta.title}
          </h2>
          <p className={styles.finalText}>{finalCta.text}</p>
          <Button href={finalCta.cta.href}>{finalCta.cta.label}</Button>
        </div>
        <ul className={styles.finalBox}>
          {finalCta.checks.map((c) => (
            <li key={c.label}>
              <span className={styles.finalIcon}>
                <BuIcon name={c.icon} size={20} />
              </span>
              <div>
                {c.label}
                <span className={styles.accent} aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
