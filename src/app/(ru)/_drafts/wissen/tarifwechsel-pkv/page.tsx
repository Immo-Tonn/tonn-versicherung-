import LocalizedArticlePage from "@/components/wissen-i18n/LocalizedArticlePage";
import { articleTranslations } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF Ratgeber „tarifwechsel-pkv“ (RU) – nicht veröffentlicht (Register: draft). */
const slug = "tarifwechsel-pkv";

export const generateMetadata = () =>
  pageMetadata({ path: `/wissen/${slug}`, title: articleTranslations.ru[slug].seo.title, description: articleTranslations.ru[slug].seo.description, type: "article", locale: "ru" });

export default function Page() {
  return <LocalizedArticlePage slug={slug} locale="ru" />;
}
