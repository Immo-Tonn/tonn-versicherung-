import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/registry";
import { inLanguage } from "@/i18n/seo";
import { ids } from "@/lib/seo";

type Props = {
  /** Deutscher Registerpfad der Übersicht (/wissen) */
  path: string;
  locale: Exclude<Locale, "de">;
  name: string;
  description: string;
  homeName: string;
  guidesName: string;
  /** Übersetzte Beiträge dieser Sprache (Slug + Überschrift) */
  articles: { slug: string; headline: string }[];
};

/**
 * CollectionPage + BreadcrumbList für die EN/RU-Ratgeber-Übersicht – gleicher Aufbau wie das JSON-LD der deutschen Seite
 * (src/app/(de)/wissen/page.tsx), aber mit sprachspezifischen URLs, inLanguage und den übersetzten Beiträgen.
 * Bewusst ohne FAQPage (das deutsche Original enthält keines).
 */
export default function LocalizedCollectionJsonLd({ path, locale, name, description, homeName, guidesName, articles }: Props) {
  const abs = (p: string) => `${siteConfig.url}${localizedPath(p, locale)}`;
  const url = abs(path);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        name,
        description,
        inLanguage: inLanguage(locale),
        url,
        isPartOf: { "@id": ids.website() },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        hasPart: articles.map((a) => ({ "@type": "Article", "@id": `${abs(`/wissen/${a.slug}`)}#article`, headline: a.headline, url: abs(`/wissen/${a.slug}`) })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeName, item: abs("/") },
          { "@type": "ListItem", position: 2, name: guidesName, item: url },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
