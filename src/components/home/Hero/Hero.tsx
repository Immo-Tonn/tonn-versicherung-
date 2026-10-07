import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/home";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import TrustBar from "../TrustBar/TrustBar";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={80}
        className={styles.image}
      />
      <div className={styles.veil} aria-hidden="true" />

      <Container className={styles.content}>
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 id="hero-title" className={styles.title}>
          {hero.title.split(" ").map((w, i, all) => (
            <span key={w}>
              {w}
              {i === all.length - 1 && <i className={styles.dot} aria-hidden="true" />}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle}>
          {hero.subtitle.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <p className={styles.text}>{hero.text}</p>
        <div className={styles.actions}>
          <Button href={hero.primaryCta.href} size="lg" className={styles.primary}>
            {hero.primaryCta.label}
          </Button>
          <Link href={hero.secondaryCta.href} className={styles.secondary}>
            <span className={styles.play}>
              <Icon name="play" size={22} />
            </span>
            <span className={styles.secondaryLabel}>{hero.secondaryCta.label}</span>
          </Link>
          <Link href={hero.primaryCta.href} className={styles.mobileCta}>
            Online-Termin vereinbaren
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </Container>

      <TrustBar />
    </section>
  );
}
