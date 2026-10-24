/**
 * Typisiertes Wörterbuch für Oberflächentexte (Header, Footer, Menü, Sprachumschalter, Cookie-Einwilligung, 404).
 * Alle Sprachen müssen exakt diese Struktur erfüllen; die deutsche Fassung dient als Referenz für die Vollständigkeitsprüfung.
 */
export type Dictionary = {
  notFound: { label: string; title: string; text: string; home: string };
  nav: Record<"privateHealth" | "services" | "disability" | "capital" | "insurances" | "about" | "knowledge" | "contact", string>;
  common: {
    skipToContent: string;
    germanOnlyBadge: string;
    germanOnlyHint: string;
    homeAria: string;
    /** Beschriftung der Schaltfläche „nach oben“ (nur für Screenreader/Tooltip) */
    backToTop: string;
    /** Name der Startseite (Brotkrumen, JSON-LD) */
    homeName: string;
    /** Platzhalter {current} */
    languageButtonAria: string;
    languageList: string;
    languageSoon: string;
  };
  header: { cta: string; call: string; callAria: string; navLabel: string; mobileNavLabel: string; menuOpen: string; menuClose: string };
  footer: {
    taglineLine1: string;
    taglineLine2: string;
    socialLabel: string;
    linkedin: string;
    googleProfile: string;
    email: string;
    servicesTitle: string;
    companyTitle: string;
    legalTitle: string;
    contactTitle: string;
    hoursTitle: string;
    /** Zeilen der Geschäftszeiten als [Tage, Zeit] */
    hoursWeekdays: [string, string];
    hoursSaturday: [string, string];
    privateHealth: string;
    disability: string;
    insurances: string;
    capital: string;
    about: string;
    knowledge: string;
    contact: string;
    imprint: string;
    privacy: string;
    cookieSettings: string;
    contactCta: string;
  };
  consent: {
    title: string;
    textBefore: string;
    privacyLink: string;
    textAfter: string;
    analyticsName: string;
    analyticsDesc: string;
    mapsName: string;
    mapsDesc: string;
    acceptAll: string;
    rejectAll: string;
    saveSelection: string;
    settings: string;
  };
};
