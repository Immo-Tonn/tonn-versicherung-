import { siteConfig } from "@/data/site";
import { ids, pageMetadata } from "@/lib/seo";
import { RgBu, RgCta, RgExperience, RgFaq, RgHero, RgIntro, RgKapital, RgPkv } from "./_components/Sections";
import { published } from "./_lib/articles";

const title = "Ratgeber: PKV, Berufsunfähigkeit & Kapitalanlage | TONN";
const description =
  "Verständliche Antworten zu privater Krankenversicherung, Berufsunfähigkeit und Kapitalanlage: Grundlagen, wichtige Fragen und vertiefende Beiträge aus Münster.";

export const metadata = pageMetadata({ path: "/wissen", title, description });

export default function Page() {
  const url = `${siteConfig.url}/wissen`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        name: "Ratgeber: PKV, Berufsunfähigkeit & Kapitalanlage",
        description,
        inLanguage: "de-DE",
        url,
        isPartOf: { "@id": ids.website() },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        hasPart: published().map((a) => ({ "@type": "Article", "@id": `${siteConfig.url}/wissen/${a.slug}#article`, headline: a.title, url: `${siteConfig.url}/wissen/${a.slug}` })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Ratgeber", item: url },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <RgHero />
      <RgIntro />
      <RgPkv />
      <RgBu />
      <RgKapital />
      <RgFaq />
      <RgExperience />
      <RgCta />
    </>
  );
}
