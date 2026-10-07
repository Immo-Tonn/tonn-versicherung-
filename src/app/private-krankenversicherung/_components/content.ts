/** Inhalte der Seite „Private Krankenversicherung“ (seitenspezifisch). */

export const hero = {
  eyebrow: "Private Krankenversicherung",
  title: ["Private", "Krankenversicherung"], // roter Punkt (Hero) ersetzt den Satzpunkt
  soft: "Die zu Ihrem Leben passt",
  subtitle: ["Persönlich beraten. Unabhängig verglichen.", "Langfristig gedacht."],
  primary: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  secondary: { label: "Online-Termin vereinbaren", href: "/kontakt" },
  image: "/images/pkv/andreas-hero.webp",
  imageAlt: "Andreas Tonn im Beratungsgespräch",
};

export const trust = [
  { icon: "shield" as const, title: "Unabhängige Beratung", text: "ohne Verpflichtung" },
  { icon: "document" as const, title: "Anonyme Risikovoranfrage", text: "bei mehreren Versicherern" },
  { icon: "user" as const, title: "Persönliche Betreuung", text: "in Münster und deutschlandweit" },
];

export const targets = {
  eyebrow: "Für wen ist die PKV interessant?",
  title: ["Unterschiedliche Lebenswege", "Individuelle Lösungen"],
  text: "Ob angestellt, selbstständig oder verbeamtet – wir finden gemeinsam heraus, ob die private Krankenversicherung zu Ihrer aktuellen Situation und Ihren Zukunftsplänen passt.",
  cards: [
    { title: "Angestellte", text: "bei einem Einkommen über der Versicherungspflichtgrenze.", more: "Für Angestellte kann die private Krankenversicherung ab Überschreiten der Versicherungspflichtgrenze eine Alternative zur gesetzlichen Krankenversicherung sein. Entscheidend sind dabei nicht nur der Beitrag, sondern auch Leistungen, Tarifgestaltung und die persönliche Lebensplanung.", image: "/images/pkv/pkv-angestellte.webp", alt: "Hände einer Angestellten am Laptop im Büro" },
    { title: "Selbstständige", text: "Mehr Flexibilität und individueller Schutz.", more: "Selbstständige und Freiberufler können ihren Krankenversicherungsschutz individuell gestalten. Gemeinsam vergleichen wir Tarife und Leistungen und achten darauf, dass die Absicherung auch langfristig zu Ihrer beruflichen und privaten Situation passt.", image: "/images/pkv/pkv-selbststaendige.webp", alt: "Arbeitsplatz mit Laptop, Notizbuch und Blick über die Stadt" },
    { title: "Beamte", text: "PKV in Kombination mit Beihilfe.", more: "Für Beamte und Beamtenanwärter kann die private Krankenversicherung in Verbindung mit der Beihilfe eine passende Lösung sein. Dabei berücksichtigen wir Beihilfeanspruch, gewünschte Leistungen und die persönliche Situation.", image: "/images/pkv/pkv-beamte.webp", alt: "Rathaus-Fassade im Sonnenlicht" },
  ],
  cta: "Mehr erfahren",
  ctaClose: "Weniger anzeigen",
};

export const process = {
  eyebrow: "So läuft die Beratung ab",
  title: "Erst prüfen. Dann entscheiden",
  steps: [
    { icon: "chat" as const, title: "Kurzes Gespräch", text: "Ihre Situation und Ziele verstehen." },
    { icon: "document" as const, title: "Anonyme Risikovoranfrage", text: "bei mehreren Versicherern." },
    { icon: "chart" as const, title: "Ergebnisse vergleichen", text: "Transparente Empfehlung." },
    { icon: "check" as const, title: "Gemeinsam entscheiden", text: "In Ruhe und ohne Druck." },
  ],
  cta: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
};

export const risk = {
  id: "risikovoranfrage",
  eyebrow: "Gesundheitliche Vorgeschichte?",
  title: ["Das muss kein", "Ausschlusskriterium sein"],
  text: "Wir führen eine anonyme Risikovoranfrage bei passenden Versicherern durch – noch bevor ein offizieller Antrag gestellt wird. So erfahren Sie, wie Ihre Angaben voraussichtlich eingeschätzt werden, ohne dass dies bereits als Antrag gewertet wird.",
  cta: { label: "Mehr zur Risikovoranfrage", href: "/kontakt" },
  flow: [
    { icon: "document" as const, lines: ["Ihre", "Angaben"] },
    { icon: "search" as const, lines: ["Anonyme", "Prüfung"] },
    { icon: "building" as const, lines: ["Mehrere", "Versicherer"] },
    { icon: "heart" as const, lines: ["Ergebnis"] },
  ],
  resultsLabel: "Mögliche Ergebnisse:",
  results: ["Normalannahme", "Risikozuschlag", "Leistungsausschluss", "Ablehnung"],
};

export const compare = {
  eyebrow: "PKV oder GKV?",
  title: ["Was sind die wichtigsten", "Unterschiede?"],
  image: "/images/pkv/pkv-gkv-lake.webp",
  imageAlt: "Frau sitzt auf einem Steg und blickt über einen See im Abendlicht",
  head: ["", "GKV", "PKV"],
  rows: [
    ["Beitrag", "einkommensabhängig", "nach Tarif / Risiko"],
    ["Leistungen", "gesetzlich geregelt", "vertraglich vereinbar"],
    ["Familie", "Familienversicherung möglich", "jede Person eigener Vertrag"],
    ["Flexibilität", "einheitlicher Rahmen", "individuell konfigurierbar"],
  ],
  note: "PKV ist nicht automatisch besser.",
  noteText: "Entscheidend ist, welches System zu Ihrer Lebenssituation passt.",
};

export const about = {
  eyebrow: "Ihr Ansprechpartner",
  title: "Persönlich. Erfahren. An Ihrer Seite",
  text: "Ich bin Andreas Tonn, unabhängiger Versicherungsmakler mit Schwerpunkt auf private Krankenversicherung. Mein Ziel ist es, Ihnen verständlich, ehrlich und transparent die beste Lösung für Ihre Situation zu finden.",
  cta: { label: "Mehr über Andreas Tonn", href: "/ueber-uns" },
  image: "/images/pkv/pkv-ansprechpartner.webp",
  imageAlt: "Beratungsgespräch am Tisch mit Unterlagen",
};

export const secondOpinion = {
  eyebrow: "Bereits ein Angebot?",
  title: "Holen Sie sich eine zweite Meinung",
  text: "Wir schauen uns Ihr PKV-Angebot, die Leistungen, Selbstbeteiligung und wichtige Vertragsdetails gemeinsam mit Ihnen an.",
  cta: { label: "Angebot prüfen lassen", href: "/kontakt" },
  image: "/images/home/beratung.webp",
  imageAlt: "Beratungstisch mit Blick auf die Münsteraner Altstadt",
};

/** Antworttexte bewusst vorsichtig formuliert – vor Livegang fachlich prüfen lassen. */
export const faq = {
  eyebrow: "Häufige Fragen",
  title: ["Antworten auf", "die wichtigsten Fragen"],
  items: [
    {
      q: "Ab welchem Einkommen kann ich in die PKV wechseln?",
      a: "Angestellte können in die PKV wechseln, wenn ihr regelmäßiges Jahreseinkommen die Versicherungspflichtgrenze übersteigt. Diese Grenze wird jährlich angepasst. Für Selbstständige und Beamte gelten andere Voraussetzungen. Wie das in Ihrem Fall aussieht, klären wir gern im Erstgespräch.",
    },
    {
      q: "Was kostet eine private Krankenversicherung?",
      a: "Der Beitrag hängt unter anderem von Alter, Gesundheitszustand beim Eintritt, gewähltem Tarif, Leistungsumfang und einer möglichen Selbstbeteiligung ab. Eine pauschale Zahl wäre unseriös – im Erstgespräch erhalten Sie eine individuelle Einschätzung.",
    },
    {
      q: "Was passiert mit meinem Beitrag im Alter?",
      a: "Beiträge in der PKV können sich im Laufe der Zeit verändern, zum Beispiel durch steigende Gesundheitskosten. In die Beitragsberechnung fließen Altersrückstellungen ein, die genau dafür aufgebaut werden. Wir besprechen mit Ihnen, worauf Sie bei der Tarifwahl achten sollten.",
    },
    {
      q: "Was ist eine anonyme Risikovoranfrage?",
      a: "Bei der anonymen Risikovoranfrage werden Ihre gesundheitlichen Angaben ohne Namen bei mehreren Versicherern eingereicht – noch bevor ein Antrag gestellt wird. So sehen Sie, wie die Versicherer Ihr Risiko voraussichtlich einschätzen.",
    },
  ],

  more: { label: "Alle Fragen anzeigen", href: "/wissen" },
};

export const finalCta = {
  eyebrow: "Jetzt beraten lassen",
  title: ["Noch unsicher, ob die PKV", "zu Ihnen passt?"],
  text: "Persönliches und unverbindliches Erstgespräch.",
  cta: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  checks: [
    { icon: "shield" as const, label: "Unverbindlich" },
    { icon: "people" as const, label: "Persönlich" },
    { icon: "video" as const, label: "Auch per Video möglich" },
  ],
  image: "/images/home/hero-muenster.webp",
};
