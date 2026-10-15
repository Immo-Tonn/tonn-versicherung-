import type { Locale } from "@/i18n/config";

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

export type Language = { code: "DE" | "EN" | "RU"; locale: Locale; label: string };

/** Sprachen des Umschalters. Ob eine Übersetzung erreichbar ist, entscheidet das Register (src/i18n/registry.ts). */
export const languages: Language[] = [
  { code: "DE", locale: "de", label: "Deutsch" },
  { code: "EN", locale: "en", label: "English" },
  { code: "RU", locale: "ru", label: "Русский" },
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
      // öffnet das Einstellungsfenster für Cookies/Einwilligungen (kein Seitenwechsel)
      { label: "Cookie-Einstellungen", href: "#cookie-einstellungen" },
    ],
  },
];
