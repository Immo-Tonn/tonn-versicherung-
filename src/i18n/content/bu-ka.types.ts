/** Übersetzbare Texte der Seiten „Berufsunfähigkeitsversicherung“ (BU) und „Kapitalanlage“. Bilder/Icons/Links/Reihenfolge stammen von den deutschen Seiten (gleiche Indizes). */
type Pair = [string, string];
type Card = { title: string; text: string };
type Meta = { title: string; description: string; name: string; crumb: string; serviceName: string; serviceType: string };

export type BuContent = {
  meta: Meta;
  hero: { eyebrow: string; title: string; text: string; primary: string; secondary: string; imageAlt: string };
  power: { eyebrow: string; title: string; text: string; chain: [Card, Card, Card, Card, Card] };
  reality: { eyebrow: string; title: string; text: string; link: string; imageAlt: string };
  groups: {
    eyebrow: string;
    title: string;
    cta: string;
    large: Card & { alt: string };
    small: [Card & { alt: string }, Card & { alt: string }];
  };
  rente: { eyebrow: string; title: string; text: string; cta: string; card: { title: string; rows: [Pair, Pair, Pair]; note: string } };
  health: { eyebrow: string; title: string; text: string; cta: string; imageAlt: string };
  process: { eyebrow: string; title: string; steps: [Card, Card, Card, Card]; imageAlt: string };
  existing: { eyebrow: string; title: string; text: string; cta: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[]; more: string };
  finalCta: { eyebrow: string; title: string; text: string; cta: string; checks: [string, string, string] };
};

export type KaContent = {
  meta: Meta;
  hero: { eyebrow: string; title: [string, string, string]; text: string; cta: string; imageAlt: string };
  goals: { eyebrow: string; title: string; items: [Card, Card, Card] };
  questions: { eyebrow: string; title: string; text: string; items: [Card, Card, Card, Card] };
  consulting: { eyebrow: string; title: Pair; text: string; imageAlt: string; steps: [Card, Card, Card] };
  faq: { title: string; text: string; items: [{ q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string }] };
  finalCta: { title: string; text: string; cta: string };
};
