/** Inhalte „Weitere Versicherungen“. Allgemeine Informationen – keine Tarife, Summen, Preise oder Leistungsversprechen. */
import type { WvIconName } from "./WvIcon";

export const hero = {
  eyebrow: "Weitere Versicherungen",
  title: ["Weitere Versicherungen.", "Für das Leben, das Sie führen"],
  text: "Für Ihr Zuhause, Ihren Alltag und Ihre persönlichen Pläne. Gemeinsam besprechen wir, welcher Versicherungsschutz zu Ihrer Situation passt.",
  cta: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  image: "/images/home/weitere-versicherungen.webp",
  imageAlt: "Helle, moderne Wohnung mit neutraler Einrichtung im Tageslicht",
};

export type Insurance = { icon: WvIconName; title: string; short: string; text: string; points: string[] };
export type Group = { num: string; title: string; items: Insurance[] };

export const overview = {
  eyebrow: "Überblick",
  title: "Was möchten Sie absichern?",
  text: "Entdecken Sie die verschiedenen Versicherungsbereiche. Mit einem Klick auf die jeweilige Versicherung erfahren Sie mehr. Welche Absicherung zu Ihnen passt, besprechen wir persönlich.",
  questionsLabel: "Fragen für die Beratung",
  link: "Dazu beraten lassen",
  note: "Leistungen, Voraussetzungen und Ausschlüsse unterscheiden sich je nach Versicherer und Tarif.",
  groups: [
    {
      num: "01",
      title: "Alltag & Familie",
      items: [
        { icon: "people", title: "Privathaftpflicht", short: "Haftungsrisiken im privaten Alltag.", text: "Ein Missgeschick kann Schäden bei anderen verursachen. Im Gespräch klären wir, wer mitversichert werden soll und welche Leistungen für Ihren Alltag wichtig sind. Der konkrete Schutz richtet sich nach dem vereinbarten Tarif.", points: ["Versicherte Personen und familiäre Situation", "Versicherungssummen und Selbstbeteiligung", "Besondere Anforderungen, zum Beispiel bei Mietsachschäden oder Schlüsselverlust"] },
        { icon: "scales", title: "Rechtsschutz", short: "Unterstützung bei rechtlichen Auseinandersetzungen.", text: "Rechtsschutz kann für unterschiedliche Lebensbereiche vereinbart werden. Gemeinsam betrachten wir, welche Bereiche für Sie relevant sind und welche Bedingungen, Wartezeiten und Ausschlüsse zu beachten sind.", points: ["Privat-, Berufs-, Verkehrs- oder Wohnbereich", "Wartezeiten und Selbstbeteiligung", "Grenzen bei bereits bestehenden Streitigkeiten"] },
        { icon: "bandage", title: "Unfallversicherung", short: "Leistungen für mögliche Folgen eines Unfalls.", text: "Eine private Unfallversicherung kann je nach Vertrag finanzielle Leistungen für Unfallfolgen vorsehen. Wir besprechen, welche Leistungen zu Ihrer Situation passen und wie Invalidität, Leistungshöhe und zusätzliche Bausteine im jeweiligen Tarif geregelt sind.", points: ["Invaliditätsleistung und Progression", "Zusätzliche vereinbarte Leistungen", "Abgrenzung zur Berufsunfähigkeitsversicherung"] },
        { icon: "paw", title: "Tierhalterhaftpflicht", short: "Haftungsrisiken rund um Ihr Tier.", text: "Wenn ein Tier Schäden verursacht, können Ansprüche gegen den Halter entstehen. Gemeinsam klären wir die passende Absicherung für Ihr Tier und betrachten die jeweiligen Vertragsbedingungen.", points: ["Tierart und persönliche Haltungssituation", "Mitversicherte Personen", "Versicherungssummen, Selbstbeteiligung und besondere Bedingungen"] },
      ],
    },
    {
      num: "02",
      title: "Zuhause & Eigentum",
      items: [
        { icon: "home", title: "Hausratversicherung", short: "Ihre Einrichtung und persönlichen Gegenstände.", text: "Eine Hausratversicherung betrifft die beweglichen Gegenstände in Ihrem Zuhause. Im Gespräch betrachten wir Ihre Wohnsituation, den Wert Ihres Hausrats und die im jeweiligen Vertrag versicherten Gefahren und Leistungen.", points: ["Wohnfläche und Versicherungssumme", "Wertsachen und Entschädigungsgrenzen", "Zusätzliche Bausteine, zum Beispiel Fahrraddiebstahl oder Elementarschäden"] },
        { icon: "building", title: "Wohngebäudeversicherung", short: "Absicherung des eigenen Gebäudes.", text: "Bei einer Wohngebäudeversicherung stehen das Gebäude und die vertraglich versicherten Bestandteile im Mittelpunkt. Für die Beratung sind unter anderem Bauart, Nutzung, Zustand und durchgeführte Modernisierungen relevant.", points: ["Gebäudedaten und Nutzung", "Versicherte Gefahren und Selbstbeteiligung", "Modernisierungen, Anbauten und zusätzliche Bausteine"] },
        { icon: "leaf", title: "Elementarschäden", short: "Zusätzliche Naturgefahren gesondert betrachten.", text: "Elementarschäden werden je nach Vertrag über einen zusätzlichen Baustein abgesichert. Wir betrachten, welche Naturgefahren eingeschlossen werden können und welche Voraussetzungen, Selbstbeteiligungen und Pflichten gelten.", points: ["Einschluss in Hausrat- oder Wohngebäudeversicherung", "Standort und individuelle Risikosituation", "Bedingungen, zum Beispiel zum Rückstauschutz"] },
        { icon: "window", title: "Glasversicherung", short: "Ergänzender Schutz für bestimmte Verglasungen.", text: "Ob eine Glasversicherung sinnvoll ist, hängt unter anderem von den vorhandenen Verglasungen und dem bestehenden Versicherungsschutz ab. Gemeinsam prüfen wir, welche Glasflächen im jeweiligen Vertrag berücksichtigt werden.", points: ["Gebäude- und Mobiliarverglasung", "Besondere Glasflächen", "Überschneidungen und Abgrenzungen zu bestehenden Verträgen"] },
      ],
    },
    {
      num: "03",
      title: "Unterwegs & Gesundheit",
      items: [
        { icon: "car", title: "Kfz-Versicherung", short: "Haftpflicht und Kaskoschutz für Ihr Fahrzeug.", text: "Bei der Kfz-Versicherung betrachten wir Ihre Fahrzeugdaten, die Nutzung und den gewünschten Schutz. Neben der Haftpflicht besprechen wir bei Bedarf Teilkasko, Vollkasko und weitere vertragliche Leistungen.", points: ["Fahrerkreis und jährliche Fahrleistung", "Kaskoschutz und Selbstbeteiligung", "Werkstattbindung und zusätzliche Leistungen"] },
        { icon: "plane", title: "Auslandsreisekrankenversicherung", short: "Krankenversicherungsschutz auf Reisen.", text: "Für Reisen ins Ausland lohnt sich ein Blick auf den vorhandenen Krankenversicherungsschutz. Wir besprechen Reiseziel, Reisedauer und die Bedingungen einer möglichen ergänzenden Absicherung.", points: ["Geltungsbereich und maximale Reisedauer", "Regelungen zu Behandlung und Rücktransport", "Vorerkrankungen und tarifliche Ausschlüsse"] },
        { icon: "tooth", title: "Zahnzusatzversicherung", short: "Ergänzende Leistungen rund um Ihre Zähne.", text: "Eine Zahnzusatzversicherung kann je nach Tarif ergänzende Leistungen vorsehen. Im Gespräch betrachten wir die gewünschten Leistungen sowie Erstattungsgrenzen, Wartezeiten und die Angaben zum aktuellen Zahnstatus.", points: ["Zahnersatz, Zahnbehandlung und Prophylaxe", "Leistungsstaffeln und Erstattungsgrenzen", "Bereits angeratene oder begonnene Behandlungen"] },
        { icon: "plus", title: "Weitere Zusatzversicherungen", short: "Ergänzungen nach Ihrem persönlichen Bedarf.", text: "Zusatzversicherungen können unterschiedliche Bereiche ergänzen, zum Beispiel ambulante oder stationäre Leistungen. Gemeinsam klären wir, welche Wünsche Sie haben und ob eine Ergänzung zu Ihrem bestehenden Schutz passt.", points: ["Gewünschte zusätzliche Leistungen", "Bestehender Versicherungsschutz", "Gesundheitsfragen, Wartezeiten und Leistungsgrenzen"] },
      ],
    },
  ] as Group[],
};

export const review = {
  eyebrow: "Anpassen und Vorausschauen",
  title: "Passt Ihr Versicherungsschutz noch zu Ihrem Leben?",
  text: "Ein Umzug, eine Familie oder neue Pläne können Anlass sein, bestehende Verträge gemeinsam anzusehen. Wir besprechen, was sich verändert hat und welche Fragen zu Ihrem Versicherungsschutz offen sind.",
  items: [
    { title: "Verträge verstehen", text: "Wir sehen uns die bestehenden Verträge und die vereinbarten Leistungen gemeinsam an." },
    { title: "Veränderungen berücksichtigen", text: "Wir besprechen Ihre aktuelle Lebenssituation und neue Anforderungen." },
    { title: "Leistungen und Kosten besprechen", text: "Wir erläutern mögliche Optionen und unterstützen Sie beim Abwägen." },
  ],
};

export const consulting = {
  eyebrow: "Unsere Beratung",
  title: ["Persönlich beraten.", "Verständlich erklärt"],
  text: "Wir nehmen uns Zeit für Ihre Fragen und Ihre bestehenden Verträge. Gemeinsam besprechen wir Ihren Bedarf und mögliche nächste Schritte.",
  // Platzhalter: Szene „Paar beim Spaziergang“ bitte bereitstellen (Pfad hier austauschen)
  image: "/images/home/bu.webp",
  imageAlt: "Menschen verbringen den Abend entspannt am Wasser",
  steps: [
    { title: "Situation besprechen", text: "Sie erzählen uns von Ihrer Lebenssituation und Ihren Wünschen." },
    { title: "Bestehenden Schutz ansehen", text: "Wir betrachten vorhandene Verträge und klären offene Fragen zu den vereinbarten Leistungen." },
    { title: "Möglichkeiten abwägen", text: "Wir besprechen mögliche Anpassungen mit ihren Leistungen, Kosten und Bedingungen." },
  ],
};

export const faq = {
  eyebrow: "Häufige Fragen",
  title: "Gut zu wissen",
  text: "Hier finden Sie Antworten auf häufige Fragen rund um weitere Versicherungen. Ihre persönliche Situation besprechen wir im Gespräch.",
  items: [
    { q: "Kann ich bestehende Verträge mitbringen?", a: "Ja. Ihre bisherigen Versicherungsunterlagen helfen uns, den vorhandenen Schutz zu verstehen. Bringen Sie nach Möglichkeit Versicherungsscheine und aktuelle Vertragsinformationen mit." },
    { q: "Muss ich meine Versicherung wechseln?", a: "Nein. Zunächst betrachten wir Ihre Situation und Ihre bestehenden Verträge. Ob eine Anpassung oder ein Wechsel sinnvoll ist, besprechen wir anschließend gemeinsam." },
    { q: "Welche Unterlagen sind hilfreich?", a: "Hilfreich sind aktuelle Versicherungsscheine, Angaben zu Beiträgen und Selbstbeteiligungen sowie Informationen zu Veränderungen Ihrer Lebenssituation. Welche Unterlagen wir konkret benötigen, klären wir vorab." },
    { q: "Wie läuft das Erstgespräch ab?", a: "Im Erstgespräch sprechen wir über Ihre Fragen und Ihren Beratungsbedarf. Anschließend klären wir, welche Informationen für die nächsten Schritte erforderlich sind." },
    { q: "Kann ich mehrere Versicherungen gemeinsam besprechen?", a: "Ja. Sie können mehrere Themen mitbringen. So lassen sich bestehende Verträge und Ihre aktuelle Lebenssituation im Zusammenhang betrachten." },
  ],
};

export const finalCta = {
  eyebrow: "Ihr nächster Schritt",
  title: "Lassen Sie uns über Ihren Schutz sprechen",
  text: "Gemeinsam klären wir Ihre Fragen und die nächsten Schritte.",
  cta: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
};

export const contactHref = "/kontakt";
