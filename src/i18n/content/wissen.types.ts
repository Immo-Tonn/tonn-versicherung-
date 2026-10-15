import type { Block } from "@/app/(de)/wissen/_lib/articles";

/**
 * Übersetzung eines Ratgeber-Beitrags. Struktur und Reihenfolge der Blöcke müssen exakt der deutschen Vorlage
 * (src/app/(de)/wissen/_lib/articles.ts) entsprechen; Quellen-Links, verwandte Beiträge und Link-Ziele stammen von dort.
 */
export type ArticleTranslation = {
  slug: string;
  topic: string;
  title: string;
  /** SEO (Ersatz für articleSeo aus _lib/seo.ts) */
  seo: { title: string; description: string };
  answer: string;
  blocks: Block[];
  /** Beschriftungen der Quellen in der Reihenfolge der deutschen Quellenliste */
  sourceLabels: string[];
  cta?: { title: string; text: string; label: string };
};

export type ArticleLabels = {
  home: string;
  guides: string;
  breadcrumbAria: string;
  example: string;
  answerLabel: string;
  sourcesTitle: string;
  sourceLang: string;
  relatedTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};
