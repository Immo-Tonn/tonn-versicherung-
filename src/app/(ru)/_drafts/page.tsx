import LocalizedHome from "@/components/home-i18n/LocalizedHome";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { homeContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF Startseite (RU) – nicht veröffentlicht (Register: draft). */
const t = homeContent.ru;

export const generateMetadata = () => pageMetadata({ path: "/", title: t.meta.title, description: t.meta.description, locale: "ru" });

export default function HomePage() {
  return (
    <>
      <PageJsonLd path="/" name={t.meta.pageName} description={t.meta.description} locale="ru" />
      <LocalizedHome locale="ru" />
    </>
  );
}
