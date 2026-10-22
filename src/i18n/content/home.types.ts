/**
 * Übersetzbare Texte der Startseite. Bilder, Icons, Links und Reihenfolge stammen aus src/data/home.ts
 * (gleiche Indizes), damit Design und Struktur nicht von der deutschen Seite abweichen können.
 */
type Card = { title: string; text: string };
type Step = { title: string; text: string };
type InsuranceCard = Card & { imageAlt: string };

export type HomeContent = {
  meta: { title: string; description: string; pageName: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: [string, string, string];
    text: string;
    primaryCta: string;
    secondaryCta: string;
    mobileCta: string;
    imageAlt: string;
  };
  trust: {
    ratingLines: [string, string];
    ratingAria: (value: string) => string;
    items: [{ title: string; lines: [string, string] }, { title: string; lines: [string, string] }, { title: string; lines: [string, string] }];
  };
  situations: { eyebrow: string; title: string; text: string; cards: [Card, Card, Card, Card] };
  process: { eyebrow: string; title: [string, string]; text: string; cta: string; steps: [Step, Step, Step, Step] };
  about: { eyebrow: string; title: [string, string]; text: string; experience: string; cta: string; imageAlt: string; features: [Step, Step, Step, Step] };
  insurances: { eyebrow: string; title: [string, string]; text: string; cta: string; cards: [InsuranceCard, InsuranceCard, InsuranceCard] };
  reviews: {
    eyebrow: string;
    title: string;
    linkLabel: string;
    newTab: string;
    attribution: string;
    starsAria: (value: string) => string;
    count: (value: string, count: string) => string;
    quote: (text: string) => string;
  };
  location: { eyebrow: string; title: [string, string]; text: string; note: string; cta: string; newTab: string; mapTitle: string };
  map: { notice: string; load: string };
  finalCta: { eyebrow: string; title: [string, string]; text: string; cta: string; checks: [string, string, string] };
};
