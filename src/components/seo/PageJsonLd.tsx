import { ids } from "@/lib/seo";
import { siteConfig } from "@/data/site";

type Crumb = { name: string; path: string };
type Faq = { q: string; a: string };

type Props = {
  path: string;
  name: string;
  description: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  /** Brotkrumen OHNE Startseite (wird automatisch als erstes Element ergänzt) */
  crumbs?: Crumb[];
  /** Nur für Leistungsseiten: beschreibt die auf der Seite angebotene Beratungsleistung */
  service?: { name: string; serviceType: string; description: string };
  /** Nur Fragen/Antworten, die auf der Seite sichtbar stehen – gleiche Quelle wie die sichtbare FAQ */
  faq?: Faq[];
  /** Verweis auf die Person (z. B. Über uns), falls die Seite sie vorstellt */
  aboutPerson?: boolean;
};

/**
 * Seitenspezifisches JSON-LD (@graph). Organization und WebSite stammen aus dem globalen JsonLd im Layout
 * und werden hier nur per @id referenziert.
 */
export default function PageJsonLd({ path, name, description, pageType = "WebPage", crumbs = [], service, faq, aboutPerson }: Props) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const pageId = `${url}#webpage`;
  const graph: Record<string, unknown>[] = [];

  const page: Record<string, unknown> = {
    "@type": pageType,
    "@id": pageId,
    url,
    name,
    description,
    inLanguage: "de-DE",
    isPartOf: { "@id": ids.website() },
  };
  if (aboutPerson) page.about = { "@id": ids.person() };
  graph.push(page);

  if (crumbs.length) {
    const list = [{ name: "Startseite", path: "/" }, ...crumbs];
    page.breadcrumb = { "@id": `${url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: list.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${siteConfig.url}${c.path === "/" ? "" : c.path}`,
      })),
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
      areaServed: { "@type": "Country", name: "Deutschland" },
    });
  }

  if (faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": pageId },
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const data = { "@context": "https://schema.org", "@graph": graph };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
