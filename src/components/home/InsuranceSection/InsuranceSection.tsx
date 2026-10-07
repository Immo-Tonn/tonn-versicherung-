import Link from "next/link";
import { insurances } from "@/data/home";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./InsuranceSection.module.css";

export default function InsuranceSection() {
  return (
    <section className={styles.section} aria-labelledby="insurance-title">
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <SectionLabel>{insurances.eyebrow}</SectionLabel>
          <h2 id="insurance-title" className={`h2 ${styles.title}`}>
            {insurances.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={styles.text}>{insurances.text}</p>
          <Button href={insurances.cta.href}>{insurances.cta.label}</Button>
        </div>

        <ul className={styles.cards}>
          {insurances.cards.map((card) => (
            <li key={card.title}>
              <Link href={card.href} className={styles.card}>
                <Photo src={card.image} alt={card.imageAlt} position={card.imagePosition} ratio="4 / 5" sizes="(max-width: 767px) 90vw, (max-width: 1199px) 30vw, 250px" className={styles.photo} imgClassName={styles.zoom} />
                <div className={styles.body}>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <Icon name="arrow" size={18} className={styles.arrow} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
