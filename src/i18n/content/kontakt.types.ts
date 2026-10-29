/** Übersetzbare Texte der Seiten „Kontakt“ und „Danke“ (inkl. Formular und Fehlermeldungen). */
export type KontaktContent = {
  meta: { title: string; description: string; name: string; crumb: string };
  hero: { eyebrow: string; title: string; text: string };
  cardsAria: string;
  cards: {
    phone: string;
    /** Beschriftung der Büro-Nummer im Telefon-Kasten */
    office: string;
    email: string;
    emailAction: string;
    appointment: string;
    appointmentText: string;
    appointmentAction: string;
  };
  formIntro: { title: string; lead: string };
  form: {
    topicLegend: string;
    optional: string;
    /** Anzeigetexte in der Reihenfolge von TOPICS (src/app/(de)/kontakt/_lib/schema.ts); gesendet wird weiterhin der deutsche Wert */
    topics: [string, string, string, string, string];
    name: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    messageHint: string;
    replyLegend: string;
    /** Anzeigetexte in der Reihenfolge von REPLY_VIA ("E-Mail", "Rückruf") */
    replyVia: [string, string];
    phone: string;
    phoneOptional: string;
    phoneHint: string;
    /** Optionales Feld „Empfohlen von“ (Tippgeberprämie) mit Hinweis */
    referrer: string;
    referrerHint: string;
    honeypot: string;
    privacyNote: string;
    privacyLink: string;
    privacyBefore: string;
    privacyLinkInline: string;
    privacyAfter: string;
    submit: string;
    sending: string;
    required: string;
    /** Der Teil in [eckigen Klammern] wird zum Telefonlink (CallText) */
    serverError: string;
    /** Hinweis zur Antwortzeit unter der Schaltfläche */
    responseTime: string;
  };
  errors: {
    topic: string;
    nameRequired: string;
    /** Platzhalter {n} */
    tooLong: string;
    emailRequired: string;
    emailInvalid: string;
    replyVia: string;
    phoneRequired: string;
    phoneInvalid: string;
    privacy: string;
  };
};

export type DankeContent = {
  meta: { title: string };
  eyebrow: string;
  title: [string, string];
  lead: string;
  note: string;
  /** Sekundärer Telefonlink; der Teil in [eckigen Klammern] ist der Link */
  callPrompt: string;
  home: string;
  /** Anzeige, wenn die Seite ohne bestätigte Übermittlung aufgerufen wird */
  unconfirmed: { eyebrow: string; title: string; lead: string; toForm: string };
};
