import Link from "next/link";
import { situations } from "@/data/home";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./SituationSection.module.css";

export default function SituationSection() {
  return (
    <section className={styles.section} aria-labelledby="situation-title">
      <Container>
        <SectionLabel>{situations.eyebrow}</SectionLabel>
        <h2 id="situation-title" className={`h2 ${styles.title}`}>
          {situations.title}
        </h2>
        <p className={`lead ${styles.text}`}>{situations.text}</p>

        <ul className={styles.grid}>
          {situations.cards.map((card) => (
            <li key={card.title}>
              <Link href={card.href} className={styles.card}>
                <Photo src={card.image} alt="" ratio="4 / 3" sizes="(max-width: 767px) 85vw, (max-width: 1199px) 45vw, 310px" className={styles.photo} imgClassName={styles.zoom} />
                <div className={styles.body}>
                  <span className={styles.accent} aria-hidden="true" />
                  <div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
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
