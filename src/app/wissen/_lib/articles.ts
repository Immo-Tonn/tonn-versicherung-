/**
 * Ratgeber-Beiträge. Inhalte stützen sich auf die jeweils unter „sources“ genannten Primärquellen.
 * Hinweis: Noch nicht fachlich durch Andreas Tonn geprüft – deshalb bewusst ohne Autoren- und Prüfvermerk.
 * `published: false` → keine Route, kein Sitemap-Eintrag, auf der Übersicht nur als Text.
 */
export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "example"; text: string };

export type Source = { label: string; url: string };

export type Article = {
  slug: string;
  published: boolean;
  topic: "Private Krankenversicherung" | "Berufsunfähigkeit" | "Kapitalanlage";
  title: string;
  metaTitle: string;
  description: string;
  answer: string;
  blocks: Block[];
  sources: Source[];
  related: string[];
};

const VVG = (n: number, label: string): Source => ({ label, url: `https://www.gesetze-im-internet.de/vvg_2008/__${n}.html` });

export const articles: Article[] = [
  {
    slug: "pkv-oder-gkv",
    published: true,
    topic: "Private Krankenversicherung",
    title: "PKV oder GKV: Unterschiede und Entscheidungskriterien",
    metaTitle: "PKV oder GKV: Unterschiede und Entscheidungskriterien",
    description: "Wer kann zwischen gesetzlicher und privater Krankenversicherung wählen, wie unterscheiden sich Beiträge und Leistungen und welche Kriterien zählen? Ein verständlicher Überblick.",
    answer:
      "Ob PKV oder GKV besser passt, hängt von Ihrer Situation ab. Zuerst zählt, ob Sie überhaupt wählen können: Das hängt vor allem von Beschäftigung und Einkommen ab. Danach sind Beitragsentwicklung, Familie, Gesundheit und Ihre langfristige Planung entscheidend. Die private Krankenversicherung ist nicht automatisch die bessere Lösung.",
    blocks: [
      { t: "h2", text: "Können Sie überhaupt wählen?" },
      { t: "p", text: "Die Wahl zwischen gesetzlicher und privater Krankenversicherung steht nicht allen offen. Für Angestellte endet die Versicherungspflicht in der gesetzlichen Krankenversicherung, wenn das regelmäßige Jahresarbeitsentgelt die Jahresarbeitsentgeltgrenze übersteigt (§ 6 Abs. 1 Nr. 1 SGB V). Für 2026 liegt diese Versicherungspflichtgrenze bei 77.400 Euro im Jahr, das sind 6.450 Euro im Monat. Wird sie überschritten, endet die Versicherungspflicht grundsätzlich zum Ende des Kalenderjahres (§ 6 Abs. 4 SGB V)." },
      { t: "p", text: "Beamtinnen und Beamte sind in der gesetzlichen Krankenversicherung versicherungsfrei, wenn sie nach beamtenrechtlichen Vorschriften Anspruch auf Fortzahlung der Bezüge und auf Beihilfe oder Heilfürsorge haben (§ 6 Abs. 1 Nr. 2 SGB V). Auch Selbstständige und Freiberufler können sich privat versichern. Wie das in Ihrem Fall konkret aussieht, hängt von Ihrer Erwerbsform und Ihrer bisherigen Versicherung ab." },
      { t: "h2", text: "So unterscheiden sich die Beiträge" },
      { t: "p", text: "In der gesetzlichen Krankenversicherung richtet sich der Beitrag nach den beitragspflichtigen Einnahmen. Berücksichtigt werden Einkünfte nur bis zur Beitragsbemessungsgrenze, 2026 sind das 69.750 Euro im Jahr. Der allgemeine Beitragssatz beträgt 14,6 Prozent, hinzu kommt ein kassenindividueller Zusatzbeitrag (durchschnittlich 2,9 Prozent). Arbeitnehmer und Arbeitgeber tragen die Beiträge je zur Hälfte. Kinder, Ehegatten und Lebenspartner können beitragsfrei familienversichert sein." },
      { t: "p", text: "In der privaten Krankenversicherung hängt der Beitrag nicht vom Einkommen ab, sondern unter anderem von Alter und Gesundheitszustand beim Eintritt, vom gewählten Tarif und Leistungsumfang und von einer möglichen Selbstbeteiligung. Eine beitragsfreie Familienversicherung wie in der GKV gibt es nicht, Familienmitglieder werden einzeln versichert. Für das Alter bilden Versicherer Alterungsrückstellungen. Beiträge können dennoch steigen: Versicherer dürfen sie bei dauerhaft gestiegenen Kosten anpassen, wenn ein unabhängiger Treuhänder zustimmt." },
      { t: "h2", text: "Kriterien für Ihre Entscheidung" },
      { t: "ul", items: [
        "Wählbarkeit: Gehören Sie zu den Personengruppen, die sich privat versichern können?",
        "Einkommen und Planbarkeit: Wie sicher ist Ihr Einkommen in den nächsten Jahren, auch bei Elternzeit, Teilzeit oder Selbstständigkeit?",
        "Familie: Planen Sie Kinder oder ist Ihr Partner nicht berufstätig? In der PKV braucht jede Person einen eigenen Vertrag.",
        "Leistungen: Welche Leistungen brauchen Sie? Das gesetzliche Leistungsspektrum ist einheitlich geregelt, in der PKV vereinbaren Sie es vertraglich.",
        "Gesundheit: In der PKV stellt der Versicherer vor Vertragsschluss Gesundheitsfragen. Vorerkrankungen können zu Risikozuschlag, Leistungsausschluss oder Ablehnung führen.",
        "Beitrag im Alter: Wie tragfähig ist der Beitrag auch dann, wenn das Einkommen sinkt?",
      ] },
      { t: "example", text: "Eine angestellte Person liegt mit ihrem Einkommen erstmals über der Versicherungspflichtgrenze. Sie ist gesund, plant aber in einigen Jahren Kinder. Für sie ist nicht nur der heutige Beitrag wichtig, sondern auch, wie sich die Kosten für eine Familie in beiden Systemen entwickeln würden." },
      { t: "h2", text: "Grenzen dieser Übersicht" },
      { t: "p", text: "Dieser Beitrag ersetzt keine Beratung. Rechengrößen wie Versicherungspflichtgrenze und Beitragsbemessungsgrenze werden jedes Jahr angepasst, die genannten Werte gelten für 2026. Ob ein Wechsel für Sie sinnvoll ist, hängt von Ihrer beruflichen, gesundheitlichen und finanziellen Situation ab. Ein späterer Wechsel zurück in die gesetzliche Krankenversicherung ist nicht in jedem Fall möglich." },
    ],
    sources: [
      { label: "Bundesregierung: Beitragsbemessungsgrenzen 2026 (Versicherungspflichtgrenze, Beitragsbemessungsgrenze)", url: "https://www.bundesregierung.de/breg-de/aktuelles/beitragsgemessungsgrenzen-2386514" },
      { label: "Gesetze im Internet: § 6 SGB V, Versicherungsfreiheit", url: "https://www.gesetze-im-internet.de/sgb_5/__6.html" },
      { label: "Bundesgesundheitsministerium: Beiträge der gesetzlichen Krankenversicherung", url: "https://www.bundesgesundheitsministerium.de/beitraege" },
      { label: "BaFin: Private Kranken- und Pflegepflichtversicherung", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung.html" },
    ],
    related: ["anonyme-risikovoranfrage", "tarifwechsel-pkv"],
  },
  {
    slug: "anonyme-risikovoranfrage",
    published: true,
    topic: "Private Krankenversicherung",
    title: "Anonyme Risikovoranfrage: Ablauf, Nutzen und Grenzen",
    metaTitle: "Anonyme Risikovoranfrage: Ablauf, Nutzen und Grenzen",
    description: "Was ist eine anonyme Risikovoranfrage, wie läuft sie ab und was kann sie nicht leisten? Erklärt am Beispiel von privater Krankenversicherung und Berufsunfähigkeitsversicherung.",
    answer:
      "Bei einer anonymen Risikovoranfrage fragt ein Vermittler oder Dienstleister bei Versicherern vorab nach, ob und zu welchen Bedingungen sie eine Person versichern würden, ohne dass Name und Anschrift genannt werden. Es entsteht noch kein Vertrag und kein Antrag. Sie ist vor allem bei gesundheitlichen Vorerkrankungen hilfreich, ersetzt aber nicht die verbindliche Annahmeentscheidung zu einem späteren Antrag.",
    blocks: [
      { t: "h2", text: "Wofür eine Risikovoranfrage gedacht ist" },
      { t: "p", text: "Vor dem Abschluss einer privaten Kranken- oder Berufsunfähigkeitsversicherung stellt der Versicherer Gesundheitsfragen. Wer Vorerkrankungen hat, weiß vorher oft nicht, wie sie bewertet werden. Eine Ablehnung oder ein Risikozuschlag kann sich auf spätere Anträge auswirken. Mit der anonymen Risikovoranfrage lässt sich die Einschätzung vorab klären." },
      { t: "h2", text: "So läuft sie ab" },
      { t: "ul", items: [
        "Ihre gesundheitlichen Angaben werden gemeinsam sorgfältig zusammengestellt.",
        "Ein Vermittler oder Dienstleister übermittelt sie ohne Ihren Namen und ohne Ihre Anschrift an mehrere Versicherer.",
        "Die Versicherer melden zurück, ob und wie sie das Risiko annehmen würden.",
        "Mögliche Ergebnisse sind Normalannahme, Risikozuschlag, Leistungsausschluss oder Ablehnung.",
        "Erst danach entscheiden Sie, ob und bei welchem Versicherer Sie einen Antrag stellen.",
      ] },
      { t: "p", text: "Die Verbraucherzentrale beschreibt das Verfahren am Beispiel der Berufsunfähigkeitsversicherung und empfiehlt es besonders, wenn Probleme wegen Vorerkrankungen zu befürchten sind. Als Vorteil nennt sie, dass Sie mit Ihren Vorerkrankungen nicht in Datenbeständen von Versicherern landen, falls es nicht zu einem Vertrag kommt. Ergebnisse der Voranfrage gelten meist auch für die endgültige Police." },
      { t: "h2", text: "Warum vollständige Angaben wichtig sind" },
      { t: "p", text: "Auch bei der Voranfrage gilt: Die Angaben müssen zu dem passen, was Sie später im Antrag machen. Nach § 19 VVG müssen Sie dem Versicherer die Ihnen bekannten Gefahrumstände mitteilen, nach denen er in Textform fragt. Bei Verletzung dieser Anzeigepflicht kann der Versicherer unter bestimmten Voraussetzungen vom Vertrag zurücktreten, ihn kündigen oder ihn anpassen. Ein günstiges Ergebnis aus unvollständigen Angaben hilft Ihnen deshalb nicht." },
      { t: "h2", text: "Grenzen der Risikovoranfrage" },
      { t: "ul", items: [
        "Sie ist eine vorläufige Einschätzung. Die verbindliche Entscheidung trifft der Versicherer erst beim Antrag.",
        "Nicht jeder Versicherer nimmt anonyme Anfragen entgegen. Ein erfahrener Vermittler weiß in der Regel, welche das tun.",
        "Ergebnisse können sich ändern, wenn sich Ihre Gesundheit oder Ihre Angaben ändern.",
        "Sie ersetzt keine Beratung zu Tarif und Bedingungen. Die Annahme allein sagt noch nichts darüber aus, ob der Vertrag zu Ihnen passt.",
      ] },
      { t: "example", text: "Eine Person hatte vor einigen Jahren eine Rückenbehandlung und möchte eine Berufsunfähigkeitsversicherung abschließen. Über die anonyme Voranfrage erfährt sie, welche Versicherer sie ohne Zuschlag, mit Zuschlag oder mit Leistungsausschluss annehmen würden, und kann dann gezielt einen Antrag bei einem passenden Anbieter stellen." },
    ],
    sources: [
      { label: "Verbraucherzentrale: Berufsunfähigkeit, wie Sie sich gegen Verlust des Einkommens absichern", url: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen/weitere-versicherungen/berufsunfaehigkeit-wie-sie-sich-gegen-verlust-des-einkommens-absichern-13931" },
      VVG(19, "Gesetze im Internet: § 19 VVG, Anzeigepflicht"),
      { label: "BaFin: Private Kranken- und Pflegepflichtversicherung (Hinweise zu Gesundheitsfragen)", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung.html" },
    ],
    related: ["gesundheitsfragen-bu", "pkv-oder-gkv"],
  },
  {
    slug: "tarifwechsel-pkv",
    published: true,
    topic: "Private Krankenversicherung",
    title: "Tarifwechsel in der PKV: Möglichkeiten im bestehenden Vertrag",
    metaTitle: "Tarifwechsel in der PKV: Möglichkeiten im bestehenden Vertrag",
    description: "Wann ist ein Tarifwechsel in der privaten Krankenversicherung möglich, was passiert mit der Alterungsrückstellung und worauf sollten Sie vor einem Wechsel achten?",
    answer:
      "Privat Krankenversicherte können vom Versicherer verlangen, in einen anderen Tarif mit gleichartigem Versicherungsschutz zu wechseln (§ 204 VVG). Erworbene Rechte und die Alterungsrückstellung werden dabei angerechnet. Bei höheren oder umfassenderen Leistungen darf der Versicherer allerdings Risikozuschlag, Leistungsausschluss oder Wartezeit verlangen.",
    blocks: [
      { t: "h2", text: "Was das Gesetz regelt" },
      { t: "p", text: "Nach § 204 Abs. 1 VVG können Sie vom Versicherer verlangen, dass er Anträge auf Wechsel in andere Tarife mit gleichartigem Versicherungsschutz annimmt. Dabei sind die aus dem Vertrag erworbenen Rechte und die Alterungsrückstellung anzurechnen. Ein Wechsel kann sinnvoll sein, wenn Sie den Beitrag senken oder besseren Schutz erhalten möchten." },
      { t: "h2", text: "Wechsel mit Mehrleistungen" },
      { t: "p", text: "Sind die Leistungen im neuen Tarif höher oder umfassender, darf der Versicherer für die Mehrleistung einen Leistungsausschluss, einen angemessenen Risikozuschlag oder eine Wartezeit verlangen. Die BaFin weist darauf hin, dass dafür auch eine Gesundheitsprüfung möglich ist. Sie können das vermeiden, indem Sie auf die Mehrleistung verzichten." },
      { t: "h2", text: "Beratung und Hinweise des Versicherers" },
      { t: "p", text: "Nach den Hinweisen der BaFin muss der Versicherer die bisher erworbenen Rechte berücksichtigen und bei einem Tarifwechsel beraten. Bei Beitragsanpassungen muss er außerdem auf das Wechselrecht hinweisen. Fordern Sie Zieltarife und deren Bedingungen am besten schriftlich an, bevor Sie entscheiden." },
      { t: "h2", text: "Wechsel zu einem anderen Versicherer" },
      { t: "p", text: "Der Wechsel zu einem anderen Versicherer ist etwas anderes als ein Tarifwechsel im bestehenden Vertrag. Nach den Angaben der BaFin ist bei Verträgen, die nach 2009 abgeschlossen wurden, ein Teil der Alterungsrückstellung übertragbar, bei älteren Verträgen nicht. Außerdem stellt der neue Versicherer Gesundheitsfragen und ist, außer im Basistarif, nicht zur Annahme verpflichtet." },
      { t: "h2", text: "Basistarif" },
      { t: "p", text: "Der Wechsel in den Basistarif ist nach § 204 VVG nur unter bestimmten Voraussetzungen möglich, unter anderem bei Vertragsabschluss nach 2009 und Alter über 55 Jahren oder bei Rentenbezug beziehungsweise Hilfebedürftigkeit. Im Basistarif sind Risikozuschläge und Leistungsausschlüsse nicht erlaubt. Er ist als Möglichkeit zu verstehen, nicht als Standardlösung." },
      { t: "h2", text: "Checkliste vor einem Wechsel" },
      { t: "ul", items: [
        "Welche Leistungen entfallen oder kommen hinzu? Vergleichen Sie Leistungsbeschreibungen, nicht nur den Beitrag.",
        "Wie wirken sich Selbstbehalt und Beitragsentwicklung langfristig aus?",
        "Verlangt der Versicherer für Mehrleistungen Zuschlag, Ausschluss, Wartezeit oder Gesundheitsprüfung?",
        "Sind Alterungsrückstellung und erworbene Rechte nachvollziehbar angerechnet?",
        "Haben Sie alle Zusagen und Bedingungen schriftlich?",
      ] },
      { t: "example", text: "Eine Person zahlt in ihrem bisherigen Tarif einen hohen Beitrag und prüft einen Tarif mit höherem Selbstbehalt desselben Versicherers. Weil die Leistungen nicht umfassender sind, kann der Wechsel ohne Gesundheitsprüfung möglich sein. Ob er sinnvoll ist, hängt davon ab, ob sie den höheren Selbstbehalt im Ernstfall tragen könnte." },
      { t: "p", text: "Welche Möglichkeiten in Ihrem Vertrag bestehen, lässt sich nur anhand Ihrer Bedingungen und Tarife beurteilen. Diese Übersicht ersetzt keine rechtliche oder fachliche Beratung." },
    ],
    sources: [
      VVG(204, "Gesetze im Internet: § 204 VVG, Tarifwechsel"),
      { label: "BaFin: Private Kranken- und Pflegepflichtversicherung", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung.html" },
      { label: "BaFin: Kranken- und Pflegeversicherung (Überblick)", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung_node.html" },
    ],
    related: ["pkv-oder-gkv", "anonyme-risikovoranfrage"],
  },
  {
    slug: "bu-rente-planen",
    published: true,
    topic: "Berufsunfähigkeit",
    title: "BU-Rente planen: Bedarf, Laufzeit und vorhandene Ansprüche",
    metaTitle: "BU-Rente planen: Bedarf, Laufzeit und vorhandene Ansprüche",
    description: "Wie hoch sollte eine BU-Rente sein, wie lange soll sie laufen und welche Ansprüche bestehen schon? Ein Leitfaden für die Planung der Berufsunfähigkeitsversicherung.",
    answer:
      "Als Richtwert nennt die Verbraucherzentrale rund 80 Prozent des derzeitigen Nettoeinkommens. Die Rente sollte laufende Ausgaben wie Miete und Haushaltskosten abdecken und idealerweise bis zum Eintritt in den Altersruhestand laufen. Prüfen Sie dabei, welche Ansprüche Sie bereits haben, denn die gesetzliche Erwerbsminderungsrente ist an strengere Voraussetzungen geknüpft.",
    blocks: [
      { t: "h2", text: "Den Bedarf ermitteln" },
      { t: "p", text: "Ausgangspunkt ist Ihr Nettoeinkommen. Die Verbraucherzentrale nennt 80 Prozent vom derzeitigen Netto als oft guten Richtwert. Rechnen Sie nach, welche festen Ausgaben im Ernstfall weiterlaufen: Wohnen, Versicherungen, Mobilität, Unterhalt, Kredite und Rücklagen. Ein Teil davon kann entfallen, ein Teil kommt womöglich hinzu, etwa Kosten für Pflege oder Therapie." },
      { t: "example", text: "Beispiel zur Orientierung: Bei 2.500 Euro Nettoeinkommen ergibt der Richtwert von 80 Prozent eine Rente von 2.000 Euro. Wer geringe feste Kosten oder zusätzliche Einkünfte hat, kommt womöglich mit weniger aus. Wer hohe Verpflichtungen hat, plant mehr ein." },
      { t: "h2", text: "Welche Ansprüche bestehen bereits?" },
      { t: "p", text: "Die gesetzliche Rentenversicherung zahlt keine Berufsunfähigkeitsrente, sondern eine Erwerbsminderungsrente. Sie setzt nach Angaben der Deutschen Rentenversicherung voraus, dass Sie wegen Krankheit oder Behinderung weniger als sechs Stunden täglich arbeiten können, und zwar in jeder Tätigkeit, nicht nur im bisherigen Beruf. Bei weniger als drei Stunden täglich liegt volle Erwerbsminderung vor, bei drei bis unter sechs Stunden teilweise Erwerbsminderung. Außerdem müssen Sie mindestens fünf Jahre in der Rentenversicherung versichert sein und in den letzten fünf Jahren vor Eintritt der Erwerbsminderung mindestens drei Jahre Pflichtbeiträge gezahlt haben." },
      { t: "p", text: "Die Verbraucherzentrale weist darauf hin, dass die Erwerbsminderungsrente durchschnittlich unter dem Grundsicherungsniveau liegt. Eine private Berufsunfähigkeitsversicherung sichert dagegen den bisherigen Beruf ab. Wie hoch Ihr gesetzlicher Anspruch ist, zeigt Ihnen die Renteninformation der Deutschen Rentenversicherung." },
      { t: "h2", text: "Laufzeit festlegen" },
      { t: "p", text: "Die Verbraucherzentrale empfiehlt, den Vertrag idealerweise bis zum Eintritt in den Altersruhestand abzuschließen, also bis zum 67. Lebensjahr. Eine kürzere Laufzeit senkt den Beitrag, lässt aber eine Lücke zwischen Vertragsende und Rentenbeginn." },
      { t: "h2", text: "Rente und Bedingungen zusammen betrachten" },
      { t: "ul", items: [
        "Dynamik: Sie hilft, Einkommenssteigerungen und Inflation auszugleichen, damit die Kaufkraft der Rente erhalten bleibt.",
        "Nachversicherungsgarantie: Sie ermöglicht bei bestimmten Ereignissen wie Heirat, Geburt eines Kindes oder beruflichem Aufstieg eine höhere Rente ohne erneute Gesundheitsprüfung.",
        "Verzicht auf die abstrakte Verweisung: Der Versicherer verweist Sie dann nicht auf andere Tätigkeiten. Mehr dazu im Beitrag zu den Vertragsbedingungen.",
      ] },
      { t: "p", text: "Der passende Umfang hängt von Ihrem Einkommen, Ihrer Familie und Ihren laufenden Verpflichtungen ab. Diese Hinweise ersetzen keine persönliche Bedarfsberechnung." },
    ],
    sources: [
      { label: "Verbraucherzentrale: Berufsunfähigkeit, wie Sie sich gegen Verlust des Einkommens absichern", url: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen/weitere-versicherungen/berufsunfaehigkeit-wie-sie-sich-gegen-verlust-des-einkommens-absichern-13931" },
      { label: "Deutsche Rentenversicherung: Erwerbsminderungsrenten", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Erwerbsminderungsrente" },
      VVG(172, "Gesetze im Internet: § 172 VVG, Leistung des Versicherers"),
    ],
    related: ["bu-vertragsbedingungen", "gesundheitsfragen-bu"],
  },
  {
    slug: "gesundheitsfragen-bu",
    published: true,
    topic: "Berufsunfähigkeit",
    title: "Gesundheitsfragen bei der BU: Vorbereitung und vollständige Angaben",
    metaTitle: "Gesundheitsfragen bei der BU: Vorbereitung und vollständige Angaben",
    description: "Warum vollständige Angaben bei den Gesundheitsfragen der Berufsunfähigkeitsversicherung so wichtig sind, was bei falschen Angaben passieren kann und wie Sie sich vorbereiten.",
    answer:
      "Beantworten Sie Gesundheitsfragen vollständig und richtig. Nach § 19 VVG müssen Sie die Gefahrumstände mitteilen, nach denen der Versicherer in Textform fragt. Falsche oder unvollständige Angaben können dazu führen, dass der Versicherer vom Vertrag zurücktritt, ihn kündigt oder anpasst. Bereiten Sie sich deshalb mit Unterlagen vor und klären Sie bei Vorerkrankungen vorab, wie Versicherer sie bewerten.",
    blocks: [
      { t: "h2", text: "Was das Gesetz verlangt" },
      { t: "p", text: "Vor Vertragsschluss müssen Sie dem Versicherer die Ihnen bekannten Umstände mitteilen, die für seine Entscheidung erheblich sind, soweit er in Textform danach fragt (§ 19 Abs. 1 VVG). Maßgeblich sind also die gestellten Fragen. Beantworten Sie sie genau so, wie sie formuliert sind, mit dem dort genannten Zeitraum und Umfang." },
      { t: "h2", text: "Was bei falschen Angaben passieren kann" },
      { t: "ul", items: [
        "Bei Vorsatz oder grober Fahrlässigkeit kann der Versicherer vom Vertrag zurücktreten.",
        "Bei leichter Fahrlässigkeit ist der Rücktritt ausgeschlossen, es kommt ein Kündigungsrecht in Betracht.",
        "Hätte der Versicherer den Vertrag auch bei richtigen Angaben geschlossen, nur zu anderen Bedingungen, kann er diese rückwirkend verlangen.",
        "Seine Rechte setzen voraus, dass er Sie durch gesonderte Mitteilung in Textform auf die Folgen hingewiesen hat (§ 19 Abs. 5 VVG).",
      ] },
      { t: "p", text: "Der Versicherer muss seine Rechte innerhalb eines Monats schriftlich geltend machen, nachdem er von der Verletzung erfahren hat. Nach fünf Jahren seit Vertragsschluss erlöschen sie, bei Vorsatz oder Arglist nach zehn Jahren (§ 21 VVG). Verlassen Sie sich nicht auf diese Fristen: Im Leistungsfall prüfen Versicherer die Angaben meist genau." },
      { t: "h2", text: "So bereiten Sie sich vor" },
      { t: "ul", items: [
        "Stellen Sie fest, wonach genau gefragt wird und für welchen Zeitraum, etwa Behandlungen, Diagnosen oder Medikamente.",
        "Tragen Sie Arztbesuche, Diagnosen und Behandlungen aus Ihrer Erinnerung und Ihren Unterlagen zusammen. Bitten Sie bei Bedarf Ihre Ärzte und Ihre Krankenkasse um eine Übersicht.",
        "Beantworten Sie Fragen im Zweifel nicht aus dem Gedächtnis allein, sondern anhand der Unterlagen.",
        "Fragen Sie nach, wenn eine Frage unklar ist, und halten Sie die Antwort schriftlich fest.",
        "Bewahren Sie eine Kopie des Antrags mit allen Angaben auf.",
      ] },
      { t: "h2", text: "Vorerkrankungen vorab klären" },
      { t: "p", text: "Bei Vorerkrankungen kann eine anonyme Risikovoranfrage helfen. Sie zeigt, wie Versicherer Ihre Angaben voraussichtlich einschätzen, bevor ein Antrag gestellt wird. Die Verbraucherzentrale empfiehlt dafür die Unterstützung eines erfahrenen Vermittlers oder eines unabhängigen Versicherungsberaters." },
      { t: "example", text: "Eine Person nimmt seit Jahren gelegentlich Medikamente gegen Beschwerden. Die Antragsfrage lautet, welche Medikamente in den letzten Jahren regelmäßig genommen wurden. Sie sucht die Verordnungen heraus, prüft, ob die Einnahme darunter fällt, und gibt die Antwort vollständig an." },
      { t: "p", text: "Dieser Beitrag ersetzt keine Rechtsberatung. Wie sich Ihre konkreten Angaben auswirken, hängt vom Einzelfall und den Vertragsbedingungen ab." },
    ],
    sources: [
      VVG(19, "Gesetze im Internet: § 19 VVG, Anzeigepflicht"),
      VVG(21, "Gesetze im Internet: § 21 VVG, Ausübung der Rechte des Versicherers"),
      { label: "Verbraucherzentrale: Berufsunfähigkeit, wie Sie sich gegen Verlust des Einkommens absichern", url: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen/weitere-versicherungen/berufsunfaehigkeit-wie-sie-sich-gegen-verlust-des-einkommens-absichern-13931" },
    ],
    related: ["anonyme-risikovoranfrage", "bu-vertragsbedingungen"],
  },
  {
    slug: "bu-vertragsbedingungen",
    published: true,
    topic: "Berufsunfähigkeit",
    title: "BU-Vertragsbedingungen: wichtige Begriffe verständlich erklärt",
    metaTitle: "BU-Vertragsbedingungen: wichtige Begriffe verständlich erklärt",
    description: "Berufsunfähigkeit, abstrakte Verweisung, Nachversicherung, Dynamik: Die wichtigsten Begriffe in den Bedingungen einer Berufsunfähigkeitsversicherung verständlich erklärt.",
    answer:
      "Entscheidend ist, wann der Versicherer leistet und worauf er Sie verweisen darf. Nach § 172 VVG ist berufsunfähig, wer den zuletzt ausgeübten Beruf voraussichtlich auf Dauer nicht mehr ausüben kann. Ob der Versicherer Sie auf andere Tätigkeiten verweisen darf, hängt von den vereinbarten Bedingungen ab. Die Bedingungen unterscheiden sich je nach Versicherer.",
    blocks: [
      { t: "h2", text: "Berufsunfähigkeit" },
      { t: "p", text: "Das Gesetz definiert Berufsunfähigkeit in § 172 Abs. 2 VVG: Berufsunfähig ist, wer seinen Beruf infolge Krankheit, Körperverletzung oder mehr als altersentsprechendem Kräfteverfall ganz oder teilweise voraussichtlich auf Dauer nicht mehr ausüben kann. Maßgeblich ist der zuletzt ausgeübte Beruf, so wie er ohne gesundheitliche Beeinträchtigung ausgestaltet war. Was Ihr Vertrag im Einzelnen vorsieht, steht in den Bedingungen." },
      { t: "h2", text: "Abstrakte Verweisung" },
      { t: "p", text: "Nach § 172 Abs. 3 VVG können Versicherer und Versicherungsnehmer vereinbaren, dass nur geleistet wird, wenn die versicherte Person auch keine andere angemessene Tätigkeit ausüben kann, die ihrer Ausbildung, Erfahrung und Lebensstellung entspricht. Das nennt man abstrakte Verweisung. Die Verbraucherzentrale bezeichnet den Verzicht darauf als wesentliche Bedingung: Der Versicherer prüft dann nicht, ob Sie mit Ihren Kenntnissen noch eine andere Tätigkeit ausüben könnten." },
      { t: "h2", text: "Rentenhöhe und Laufzeit" },
      { t: "p", text: "Die versicherte Rente und die Vertragsdauer bestimmen, wie weit Sie im Ernstfall abgesichert sind. Als Richtwert gelten rund 80 Prozent des Nettoeinkommens, die Laufzeit sollte idealerweise bis zum Eintritt in den Altersruhestand reichen. Mehr dazu im Beitrag zur Planung der BU-Rente." },
      { t: "h2", text: "Nachversicherungsgarantie" },
      { t: "p", text: "Sie ermöglicht es, die Rente bei bestimmten Ereignissen wie Heirat, Geburt eines Kindes oder beruflichem Aufstieg ohne erneute Gesundheitsprüfung zu erhöhen. Achten Sie darauf, welche Ereignisse zählen, bis zu welchem Alter und in welchem Umfang die Erhöhung möglich ist." },
      { t: "h2", text: "Dynamik" },
      { t: "p", text: "Eine Dynamik erhöht Beitrag und Rente regelmäßig. Sie soll Einkommenssteigerungen und Inflation auffangen, damit die Kaufkraft der Rente erhalten bleibt. Prüfen Sie, ob die Erhöhung auch im Leistungsfall weiterläuft." },
      { t: "h2", text: "Gesundheitsfragen und Anzeigepflicht" },
      { t: "p", text: "Falsche oder unvollständige Angaben bei den Gesundheitsfragen können Rücktritt, Kündigung oder Vertragsanpassung ermöglichen (§ 19 VVG). Mehr dazu im Beitrag zu den Gesundheitsfragen." },
      { t: "h2", text: "Worauf Sie beim Vergleich achten sollten" },
      { t: "ul", items: [
        "Gilt die abstrakte Verweisung oder ist darauf verzichtet worden?",
        "Reicht die Laufzeit bis zum Renteneintritt?",
        "Gibt es Dynamik und Nachversicherungsgarantie und zu welchen Bedingungen?",
        "Sind die Bedingungen für den Leistungsfall verständlich beschrieben?",
      ] },
      { t: "example", text: "Eine Person arbeitet im Büro und kann nach einer Erkrankung ihren Beruf nicht mehr ausüben, wäre aber für eine andere Tätigkeit grundsätzlich geeignet. Ob der Versicherer leistet, hängt davon ab, ob er sie auf diese andere Tätigkeit verweisen darf. Das regelt die Verweisungsklausel im Vertrag." },
      { t: "p", text: "Bedingungen einzelner Versicherer sind nicht auf den gesamten Markt übertragbar. Lassen Sie die konkreten Bedingungen vor Abschluss prüfen." },
    ],
    sources: [
      VVG(172, "Gesetze im Internet: § 172 VVG, Leistung des Versicherers"),
      VVG(19, "Gesetze im Internet: § 19 VVG, Anzeigepflicht"),
      { label: "Verbraucherzentrale: Berufsunfähigkeit, wie Sie sich gegen Verlust des Einkommens absichern", url: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen/weitere-versicherungen/berufsunfaehigkeit-wie-sie-sich-gegen-verlust-des-einkommens-absichern-13931" },
    ],
    related: ["bu-rente-planen", "gesundheitsfragen-bu"],
  },
  {
    slug: "grundlagen-kapitalanlage",
    published: true,
    topic: "Kapitalanlage",
    title: "Grundlagen der Kapitalanlage: Ziele, Zeit, Risiko und Kosten",
    metaTitle: "Grundlagen der Kapitalanlage: Ziele, Zeit, Risiko und Kosten",
    description: "Wie Sie Ihre Geldanlage vorbereiten: Überblick über die Finanzen, Rücklagen, Anlageziel, Anlagehorizont, Risiko und Kosten. Mit Quellen der BaFin.",
    answer:
      "Bevor Sie Produkte vergleichen, klären Sie Ihre finanzielle Lage, bilden Rücklagen und legen Ziel und Zeitraum fest. Rendite, Risiko und Kosten gehören zusammen: Je höher die mögliche Rendite, desto höher in der Regel das Risiko, und Kosten mindern das Ergebnis. Eine Anlage sollte zu Ihrer persönlichen Situation passen.",
    blocks: [
      { t: "h2", text: "Erst die eigene Lage klären" },
      { t: "p", text: "Die BaFin empfiehlt, zunächst die eigenen Finanzen zu überblicken und Rücklagen für Notfälle zu bilden. Als Orientierung für eine Notfallrücklage nennt sie etwa drei Monatseinkommen in schnell verfügbarer, sicherer Form wie Tagesgeld. Bestehende Schulden sollten Sie abzahlen, bevor Sie Geld anlegen." },
      { t: "h2", text: "Anlageziel festlegen" },
      { t: "p", text: "Die BaFin nennt drei klassische Anlageziele: Sicherheit, Verfügbarkeit und Rendite. Sie lassen sich nicht alle gleichzeitig maximieren. Wer hohe Renditechancen sucht, muss höhere Risiken akzeptieren. Wer jederzeit über das Geld verfügen will, verzichtet meist auf Rendite." },
      { t: "h2", text: "Zeit" },
      { t: "p", text: "Der Anlagehorizont bestimmt, welche Anlagen in Frage kommen. Bei Wertpapieren erhöhen längere Anlagezeiträume nach Angaben der BaFin die Chance auf stabilere Ergebnisse, garantieren sie aber nicht. Geld, das Sie in wenigen Jahren brauchen, gehört deshalb nicht in stark schwankende Anlagen." },
      { t: "h2", text: "Risiko" },
      { t: "p", text: "Je höher die versprochene Rendite, desto größer ist in der Regel das Risiko eines Kapitalverlusts. Entscheidend ist, welche Schwankungen und Verluste Sie finanziell und persönlich tragen können. Das hängt von Einkommen, Rücklagen und Ihrer Verfassung ab." },
      { t: "h2", text: "Kosten" },
      { t: "p", text: "Eine Geldanlage verursacht oft Kosten, die die Rendite mindern, etwa Ausgabeaufschläge, laufende Verwaltungskosten oder Depotgebühren. Anbieter müssen Kosten und deren Auswirkung auf die Rendite vorab mitteilen. Prüfen und vergleichen Sie diese, bevor Sie sich entscheiden." },
      { t: "h2", text: "Portfolio regelmäßig überprüfen" },
      { t: "p", text: "Ihre Situation und die Märkte verändern sich. Die BaFin empfiehlt, das eigene Portfolio regelmäßig zu überprüfen und bei Bedarf anzupassen." },
      { t: "example", text: "Eine Person möchte in zwei Jahren eine Immobilie anzahlen. Obwohl höhere Renditechancen reizvoll sind, passt für diesen kurzen Zeitraum eher eine Anlage mit geringer Schwankung. Für Geld, das sie erst in zwanzig Jahren braucht, kann die Abwägung anders ausfallen." },
      { t: "p", text: "Dieser Beitrag ist allgemeine Information und keine Anlageberatung. Er enthält keine Renditeprognosen. Verluste sind bei Kapitalanlagen möglich." },
    ],
    sources: [
      { label: "BaFin: Das kleine Einmaleins der Geldanlage", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/geldanlage/einmaleins-der-geldanlage/einmaleins-der-geldanlage_node.html" },
      { label: "BaFin: Wertpapierfonds", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/geldanlage/wertpapiere/wertpapierfonds/wertpapierfonds.html" },
    ],
    related: ["streuung-kapitalanlage"],
  },
  {
    slug: "streuung-kapitalanlage",
    published: true,
    topic: "Kapitalanlage",
    title: "Streuung in der Geldanlage: Möglichkeiten und Grenzen",
    metaTitle: "Streuung in der Geldanlage: Möglichkeiten und Grenzen",
    description: "Was bedeutet Streuung (Diversifikation) bei der Geldanlage, wie funktioniert sie und warum beseitigt sie nicht alle Risiken? Verständlich erklärt, mit Quellen der BaFin.",
    answer:
      "Streuung bedeutet, Geld nicht in nur eine Anlage zu stecken, sondern auf verschiedene Anlageformen zu verteilen. Das kann Verlustrisiken begrenzen. Es beseitigt jedoch nicht alle Risiken und schützt nicht grundsätzlich vor Verlusten: Auch ein breit gestreutes Portfolio kann an Wert verlieren.",
    blocks: [
      { t: "h2", text: "Was Streuung bedeutet" },
      { t: "p", text: "Die BaFin empfiehlt, das Vermögen nicht in nur einen Vermögenswert zu investieren, sondern auf verschiedene Anlageformen zu verteilen. So begrenzen Sie Verlustrisiken und können stabilere Ergebnisse erwarten. Gemeint sind unterschiedliche Anlageklassen, aber auch unterschiedliche Laufzeiten und Risiken." },
      { t: "h2", text: "Wie sich Streuung umsetzen lässt" },
      { t: "p", text: "Wer selbst einzelne Wertpapiere kauft, muss ein breites Portfolio zusammenstellen, überwachen und anpassen. Mit Anteilen an einem Wertpapierfonds streuen Sie Ihr Risiko, ohne das selbst tun zu müssen. Nach den Hinweisen der BaFin mindert eine breite Streuung üblicherweise das Verlustrisiko." },
      { t: "h2", text: "Wo die Grenzen liegen" },
      { t: "ul", items: [
        "Der Wert der Vermögenswerte in einem Fonds und damit Ihrer Anteile kann fallen, etwa bei Marktturbulenzen oder wirtschaftlichen Problemen von Unternehmen.",
        "Niemand kann die Entwicklung garantieren. Anleger tragen die Risiken der Geldanlage selbst.",
        "Streuung über viele Anlagen hilft wenig, wenn alle vom selben Risiko abhängen, etwa derselben Marktentwicklung.",
        "Auch bei gestreuten Anlagen fallen Kosten an: Ausgabeaufschlag, laufende Kosten und gegebenenfalls Depotgebühren mindern die Rendite.",
      ] },
      { t: "h2", text: "Worauf Sie achten können" },
      { t: "ul", items: [
        "Verteilen Sie Ihr Geld nicht auf eine einzige Anlage.",
        "Prüfen Sie, wie sich die Anlagen im Portfolio unterscheiden und wovon sie abhängen.",
        "Vergleichen Sie Kosten vor dem Kauf. Anbieter müssen sie vorab mitteilen.",
        "Überprüfen Sie Ihr Portfolio regelmäßig.",
      ] },
      { t: "example", text: "Eine Person hat ihr gesamtes Geld in die Aktien eines einzigen Unternehmens investiert. Gerät dieses Unternehmen in Schwierigkeiten, trifft das ihr ganzes Vermögen. Verteilt sie ihr Geld auf verschiedene Anlageformen, wirkt sich eine einzelne Entwicklung weniger stark aus. Verluste bleiben trotzdem möglich." },
      { t: "p", text: "Dieser Beitrag ist allgemeine Information und keine Anlageberatung. Er enthält keine Renditeversprechen." },
    ],
    sources: [
      { label: "BaFin: Das kleine Einmaleins der Geldanlage", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/geldanlage/einmaleins-der-geldanlage/einmaleins-der-geldanlage_node.html" },
      { label: "BaFin: Wertpapierfonds", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/geldanlage/wertpapiere/wertpapierfonds/wertpapierfonds.html" },
    ],
    related: ["grundlagen-kapitalanlage"],
  },
];

export const published = () => articles.filter((a) => a.published);
export const bySlug = (slug: string) => articles.find((a) => a.slug === slug && a.published);
