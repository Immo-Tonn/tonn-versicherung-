import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { published } from "@/app/(de)/wissen/_lib/articles";
import { defaultLocale, locales } from "@/i18n/config";
import { isPublic, localizedPath, routes as registry } from "@/i18n/registry";
import { localizedAlternates } from "@/i18n/seo";

const routes = [
  "",
  "/private-krankenversicherung",
  "/private-krankenversicherung/angestellte",
  "/private-krankenversicherung/selbststaendige",
  "/private-krankenversicherung/beamte",
  "/berufsunfaehigkeitsversicherung",
  "/versicherungen",
  "/kapitalanlage",
  "/ueber-uns",
  "/wissen",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

const abs = (p: string) => `${siteConfig.url}${p === "/" ? "" : p}`;

/** hreflang-Alternativen (absolut) – nur wenn mindestens zwei Sprachen veröffentlicht ("live") sind. */
function alternatesFor(germanPath: string): MetadataRoute.Sitemap[number]["alternates"] {
  const languages = localizedAlternates(germanPath, defaultLocale).languages;
  if (!languages) return undefined;
  return { languages: Object.fromEntries(Object.entries(languages).map(([k, v]) => [k, abs(String(v))])) };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...routes, ...published().map((a) => `/wissen/${a.slug}`)];
  const entries: MetadataRoute.Sitemap = all.map((r) => ({
    url: `${siteConfig.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.6,
    ...(alternatesFor(r || "/") ? { alternates: alternatesFor(r || "/") } : {}),
  }));

  // Übersetzungen: ausschließlich Seiten mit Status "live" (draft/planned werden nie aufgenommen)
  for (const entry of registry) {
    for (const locale of locales) {
      if (entry.noindex || locale === defaultLocale || !isPublic(entry.path, locale)) continue;
      const alternates = alternatesFor(entry.path);
      entries.push({
        url: abs(localizedPath(entry.path, locale)),
        changeFrequency: "monthly",
        priority: entry.path === "/" ? 1 : 0.6,
        ...(alternates ? { alternates } : {}),
      });
    }
  }
  return entries;
}
