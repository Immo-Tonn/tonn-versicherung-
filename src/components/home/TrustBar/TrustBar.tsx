import { trustItems } from "@/data/home";
import { getGoogleReviews } from "@/lib/google-reviews";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./TrustBar.module.css";

/**
 * Gesamtbewertung aus derselben Quelle wie der Bewertungsbereich (Google Places API). Ohne echte Google-Daten wird keine Zahl
 * angezeigt, es bleibt nur der Text; es wird nichts erfunden.
 */
export default async function TrustBar() {
  const google = await getGoogleReviews();
  const value = google ? google.rating.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : null;
  return (
    <div className={styles.bar}>
      <Container>
        <ul className={styles.list}>
          {trustItems.map((item, i) => (
            <li key={i} className={styles.item}>
              <Icon name={item.icon} size={44} strokeWidth={1.1} className={styles.icon} />
              <div>
                {item.isRating ? (
                  value && google ? (
                    <p className={styles.title}>
                      <span>{value}</span>
                      <span className={styles.stars} role="img" aria-label={`${value} von 5 Sternen`}>
                        {"★".repeat(Math.max(0, Math.min(5, Math.round(google.rating))))}
                      </span>
                    </p>
                  ) : null
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
