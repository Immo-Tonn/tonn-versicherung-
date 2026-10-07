import { finalCta } from "@/data/home";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <Photo src={finalCta.image} alt="" sizes="100vw" className={styles.bg} />
      <div className={styles.veil} aria-hidden="true" />
      <Container className={styles.inner}>
        <div>
          <SectionLabel tone="light">{finalCta.eyebrow}</SectionLabel>
          <h2 id="cta-title" className={`h2 ${styles.title}`}>
            {finalCta.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={styles.text}>{finalCta.text}</p>
        </div>
        <div className={styles.action}>
          <Button href={finalCta.cta.href} variant="light" size="lg">
            {finalCta.cta.label}
          </Button>
          <ul className={styles.checks}>
            {finalCta.checks.map((c) => (
              <li key={c}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m4 12.5 5 5L20 6.5" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
