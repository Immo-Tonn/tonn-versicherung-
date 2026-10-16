import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import Disclosure from "./Disclosure";
import { cta, hero, intro, people, type Paragraph } from "./content";
import styles from "./Ueber.module.css";

export function UeHero() {
  return (
    <section className={styles.hero} aria-labelledby="ue-title">
      {hero.image ? <Photo src={hero.image} alt="" priority sizes="100vw" position="center center" className={styles.heroBg} imgClassName={styles.heroImg} /> : <div className={styles.heroFallback} aria-hidden="true" />}
      <div className={styles.heroVeil} aria-hidden="true" />
      <Container className={styles.heroInner}>
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 id="ue-title" className={styles.heroTitle}>
          {hero.title.map((l, i) => (
            <span key={l} className={styles.line}>
              {l}
              {i === hero.title.length - 1 && <i className={styles.dot} aria-hidden="true" />}
            </span>
          ))}
        </h1>
        <p className={styles.heroText}>{hero.text}</p>
      </Container>
    </section>
  );
}

export function UeIntro() {
  return (
    <section className={styles.intro} aria-labelledby="ue-intro">
      <Container className={styles.introGrid}>
        <Image src={intro.image} alt={intro.imageAlt} width={intro.width} height={intro.height} sizes="(max-width: 767px) 100vw, 55vw" className={styles.introPhoto} />
        <div className={styles.introCopy}>
          <span className={styles.accent} aria-hidden="true" />
          <h2 id="ue-intro" className={`h2 ${styles.h2}`}>
            {intro.title}
            <i className={styles.dot} aria-hidden="true" />
          </h2>
          <p className={styles.body}>{intro.text}</p>
          <p className={styles.body}>{intro.text2}</p>
          <p className={styles.tags}>{intro.tags}</p>
        </div>
      </Container>
    </section>
  );
}

function Profile({ p, children }: { p: { name: string; role: string; image: string; alt: string; paragraphs: Paragraph[] }; children: React.ReactNode }) {
  return (
    <article className={styles.profile}>
      <Image src={p.image} alt={p.alt} width={1254} height={1254} sizes="(max-width: 767px) 100vw, 45vw" className={styles.portrait} data-person={p.name.split(" ")[0].toLowerCase()} />
      <h3>{p.name}</h3>
      <p className={styles.role}>{p.role}</p>
      {p.paragraphs.map((parts) => (
        <p key={typeof parts[0] === "string" ? parts[0].slice(0, 24) : parts[0].text} className={styles.para}>
          {parts.map((part, i) =>
            typeof part === "string" ? (
              part
            ) : (
              <Link key={i} href={part.href} className={styles.inlineLink}>
                {part.text}
              </Link>
            ),
          )}
        </p>
      ))}
      {children}
    </article>
  );
}

export function UePeople() {
  const { andreas, natalia } = people;
  return (
    <section className={styles.people} aria-labelledby="ue-people">
      <Container>
        <h2 id="ue-people" className={`h2 ${styles.h2} ${styles.peopleTitle}`}>
          {people.title}
          <i className={styles.dot} aria-hidden="true" />
        </h2>
        <span className={styles.accent} aria-hidden="true" />
        <div className={styles.peopleGrid}>
          <Profile p={andreas}>
            <Disclosure label={andreas.accordion}>
              <dl className={styles.timeline}>
                {andreas.timeline.map((t) => (
                  <div key={t.period}>
                    <dt>{t.period}</dt>
                    <dd>{t.text}</dd>
                  </div>
                ))}
              </dl>
            </Disclosure>
          </Profile>
          <Profile p={natalia}>
            <Disclosure label={natalia.accordion}>
              <p className={styles.qual}>
                {natalia.qualification.map((l) => (
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
  );
}

export function UeCta() {
  return (
    <section className={styles.cta} aria-labelledby="ue-cta">
      <Photo src={cta.image} alt={cta.imageAlt} sizes="(max-width: 767px) 100vw, 55vw" position="25% 55%" className={styles.ctaPhoto} />
      <div className={styles.ctaCopy}>
        <span className={styles.ctaLine} aria-hidden="true" />
        <h2 id="ue-cta" className={`h2 ${styles.ctaTitle}`}>
          {cta.title}
          <i className={styles.dot} aria-hidden="true" />
        </h2>
        <p className={styles.ctaText}>{cta.text}</p>
        <Button href={cta.button.href} variant="light" size="lg">
          {cta.button.label}
        </Button>
      </div>
    </section>
  );
}
