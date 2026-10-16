import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";

export type LocalizedNavItem = { label: string; href: string; german: boolean };
export type LocalizedNavGroup = { label: string; children: LocalizedNavItem[] };

/**
 * Hauptnavigation für EN/RU: gleiche Struktur und Reihenfolge wie data/navigation.ts (mainNav).
 * Die Ziele sind (noch) die deutschen Seiten – im Menü mit „DE“ gekennzeichnet.
 */
export function buildMainNav(t: Dictionary, locale: Exclude<Locale, "de">): (LocalizedNavItem | LocalizedNavGroup)[] {
  const item = (label: string, href: string): LocalizedNavItem => ({ label, ...localizedHref(href, locale) });
  return [
    item(t.nav.privateHealth, "/private-krankenversicherung"),
    {
      label: t.nav.services,
      children: [
        item(t.nav.disability, "/berufsunfaehigkeitsversicherung"),
        item(t.nav.capital, "/kapitalanlage"),
        item(t.nav.insurances, "/versicherungen"),
      ],
    },
    item(t.nav.about, "/ueber-uns"),
    item(t.nav.knowledge, "/wissen"),
    item(t.nav.contact, "/kontakt"),
  ];
}
