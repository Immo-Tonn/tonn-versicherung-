import type { Locale } from "@/i18n/config";
import styles from "./FaqList.module.css";

export type FaqItem = { q: string; a: string };

export const faqTitle: Record<Locale, string> = { de: "Häufige Fragen", en: "Frequently asked questions", ru: "Частые вопросы" };

/** Sichtbare FAQ (einklappbar, Text steht im HTML). Dieselben Einträge gehen als FAQPage ins JSON-LD (siehe PageJsonLd / Artikel-Markup). */
export default function FaqList({ items, locale, id }: { items: FaqItem[]; locale: Locale; id: string }) {
  return (
    <section className={styles.faq} aria-labelledby={id}>
      <h2 id={id} className={styles.title}>
        {faqTitle[locale]}
      </h2>
      {items.map((f) => (
        <details key={f.q} className={styles.item}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}
