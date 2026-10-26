/**
 * Übersetzbare Texte der Seite „Private Krankenversicherung“ (Hauptseite). Bilder, Icons, Links und Reihenfolge
 * stammen aus src/app/(de)/private-krankenversicherung/_components/content.ts (gleiche Indizes).
 */
type Pair = [string, string];
type Card = { title: string; text: string };

export type PkvContent = {
  meta: { title: string; description: string; name: string; crumb: string; serviceName: string; serviceType: string };
  hero: { eyebrow: string; title: string[]; soft: string; subtitle: Pair; primary: string; secondary: string; imageAlt: string };
  trust: { ariaLabel: string; items: [Card, Card, Card] };
  targets: {
    eyebrow: string;
    title: Pair;
    text: string;
    cards: [Card & { alt: string }, Card & { alt: string }, Card & { alt: string }];
    cta: string;
    /** Platzhalter {title}; nur für Screenreader */
    srSuffix: string;
  };
  process: { eyebrow: string; title: string; steps: [Card, Card, Card, Card]; cta: string };
  risk: {
    eyebrow: string;
    title: Pair;
    text: string;
    cta: string;
    flowAria: string;
    flow: [string[], string[], string[], string[]];
    resultsLabel: string;
    results: [string, string, string, string];
  };
  compare: {
    eyebrow: string;
    title: Pair;
    imageAlt: string;
    caption: string;
    criterion: string;
    head: [string, string, string];
    headTitles: [string, string];
    rows: [[string, string, string], [string, string, string], [string, string, string], [string, string, string]];
    note: string;
    noteText: string;
  };
  about: { eyebrow: string; title: string; text: string; cta: string; imageAlt: string };
  secondOpinion: { eyebrow: string; title: string; text: string; cta: string; imageAlt: string };
  faq: { eyebrow: string; title: Pair; items: [{ q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string }]; more: string };
  finalCta: { eyebrow: string; title: Pair; text: string; cta: string; checks: [string, string, string] };
};

/** Beschriftungen der Unterseiten (Brotkrumen, „Kurz beantwortet“, Quellen, Abschluss-CTA). */
export type SubLabels = {
  home: string;
  breadcrumbAria: string;
  section: string;
  answerLabel: string;
  sourcesTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  /** frühe Textlink-Zeile unter „Kurz beantwortet“ */
  earlyCta: string;
  pkvCrumb: string;
  /** Hinweis an Quellenlinks, deren Zielseite deutsch ist */
  sourceLang: string;
};
