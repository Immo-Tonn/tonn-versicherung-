export type SubBlock =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "note"; label: string; text: string }
  | { t: "link"; text: string; href: string };

export type SubSource = { label: string; url: string };

export type SubPageContent = {
  /** Pfad der Seite, z. B. "/private-krankenversicherung/angestellte" */
  path: string;
  /** Letzter Eintrag der Brotkrumen (aktuelle Seite) */
  crumb: string;
  /** H1 */
  title: string;
  /** „Kurz beantwortet“ */
  answer: string;
  blocks: SubBlock[];
  sources: SubSource[];
};

/** Mittlere Kontakt-Schaltfläche: Anzahl der H2-Abschnitte, nach denen sie steht (Schlüssel: letztes Pfadsegment) */
export const MID_CTA_AFTER_SECTIONS: Record<string, number> = {
  angestellte: 3,
  selbststaendige: 3,
  beamte: 4,
};
