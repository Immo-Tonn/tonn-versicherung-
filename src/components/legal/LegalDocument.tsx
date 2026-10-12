import Container from "@/components/ui/Container/Container";
import styles from "./Legal.module.css";

type Props = { title: string; children: React.ReactNode };

export default function LegalDocument({ title, children }: Props) {
  return (
    <article className={styles.page}>
      <Container>
        <div className={styles.column}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.body}>{children}</div>
        </div>
      </Container>
    </article>
  );
}

/** Externe Adresse (www.…) als echter Link, öffnet in neuem Tab. */
export function Ext({ href, children }: { href?: string; children: string }) {
  const url = href ?? (children.startsWith("http") ? children : `https://${children}`);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Mail({ children }: { children: string }) {
  return <a href={`mailto:${children}`}>{children}</a>;
}

export function Tel({ href, children }: { href: string; children: string }) {
  return <a href={href}>{children}</a>;
}

/** Markiert offene Platzhalter der Vorlage sichtbar. */
export function Todo({ children }: { children: string }) {
  return <mark className={styles.todo}>[{children}]</mark>;
}
