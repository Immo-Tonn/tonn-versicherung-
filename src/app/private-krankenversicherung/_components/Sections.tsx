import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import PkvIcon from "./PkvIcon";
import TargetCard from "./TargetCard";
import { about, compare, faq, finalCta, hero, process, risk, secondOpinion, targets, trust } from "./content";
import styles from "./Pkv.module.css";

const Dot = () => <i className={styles.dot} aria-hidden="true" />;

function Lines({ lines, dotOnLast, dotOnAll }: { lines: string[]; dotOnLast?: boolean; dotOnAll?: boolean }) {
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

export function PkvHero() {
  return (
    <section className={styles.hero} aria-labelledby="pkv-title">
      <div className={styles.heroCopy}>
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 id="pkv-title" className={styles.heroTitle}>
          <span className={styles.line}>{hero.title[0]}</span>
          <span className={styles.line}>
            {hero.title[1]}
            <Dot />
          </span>
          <span className={`${styles.line} ${styles.soft}`}>
            {hero.soft}
            <Dot />
          </span>
        </h1>
        <p className={styles.heroSub}>
          <Lines lines={hero.subtitle} />
        </p>
        <div className={styles.heroActions}>
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
          <Link href={hero.secondary.href} className={styles.textLink}>
            {hero.secondary.label}
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
      <Photo src={hero.image} alt={hero.imageAlt} priority sizes="(max-width: 767px) 100vw, 55vw" position="62% 25%" className={styles.heroPhoto} />
    </section>
  );
}

export function PkvTrust() {
  return (
    <section className={styles.trust} aria-label="Ihre Vorteile">
      <Container>
        <ul className={styles.trustList}>
          {trust.map((t) => (
            <li key={t.title}>
              <span className={styles.ring}>
                <PkvIcon name={t.icon === "shield" ? "shield" : t.icon === "document" ? "document" : "people"} size={24} />
              </span>
              <div>
                <h2 className={styles.trustTitle}>{t.title}</h2>
                <p>{t.text}</p>
                <span className={styles.accent} aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function PkvTargets() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="pkv-targets">
      <Container>
        <div className={styles.split}>
          <div>
            <SectionLabel>{targets.eyebrow}</SectionLabel>
            <h2 id="pkv-targets" className={`h2 ${styles.h2}`}>
              <Lines lines={targets.title} dotOnLast dotOnAll />
            </h2>
          </div>
          <p className={styles.intro}>{targets.text}</p>
        </div>
        <ul className={styles.targetGrid}>
          {targets.cards.map((c) => (
            <li key={c.title}>
              <TargetCard
                photo={<Photo src={c.image} alt={c.alt} ratio="2 / 1" sizes="(max-width: 767px) 90vw, 30vw" className={styles.targetPhoto} imgClassName={styles.zoom} />}
                title={c.title}
                text={c.text}
                more={c.more}
                openLabel={targets.cta}
                closeLabel={targets.ctaClose}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function PkvProcess() {
  return (
    <section className={`${styles.section} ${styles.bgNavy}`} aria-labelledby="pkv-process">
      <Container>
        <div className={styles.processHead}>
          <div>
            <SectionLabel tone="light">{process.eyebrow}</SectionLabel>
            <h2 id="pkv-process" className={`h2 ${styles.h2} ${styles.onDark}`}>
              {process.title}
              <Dot />
            </h2>
          </div>
          <Button href={process.cta.href} variant="light">
            {process.cta.label}
          </Button>
        </div>
        <ol className={styles.steps}>
          {process.steps.map((s, i) => (
            <li key={s.title}>
              <div className={styles.stepHead}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <PkvIcon name={s.icon} size={26} strokeWidth={1.2} className={styles.stepIcon} />
                {i < process.steps.length - 1 && <Icon name="arrow" size={16} strokeWidth={1.2} className={styles.stepArrow} />}
              </div>
              <div className={styles.stepBody}>
                <span className={styles.stepDot} aria-hidden="true" />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function PkvRisk() {
  return (
    <section id={risk.id} className={`${styles.section} ${styles.bgOff}`} aria-labelledby="pkv-risk">
      <Container className={styles.riskGrid}>
        <div>
          <SectionLabel>{risk.eyebrow}</SectionLabel>
          <h2 id="pkv-risk" className={`h2 ${styles.h2}`}>
            <Lines lines={risk.title} dotOnLast />
          </h2>
          <p className={styles.body}>{risk.text}</p>
          <Button href={risk.cta.href}>{risk.cta.label}</Button>
        </div>
        <div className={styles.riskVisual}>
          <ol className={styles.flow} aria-label="Ablauf der Risikovoranfrage">
            {risk.flow.map((f, i) => (
              <li key={f.lines.join(" ")}>
                <div className={styles.flowItem}>
                  <span className={styles.flowCircle}>
                    <PkvIcon name={f.icon} size={24} />
                  </span>
                  <span className={styles.flowLabel}>
                    {f.lines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </span>
                </div>
                {i < risk.flow.length - 1 && <Icon name="arrow" size={16} strokeWidth={1.2} className={styles.flowArrow} />}
              </li>
            ))}
          </ol>
          <div className={styles.results}>
            <p>{risk.resultsLabel}</p>
            <ul>
              {risk.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PkvCompare() {
  return (
    <section className={`${styles.bleed} ${styles.bgOff}`} aria-labelledby="pkv-compare">
      <Container className={styles.bleedGrid}>
      <Photo src={compare.image} alt={compare.imageAlt} sizes="(max-width: 767px) 100vw, 47vw" position="78% 70%" className={styles.bleedPhoto} />
      <div className={styles.bleedCopy}>
        <SectionLabel>{compare.eyebrow}</SectionLabel>
        <h2 id="pkv-compare" className={`h2 ${styles.h2}`}>
          <Lines lines={compare.title} />
        </h2>
        <table className={styles.table}>
          <caption className="sr-only">Unterschiede zwischen GKV und PKV</caption>
          <thead>
            <tr>
              {compare.head.map((h, i) => (
                <th key={i} scope="col">
                  {h || <span className="sr-only">Kriterium</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compare.rows.map((r) => (
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
            {compare.note}
            <br />
            {compare.noteText}
          </p>
        </div>
      </div>
      </Container>
    </section>
  );
}

export function PkvAbout() {
  return (
    <section className={`${styles.bleed} ${styles.bgOff}`} aria-labelledby="pkv-about">
      <Container className={`${styles.bleedGrid} ${styles.bleedRight}`}>
      <div className={styles.bleedCopy}>
        <SectionLabel>{about.eyebrow}</SectionLabel>
        <h2 id="pkv-about" className={`h2 ${styles.h2}`}>
          {about.title}
          <Dot />
        </h2>
        <p className={styles.body}>{about.text}</p>
        <Button href={about.cta.href}>{about.cta.label}</Button>
      </div>
      <Photo src={about.image} alt={about.imageAlt} position="50% 50%" sizes="(max-width: 767px) 100vw, 40vw" className={styles.bleedPhoto} />
      </Container>
    </section>
  );
}

export function PkvSecondOpinion() {
  return (
    <section className={`${styles.section} ${styles.bgOff} ${styles.tight}`} aria-labelledby="pkv-second">
      <Container className={styles.secondGrid}>
        <Photo src={secondOpinion.image} alt={secondOpinion.imageAlt} ratio="2.3 / 1" position="50% 60%" sizes="(max-width: 767px) 90vw, 45vw" className={styles.secondPhoto} />
        <div>
          <SectionLabel>{secondOpinion.eyebrow}</SectionLabel>
          <h2 id="pkv-second" className={`h2 ${styles.h2}`}>
            {secondOpinion.title}
            <Dot />
          </h2>
          <p className={styles.body}>{secondOpinion.text}</p>
          <Button href={secondOpinion.cta.href}>{secondOpinion.cta.label}</Button>
        </div>
      </Container>
    </section>
  );
}

export function PkvFaq() {
  return (
    <section className={`${styles.section} ${styles.bgOff}`} aria-labelledby="pkv-faq">
      <Container className={styles.faqGrid}>
        <div>
          <SectionLabel>{faq.eyebrow}</SectionLabel>
          <h2 id="pkv-faq" className={`h2 ${styles.h2}`}>
            <Lines lines={faq.title} dotOnLast />
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

export function PkvFinalCta() {
  return (
    <section className={styles.final} aria-labelledby="pkv-final">
      <Photo src={finalCta.image} alt="" sizes="100vw" position="60% 40%" className={styles.finalBg} />
      <div className={styles.finalVeil} aria-hidden="true" />
      <Container className={styles.finalInner}>
        <div>
          <SectionLabel>{finalCta.eyebrow}</SectionLabel>
          <h2 id="pkv-final" className={`h2 ${styles.h2}`}>
            <Lines lines={finalCta.title} />
          </h2>
          <p className={styles.finalText}>{finalCta.text}</p>
          <Button href={finalCta.cta.href}>{finalCta.cta.label}</Button>
        </div>
        <ul className={styles.finalBox}>
          {finalCta.checks.map((c) => (
            <li key={c.label}>
              <span className={styles.finalIcon}>
                <PkvIcon name={c.icon} size={20} />
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
