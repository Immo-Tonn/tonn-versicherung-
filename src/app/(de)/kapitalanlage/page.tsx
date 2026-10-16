import PageJsonLd from "@/components/seo/PageJsonLd";
import { pageMetadata } from "@/lib/seo";
import { faq } from "./_components/content";
import { KaConsulting, KaFaq, KaFinalCta, KaGoals, KaHero, KaQuestions } from "./_components/Sections";

const path = "/kapitalanlage";
const title = "Kapitalanlage Münster | Persönliche Beratung | TONN";
const description = "Persönliche Beratung zur Kapitalanlage in Münster. Gemeinsam betrachten wir Ihre Ziele, Ihren Zeithorizont sowie Chancen, Risiken und Kosten.";

export const metadata = pageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <PageJsonLd
        path={path}
        name="Kapitalanlage"
        description={description}
        crumbs={[{ name: "Kapitalanlage", path }]}
        service={{ name: "Beratung zur Kapitalanlage", serviceType: "Anlageberatung und -vermittlung: Kapitalanlage", description }}
        faq={faq.items}
      />
      <KaHero />
      <KaGoals />
      <KaQuestions />
      <KaConsulting />
      <KaFaq />
      <KaFinalCta />
    </>
  );
}
