import { processSection as process } from "@/data/home";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./ProcessSection.module.css";

export default function ProcessSection() {
  return (
    <section id="ablauf" className={styles.section} aria-labelledby="process-title">
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <SectionLabel tone="light">{process.eyebrow}</SectionLabel>
          <h2 id="process-title" className={`h2 ${styles.title}`}>
            {process.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={styles.text}>{process.text}</p>
          <Button href={process.cta.href} variant="navy-soft">
            {process.cta.label}
          </Button>
        </div>

        <ol className={styles.steps}>
          {process.steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.head}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.rail} aria-hidden="true" />
              </div>
              <Icon name={step.icon} size={34} strokeWidth={1.2} className={styles.icon} />
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
