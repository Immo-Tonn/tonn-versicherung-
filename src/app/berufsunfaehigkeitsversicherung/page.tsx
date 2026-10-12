import PageJsonLd from "@/components/seo/PageJsonLd";
import { pageMetadata } from "@/lib/seo";
import { faq } from "./_components/content";
import { BuExisting, BuFaq, BuFinalCta, BuGroups, BuHealth, BuHero, BuPower, BuProcess, BuReality, BuRente } from "./_components/Sections";

const path = "/berufsunfaehigkeitsversicherung";
const title = "Berufsunfähigkeitsversicherung Münster | BU-Beratung | TONN";
const description =
  "BU-Beratung in Münster und deutschlandweit: Einkommen absichern, BU-Rente planen und Gesundheitsfragen sorgfältig vorbereiten. Persönlich und unverbindlich.";

export const metadata = pageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <PageJsonLd
        path={path}
        name="Berufsunfähigkeitsversicherung"
        description={description}
        crumbs={[{ name: "Berufsunfähigkeitsversicherung", path }]}
        service={{
          name: "Beratung zur Berufsunfähigkeitsversicherung",
          serviceType: "Versicherungsberatung und -vermittlung: Berufsunfähigkeitsversicherung",
          description,
        }}
        faq={faq.items}
      />
      <BuHero />
      <BuPower />
      <BuReality />
      <BuGroups />
      <BuRente />
      <BuHealth />
      <BuProcess />
      <BuExisting />
      <BuFaq />
      <BuFinalCta />
    </>
  );
}
