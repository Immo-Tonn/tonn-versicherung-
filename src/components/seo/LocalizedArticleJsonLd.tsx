import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/registry";
import { inLanguage } from "@/i18n/seo";
import { ids, SOCIAL_PREVIEW_IMAGE } from "@/lib/seo";

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
  /** fachlich geprüft (Andreas Tonn): reviewedBy an der WebPage, kein author, kein Datum */
  reviewed?: boolean;
};

/**
 * Article + BreadcrumbList für EN/RU-Beiträge – gleicher Aufbau wie das JSON-LD der deutschen Beiträge ([slug]/page.tsx),
 * mit sprachspezifischen URLs, inLanguage und übersetzten Texten. Kein author und keine Datumsfelder (nicht bekannt); die bestätigte
 * fachliche Prüfung steht als reviewedBy an der WebPage.
 */
export default function LocalizedArticleJsonLd({ slug, locale, headline, description, section, homeName, guidesName, sources, reviewed }: Props) {
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
      mainEntityOfPage: { "@type": "WebPage", "@id": url, ...(reviewed ? { reviewedBy: { "@id": ids.person() } } : {}) },
      isPartOf: { "@id": ids.website() },
      articleSection: section,
      image: `${siteConfig.url}${SOCIAL_PREVIEW_IMAGE.url}`, // dasselbe Bild wie og:image dieser Seite
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
