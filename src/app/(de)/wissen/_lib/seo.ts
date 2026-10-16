/**
 * SEO-Metadaten der Ratgeber-Beiträge (nur unsichtbare Metadaten – H1 und Texte stehen in articles.ts).
 * Title inkl. Marke, Description ca. 140–160 Zeichen. Hauptanfrage zur Zuordnung/Kannibalisierungs-Prüfung.
 */
export type ArticleSeo = { title: string; description: string; query: string };

export const articleSeo: Record<string, ArticleSeo> = {
  "pkv-oder-gkv": {
    title: "PKV oder GKV: Unterschiede und Entscheidungshilfe | TONN",
    description: "Wer kann zwischen gesetzlicher und privater Krankenversicherung wählen? Beiträge, Leistungen und Entscheidungskriterien im verständlichen Überblick.",
    query: "PKV oder GKV",
  },
  "anonyme-risikovoranfrage": {
    title: "Anonyme Risikovoranfrage bei PKV und BU: Ablauf | TONN",
    description: "Was ist eine anonyme Risikovoranfrage? Ablauf, Nutzen und Grenzen bei privater Krankenversicherung und Berufsunfähigkeitsversicherung verständlich erklärt.",
    query: "Anonyme Risikovoranfrage PKV",
  },
  "tarifwechsel-pkv": {
    title: "PKV-Tarifwechsel nach § 204 VVG: Möglichkeiten | TONN",
    description: "Wann ist ein Tarifwechsel in der PKV möglich, was passiert mit der Alterungsrückstellung und worauf sollten Sie vor einem Wechsel achten?",
    query: "PKV Tarifwechsel § 204 VVG",
  },
  "bu-rente-planen": {
    title: "BU-Rente planen: Höhe, Laufzeit und Ansprüche | TONN",
    description: "Wie hoch sollte eine BU-Rente sein, wie lange soll sie laufen und welche Ansprüche bestehen schon? Leitfaden zur Planung der Berufsunfähigkeitsversicherung.",
    query: "BU-Rente planen",
  },
  "gesundheitsfragen-bu": {
    title: "Gesundheitsfragen bei der BU: richtig vorbereiten | TONN",
    description: "Warum vollständige Angaben bei den Gesundheitsfragen der BU so wichtig sind, was bei falschen Angaben passieren kann und wie Sie sich vorbereiten.",
    query: "BU Gesundheitsfragen",
  },
  "bu-vertragsbedingungen": {
    title: "BU-Vertragsbedingungen: wichtige Begriffe erklärt | TONN",
    description: "Berufsunfähigkeit, abstrakte Verweisung, Nachversicherung, Dynamik: Die wichtigsten Begriffe in den Bedingungen einer BU verständlich erklärt.",
    query: "BU Vertragsbedingungen abstrakte Verweisung",
  },
  "berufsunfaehigkeit-ursachen-folgen": {
    title: "Berufsunfähigkeit: Ursachen und finanzielle Folgen | TONN",
    description: "Welche Ursachen zu Berufsunfähigkeit führen können, warum auch Büroberufe betroffen sind und was ein Einkommensausfall finanziell bedeutet.",
    query: "Berufsunfähigkeit Ursachen",
  },
  "grundlagen-kapitalanlage": {
    title: "Kapitalanlage Grundlagen: Ziele, Zeit, Risiko, Kosten | TONN",
    description: "Wie Sie Ihre Geldanlage vorbereiten: Finanzüberblick, Rücklagen, Anlageziel, Anlagehorizont, Risiko und Kosten – mit Quellen der BaFin.",
    query: "Kapitalanlage Grundlagen",
  },
  "streuung-kapitalanlage": {
    title: "Streuung in der Geldanlage: Möglichkeiten und Grenzen | TONN",
    description: "Was bedeutet Streuung (Diversifikation) bei der Geldanlage, wie funktioniert sie und warum beseitigt sie nicht alle Risiken? Mit Quellen der BaFin.",
    query: "Streuung Geldanlage Diversifikation",
  },
};
