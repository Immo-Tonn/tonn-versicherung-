import type { Locale } from "../config";
import type { Dictionary } from "./types";
import { en } from "./en";
import { ru } from "./ru";

/** Deutsche Referenzfassung (entspricht den bestehenden Texten in Header/Footer/Consent). */
const de: Dictionary = {
  notFound: { label: "Fehler 404", title: "Seite nicht gefunden", text: "Diese Seite gibt es leider nicht oder sie wurde verschoben.", home: "Zur Startseite" },
  nav: {
    privateHealth: "PKV",
    services: "Leistungen",
    disability: "Berufsunfähigkeitsversicherung",
    capital: "Kapitalanlage",
    insurances: "Weitere Versicherungen",
    about: "Über uns",
    knowledge: "Ratgeber",
    contact: "Kontakt",
  },
  common: {
    skipToContent: "Zum Inhalt springen",
    germanOnlyBadge: "DE",
    germanOnlyHint: "Seite nur auf Deutsch",
    homeAria: "Andreas Tonn Versicherungen – Startseite",
    homeName: "Startseite",
    languageButtonAria: "Sprache wählen, aktuell {current}",
    languageList: "Sprache",
    languageSoon: "bald",
  },
  header: { cta: "Kontakt aufnehmen", call: "Anrufen", callAria: "Anrufen: Andreas Tonn", navLabel: "Hauptnavigation", mobileNavLabel: "Mobile Navigation", menuOpen: "Menü öffnen", menuClose: "Menü schließen" },
  footer: {
    taglineLine1: "Persönlich in Münster.",
    taglineLine2: "Digital in ganz Deutschland.",
    socialLabel: "Soziale Netzwerke und Kontakt",
    linkedin: "LinkedIn",
    googleProfile: "Google-Profil",
    email: "E-Mail",
    servicesTitle: "Leistungen",
    companyTitle: "Unternehmen",
    legalTitle: "Rechtliches",
    contactTitle: "Kontakt",
    hoursTitle: "Geschäftszeiten",
    hoursWeekdays: ["Mo–Fr", "09:00–20:00"],
    hoursSaturday: ["Sa", "09:00–14:00"],
    hoursSunday: ["So", "geschlossen"],
    privateHealth: "Private Krankenversicherung",
    disability: "Berufsunfähigkeitsversicherung",
    insurances: "Weitere Versicherungen",
    capital: "Kapitalanlage",
    about: "Über uns",
    knowledge: "Ratgeber",
    contact: "Kontakt",
    imprint: "Impressum",
    privacy: "Datenschutz",
    cookieSettings: "Cookie-Einstellungen",
    contactCta: "Kontakt aufnehmen",
  },
  consent: {
    title: "Ihre Privatsphäre",
    textBefore:
      "Wir nutzen Google Analytics zur Reichweitenmessung und Google Maps zur Anzeige der Karte, aber nur mit Ihrer Einwilligung. Technisch notwendig ist nur die Speicherung Ihrer Auswahl. Details finden Sie in der ",
    privacyLink: "Datenschutzerklärung",
    textAfter: ".",
    analyticsName: "Google Analytics",
    analyticsDesc: "Reichweitenmessung (Google Ireland Limited)",
    mapsName: "Google Maps",
    mapsDesc: "Anzeige der Karte; dabei wird u. a. Ihre IP-Adresse an Google übertragen",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Alle ablehnen",
    saveSelection: "Auswahl speichern",
    settings: "Einstellungen",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { de, en, ru };
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
export type { Dictionary };
