import { reviews } from "@/data/home";
import { getGoogleReviews } from "@/lib/google-reviews";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Photo from "@/components/ui/Photo/Photo";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./ReviewsSection.module.css";

const formatRating = (n: number) => n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function Stars({ value, className }: { value: number; className?: string }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <span className={className} role="img" aria-label={`${formatRating(value)} von 5 Sternen`}>
      {"★".repeat(full)}
      <span className={styles.starsOff}>{"★".repeat(5 - full)}</span>
    </span>
  );
}

export default async function ReviewsSection() {
  const google = await getGoogleReviews();
  // Ohne echte Google-Daten wird nichts erfunden: der Bereich entfällt.
  if (!google || google.reviews.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <Photo src={reviews.backgroundImage} alt="" sizes="100vw" className={styles.bg} />
      <div className={styles.veil} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel>{reviews.eyebrow}</SectionLabel>
          <h2 id="reviews-title" className={`h2 ${styles.title}`}>
            {reviews.title}
          </h2>
        </div>

        <div className={styles.body}>
          <div className={styles.score}>
            <p className={styles.value}>
              {formatRating(google.rating)}
              <Stars value={google.rating} className={styles.stars} />
            </p>
            <p className={styles.count}>
              {formatRating(google.rating)} von 5 · {google.count.toLocaleString("de-DE")} Google Bewertungen
            </p>
          </div>

          <ul className={styles.cards}>
            {google.reviews.map((r) => (
              <li key={`${r.author}-${r.url ?? r.text.slice(0, 20)}`}>
                <article className={styles.card}>
                  <Stars value={r.rating} className={styles.cardStars} />
                  <p className={styles.quote}>„{r.text}“</p>
                  <footer>
                    <div>
                      <strong>
                        {r.authorUri ? (
                          <a href={r.authorUri} target="_blank" rel="noopener noreferrer">
                            {r.author}
                          </a>
                        ) : (
                          r.author
                        )}
                      </strong>
                      {r.relativeTime &&
                        (r.url ? (
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className={styles.time}>
                            {r.relativeTime}
                          </a>
                        ) : (
                          <span className={styles.time}>{r.relativeTime}</span>
                        ))}
                    </div>
                    <Icon name="google" size={22} strokeWidth={1.6} className={styles.g} />
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.foot}>
          {google.reviewsUrl && (
            <a href={google.reviewsUrl} target="_blank" rel="noopener noreferrer" className={styles.more}>
              {reviews.linkLabel}
              <Icon name="arrow" size={16} />
              <span className={styles.srOnly}> (öffnet in neuem Tab)</span>
            </a>
          )}
          <p className={styles.attribution}>Bewertungen von Google Maps</p>
        </div>
      </Container>
    </section>
  );
}
