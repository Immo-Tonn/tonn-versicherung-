/**
 * Wärmt den Bild-Cache von next/image nach jedem Serverstart vor.
 *
 * Hintergrund: Der Cache (/app/.next/cache/images) liegt im Container und ist nach jedem Deploy/Neustart leer. Die erste
 * Anfrage pro Bildbreite muss das Bild dann erst kodieren (AVIF dauert auf 1,5 vCPU ca. 4 s, siehe Hero-Messung) und
 * verzögert so das Hero-Foto beim ersten Besuch. Hier werden die URLs der Bilder im ersten Bildschirmbereich
 * (fetchpriority="high", also das Hero-Foto jeder Seite) genau so angefragt wie vom Browser, nacheinander und nur AVIF
 * (das von next.config.ts bevorzugte Format). Es ändert weder Bild noch Format noch Darstellung.
 *
 * Zusätzlich werden die Bilder weiter unten auf den Seiten (loading="lazy") in den Breiten vorgewärmt, die gängige Geräte laut `sizes`
 * und srcset tatsächlich anfordern (PROFILES, Handy zuerst). Ohne das zahlt der erste Besucher nach jedem Deploy die Kodierzeit
 * (gemessen auf dem Server: 0,4 bis 2,2 s je Bild und Breite) bei jedem Foto, das er beim Scrollen erreicht.
 */
const ACCEPT = "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"; // wie Chrome/Firefox
const MAX_WIDTH = 2048; // 3840 w gibt es nur für 4K-Geräte; dort bleibt es bei Erstanfrage-Kodierung
const WIDTH_ORDER = [1920, 1200, 828, 1080, 750, 640, 2048]; // häufigste Gerätebreiten zuerst (Desktop, iPhone/Android mit hoher Pixeldichte)
const IMAGE_TIMEOUT_MS = 120_000; // großzügig: Ein Abbruch während der AVIF-Kodierung kann in Next 16.3.8 den Bild-Schlüssel dauerhaft blockieren
const READY_TIMEOUT_MS = 60_000; // so lange wird auf den eigenen Server gewartet
const TOTAL_BUDGET_MS = 12 * 60_000; // Gesamtlaufzeit des Warm-ups (einmalig pro Serverstart, keine Wiederholung)
const MAX_CONSECUTIVE_FAILURES = 2; // danach Abbruch statt Anfragen aufzustauen
const base = () => `http://127.0.0.1:${process.env.PORT ?? "3000"}`;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function get(path: string, accept?: string, timeoutMs = 30000): Promise<Response | null> {
  try {
    return await fetch(base() + path, { headers: accept ? { accept } : {}, signal: AbortSignal.timeout(timeoutMs), cache: "no-store" });
  } catch {
    return null;
  }
}

async function waitUntilReady(): Promise<boolean> {
  const deadline = Date.now() + READY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    const r = await get("/robots.txt", undefined, 2000);
    if (r?.ok) return true;
    await sleep(250);
  }
  return false;
}

/** Pfade: Startseiten zuerst (meistbesucht), danach alle Seiten aus der Sitemap. */
async function pagePaths(): Promise<string[]> {
  const paths = ["/", "/en", "/ru"];
  const xml = await (await get("/sitemap.xml"))?.text();
  for (const m of xml?.matchAll(/<loc>([^<]+)<\/loc>/g) ?? []) {
    try {
      const p = new URL(m[1]).pathname.replace(/\/$/, "") || "/";
      if (!paths.includes(p)) paths.push(p);
    } catch {}
  }
  return paths;
}

/** /_next/image-URLs der Bilder mit fetchpriority="high" (srcset-Breiten bis MAX_WIDTH), auch die <source>-Varianten im <picture> (Hero mobil). */
function priorityImageUrls(html: string): string[] {
  const urls: { url: string; w: number }[] = [];
  const addSrcset = (srcset: string | undefined) => {
    for (const entry of srcset?.split(",") ?? []) {
      const [url, w] = entry.trim().split(/\s+/);
      const width = Number(w?.replace("w", ""));
      if (url?.startsWith("/_next/image?") && width <= MAX_WIDTH) urls.push({ url: url.replaceAll("&amp;", "&"), w: width });
    }
  };
  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    if (/fetchpriority="high"/i.test(tag)) addSrcset(/\ssrcset="([^"]+)"/i.exec(tag)?.[1]);
  }
  for (const pic of html.match(/<picture\b[\s\S]*?<\/picture>/gi) ?? []) {
    if (!/<img\b[^>]*fetchpriority="high"/i.test(pic)) continue;
    for (const src of pic.match(/<source\b[^>]*>/gi) ?? []) addSrcset(/\ssrcset="([^"]+)"/i.exec(src)?.[1]);
  }
  const rank = (w: number) => (WIDTH_ORDER.includes(w) ? WIDTH_ORDER.indexOf(w) : WIDTH_ORDER.length);
  return urls.sort((a, b) => rank(a.w) - rank(b.w)).map((u) => u.url);
}

/** Gängige Geräte: [Viewport-Breite in CSS-Pixeln, Pixeldichte], nach Verbreitung geordnet (Handys zuerst). */
const PROFILES: [number, number][] = [
  [390, 3],
  [360, 3],
  [412, 2.625],
  [430, 3],
  [375, 2],
  [1440, 1],
  [1920, 1],
  [768, 2],
  [1280, 1],
  [1024, 2],
  [1536, 1.25],
  [1440, 2],
];

/** Breite des Bildes in CSS-Pixeln laut `sizes` bei gegebener Viewport-Breite (nur "(max|min-width: Npx) Xvw|Xpx"-Einträge, wie sie hier vorkommen). */
function slotWidth(sizes: string | undefined, vw: number): number {
  for (const part of (sizes ?? "100vw").split(",")) {
    const m = /^\s*(?:\(\s*(max|min)-width:\s*(\d+)px\s*\)\s+)?([\d.]+)(vw|px)\s*$/.exec(part);
    if (!m) continue;
    const [, kind, bp, n, unit] = m;
    if (kind && !(kind === "max" ? vw <= Number(bp) : vw >= Number(bp))) continue;
    return unit === "vw" ? (vw * Number(n)) / 100 : Number(n);
  }
  return vw;
}

/** Wie der Browser: kleinste srcset-Breite, die für Slot × Pixeldichte reicht, sonst die größte. */
function pickWidth(candidates: { url: string; w: number }[], needed: number) {
  const sorted = [...candidates].sort((a, b) => a.w - b.w);
  return sorted.find((c) => c.w >= needed) ?? sorted[sorted.length - 1];
}

/** Alle next/image-<img> einer Seite: je Profil die gewählte Variante (Rang = Profil-Index, Hero-Bilder vor allem anderen). */
function profileImageUrls(html: string): { url: string; rank: number }[] {
  const out: { url: string; rank: number }[] = [];
  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    if (!/data-nimg=/i.test(tag)) continue;
    const srcset = /\ssrcset="([^"]+)"/i.exec(tag)?.[1];
    if (!srcset) continue;
    const sizes = /\ssizes="([^"]*)"/i.exec(tag)?.[1];
    const hero = /fetchpriority="high"/i.test(tag);
    const candidates = srcset.split(",").flatMap((e) => {
      const [url, w] = e.trim().split(/\s+/);
      const width = Number(w?.replace("w", ""));
      return url?.startsWith("/_next/image?") && width ? [{ url: url.replaceAll("&amp;", "&"), w: width }] : [];
    });
    if (!candidates.length) continue;
    PROFILES.forEach(([vw, dpr], i) => {
      const c = pickWidth(candidates, slotWidth(sizes, vw) * dpr);
      if (c && c.w <= MAX_WIDTH) out.push({ url: c.url, rank: (hero ? 0 : 100) + i });
    });
  }
  return out;
}

export async function warmAboveTheFoldImages(): Promise<void> {
  const t0 = Date.now();
  try {
    if (!(await waitUntilReady())) return;
    const queue = new Map<string, number>(); // URL -> Rang (kleiner = früher)
    const add = (url: string, rank: number) => queue.set(url, Math.min(rank, queue.get(url) ?? Infinity));
    for (const path of await pagePaths()) {
      if (Date.now() - t0 > TOTAL_BUDGET_MS) break;
      const html = await (await get(path))?.text();
      if (!html) continue;
      for (const url of priorityImageUrls(html)) add(url, -1); // wie bisher: Hero-Bilder mit fetchpriority="high" in allen srcset-Breiten
      for (const { url, rank } of profileImageUrls(html)) add(url, rank);
    }
    const urls = [...queue.entries()].sort((a, b) => a[1] - b[1]).map(([url]) => url);
    const seen = new Set<string>();
    let ok = 0;
    let failures = 0;
    for (const url of urls) {
      if (Date.now() - t0 > TOTAL_BUDGET_MS || failures >= MAX_CONSECUTIVE_FAILURES) break;
      seen.add(url);
      const r = await get(url, ACCEPT, IMAGE_TIMEOUT_MS);
      if (r?.ok) {
        await r.arrayBuffer(); // Antwort vollständig lesen
        ok++;
        failures = 0;
      } else {
        failures++;
      }
      await sleep(100); // Echtanfragen nicht verdrängen
    }
    console.log(`[warm-images] ${ok}/${urls.length} Bildvarianten vorgewärmt in ${Math.round((Date.now() - t0) / 1000)} s${failures >= MAX_CONSECUTIVE_FAILURES ? " (nach Fehlern abgebrochen)" : ""}`);
  } catch (e) {
    console.warn("[warm-images] abgebrochen:", e instanceof Error ? e.message : e);
  }
}
