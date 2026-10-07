import { rating, trustItems } from "@/data/home";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./TrustBar.module.css";

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <Container>
        <ul className={styles.list}>
          {trustItems.map((item, i) => (
            <li key={i} className={styles.item}>
              <Icon name={item.icon} size={44} strokeWidth={1.1} className={styles.icon} />
              <div>
                {item.isRating ? (
                  <p className={styles.title}>
                    {/* TODO(PLACEHOLDER): Bewertung in data/home.ts durch echte Google-Daten ersetzen */}
                    <span>{rating.value}</span>
                    <span className={styles.stars} role="img" aria-label={`${rating.value} von 5 Sternen`}>
                      {"★".repeat(rating.stars)}
                    </span>
                  </p>
                ) : (
                  <p className={styles.title}>{item.title}</p>
                )}
                <p className={styles.text}>
                  {item.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
