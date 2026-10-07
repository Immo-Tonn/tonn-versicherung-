/** Inhalte der Seite „Berufsunfähigkeitsversicherung“ (seitenspezifisch). Bilder: vorhandene Projekt-Assets. */
import type { BuIconName } from "./BuIcon";

export const hero = {
  eyebrow: "Berufsunfähigkeitsversicherung",
  title: "Was, wenn Ihr Einkommen plötzlich wegfällt",
  text: "Eine Berufsunfähigkeitsversicherung schützt Ihr Einkommen, wenn Sie Ihren Beruf aus gesundheitlichen Gründen nicht mehr ausüben können.",
  primary: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  secondary: { label: "BU prüfen lassen", href: "/kontakt" },
  image: "/images/pkv/bu-hero-office.webp",
  imageAlt: "Helles Büro mit Schreibtisch, Laptop und Blick über die Stadt",
};

export const power = {
  eyebrow: "Ihre Arbeitskraft",
  title: "Ihre Arbeitskraft finanziert Ihr Leben",
  text: "Sie ermöglicht Ihnen mehr als nur Einkommen. Sie schafft Sicherheit, Unabhängigkeit und persönliche Freiheit.",
  chain: [
    { icon: "briefcase" as BuIconName, title: "Beruf", text: "Ihre Expertise und Erfahrung" },
    { icon: "coins" as BuIconName, title: "Einkommen", text: "Ihre finanzielle Basis" },
    { icon: "home" as BuIconName, title: "Wohnen", text: "Ihr Zuhause und Lebensumfeld" },
    { icon: "people" as BuIconName, title: "Familie", text: "Menschen, die auf Sie zählen" },
    { icon: "future" as BuIconName, title: "Zukunft", text: "Ihre Pläne und Ziele" },
  ],
};

export const reality = {
  eyebrow: "Realität",
  title: "Berufsunfähigkeit kann jeden treffen",
  text: "Eine Erkrankung oder ein Unfall kann jeden treffen – unabhängig von Alter, Beruf oder Lebenssituation. Ohne Absicherung kann das erhebliche finanzielle Folgen haben.",
  link: { label: "Mehr erfahren", href: "#zielgruppen" },
  image: "/images/home/bu.webp",
  imageAlt: "Menschen entspannen am See im Abendlicht",
};

export const groups = {
  eyebrow: "Für wen ist eine BU besonders wichtig?",
  title: "Individuelle Lösungen für unterschiedliche Lebenswege",
  cta: "Mehr erfahren",
  href: "/kontakt",
  large: {
    title: "Selbstständige",
    text: "Mehr Flexibilität, aber kein gesetzlicher Schutz. Eine BU sichert Ihr Einkommen und Ihre unternehmerische Freiheit.",
    image: "/images/home/selbststaendige.webp",
    alt: "Arbeitsplatz mit Laptop und Pflanzen im Sonnenlicht",
  },
  small: [
    {
      title: "Angestellte",
      text: "Schutz vor Einkommensverlust – unabhängig vom Arbeitgeber.",
      image: "/images/pkv/pkv-angestellte.webp",
      alt: "Hände einer Angestellten am Laptop im Büro",
    },
    {
      title: "Berufseinsteiger",
      text: "Frühzeitig absichern – oft zu günstigeren Konditionen.",
      image: "/images/home/weitere-versicherungen.webp",
      alt: "Helles Wohnzimmer mit Sofa im Sonnenlicht",
    },
  ],
};

export const rente = {
  eyebrow: "Orientierung",
  title: "Wie viel Einkommen möchten Sie absichern?",
  text: "Die passende BU-Rente hängt von Ihrer persönlichen Einkommens- und Ausgabensituation ab. Gemeinsam ermitteln wir, welche Absicherung zu Ihrem Leben passt.",
  cta: { label: "BU-Rente berechnen lassen", href: "/kontakt" },
  card: {
    title: "Beispielrechnung",
    rows: [
      ["Nettoeinkommen monatlich", "3.000 €"],
      ["Beispiel BU-Rente", "2.100 €"],
      ["Laufzeit", "bis 67 Jahre"],
    ],
    note: "Nur Beispielwerte. Die passende Absicherung wird individuell ermittelt.",
  },
};

export const health = {
  eyebrow: "Gesundheitsfragen",
  title: "Erst prüfen. Dann beantragen",
  text: "Gesundheitsfragen sind ein wichtiger Bestandteil der Berufsunfähigkeitsversicherung. Wir unterstützen Sie dabei, die Angaben sorgfältig vorzubereiten und prüfen bei Bedarf zunächst anonym bei mehreren Versicherern, wie Ihre Chancen auf eine Absicherung stehen.",
  cta: { label: "Mehr zur Risikovoranfrage", href: "/private-krankenversicherung#risikovoranfrage" },
  image: "/images/pkv/pkv-ansprechpartner.webp",
  imageAlt: "Beratungsgespräch am Tisch mit Unterlagen",
};

export const process = {
  eyebrow: "Unser Beratungsprozess",
  title: "In wenigen Schritten zu Ihrem individuellen Schutz",
  steps: [
    { title: "Erstgespräch", text: "Wir analysieren Ihre Situation und Ziele." },
    { title: "Bedarfsanalyse", text: "Wir ermitteln den passenden Versicherungsschutz." },
    { title: "Angebotsvergleich", text: "Wir vergleichen geeignete Tarife und Bedingungen." },
    { title: "Entscheidung", text: "Sie wählen die passende Lösung – transparent und nachvollziehbar." },
  ],
  image: "/images/home/beratung.webp",
  imageAlt: "Beratungstisch mit Blick auf die Münsteraner Altstadt",
};

export const existing = {
  eyebrow: "Bereits eine Versicherung?",
  title: "Wir prüfen Ihren bestehenden Vertrag",
  text: "Gern analysieren wir Ihre aktuelle Berufsunfähigkeitsversicherung und prüfen, ob sie noch zu Ihrer heutigen Lebenssituation passt.",
  cta: { label: "Vertrag prüfen lassen", href: "/kontakt" },
};

/** Antworttexte bewusst allgemein formuliert – vor Livegang fachlich prüfen lassen. */
export const faq = {
  eyebrow: "Häufige Fragen zur BU",
  title: "Antworten auf die wichtigsten Fragen",
  items: [
    {
      q: "Was ist Berufsunfähigkeit?",
      a: "Berufsunfähigkeit liegt vor, wenn Sie Ihren zuletzt ausgeübten Beruf aus gesundheitlichen Gründen voraussichtlich dauerhaft nicht mehr oder nur noch eingeschränkt ausüben können. Wie genau das definiert ist, regeln die Bedingungen des jeweiligen Tarifs.",
    },
    {
      q: "Wie viel BU-Rente ist sinnvoll?",
      a: "Das hängt von Ihrem Einkommen, Ihren laufenden Kosten und Ihrer Lebenssituation ab. Wir ermitteln im Gespräch gemeinsam, welche Rentenhöhe zu Ihnen passt, statt eine pauschale Zahl vorzugeben.",
    },
    {
      q: "Bis zu welchem Alter sollte die BU laufen?",
      a: "In der Regel wird die Laufzeit an das geplante Ende des Berufslebens angepasst. Welche Laufzeit für Sie sinnvoll ist, besprechen wir anhand Ihrer persönlichen Planung.",
    },
    {
      q: "Was kostet eine BU?",
      a: "Der Beitrag hängt unter anderem von Alter, Beruf, Gesundheitszustand, Rentenhöhe und Laufzeit ab. Eine pauschale Aussage wäre unseriös – im Erstgespräch erhalten Sie eine individuelle Einschätzung.",
    },
    {
      q: "Was ist der Unterschied zur Erwerbsunfähigkeitsversicherung?",
      a: "Die Erwerbsunfähigkeitsversicherung leistet in der Regel erst, wenn Sie gar keine oder nur noch sehr eingeschränkt Erwerbstätigkeit ausüben können. Die BU knüpft dagegen an Ihren konkreten Beruf an. Die Details unterscheiden sich je nach Tarif.",
    },
    {
      q: "Kann ich meine BU später anpassen?",
      a: "Je nach Tarif gibt es Möglichkeiten, die Absicherung später anzupassen, zum Beispiel bei bestimmten Lebensereignissen. Ob und unter welchen Bedingungen das geht, prüfen wir bei der Tarifauswahl.",
    },
    {
      q: "Was passiert mit meinem Beitrag im Alter?",
      a: "Wie sich der Beitrag entwickelt, hängt vom Tarif ab. In den Bedingungen ist geregelt, ob der Beitrag gleich bleibt oder sich ändern kann. Darauf achten wir beim Vergleich besonders.",
    },
    {
      q: "Wie läuft eine anonyme Risikovoranfrage ab?",
      a: "Ihre gesundheitlichen Angaben werden ohne Namen bei mehreren Versicherern angefragt – noch bevor ein Antrag gestellt wird. So sehen Sie vorab, wie Ihre Chancen auf eine Absicherung voraussichtlich stehen.",
    },
  ],
  more: { label: "Alle Fragen anzeigen", href: "/wissen" },
};

export const finalCta = {
  eyebrow: "Jetzt beraten lassen",
  title: "Lassen Sie uns über Ihre Absicherung sprechen",
  text: "In einem unverbindlichen Erstgespräch analysieren wir Ihre Situation und finden gemeinsam die passende Lösung.",
  cta: { label: "Kostenloses Erstgespräch vereinbaren", href: "/kontakt" },
  checks: [
    { icon: "shield" as BuIconName, label: "Unverbindlich" },
    { icon: "people" as BuIconName, label: "Persönlich" },
    { icon: "video" as BuIconName, label: "Auch per Video möglich" },
  ],
  image: "/images/home/hero-muenster.webp",
};
