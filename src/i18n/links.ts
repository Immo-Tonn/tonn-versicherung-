import type { Locale } from "./config";
import { isPublic, localizedPath } from "./registry";

/**
 * Ziel eines internen Links in einer Sprachversion: die übersetzte Seite, wenn sie veröffentlicht ("live") ist,
 * sonst die deutsche Seite (dann mit „DE“ kennzeichnen). Entwürfe zählen in Production nie als veröffentlicht;
 * in der lokalen Vorschau (scripts/i18n-preview.mjs) sind sie in der Kopie des Registers "live".
 * Anker (#…) bleiben erhalten.
 */
export function localizedHref(href: string, locale: Locale): { href: string; german: boolean } {
  if (locale === "de" || !href.startsWith("/")) return { href, german: false };
  const [path, hash] = href.split("#");
  const target = isPublic(path, locale) ? localizedPath(path, locale) : null;
  if (target) return { href: hash ? `${target}#${hash}` : target, german: false };
  return { href, german: true };
}
