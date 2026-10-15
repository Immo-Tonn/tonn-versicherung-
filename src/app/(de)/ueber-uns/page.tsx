import PageJsonLd from "@/components/seo/PageJsonLd";
import { pageMetadata } from "@/lib/seo";
import { UeCta, UeHero, UeIntro, UePeople } from "./_components/Sections";

const path = "/ueber-uns";
const title = "Über uns: Andreas & Natalia Tonn, Münster | TONN";
const description =
  "Lernen Sie Andreas und Natalia Tonn in Münster kennen: Versicherungsvermittlung mit Schwerpunkt PKV und Berufsunfähigkeit sowie Organisation und Finanzen.";

export const metadata = pageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <PageJsonLd path={path} name="Über uns" description={description} pageType="AboutPage" crumbs={[{ name: "Über uns", path }]} aboutPerson />
      <UeHero />
      <UeIntro />
      <UePeople />
      <UeCta />
    </>
  );
}
