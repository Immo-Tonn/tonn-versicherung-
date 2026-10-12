import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

/** Standard-Vorschaubild für Open Graph / X (Twitter). Reines Metadaten-Asset, nicht auf der Seite sichtbar. */
export const OG_IMAGE = {
  url: "/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Giebelhäuser am Prinzipalmarkt in Münster",
};

type PageMetaInput = {
  /** Pfad der Seite, z. B. "/private-krankenversicherung" (Canonical wird relativ zu metadataBase aufgelöst) */
  path: string;
  /** Vollständiger SEO-Title inkl. Marke (wird unverändert verwendet, kein Template) */
  title: string;
  description: string;
  type?: "website" | "article";
};

/**
 * Einheitliche Metadaten für eine Seite: Title, Description, Canonical, Open Graph und Twitter-Card.
 * Robots-Regeln werden hier bewusst NICHT gesetzt (globale Indexierungsregeln bleiben unverändert).
 */
export function pageMetadata({ path, title, description, type = "website" }: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images: [OG_IMAGE],
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
