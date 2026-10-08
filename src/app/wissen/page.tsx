import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { RgBu, RgCta, RgExperience, RgFaq, RgHero, RgIntro, RgKapital, RgPkv } from "./_components/Sections";
import { published } from "./_lib/articles";

const description =
  "Verständliche Antworten zu privater Krankenversicherung, Berufsunfähigkeit und Kapitalanlage. Grundlagen, wichtige Fragen und vertiefende Beiträge von Tonn Versicherung.";

export const metadata: Metadata = {
  title: { absolute: "Ratgeber: PKV, Berufsunfähigkeit & Kapitalanlage | Tonn" },
  description,
  alternates: { canonical: "/wissen" },
  openGraph: { title: "Ratgeber: PKV, Berufsunfähigkeit & Kapitalanlage | Tonn", description, url: "/wissen", type: "website" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ratgeber: PKV, Berufsunfähigkeit & Kapitalanlage",
    description,
    inLanguage: "de-DE",
    url: `${siteConfig.url}/wissen`,
    hasPart: published().map((a) => ({ "@type": "Article", headline: a.title, url: `${siteConfig.url}/wissen/${a.slug}` })),
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
