/** Übersetzbare Texte der Ratgeber-Übersicht (/wissen). Bilder, Anker, Links und Reihenfolge stammen von der deutschen Seite. */
export type RatgeberContent = {
  meta: { title: string; description: string; name: string };
  hero: { label: string; title: [string, string]; text: string };
  intro: { title: string; text: string; navAria: string; topics: [string, string, string] };
  pkv: {
    label: string;
    title: string;
    lead: string;
    mainTitle: string;
    mainBody: string;
    mainLink: string;
    side: [{ title: string; text: string }, { title: string; text: string }];
    groups: string;
  };
  bu: { label: string; title: [string, string]; p1: string; p2: string; photoAlt: string; links: [string, string, string] };
  kapital: {
    label: string;
    title: [string, string];
    text: string;
    links: [string, string];
    boxTitle: string;
    trio: [{ dt: string; dd: string }, { dt: string; dd: string }, { dt: string; dd: string }];
  };
  faq: { title: string; items: [{ q: string; a: string }, { q: string; a: string }, { q: string; a: string }] };
  experience: { photoAlt: string; title: string; nameRole: string; text: string; link: string };
  cta: { title: string; lead: string; button: string };
};
