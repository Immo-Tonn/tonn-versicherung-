import { localeMeta, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Serverseitige 404-Antwort (HTTP 404) für EN/RU mit korrektem <html lang>.
 * Hintergrund: Mit experimental.globalNotFound rendert Next.js jedes notFound() ohne Layouts (lang fehlt, CSS fehlt).
 * Deshalb liefert der Catch-all der Sprachgruppe das fertige HTML direkt aus. Farben entsprechen src/styles/variables.css.
 */
export function localizedNotFound(locale: Locale): Response {
  const t = getDictionary(locale).notFound;
  const html = `<!DOCTYPE html><html lang="${localeMeta[locale].htmlLang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#06263f"><title>${esc(t.title)} | TONN</title><style>body{margin:0;background:#faf9f6;color:#06263f;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}main{max-width:760px;margin:0 auto;padding:clamp(72px,10vw,140px) 24px}p.l{font-size:12px;letter-spacing:.14em;text-transform:uppercase;margin:0}h1{font-family:"Source Serif 4",Georgia,serif;font-weight:500;font-size:clamp(32px,5vw,48px);line-height:1.15;margin:20px 0}p{font-size:18px;line-height:1.6;margin:0 0 32px}a{display:inline-block;background:#06263f;color:#fff;padding:14px 28px;text-decoration:none;border-radius:2px}</style></head><body><main id="main"><p class="l">${esc(t.label)}</p><h1>${esc(t.title)}</h1><p>${esc(t.text)}</p><a href="/">${esc(t.home)}</a></main></body></html>`;
  return new Response(html, {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex, nofollow", "cache-control": "no-store" },
  });
}
