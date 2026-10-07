import { about } from "@/data/home";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <Container className={styles.inner}>
        <Photo src={about.image} alt={about.imageAlt} ratio="1480 / 1063" sizes="(max-width: 767px) 100vw, (max-width: 1199px) 40vw, 28vw" />

        <div className={styles.copy}>
          <SectionLabel>{about.eyebrow}</SectionLabel>
          <h2 id="about-title" className={`h2 ${styles.title}`}>
            {about.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={styles.text}>{about.text}</p>
          <Button href={about.cta.href}>{about.cta.label}</Button>
        </div>

        <ul className={styles.features}>
          {about.features.map((f) => (
            <li key={f.title}>
              <Icon name={f.icon} size={28} strokeWidth={1.2} className={styles.icon} />
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
