/**
 * Übersetzbare Texte der Seiten „Weitere Versicherungen“ (Wv) und „Über uns“ (Ue).
 * Bilder, Icons, Links und Reihenfolge stammen von den deutschen Seiten (gleiche Indizes).
 */
type Pair = [string, string];
type Card = { title: string; text: string };
type Meta = { title: string; description: string; name: string; crumb: string; serviceName?: string; serviceType?: string };
type Ins = { title: string; short: string; text: string; points: [string, string, string] };

export type WvContent = {
  meta: Required<Meta>;
  hero: { eyebrow: string; title: Pair; text: string; cta: string; imageAlt: string };
  overview: {
    eyebrow: string;
    title: string;
    text: string;
    questionsLabel: string;
    link: string;
    note: string;
    groups: [
      { title: string; items: [Ins, Ins, Ins, Ins] },
      { title: string; items: [Ins, Ins, Ins, Ins] },
      { title: string; items: [Ins, Ins, Ins, Ins] },
    ];
  };
  review: { eyebrow: string; title: string; text: string; items: [Card, Card, Card] };
  consulting: { eyebrow: string; title: Pair; text: string; imageAlt: string; steps: [Card, Card, Card] };
  faq: { eyebrow: string; title: string; text: string; items: [{ q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string }] };
  finalCta: { eyebrow: string; title: string; text: string; cta: string };
};

/** Absatz aus Text- und Link-Teilen (Link-Ziele sind deutsche Registerpfade) */
export type UePart = string | { text: string; href: string };

export type UeContent = {
  meta: Meta;
  hero: { eyebrow: string; title: Pair; text: string };
  intro: { title: string; text: string; text2: string; tags: string; imageAlt: string };
  people: {
    title: string;
    andreas: { name: string; role: string; alt: string; paragraphs: [UePart[], UePart[], UePart[]]; accordion: string; timeline: [Pair, Pair, Pair, Pair, Pair] };
    natalia: { name: string; role: string; alt: string; paragraphs: [UePart[], UePart[], UePart[]]; accordion: string; qualification: [string, string, string] };
  };
  cta: { title: string; text: string; button: string; imageAlt: string };
};
