import type { SubPageContent } from "./types";

export const selbststaendige: SubPageContent = {
  path: "/private-krankenversicherung/selbststaendige",
  crumb: "PKV für Selbstständige",
  title: "PKV für Selbstständige und Freiberufler: Tarife, Selbstbehalt und Krankentagegeld",
  answer:
    "Selbstständige und Freiberufler können zwischen gesetzlicher und privater Krankenversicherung wählen und tragen ihren Beitrag vollständig selbst. In der PKV gestalten Sie Leistungen, Selbstbehalt und Krankentagegeld nach Ihrem Bedarf. Entscheidend ist, dass die Absicherung auch bei schwankendem Einkommen und über Jahrzehnte tragfähig bleibt.",
  blocks: [
    { t: "h2", text: "Möglichkeiten der PKV für Selbstständige" },
    {
      t: "p",
      text: "Wer hauptberuflich selbstständig ist, ist in der gesetzlichen Krankenversicherung versicherungsfrei und kann sich privat versichern. Einen Arbeitgeberzuschuss gibt es nicht: Sie zahlen den Beitrag allein, egal ob gesetzlich oder privat. Wer neben der Selbstständigkeit auch angestellt arbeitet, wird nach Zeitaufwand und Einkommen eingeordnet. Der Status hängt dann davon ab, welche Tätigkeit überwiegt.",
    },
    {
      t: "p",
      text: "In der PKV hängt der Beitrag nicht vom Einkommen ab, sondern unter anderem von Alter und Gesundheitszustand beim Eintritt, vom Leistungsumfang und vom vereinbarten Selbstbehalt. Vor dem Abschluss stellt der Versicherer Gesundheitsfragen. Ob und zu welchen Bedingungen er Sie annimmt, hängt von Ihren Angaben ab. Die steuerliche Behandlung der Beiträge klären Sie am besten mit Ihrer Steuerberatung.",
    },
    { t: "link", text: "Anonyme Risikovoranfrage: Ablauf, Nutzen und Grenzen", href: "/wissen/anonyme-risikovoranfrage" },

    { t: "h2", text: "Tarife und Leistungen auswählen" },
    {
      t: "p",
      text: "In der PKV vereinbaren Sie den Versicherungsschutz vertraglich. Das gibt Freiheit, verlangt aber auch Sorgfalt: Zwei Tarife mit ähnlichem Beitrag können sich in Leistungen, Erstattungsgrenzen und Bedingungen deutlich unterscheiden. Vergleichen Sie deshalb die Leistungsbeschreibungen, nicht nur den Preis.",
    },
    {
      t: "ul",
      items: [
        "Welche Leistungen sind Ihnen wichtig, zum Beispiel ambulant, stationär, Zahn oder Heil- und Hilfsmittel?",
        "Gibt es Erstattungsgrenzen oder Ausschlüsse, die Sie im Alltag treffen könnten?",
        "Wie ist der Tarif für Veränderungen gebaut, etwa wenn sich Ihr Einkommen, Ihre Familie oder Ihr Bedarf ändert?",
        "Wie ging der Versicherer bisher mit Beitragsanpassungen um?",
      ],
    },

    { t: "h2", text: "Selbstbehalt: Beitrag senken, Risiko tragen" },
    {
      t: "p",
      text: "Mit einem Selbstbehalt übernehmen Sie einen Teil der Kosten selbst und können so den laufenden Beitrag senken. Das lohnt sich nur, wenn Sie den Betrag im Ernstfall auch zahlen können. Bei schwankendem Einkommen ist das besonders wichtig: Ein hoher Selbstbehalt kann in einem schwachen Geschäftsjahr zur Belastung werden.",
    },
    {
      t: "p",
      text: "Beachten Sie außerdem, dass Versicherer bei Beitragserhöhungen auch Selbstbeteiligungen anpassen können (BaFin). Planen Sie den Selbstbehalt deshalb nicht zu knapp und legen Sie eine Rücklage für Behandlungskosten an.",
    },

    { t: "h2", text: "Krankentagegeld: Absicherung bei Verdienstausfall" },
    {
      t: "p",
      text: "Wenn Sie krank sind und nicht arbeiten können, fällt Ihr Einkommen weg. Für privat versicherte Selbstständige ist deshalb eine Krankentagegeldversicherung besonders wichtig. Sie zahlt ein vereinbartes Tagegeld, wenn Sie arbeitsunfähig sind.",
    },
    {
      t: "ul",
      items: [
        "Höhe: Das Krankentagegeld darf höchstens so hoch sein wie Ihr Nettoeinkommen. Maßgeblich ist in der Regel der Durchschnitt der letzten zwölf Monate.",
        "Karenzzeit: Das Tagegeld wird erst nach Ablauf einer vereinbarten Karenzzeit gezahlt. Je nach Tarif kann das schon ab dem vierten Krankheitstag sein. Eine kürzere Karenzzeit führt in der Regel zu einem höheren Beitrag.",
        "Wartezeit: Für bestimmte Leistungen, etwa während des Mutterschutzes, gilt nach den Musterbedingungen eine Wartezeit von acht Monaten.",
        "Anpassung: Sinkt Ihr Nettoeinkommen dauerhaft, sollten Sie das Ihrem Versicherer mitteilen, damit Tagegeld und Einkommen zusammenpassen.",
      ],
    },

    { t: "h2", text: "Beiträge bei schwankendem Einkommen" },
    {
      t: "p",
      text: "In der gesetzlichen Krankenversicherung richtet sich der Beitrag nach den beitragspflichtigen Einnahmen bis zur Beitragsbemessungsgrenze (2026: 69.750 Euro im Jahr). In der PKV zahlen Sie dagegen einen vertraglich vereinbarten Beitrag, unabhängig davon, wie gut ein Jahr läuft. Das schafft Planbarkeit, bedeutet aber auch: Der Beitrag fällt in einem schwachen Jahr genauso an wie in einem starken.",
    },
    {
      t: "note",
      label: "Beispiel (vereinfacht)",
      text: "Eine Freiberuflerin hat in einem Jahr starke, im nächsten schwache Einnahmen. Ihr PKV-Beitrag bleibt gleich. Hilfreich sind deshalb eine feste Rücklage für Beiträge und ein Selbstbehalt, der auch in einem schwachen Jahr tragbar ist. Das Beispiel ersetzt keine persönliche Berechnung.",
    },

    { t: "h2", text: "Langfristige finanzielle Planung" },
    {
      t: "ul",
      items: [
        "Beitrag im Alter: Beiträge können steigen und sinken nicht automatisch, wenn Sie weniger arbeiten oder in den Ruhestand gehen. Bilden Sie dafür Rücklagen (Verbraucherzentrale).",
        "Beitragsanpassungen: Versicherer dürfen Beiträge bei dauerhaft gestiegenen Kosten anpassen, wenn ein unabhängiger Treuhänder zustimmt (BaFin).",
        "Familie: Kinder und Partner ohne Einkommen brauchen eigene, beitragspflichtige Verträge.",
        "Rückkehr in die GKV: Sie ist oft schwierig. Ab dem 55. Lebensjahr gelten besondere Einschränkungen (§ 6 Abs. 3a SGB V).",
        "Selbstständigkeit und Absicherung: Prüfen Sie neben der Krankenversicherung auch Absicherung bei Berufsunfähigkeit und Altersvorsorge.",
      ],
    },
    { t: "link", text: "PKV oder GKV: Unterschiede und Entscheidungskriterien", href: "/wissen/pkv-oder-gkv" },
    { t: "link", text: "PKV für Angestellte: Wechsel, Grenze und Zuschuss", href: "/private-krankenversicherung/angestellte" },
    { t: "link", text: "PKV für Beamte: Beihilfe, Restkostenversicherung und Familie", href: "/private-krankenversicherung/beamte" },
    {
      t: "p",
      text: "Diese Seite ist eine allgemeine Information und ersetzt keine persönliche Beratung. Zahlen wie die Beitragsbemessungsgrenze ändern sich jedes Jahr, die genannten Werte gelten für 2026.",
    },
  ],
  sources: [
    { label: "PKV-Verband: Die private Krankenversicherung für Selbstständige (Branchenverband)", url: "https://www.pkv.de/wissen/private-krankenversicherung/leistungen-und-erstattung/privatversichert-bei-selbststaendiger-taetigkeit/" },
    { label: "BaFin: Private Kranken- und Pflegepflichtversicherung", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung.html" },
    { label: "Verbraucherzentrale: Private Krankenversicherung, nicht für jeden sinnvoll", url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/private-krankenversicherung-nicht-fuer-jeden-sinnvoll-13884" },
    { label: "Bundesgesundheitsministerium: Beiträge der gesetzlichen Krankenversicherung", url: "https://www.bundesgesundheitsministerium.de/beitraege" },
    { label: "Gesetze im Internet: § 6 SGB V, Versicherungsfreiheit", url: "https://www.gesetze-im-internet.de/sgb_5/__6.html" },
  ],
};
