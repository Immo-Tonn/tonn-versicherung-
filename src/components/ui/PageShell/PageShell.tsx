import Container from "../Container/Container";
import SectionLabel from "../SectionLabel/SectionLabel";
import styles from "./PageShell.module.css";

type Props = { eyebrow: string; title: string; children?: React.ReactNode };

/** Schlichte Rahmenseite für Unterseiten, die später separat gestaltet werden. */
export default function PageShell({ eyebrow, title, children }: Props) {
  return (
    <section className={styles.shell}>
      <Container>
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className={`h2 ${styles.title}`}>{title}</h1>
        <div className={styles.body}>{children ?? <p className="lead">Inhalt folgt. Diese Seite wird separat gestaltet.</p>}</div>
      </Container>
    </section>
  );
}
