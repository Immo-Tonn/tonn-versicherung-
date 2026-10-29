/** Texte des Empfehlungsprogramms „Tippgeberprämie“: Banner auf der PKV-Seite und Seite /tippgeberpraemie. */
export type TippContent = {
  meta: { title: string; description: string; crumb: string };
  banner: {
    ariaLabel: string;
    title: string;
    text: string;
    cta: string;
    /** Hinweis in drei Teilen: davor, Linktext (führt zu den Teilnahmebedingungen), danach */
    note: [string, string, string];
  };
  page: {
    eyebrow: string;
    title: string;
    lead: string;
    heroCta: string;
    heroTermsLink: string;
    stepsTitle: string;
    steps: { title: string; text: string }[];
    selfTitle: string;
    selfText: string;
    selfHint: string;
    selfCta: string;
    termsTitle: string;
    /** Hinweis unter den Teilnahmebedingungen mit Verweis auf die Datenschutzerklärung (Linktext) */
    termsPrivacy: [string, string];
    terms: { title: string; text: string }[];
  };
};
