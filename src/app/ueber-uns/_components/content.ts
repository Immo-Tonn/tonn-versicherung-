/** Inhalte „Über uns“. Nur bestätigte Angaben – keine zusätzlichen Titel, Registrierungen, Zahlen oder Kontakte. */
export const hero = {
  eyebrow: "Über uns",
  title: ["Persönlich da.", "Klar beraten"],
  text: "Andreas und Natalia Tonn in Münster: persönliche Versicherungsvermittlung mit Schwerpunkt private Krankenversicherung und Berufsunfähigkeit – unterstützt durch klare Organisation und sorgfältige Abläufe.",
  image: "/images/ueber-uns/about-hero.png" as string | null,
};

export const intro = {
  title: "Versicherung ist Vertrauenssache",
  text: "Bei TONN Versicherungsberatung in Münster haben Sie persönliche Ansprechpartner. Andreas Tonn begleitet Sie bei Versicherungsfragen und bespricht mit Ihnen Ihre Situation, bestehende Verträge und mögliche nächste Schritte.",
  text2: "Natalia Tonn verantwortet Backoffice, Organisation, Technik und Finanzen. Sie kümmert sich um die Abläufe im Hintergrund, damit im Beratungsgespräch Raum für Ihre Fragen bleibt.",
  tags: "Persönlich · Verständlich · Gut organisiert",
  image: "/images/ueber-uns/tonn-team.png",
  imageAlt: "Andreas und Natalia Tonn",
  width: 1448,
  height: 1086,
};

export type Timeline = { period: string; text: string };
/** Absatz aus Text- und Link-Teilen (echte interne Links, Routen aus dem Projekt) */
export type Part = string | { text: string; href: string };
export type Paragraph = Part[];

export const people = {
  title: "Ihre Ansprechpartner",
  andreas: {
    name: "Andreas Tonn",
    role: "Versicherungsvermittler",
    image: "/images/ueber-uns/andreas-tonn.png",
    alt: "Andreas Tonn",
    paragraphs: [
      ["Andreas Tonn ist seit 1991 in der Versicherungsbranche tätig. Nach seiner Ausbildung zum Versicherungsfachmann (BWV) bei der Continentale arbeitete er in der Generalagentur Wolfgang Tonn und anschließend als freier Versicherungsvermittler in Münster. Von Mai 2006 bis 2022 führte er die Generalagentur Alte Leipziger in Münster mit Büros in Dülmen und Rhede. Seit 2022 ist er wieder als freier Versicherungsvermittler tätig."],
      ["Seine Beratungsschwerpunkte sind die ", { text: "private Krankenversicherung", href: "/private-krankenversicherung" }, " und die ", { text: "Berufsunfähigkeitsversicherung", href: "/berufsunfaehigkeitsversicherung" }, ". Er begleitet Kundinnen und Kunden aus Münster und dem Münsterland bei Fragen zur passenden Absicherung und zu bestehenden Verträgen."],
      ["Im persönlichen Gespräch werden Ihre Lebenssituation, Ihre Wünsche und die jeweiligen Vertragsbedingungen gemeinsam betrachtet. Auch zu ", { text: "Kapitalanlage", href: "/kapitalanlage" }, " und ", { text: "weiteren Versicherungen", href: "/versicherungen" }, " können Sie Ihre Fragen mitbringen. Ziel ist eine verständliche Grundlage für Ihre Entscheidung."],
    ],
    accordion: "Beruflicher Weg",
    timeline: [
      { period: "1991–1992", text: "Ausbildung zum Versicherungsfachmann (BWV) bei der Continentale." },
      { period: "1992–2004", text: "Selbständiger Versicherungsverkäufer in der Generalagentur Wolfgang Tonn." },
      { period: "2005–2006", text: "Freier Versicherungsvermittler in Münster." },
      { period: "01.05.2006–2022", text: "Generalagentur Alte Leipziger in Münster mit Büros in Dülmen und Rhede." },
      { period: "Seit 2022", text: "Freier Versicherungsvermittler." },
    ] as Timeline[],
  },
  natalia: {
    name: "Natalia Tonn",
    role: "Backoffice, Organisation und Finanzen",
    image: "/images/ueber-uns/natalia-tonn.png",
    alt: "Natalia Tonn",
    paragraphs: [
      ["Natalia Tonn verantwortet die organisatorische und technische Seite des Büros sowie den kaufmännischen Bereich. Sie kümmert sich um Unterlagen, Anträge und Abläufe im Hintergrund – damit in der Beratung selbst Zeit für das persönliche Gespräch bleibt."],
      ["Sie organisiert die internen Prozesse und betreut die technischen Abläufe des Büros. Dabei behält sie die einzelnen Arbeitsschritte und deren Zusammenspiel im Blick."],
      ["Ihre wirtschaftswissenschaftliche Ausbildung bringt sie in die Organisation und kaufmännische Steuerung des Büros ein. So ergänzt sie die Versicherungsvermittlung von Andreas Tonn um eine strukturierte Betreuung im Hintergrund."],
    ],
    accordion: "Qualifikationen",
    qualification: ["Diplom-Spezialistin, Fachrichtung Finanzen", "Qualifikation: Ökonomin", "Staatliche Universität Sewastopol, Ukraine"],
    phone: { label: "0251 62560763", href: "tel:+4925162560763" },
    email: { label: "natali-tonn@web.de", href: "mailto:natali-tonn@web.de" },
  },
};

export const cta = {
  title: "Zeit für Ihre Fragen",
  text: "Ob private Krankenversicherung, Berufsunfähigkeit oder Fragen zu bestehenden Verträgen: Lassen Sie uns Ihre Situation und die nächsten Schritte persönlich besprechen.",
  button: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  // vorhandenes Platzhalter-Bild (helles Büro); eigenes Foto „Beratungstisch mit zwei Sesseln“ kann hier eingetragen werden
  image: "/images/pkv/bu-hero-office.webp",
  imageAlt: "Helles Büro mit Schreibtisch und Blick auf die Stadt (Illustration)",
};
