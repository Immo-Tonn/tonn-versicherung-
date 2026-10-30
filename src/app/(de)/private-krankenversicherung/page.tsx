import PageJsonLd from "@/components/seo/PageJsonLd";
import { pageMetadata } from "@/lib/seo";
import PkvTerms from "./_components/PkvTerms";
import { faq, risk, terms } from "./_components/content";
import { PkvAbout, PkvCompare, PkvFaq, PkvFinalCta, PkvHero, PkvProcess, PkvRisk, PkvSecondOpinion, PkvTargets, PkvTrust } from "./_components/Sections";

const path = "/private-krankenversicherung";
const title = "PKV Münster | Private Krankenversicherung & Beratung | TONN";
const description =
  "PKV-Beratung in Münster und deutschlandweit für Angestellte, Selbstständige und Beamte: Risikovoranfrage, Vergleich verschiedener Angebote, Betreuung.";

export const metadata = pageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <PageJsonLd
        path={path}
        name="Private Krankenversicherung"
        description={description}
        crumbs={[{ name: "Private Krankenversicherung", path }]}
        service={{
          name: "Beratung zur privaten Krankenversicherung",
          serviceType: "Versicherungsberatung und -vermittlung: private Krankenversicherung",
          description,
        }}
        faq={faq.items}
      />
      <PkvHero />
      <PkvTrust />
      <PkvTargets />
      <PkvProcess />
      <PkvRisk />
      <PkvCompare />
      <PkvAbout />
      <PkvSecondOpinion />
      <PkvFaq />
      <PkvFinalCta />
      <PkvTerms terms={terms} labels={risk.results} />
    </>
  );
}
