import type { SubPageContent } from "./types";

export const angestellte: SubPageContent = {
  path: "/private-krankenversicherung/angestellte",
  crumb: "PKV für Angestellte",
  title: "PKV für Angestellte: Wechsel, Grenze und Zuschuss",
  answer:
    "Angestellte können in die private Krankenversicherung wechseln, wenn ihr regelmäßiges Jahresarbeitsentgelt die Versicherungspflichtgrenze übersteigt. Sie liegt 2026 bei 77.400 Euro im Jahr. Der Arbeitgeber zahlt unter bestimmten Voraussetzungen einen Zuschuss. Ob der Wechsel sinnvoll ist, hängt aber nicht nur vom Beitrag ab, sondern auch von Familie, Gesundheit und der langfristigen Planung.",
  blocks: [
    { t: "h2", text: "Wann Angestellte in die PKV wechseln können" },
    {
      t: "p",
      text: "Angestellte sind in der gesetzlichen Krankenversicherung versicherungsfrei, wenn ihr regelmäßiges Jahresarbeitsentgelt die Jahresarbeitsentgeltgrenze übersteigt (§ 6 Abs. 1 Nr. 1 SGB V). Diese Grenze wird auch Versicherungspflichtgrenze genannt. Für 2026 beträgt sie 77.400 Euro im Jahr, das sind 6.450 Euro im Monat. Sie wird jedes Jahr zum 1. Januar angepasst.",
    },
    {
      t: "p",
      text: "Wird die Grenze überschritten, endet die Versicherungspflicht zum Ende des Kalenderjahres, in dem das geschieht (§ 6 Abs. 4 SGB V). Eine Ausnahme gilt, wenn das Entgelt im folgenden Jahr unter der dann geltenden Grenze bleibt. Ein Wechsel ist deshalb in der Regel zum Jahreswechsel möglich. Prüfen Sie rechtzeitig, ob Ihr Einkommen die Grenze auch künftig dauerhaft übersteigt.",
    },
    {
      t: "note",
      label: "Gut zu wissen",
      text: "Maßgeblich ist das regelmäßige Jahresarbeitsentgelt. Wie einzelne Bestandteile Ihres Einkommens angerechnet werden, hängt von Ihrem Arbeitsvertrag ab. Lassen Sie das im Zweifel vor dem Wechsel klären.",
    },

    { t: "h2", text: "Der Arbeitgeberzuschuss" },
    {
      t: "p",
      text: "Privat versicherte Angestellte erhalten von ihrem Arbeitgeber einen Beitragszuschuss (§ 257 Abs. 2 SGB V). Er entspricht der Hälfte des allgemeinen Beitragssatzes der gesetzlichen Krankenversicherung zuzüglich der Hälfte des durchschnittlichen Zusatzbeitragssatzes, höchstens aber der Hälfte Ihres tatsächlichen PKV-Beitrags. Sie tragen den übrigen Teil selbst.",
    },
    {
      t: "p",
      text: "Der Zuschuss gibt es nur, wenn Ihr Tarif Leistungen bietet, die der Art nach denen der gesetzlichen Krankenversicherung entsprechen. Außerdem muss das Versicherungsunternehmen bestimmte gesetzliche Anforderungen erfüllen (§ 257 Abs. 2a SGB V), und Sie müssen Ihrem Arbeitgeber alle drei Jahre eine Bescheinigung des Versicherers vorlegen. Fragen Sie vor dem Abschluss, ob ein Tarif diese Voraussetzungen erfüllt.",
    },

    { t: "h2", text: "Vorteile und Grenzen der PKV" },
    { t: "h3", text: "Das kann für die PKV sprechen" },
    {
      t: "ul",
      items: [
        "Der Beitrag hängt nicht vom Einkommen ab, sondern unter anderem von Alter, Gesundheitszustand beim Eintritt, Tarif und Selbstbehalt.",
        "Leistungen und Selbstbehalt lassen sich vertraglich vereinbaren und an die eigenen Bedürfnisse anpassen.",
        "Für Alleinstehende und kinderlose Paare, bei denen beide berufstätig sind, kann die PKV finanziell sinnvoll sein (so die Verbraucherzentrale).",
      ],
    },
    { t: "h3", text: "Das sollten Sie bedenken" },
    {
      t: "ul",
      items: [
        "Vor dem Abschluss stellt der Versicherer Gesundheitsfragen. Vorerkrankungen können zu Risikozuschlägen, Leistungsausschlüssen oder zur Ablehnung führen.",
        "Beiträge können im Laufe der Jahre steigen. Versicherer dürfen sie bei dauerhaft gestiegenen Kosten anpassen, wenn ein unabhängiger Treuhänder zustimmt (BaFin).",
        "Beiträge sinken nicht automatisch, wenn Sie in den Ruhestand gehen. Die Verbraucherzentrale empfiehlt, dafür Rücklagen zu bilden.",
        "Eine Rückkehr in die gesetzliche Krankenversicherung ist oft schwierig oder nicht möglich. Ab dem 55. Lebensjahr gelten dafür besondere Einschränkungen (§ 6 Abs. 3a SGB V).",
      ],
    },
    {
      t: "link",
      text: "PKV oder GKV: Unterschiede und Entscheidungskriterien",
      href: "/wissen/pkv-oder-gkv",
    },

    { t: "h2", text: "Familie und langfristige Kosten" },
    {
      t: "p",
      text: "In der gesetzlichen Krankenversicherung können Kinder, Ehegatten und Lebenspartner ohne eigenen Beitrag familienversichert sein. In der PKV gibt es das nicht: Jede Person braucht einen eigenen Vertrag mit eigenem Beitrag. Das gilt auch für Kinder und für Partner ohne Einkommen.",
    },
    {
      t: "p",
      text: "Gerade bei Familienplanung lohnt sich ein Blick nach vorn. Wie entwickeln sich Ihre Einkünfte, etwa bei Elternzeit, Teilzeit oder einem Jobwechsel? Wie hoch wäre der Gesamtbeitrag für die ganze Familie? Und wie tragfähig ist der Beitrag, wenn das Einkommen im Alter sinkt?",
    },
    {
      t: "note",
      label: "Beispiel (vereinfacht)",
      text: "Ein Paar, bei dem beide berufstätig sind und keine Kinder planen, stellt andere Fragen als eine Familie mit zwei Kindern und nur einem Einkommen. Im ersten Fall steht der eigene Beitrag im Vordergrund, im zweiten kommen die Beiträge für Partner und Kinder hinzu. Das Beispiel ersetzt keine Berechnung für Ihre Situation.",
    },

    { t: "h2", text: "Worauf Sie bei der Tarifwahl achten sollten" },
    {
      t: "ul",
      items: [
        "Leistungsumfang: Vergleichen Sie Leistungen, Bedingungen und Selbstbehalt, nicht nur den ersten Beitrag.",
        "Beitragsentwicklung: Fragen Sie nach Alterungsrückstellung, bisherigen Beitragsanpassungen und der Tragfähigkeit im Ruhestand.",
        "Zuschussfähigkeit: Prüfen Sie, ob der Tarif die Voraussetzungen für den Arbeitgeberzuschuss erfüllt.",
        "Gesundheitsfragen: Beantworten Sie sie vollständig und wahrheitsgemäß. Bei Vorerkrankungen kann eine anonyme Risikovoranfrage vorab Klarheit schaffen.",
        "Vorsicht bei Billigtarifen mit gekürzten Leistungen: Die Verbraucherzentrale rät davon ab, aus reinen Kostengründen in die PKV zu wechseln.",
        "Zeit nehmen: Holen Sie Angebote ohne Zeitdruck ein und vergleichen Sie sie mit Ihrer bestehenden Absicherung.",
      ],
    },
    { t: "link", text: "Anonyme Risikovoranfrage: Ablauf, Nutzen und Grenzen", href: "/wissen/anonyme-risikovoranfrage" },
    { t: "link", text: "PKV für Selbstständige und Freiberufler: Tarife, Selbstbehalt und Krankentagegeld", href: "/private-krankenversicherung/selbststaendige" },
    { t: "link", text: "PKV für Beamte: Beihilfe, Restkostenversicherung und Familie", href: "/private-krankenversicherung/beamte" },
    {
      t: "p",
      text: "Diese Seite ist eine allgemeine Information und ersetzt keine persönliche Beratung. Zahlen wie die Versicherungspflichtgrenze ändern sich jedes Jahr, die genannten Werte gelten für 2026.",
    },
  ],
  sources: [
    { label: "Bundesregierung: Beitragsbemessungsgrenzen 2026 (Versicherungspflichtgrenze)", url: "https://www.bundesregierung.de/breg-de/aktuelles/beitragsgemessungsgrenzen-2386514" },
    { label: "Gesetze im Internet: § 6 SGB V, Versicherungsfreiheit", url: "https://www.gesetze-im-internet.de/sgb_5/__6.html" },
    { label: "Gesetze im Internet: § 257 SGB V, Beitragszuschüsse für Beschäftigte", url: "https://www.gesetze-im-internet.de/sgb_5/__257.html" },
    { label: "Bundesgesundheitsministerium: Beiträge der gesetzlichen Krankenversicherung", url: "https://www.bundesgesundheitsministerium.de/beitraege" },
    { label: "BaFin: Private Kranken- und Pflegepflichtversicherung", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung.html" },
    { label: "Verbraucherzentrale: Private Krankenversicherung, nicht für jeden sinnvoll", url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/private-krankenversicherung-nicht-fuer-jeden-sinnvoll-13884" },
  ],
};
