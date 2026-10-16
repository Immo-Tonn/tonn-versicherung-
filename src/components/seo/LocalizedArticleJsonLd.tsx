import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/registry";
import { inLanguage } from "@/i18n/seo";
import { ids, OG_IMAGE } from "@/lib/seo";

type Props = {
  /** Slug des Beitrags (deutscher Registerpfad: /wissen/<slug>) */
  slug: string;
  locale: Exclude<Locale, "de">;
  headline: string;
  description: string;
  section: string;
  homeName: string;
  guidesName: string;
  sources: { label: string; url: string }[];
};

/**
 * Article + BreadcrumbList für EN/RU-Beiträge – gleicher Aufbau wie das JSON-LD der deutschen Beiträge ([slug]/page.tsx),
 * mit sprachspezifischen URLs, inLanguage und übersetzten Texten. Autor/Datumsangaben nur, wenn sie (wie bei den deutschen
 * Beiträgen) tatsächlich bestätigt vorliegen – aktuell nicht.
 */
export default function LocalizedArticleJsonLd({ slug, locale, headline, description, section, homeName, guidesName, sources }: Props) {
  const abs = (p: string) => `${siteConfig.url}${localizedPath(p, locale)}`;
  const url = abs(`/wissen/${slug}`);
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline,
      description,
      inLanguage: inLanguage(locale),
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      isPartOf: { "@id": ids.website() },
      articleSection: section,
      image: `${siteConfig.url}${OG_IMAGE.url}`,
      publisher: { "@id": ids.organization() },
      citation: sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeName, item: abs("/") },
        { "@type": "ListItem", position: 2, name: guidesName, item: abs("/wissen") },
        { "@type": "ListItem", position: 3, name: headline, item: url },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
