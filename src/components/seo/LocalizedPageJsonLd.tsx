import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/registry";
import { inLanguage } from "@/i18n/seo";
import { ids } from "@/lib/seo";

type Props = {
  /** Deutscher Registerpfad der Seite */
  path: string;
  locale: Exclude<Locale, "de">;
  name: string;
  description: string;
  /** Name der Startseite in der Sprache der Seite (erstes Element der Brotkrumen) */
  homeName: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  crumbs?: { name: string; path: string }[];
  service?: { name: string; serviceType: string; description: string };
  faq?: { q: string; a: string }[];
  /** Verweis auf die Person (z. B. Über uns) */
  aboutPerson?: boolean;
};

/**
 * Seitenspezifisches JSON-LD für EN/RU (WebPage, BreadcrumbList, Service, FAQPage) – gleicher Aufbau wie PageJsonLd der
 * deutschen Seiten, aber mit sprachspezifischen URLs, inLanguage und übersetzten Texten. Organization/WebSite kommen aus dem Layout.
 */
export default function LocalizedPageJsonLd({ path, locale, name, description, homeName, pageType = "WebPage", crumbs = [], service, faq, aboutPerson }: Props) {
  const abs = (p: string) => `${siteConfig.url}${localizedPath(p, locale)}`;
  const url = abs(path);
  const pageId = `${url}#webpage`;
  const page: Record<string, unknown> = {
    "@type": pageType,
    "@id": pageId,
    url,
    name,
    description,
    inLanguage: inLanguage(locale),
    isPartOf: { "@id": ids.website() },
  };
  if (aboutPerson) page.about = { "@id": ids.person() };
  const graph: Record<string, unknown>[] = [page];

  if (crumbs.length) {
    const list = [{ name: homeName, path: "/" }, ...crumbs];
    page.breadcrumb = { "@id": `${url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: list.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
    });
  }
  if (service) {
    page.mainEntity = { "@id": `${url}#service` };
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      serviceType: service.serviceType,
      description: service.description,
      url,
      provider: { "@id": ids.organization() },
      areaServed: { "@type": "Country", name: locale === "ru" ? "Германия" : "Germany" },
    });
  }
  if (faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": pageId },
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  const data = { "@context": "https://schema.org", "@graph": graph };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
