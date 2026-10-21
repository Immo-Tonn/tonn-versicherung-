import { Fragment } from "react";
import labelStyles from "@/components/ui/SectionLabel/SectionLabel.module.css";

/**
 * Hero-Zeile der Startseite ("Persönlich. Individuell. An Ihrer Seite.", DE/EN/RU): gleiches Markup und gleiche Klassen wie SectionLabel,
 * nur ist der Text in seine Sätze aufgeteilt (Text und Leerzeichen bleiben unverändert), damit Strich und Sätze nacheinander einblenden
 * (siehe hero-text-in.css). Alle Teile sind von Anfang an im Layout vorhanden (nur opacity), nichts verschiebt sich.
 */
export default function HeroEyebrow({ children }: { children: string }) {
  const parts = children.split(/(?<=\.)\s+/);
  return (
    <p className={`${labelStyles.label} eyebrow`} data-eyebrow-seq>
      <span className={labelStyles.line} aria-hidden="true" />
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span data-eyebrow-part>{part}</span>
        </Fragment>
      ))}
    </p>
  );
}
