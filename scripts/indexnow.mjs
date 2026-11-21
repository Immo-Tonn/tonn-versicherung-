#!/usr/bin/env node
/**
 * IndexNow: meldet alle URLs aus der Sitemap an api.indexnow.org (Bing, Yandex u. a.).
 * Aufruf: npm run indexnow
 * Der Schlüssel ist öffentlich (liegt als Datei unter public/<key>.txt) und kein Geheimnis.
 * Exit-Code 1, wenn die Sitemap nicht gelesen werden kann oder IndexNow einen Fehler meldet (200/202 gelten als Erfolg).
 */
const HOST = "tonn-versicherung.de";
const KEY = "f2275d56a2654e25819f1001706ebc92";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH = 10000; // IndexNow-Limit je Anfrage

const res = await fetch(SITEMAP);
if (!res.ok) {
  console.error(`Sitemap nicht lesbar: HTTP ${res.status}`);
  process.exit(1);
}
const xml = await res.text();
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
// Nur <loc> in <url>-Einträgen (nicht die hreflang-Alternativen); Duplikate entfernen
const urls = [...new Set([...xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1].trim())))].filter((u) => new URL(u).hostname === HOST);
if (urls.length === 0) {
  console.error("Keine URLs in der Sitemap gefunden.");
  process.exit(1);
}

let failed = false;
for (let i = 0; i < urls.length; i += BATCH) {
  const urlList = urls.slice(i, i + BATCH);
  const r = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  console.log(`IndexNow: HTTP ${r.status}, ${urlList.length} URLs`);
  if (r.status !== 200 && r.status !== 202) {
    failed = true;
    console.error((await r.text()).slice(0, 300));
  }
}
process.exit(failed ? 1 : 0);
