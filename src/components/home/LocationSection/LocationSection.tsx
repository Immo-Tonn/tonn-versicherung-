import { location } from "@/data/home";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";
import styles from "./LocationSection.module.css";

export default function LocationSection() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const embedSrc =
    key && placeId ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${encodeURIComponent(`place_id:${placeId}`)}&language=de` : null;

  return (
    <section className={styles.section} aria-labelledby="location-title">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <SectionLabel>{location.eyebrow}</SectionLabel>
          <h2 id="location-title" className={`h2 ${styles.title}`}>
            {location.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={styles.text}>{location.text}</p>

          <address className={styles.address}>
            <span>{location.street}</span>
            <span>{location.city}</span>
            <small>{location.note}</small>
          </address>

          <a href={location.cta.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {location.cta.label}
            <Icon name="arrow" size={18} className={styles.arrow} />
            <span className={styles.srOnly}> (öffnet in neuem Tab)</span>
          </a>
        </div>

        {embedSrc && (
          <div className={styles.map}>
            <iframe
              src={embedSrc}
              title="Standort TONN Versicherungsberatung auf Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </Container>
    </section>
  );
}
