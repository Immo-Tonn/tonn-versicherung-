export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; children: NavItem[] };

export const mainNav: (NavItem | NavGroup)[] = [
  { label: "PKV", href: "/private-krankenversicherung" },
  {
    label: "Leistungen",
    children: [
      { label: "Berufsunfähigkeitsversicherung", href: "/berufsunfaehigkeitsversicherung" },
      { label: "Kapitalanlage", href: "/kapitalanlage" },
      { label: "Weitere Versicherungen", href: "/versicherungen" },
    ],
  },
  { label: "Über uns", href: "/ueber-uns" },
  // Label umbenannt; URL /wissen bleibt bewusst unverändert (URL-Migration separat)
  { label: "Ratgeber", href: "/wissen" },
  { label: "Kontakt", href: "/kontakt" },
];

export const headerCta = { label: "Kostenloses Erstgespräch", href: "/kontakt" };

export type Language = { code: "DE" | "EN" | "RU"; label: string; available: boolean };

export const languages: Language[] = [
  { code: "DE", label: "Deutsch", available: true },
  { code: "EN", label: "English", available: false },
  { code: "RU", label: "Русский", available: false },
];

export const footerColumns: { title: string; links: (NavItem | { label: string; href: string })[] }[] = [
  {
    title: "Leistungen",
    links: [
      { label: "Private Krankenversicherung", href: "/private-krankenversicherung" },
      { label: "Berufsunfähigkeitsversicherung", href: "/berufsunfaehigkeitsversicherung" },
      { label: "Weitere Versicherungen", href: "/versicherungen" },
      { label: "Kapitalanlage", href: "/kapitalanlage" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Ratgeber", href: "/wissen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      // TODO: eigene Cookie-Seite / Consent-Manager anbinden
      { label: "Cookies", href: "/datenschutz#cookies" },
      // TODO: Rechtstext prüfen lassen und eigene Seite anlegen
      { label: "Hinweise nach § 15 VersVermV", href: "/impressum#versvermv" },
    ],
  },
];
