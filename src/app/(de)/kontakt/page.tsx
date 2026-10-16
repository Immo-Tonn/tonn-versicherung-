import PageJsonLd from "@/components/seo/PageJsonLd";
import { pageMetadata } from "@/lib/seo";
import { KtCards, KtForm, KtHero } from "./_components/Sections";

const path = "/kontakt";
const title = "Kontakt & Erstgespräch Münster | TONN";
const description =
  "Kostenloses und unverbindliches Erstgespräch vereinbaren: per Telefon, E-Mail oder Formular – persönlich in Münster oder online.";

export const metadata = pageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <PageJsonLd path={path} name="Kontakt" description={description} pageType="ContactPage" crumbs={[{ name: "Kontakt", path }]} />
      <KtHero />
      <KtCards />
      <KtForm />
    </>
  );
}
