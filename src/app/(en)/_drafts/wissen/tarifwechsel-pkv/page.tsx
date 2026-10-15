import LocalizedArticlePage from "@/components/wissen-i18n/LocalizedArticlePage";
import { articleTranslations } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF Ratgeber „tarifwechsel-pkv“ (EN) – nicht veröffentlicht (Register: draft). */
const slug = "tarifwechsel-pkv";

export const generateMetadata = () =>
  pageMetadata({ path: `/wissen/${slug}`, title: articleTranslations.en[slug].seo.title, description: articleTranslations.en[slug].seo.description, type: "article", locale: "en" });

export default function Page() {
  return <LocalizedArticlePage slug={slug} locale="en" />;
}
