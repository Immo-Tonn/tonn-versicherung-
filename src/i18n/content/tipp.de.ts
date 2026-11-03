import type { TippContent } from "./tipp.types";

/**
 * Deutsche Fassung. ENTWURF der Teilnahmebedingungen für die juristische Prüfung (siehe PR): Sie ersetzt keine Rechtsberatung.
 * Offen (nicht entschieden): Teilnahme von Beihilfetarifen, Datenschutzerklärung (Verarbeitung des Namens der empfehlenden Person), steuerliche Behandlung.
 */
export const tippDe: TippContent = {
  meta: {
    title: "Tippgeberprämie: 200 € für Ihre Empfehlung | TONN",
    description: "Empfehlen Sie uns weiter: 200 € Tippgeberprämie bei Abschluss einer privaten Krankenvollversicherung über unser Büro. So funktioniert’s und Teilnahmebedingungen.",
    crumb: "Tippgeberprämie",
  },
  banner: {
    ariaLabel: "Tippgeberprämie",
    title: "Möchten Sie sich 200 € Tippgeberprämie sichern?",
    text: "Empfehlen Sie uns weiter. Schließt die empfohlene Person über uns eine private Krankenvollversicherung ab, erhalten Sie unter den Teilnahmebedingungen 200 € Tippgeberprämie.",
    cta: "So funktioniert’s",
    note: ["Auszahlung nach sechs Monaten bestehendem Versicherungsvertrag und vollständig gezahlten Beiträgen. Es gelten die ", "Teilnahmebedingungen", "."],
  },
  page: {
    eyebrow: "Empfehlungsprogramm",
    title: "200 € Tippgeberprämie für Ihre Empfehlung",
    lead: "Kennen Sie jemanden, der eine private Krankenvollversicherung in Betracht zieht? Empfehlen Sie uns weiter. Schließt die empfohlene Person über unser Büro eine private Krankenvollversicherung ab, erhalten Sie unter den Teilnahmebedingungen 200 € Tippgeberprämie.",
    heroCta: "So funktioniert’s",
    heroTermsLink: "Teilnahmebedingungen lesen",
    stepsTitle: "So funktioniert’s",
    steps: [
      { title: "Sie empfehlen unser Büro", text: "Sie stellen den Kontakt her und erzählen von uns. Beraten oder Tarife auswählen müssen Sie dafür nicht." },
      { title: "Die neue Kundin oder der neue Kunde meldet sich selbst", text: "Die empfohlene Person nimmt eigenständig Kontakt auf und nennt bei der ersten Kontaktaufnahme, vor Beginn der Beratung, wer sie empfohlen hat." },
      { title: "Auszahlung nach Erfüllung der Bedingungen", text: "Sind die Voraussetzungen der Teilnahmebedingungen erfüllt, erfolgt die Auszahlung der Tippgeberprämie." },
    ],
    selfTitle: "Sie wurden empfohlen?",
    selfText: "Dann nehmen Sie bitte selbst Kontakt mit uns auf. Nennen Sie uns dabei schon bei der ersten Anfrage, von wem Sie empfohlen wurden.",
    selfHint: "Im Kontaktformular gibt es dafür das optionale Feld „Empfohlen von“.",
    selfCta: "Kontakt aufnehmen",
    termsTitle: "Teilnahmebedingungen",
    termsPrivacy: ["Hinweise zum Datenschutz finden Sie in der ", "Datenschutzerklärung"],
    terms: [
      { title: "§ 1 Veranstalter", text: "Veranstalter der Tippgeberprämie ist Andreas Tonn Versicherungen, Inhaber Andreas Tonn, Sessendrupweg 54, 48161 Münster (Anbieterangaben laut Impressum), nachfolgend „das Büro“." },
      { title: "§ 2 Teilnahme", text: "Teilnehmen können volljährige Privatpersonen (nachfolgend „empfehlende Person“)." },
      { title: "§ 3 Höhe der Prämie", text: "Für einen neuen Kunden, der die Bedingungen erfüllt, zahlt das Büro der empfehlenden Person einmalig 200 €. Die Prämie wird je neuem Kunden gezahlt, nicht je Versicherungskomponente." },
      { title: "§ 4 Maßgeblicher Vertrag", text: "Maßgeblich ist ausschließlich der Abschluss einer privaten Krankenvollversicherung. Zusatzversicherungen und ein bloßer Tarifwechsel lösen keinen Anspruch auf die Tippgeberprämie aus." },
      { title: "§ 5 Empfehlung", text: "Die Empfehlung wird bei der ersten Kontaktaufnahme, vor Beginn der Beratung, festgehalten. Dafür nennt die empfohlene Person bei ihrer ersten Anfrage, wer sie empfohlen hat (zum Beispiel im Feld „Empfohlen von“ des Kontaktformulars). Eine nachträgliche Zuordnung ist nicht möglich." },
      { title: "§ 6 Ausgeschlossene Empfehlungen", text: "Ausgeschlossen sind Eigenempfehlungen sowie Personen, mit denen das Büro bereits eine Beratung zur privaten Krankenversicherung führt." },
      { title: "§ 7 Vertragsabschluss", text: "Der Vertrag muss über das Büro zustande kommen." },
      { title: "§ 8 Entstehung des Anspruchs", text: "Der Anspruch auf die Tippgeberprämie entsteht, wenn der Vertrag sechs Monate ununterbrochen besteht und die Beiträge für diesen Zeitraum vollständig gezahlt wurden." },
      { title: "§ 9 Auszahlung", text: "Die Auszahlung erfolgt innerhalb von 30 Tagen, nachdem die Voraussetzungen nach § 8 erfüllt sind. Bankverbindungen werden nicht über diese Website erhoben." },
      { title: "§ 10 Spätere Kündigung", text: "Wird der Vertrag nach der Auszahlung später ordentlich gekündigt, muss die ausgezahlte Tippgeberprämie nicht zurückgezahlt werden." },
      { title: "§ 11 Rolle der empfehlenden Person", text: "Die empfehlende Person stellt lediglich den Kontakt her. Sie berät nicht und wählt keinen Tarif aus. Beratung und Vermittlung erfolgen ausschließlich durch das Büro." },
    ],
  },
};
