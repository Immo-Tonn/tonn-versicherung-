import Container from "@/components/ui/Container/Container";
import styles from "./PkvTerms.module.css";

export type PkvTermsContent = {
  title: string;
  /** Begriff und Erklärung getrennt; der Begriff wird hervorgehoben */
  items: [
    [string, string],
    [string, string],
    [string, string],
    [string, string],
  ];
  /** Zugänglicher Name der Fußnoten-Nummer, {term} = Beschriftung der Marke */
  refAria: string;
  /** Zugänglicher Name des Rücksprung-Links, {term} = Beschriftung der Marke */
  backAria: string;
};

const termId = (n: number) => `pkv-begriff-${n}`;
const refId = (n: number) => `pkv-begriff-ref-${n}`;
const fill = (tpl: string, term: string) => tpl.replace("{term}", term);

/** Kleine hochgestellte Nummer an einer Ergebnis-Marke; springt zur Erklärung am Seitenende. */
export function PkvResultRef({
  n,
  term,
  aria,
}: {
  n: number;
  term: string;
  aria: string;
}) {
  return (
    <sup className={styles.ref}>
      <a
        id={refId(n)}
        href={`#${termId(n)}`}
        className={styles.refLink}
        aria-label={fill(aria, term)}
      >
        {n}
      </a>
    </sup>
  );
}

export default function PkvTerms({
  terms,
  labels,
}: {
  terms: PkvTermsContent;
  labels: readonly string[];
}) {
  return (
    <section
      id="pkv-begriffe"
      className={styles.terms}
      aria-labelledby="pkv-terms-title"
    >
      <Container>
        <h2 id="pkv-terms-title" className={`h2 ${styles.title}`}>
          {terms.title}
        </h2>
        <ol className={styles.list}>
          {terms.items.map(([term, text], i) => {
            const cut = text.lastIndexOf(" ") + 1;
            return (
              <li key={term} id={termId(i + 1)} className={styles.item}>
                <span className={styles.num} aria-hidden="true">
                  {i + 1}.
                </span>
                <span>
                  <b>{term}:</b> {text.slice(0, cut)}
                  <span className={styles.tail}>
                    {text.slice(cut)}{" "}
                    <a
                      href={`#${refId(i + 1)}`}
                      className={styles.back}
                      aria-label={fill(terms.backAria, labels[i])}
                    >
                      ↩&#xFE0E;
                    </a>
                  </span>
                </span>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
