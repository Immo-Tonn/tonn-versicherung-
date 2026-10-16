import LocalizedHome from "@/components/home-i18n/LocalizedHome";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { homeContent } from "@/i18n/content";
import { pageMetadata } from "@/lib/seo";

/** ENTWURF Startseite (EN) – nicht veröffentlicht (Register: draft). */
const t = homeContent.en;

export const generateMetadata = () => pageMetadata({ path: "/", title: t.meta.title, description: t.meta.description, locale: "en" });

export default function HomePage() {
  return (
    <>
      <PageJsonLd path="/" name={t.meta.pageName} description={t.meta.description} locale="en" />
      <LocalizedHome locale="en" />
    </>
  );
}
