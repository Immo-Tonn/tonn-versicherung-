import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { defaultLocale, type Locale } from "@/i18n/config";
import { isNoindex, isPublic, localizedPath } from "@/i18n/registry";
import { localizedAlternates, localizedOpenGraph } from "@/i18n/seo";

/** Standard-Vorschaubild für Open Graph / X (Twitter). Reines Metadaten-Asset, nicht auf der Seite sichtbar. */
export const OG_IMAGE = {
  url: "/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Giebelhäuser am Prinzipalmarkt in Münster",
};

/** Alt-Text des Vorschaubilds je Sprache (Deutsch = OG_IMAGE.alt, unverändert). */
const OG_IMAGE_ALT: Record<Locale, string> = {
  de: OG_IMAGE.alt,
  en: "Gabled houses on the Prinzipalmarkt in Münster",
  ru: "Фронтонные дома на площади Принципальмаркт в Мюнстере",
};

/**
 * Robots-Regel für EN/RU nach Veröffentlichungsstatus (Register): nur "live" wird indexiert,
 * Entwürfe/geplante Seiten und noindex-Seiten (Danke) nie. Deutsch: keine Regel (globale Einstellungen bleiben).
 */
export function localizedRobots(path: string, locale: Locale): Metadata["robots"] | undefined {
  if (locale === defaultLocale) return undefined;
  return isPublic(path, locale) && !isNoindex(path) ? { index: true, follow: true } : { index: false, follow: false };
}

type PageMetaInput = {
  /** Pfad der Seite, z. B. "/private-krankenversicherung" (Canonical wird relativ zu metadataBase aufgelöst) */
  path: string;
  /** Vollständiger SEO-Title inkl. Marke (wird unverändert verwendet, kein Template) */
  title: string;
  description: string;
  type?: "website" | "article";
  /** Sprache der Seite (Standard: Deutsch). `path` bleibt der deutsche Registerpfad; die Sprach-URL wird daraus abgeleitet. */
  locale?: Locale;
};

/**
 * Einheitliche Metadaten für eine Seite: Title, Description, Canonical, Open Graph und Twitter-Card.
 * Robots: nur für EN/RU (nach Registerstatus, siehe localizedRobots); die deutschen Seiten bleiben unverändert.
 */
export function pageMetadata({ path, title, description, type = "website", locale = defaultLocale }: PageMetaInput): Metadata {
  const og = localizedOpenGraph(path, locale);
  const url = localizedPath(path, locale);
  const image = { ...OG_IMAGE, alt: OG_IMAGE_ALT[locale] };
  const robots = localizedRobots(path, locale);
  return {
    title: { absolute: title },
    description,
    ...(robots ? { robots } : {}),
    alternates: localizedAlternates(path, locale),
    openGraph: {
      type,
      locale: og.locale,
      ...(og.alternateLocale.length ? { alternateLocale: og.alternateLocale } : {}),
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** Stabile @id-Werte, damit alle Seiten auf dieselben Entitäten verweisen (keine Duplikate). */
export const ids = {
  website: () => `${siteConfig.url}/#website`,
  organization: () => `${siteConfig.url}/#organization`,
  person: () => `${siteConfig.url}/#andreas-tonn`,
};
