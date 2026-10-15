import PageJsonLd from "@/components/seo/PageJsonLd";
import { pageMetadata } from "@/lib/seo";
import { faq } from "./_components/content";
import { WvConsulting, WvFaq, WvFinalCta, WvHero, WvOverview, WvReview } from "./_components/Sections";

const path = "/versicherungen";
const title = "Versicherungen Münster: Haftpflicht, Hausrat & mehr | TONN";
const description =
  "Haftpflicht, Hausrat, Rechtsschutz, Unfall, Kfz und weitere Versicherungen: Wir besprechen persönlich, was zu Ihrer Situation passt, und prüfen bestehende Verträge.";

export const metadata = pageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <PageJsonLd
        path={path}
        name="Weitere Versicherungen"
        description={description}
        crumbs={[{ name: "Weitere Versicherungen", path }]}
        service={{
          name: "Beratung zu weiteren Versicherungen",
          serviceType: "Versicherungsberatung und -vermittlung: Haftpflicht, Hausrat, Rechtsschutz, Unfall und weitere Sparten",
          description,
        }}
        faq={faq.items}
      />
      <WvHero />
      <WvOverview />
      <WvReview />
      <WvConsulting />
      <WvFaq />
      <WvFinalCta />
    </>
  );
}
