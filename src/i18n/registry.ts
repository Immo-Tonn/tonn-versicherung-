import { defaultLocale, localeMeta, locales, type Locale } from "./config";

/**
 * Zentrales Register: Sprachen, Routen und Veröffentlichungsstatus.
 *
 * Status:
 *  - "live"    : öffentlich erreichbar, in Sitemap und hreflang
 *  - "draft"   : Entwurf liegt unter src/app/(en|ru)/_drafts/… (keine Route), nur lokaler Vorschau-Server (scripts/i18n-preview.mjs)
 *  - "planned" : noch nicht vorhanden; überall 404
 * "live" ist nur erlaubt, wenn die öffentliche page.tsx existiert; scripts/check-i18n.mjs prüft das.
 *
 * Deutsche Seiten sind immer "live". EN/RU wird erst nach gesonderter Freigabe auf "live" gesetzt.
 */
export type PublishStatus = "live" | "draft" | "planned";

export type RouteEntry = {
  /** Deutscher Pfad (unverändert) */
  path: string;
  /** Status je Sprache; fehlende Sprache = "planned" */
  status: Partial<Record<Locale, PublishStatus>>;
  /** noindex-Seiten (z. B. Danke): nie in Sitemap/hreflang */
  noindex?: boolean;
};

const de = { de: "live" } as const;

/** Ratgeber-Beiträge mit EN/RU-Entwurf (Vorschau-Entwürfe unter (en|ru)/_drafts/wissen) */
const DRAFT_ARTICLES: string[] = [
  "pkv-oder-gkv",
  "anonyme-risikovoranfrage",
  "tarifwechsel-pkv",
  "bu-rente-planen",
  "gesundheitsfragen-bu",
  "bu-vertragsbedingungen",
  "berufsunfaehigkeit-ursachen-folgen",
  "grundlagen-kapitalanlage",
  "streuung-kapitalanlage",
];

export const routes: RouteEntry[] = [
  { path: "/", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/private-krankenversicherung", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/private-krankenversicherung/angestellte", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/private-krankenversicherung/selbststaendige", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/private-krankenversicherung/beamte", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/berufsunfaehigkeitsversicherung", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/kapitalanlage", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/versicherungen", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/ueber-uns", status: { ...de, en: "draft", ru: "draft" } },
  { path: "/wissen", status: { ...de, en: "draft", ru: "draft" } },
  // Ratgeber-Artikel (Slugs müssen mit src/app/(de)/wissen/_lib/articles.ts übereinstimmen – prüft check-i18n)
  ...[
    "pkv-oder-gkv",
    "anonyme-risikovoranfrage",
    "tarifwechsel-pkv",
    "bu-rente-planen",
    "gesundheitsfragen-bu",
    "bu-vertragsbedingungen",
    "berufsunfaehigkeit-ursachen-folgen",
    "grundlagen-kapitalanlage",
    "streuung-kapitalanlage",
  ].map((slug): RouteEntry => ({ path: `/wissen/${slug}`, status: { ...de, ...(DRAFT_ARTICLES.includes(slug) ? { en: "draft", ru: "draft" } : {}) } })),
  { path: "/kontakt", status: { ...de, en: "draft", ru: "draft" } },
  // Danke-Seite: noindex, daher nicht in der Sitemap und ohne hreflang
  { path: "/kontakt/danke", status: { ...de, en: "draft", ru: "draft" }, noindex: true },
  // Impressum/Datenschutz bleiben vorerst nur deutsch
  { path: "/impressum", status: { ...de } },
  { path: "/datenschutz", status: { ...de } },
];

export const isNoindex = (germanPath: string): boolean => routes.find((r) => r.path === germanPath)?.noindex === true;

export function getStatus(germanPath: string, locale: Locale): PublishStatus {
  const entry = routes.find((r) => r.path === germanPath);
  if (!entry) return "planned";
  return entry.status[locale] ?? "planned";
}

/** Nur "live" zählt für Sitemap, hreflang und Sprachumschalter – unabhängig von der Umgebung. */
export function isPublic(germanPath: string, locale: Locale): boolean {
  return getStatus(germanPath, locale) === "live";
}

export function publicLocales(germanPath: string): Locale[] {
  return locales.filter((l) => isPublic(germanPath, l));
}

/** URL-Pfad einer Seite in einer Sprache (Deutsch ohne Präfix). */
export function localizedPath(germanPath: string, locale: Locale): string {
  const prefix = localeMeta[locale].prefix;
  if (!prefix) return germanPath;
  return germanPath === "/" ? prefix : `${prefix}${germanPath}`;
}

/** Wandelt den Catch-all-Parameter eines Sprachpfads in den deutschen Registerpfad. */
export function germanPathFromSegments(segments: string[] | undefined): string {
  return segments && segments.length ? `/${segments.join("/")}` : "/";
}

/** Aktuelle Sprache und zugehöriger deutscher Registerpfad aus einem URL-Pfad (für den Umschalter). */
export function localeFromPathname(pathname: string): { locale: Locale; germanPath: string } {
  for (const l of locales) {
    const prefix = localeMeta[l].prefix;
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
      const rest = pathname.slice(prefix.length);
      return { locale: l, germanPath: rest === "" ? "/" : rest.replace(/\/$/, "") };
    }
  }
  return { locale: defaultLocale, germanPath: pathname.length > 1 ? pathname.replace(/\/$/, "") : "/" };
}

export { defaultLocale };
