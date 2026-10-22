import { siteConfig } from "@/data/site";

export const hero = {
  eyebrow: "Persönlich. Individuell. An Ihrer Seite.",
  title: "Private Krankenversicherung",
  subtitle: ["Klar beraten.", "Für das, was Ihnen", "wirklich wichtig ist."],
  text: "Individuelle Beratung, Vergleich verschiedener Versicherungsangebote und langfristige Betreuung – transparent, persönlich und auf Ihre Lebenssituation abgestimmt.",
  primaryCta: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  secondaryCta: { label: "So läuft die Beratung ab", href: "#ablauf" },
  image: "/images/home/hero-muenster.webp",
  imageMobile: "/images/home/hero-muenster-mobil-v2.webp", // Hochformat, nur bis 767 px (Original: design-source/hero-muenster-mobil-v2-original.png)
  imageAlt: "Historische Giebelhäuser am Prinzipalmarkt in Münster",
};

/** TODO(PLACEHOLDER): Bewertung und Anzahl durch echte Google-Daten ersetzen. */
export const rating = {
  value: "5,0",
  stars: 5,
  count: null as number | null, // bewusst leer: keine erfundene Bewertungsanzahl
  isPlaceholder: true,
};

export type IconName =
  | "people"
  | "shield"
  | "document"
  | "diamond"
  | "user"
  | "clock"
  | "laptop"
  | "check"
  | "chart";

export const trustItems: {
  icon: IconName;
  title?: string;
  lines: string[];
  isRating?: boolean;
}[] = [
  { icon: "people", isRating: true, lines: ["Zufriedene Kundinnen", "und Kunden"] },
  { icon: "shield", title: "Persönliche Beratung", lines: ["Zusammenarbeit mit", "mehreren Versicherern"] },
  { icon: "document", title: "Anonyme Risikovoranfrage", lines: ["Ihre Gesundheitsdaten", "bleiben vertraulich"] },
  { icon: "diamond", title: "Langfristige Begleitung", lines: ["Auch nach Vertragsabschluss", "an Ihrer Seite"] },
];

export const situations = {
  eyebrow: "Für jede Lebenssituation",
  title: "Welche Situation passt zu Ihnen?",
  text: "Jede Lebenssituation bringt unterschiedliche Möglichkeiten in der privaten Krankenversicherung. Wählen Sie aus, was am besten zu Ihnen passt – wir zeigen Ihnen die nächsten Schritte.",
  // TODO: Fotos liefern, bis dahin Platzhalter
  cards: [
    { title: "Angestellte", text: "PKV-Möglichkeiten im Berufsleben", image: "/images/home/angestellte.webp", href: "/private-krankenversicherung/angestellte" },
    { title: "Selbstständige", text: "Flexibel abgesichert in jeder Phase", image: "/images/home/selbststaendige.webp", href: "/private-krankenversicherung/selbststaendige" },
    { title: "Beamte", text: "Individuelle Lösungen für den öffentlichen Dienst", image: "/images/home/beamte.webp", href: "/private-krankenversicherung/beamte" },
    { title: "Bereits privat versichert", text: "Optimieren und besser aufstellen", image: "/images/home/privat-versichert.webp", href: "/wissen/tarifwechsel-pkv" },
  ],
};

export const processSection = {
  eyebrow: "Klarer Prozess. Volle Transparenz.",
  title: ["Erst prüfen.", "Dann entscheiden."],
  text: "Mit der anonymen Risikovoranfrage prüfen wir Ihre Gesundheitsangaben bei mehreren Versicherern – vorab und unverbindlich.",
  cta: { label: "Mehr zum Ablauf", href: "/private-krankenversicherung" },
  steps: [
    { icon: "document" as IconName, title: "Angaben", text: "Wir besprechen Ihre Situation und erfassen die relevanten Daten." },
    { icon: "shield" as IconName, title: "Anonym prüfen", text: "Wir prüfen Ihre Gesundheitsangaben bei mehreren Versicherern." },
    { icon: "chart" as IconName, title: "Tarife vergleichen", text: "Wir analysieren passende Angebote unserer Versicherungspartner." },
    { icon: "check" as IconName, title: "Ergebnis", text: "Sie entscheiden in Ruhe den für Sie passenden Tarif." },
  ],
};

export const about = {
  eyebrow: "Ihr Ansprechpartner",
  title: ["Versicherung ist", "Vertrauenssache."],
  text: "Ich bin Andreas Tonn, Versicherungsvermittler in Münster. Ich betreue über 1.600 Kundinnen und Kunden – persönlich und langfristig. Als Ihr Ansprechpartner bin ich bei allen Fragen rund um die private Krankenversicherung, Berufsunfähigkeitsversicherung und weitere Absicherungen für Sie da.",
  cta: { label: "Mehr über mich", href: "/ueber-uns" },
  image: "/images/home/andreas-tonn.webp",
  imageAlt: "Andreas Tonn, Versicherungsvermittler in Münster",
  features: [
    { icon: "shield" as IconName, title: "Vergleich", text: "Zusammenarbeit mit mehreren Versicherern" },
    { icon: "user" as IconName, title: "Persönlich", text: "Individuelle Beratung statt Standardlösungen" },
    { icon: "clock" as IconName, title: "Langfristig", text: "Auch nach Vertragsabschluss an Ihrer Seite" },
    { icon: "laptop" as IconName, title: "Digital & flexibel", text: "Beratung vor Ort in Münster oder deutschlandweit per Video" },
  ],
};

export const insurances = {
  eyebrow: "Mehr als nur PKV",
  title: ["Weitere Versicherungen", "für Ihre Zukunft."],
  text: "Neben der privaten Krankenversicherung berate ich Sie auch zu weiteren wichtigen Absicherungen – individuell, persönlich und auf Ihre Lebenssituation abgestimmt.",
  cta: { label: "Alle Versicherungen", href: "/versicherungen" },
  cards: [
    { title: "Berufsunfähigkeits­versicherung", text: "Ihre Arbeitskraft absichern.", image: "/images/home/bu.webp", imageAlt: "Menschen entspannen am Aasee im Abendlicht", imagePosition: "70% center", href: "/berufsunfaehigkeitsversicherung" },
    { title: "Weitere Versicherungen", text: "z. B. Unfall, Haftpflicht, …", image: "/images/home/weitere-versicherungen.webp", imageAlt: "Helles Wohnzimmer mit Sofa im Sonnenlicht", imagePosition: "center", href: "/versicherungen" },
    { title: "Individuelle Beratung", text: "Gemeinsam die passende Lösung finden.", image: "/images/home/beratung.webp", imageAlt: "Beratungstisch mit Blick auf die Münsteraner Altstadt", imagePosition: "55% center", href: "/kontakt" },
  ],
};

export const reviews = {
  eyebrow: "Google Bewertungen",
  title: "Was unsere Kunden sagen.",
  linkLabel: "Alle Bewertungen auf Google ansehen",
};

export const finalCta = {
  eyebrow: "Ihr nächster Schritt",
  title: ["Lassen Sie uns gemeinsam", "Ihre Möglichkeiten besprechen."],
  text: "Unverbindlich. Persönlich. Online oder vor Ort in Münster.",
  cta: { label: "Kostenloses Erstgespräch vereinbaren", href: "/kontakt" },
  checks: ["Kostenlos", "Unverbindlich", "Persönlich"],
};

export const location = {
  eyebrow: "Standort",
  title: ["Persönlich in Münster.", "Digital in ganz Deutschland."],
  text: "Persönliche Beratung vor Ort in Münster oder flexibel per Video – deutschlandweit.",
  street: siteConfig.contact.address.street,
  city: `${siteConfig.contact.address.zip} ${siteConfig.contact.address.city}`,
  note: "Termine nach Vereinbarung",
  cta: {
    label: "Route in Google Maps öffnen",
    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${siteConfig.contact.address.street}, ${siteConfig.contact.address.zip} ${siteConfig.contact.address.city}`,
    ).replace(/%20/g, "+")}`,
  },
};
