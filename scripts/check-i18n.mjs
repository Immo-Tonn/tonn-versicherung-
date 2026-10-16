#!/usr/bin/env node
/**
 * Veröffentlichungsprüfung für EN/RU. Endet mit Exit-Code 1 bei Fehlern.
 * Aufruf: node scripts/check-i18n.mjs   (Sitemap-Prüfung zusätzlich nach `next build`)
 *
 * Prüft:
 *  1. Status "live" im Register ohne öffentliche page.tsx
 *  2. öffentliche page.tsx ohne Status "live" (und Seiten in einem Ordner außerhalb von /en bzw. /ru)
 *  3. Entwürfe (_drafts) ohne Register-Eintrag, Entwürfe als Import außerhalb der Veröffentlichungsdatei
 *  4. fehlende Oberflächentexte (nur für Sprachen mit mindestens einer "live"-Seite)
 *  5. canonical/hreflang/x-default/og:locale (Gegenseitigkeit, nur live, x-default → Deutsch)
 *  6. Sitemap (.next/server/app/sitemap.xml.body): keine nicht-live EN/RU-URL, jede live-URL enthalten
 *  7. Register-Slugs der Ratgeber-Artikel = Slugs in articles.ts
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const ts = require(path.join(root, "node_modules/typescript"));
const errors = [];
const err = (m) => errors.push(m);

// --- i18n-Module on the fly nach CommonJS übersetzen
const out = fs.mkdtempSync(path.join(os.tmpdir(), "check-i18n-"));
const compile = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    const rel = path.relative(path.join(root, "src/i18n"), p);
    if (e.isDirectory()) compile(p);
    else if (e.name.endsWith(".ts")) {
      const js = ts.transpileModule(fs.readFileSync(p, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
      const dest = path.join(out, rel.replace(/\.ts$/, ".js"));
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, js);
    }
  }
};
compile(path.join(root, "src/i18n"));
const cfg = require(path.join(out, "config.js"));
const reg = require(path.join(out, "registry.js"));
const seo = require(path.join(out, "seo.js"));
const { dictionaries } = require(path.join(out, "dictionaries/index.js"));

const foreign = cfg.locales.filter((l) => l !== cfg.defaultLocale);
const appDir = path.join(root, "src/app");

// --- Dateien einsammeln
const walk = (dir, acc = []) => {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
};
const isPage = (f) => /^page\.(tsx|ts|jsx|js)$/.test(path.basename(f));
const germanPathOf = (relDir) => ("/" + relDir.split(path.sep).filter(Boolean).join("/")).replace(/\/$/, "") || "/";

for (const l of foreign) {
  const group = path.join(appDir, `(${l})`);
  const publicDir = path.join(group, l);
  const draftDir = path.join(group, "_drafts");

  // 1+2: öffentliche Seiten vs. Status
  const publicPages = new Set();
  for (const f of walk(publicDir).filter(isPage)) {
    const gp = germanPathOf(path.relative(publicDir, path.dirname(f)));
    publicPages.add(gp);
    if (/\[/.test(gp)) err(`${l}: dynamische Route ${gp} nicht erlaubt (Artikel/Seiten einzeln anlegen, damit unbekannte Pfade die sprachrichtige 404 erhalten)`);
    if (reg.getStatus(gp, l) !== "live") err(`${l}: öffentliche page.tsx für ${gp}, aber Register-Status ist "${reg.getStatus(gp, l)}" (nicht live)`);
  }
  for (const r of reg.routes) {
    if (reg.getStatus(r.path, l) === "live" && !publicPages.has(r.path)) err(`${l}: ${r.path} ist "live", aber es gibt keine öffentliche page.tsx unter (${l})/${l}`);
  }
  // Seiten/Routen außerhalb des Präfix-Ordners (außer _drafts) wären unter falscher URL erreichbar
  for (const f of walk(group)) {
    const rel = path.relative(group, f);
    const top = rel.split(path.sep)[0];
    if (top === l || top === "_drafts") continue;
    if (/^(page|route)\.(tsx|ts|jsx|js)$/.test(path.basename(f)) || path.basename(f) === "layout.tsx" && rel.includes(path.sep)) err(`${l}: unerwartete Routendatei (${l})/${rel}`);
  }
  // 3: Entwürfe
  for (const f of walk(draftDir).filter(isPage)) {
    const gp = germanPathOf(path.relative(draftDir, path.dirname(f)));
    if (reg.getStatus(gp, l) === "planned") err(`${l}: Entwurf ${gp} ohne Register-Eintrag (Status draft oder live setzen)`);
  }
  // 4: Wörterbuch
  const anyLive = reg.routes.some((r) => reg.getStatus(r.path, l) === "live");
  if (anyLive) {
    const leaves = (o, p = "") => Object.entries(o).flatMap(([k, v]) => (typeof v === "string" ? [[p + k, v]] : leaves(v, `${p}${k}.`)));
    for (const [k, v] of leaves(dictionaries[l])) if (!v.trim()) err(`${l}: Wörterbuch-Eintrag "${k}" ist leer`);
    const de = new Set(leaves(dictionaries.de).map(([k]) => k));
    for (const [k] of leaves(dictionaries[l])) de.delete(k);
    for (const k of de) err(`${l}: Wörterbuch-Eintrag "${k}" fehlt`);
  }
}

// Entwürfe dürfen nur von Veröffentlichungsdateien importiert werden
for (const f of walk(path.join(appDir)).concat(walk(path.join(root, "src/components")), walk(path.join(root, "src/lib")))) {
  if (!/\.(tsx?|jsx?)$/.test(f) || f.includes(`${path.sep}_drafts${path.sep}`)) continue;
  const txt = fs.readFileSync(f, "utf8");
  if (/(from\s*|import\s*\(\s*)["'][^"']*_drafts/.test(txt)) {
    const okReexport = /^export \{ default(, generateMetadata)? \} from "(\.\.\/)+_drafts\/[^"]+";\s*$/.test(txt.trim()) && /\(?(en|ru)\)?[\\/](en|ru)[\\/]/.test(f);
    if (!okReexport) err(`Import von _drafts außerhalb einer Veröffentlichungsdatei: ${path.relative(root, f)}`);
  }
}


// 5: canonical / hreflang / og:locale
for (const r of reg.routes) {
  for (const l of cfg.locales) {
    if (!reg.isPublic(r.path, l)) continue;
    const a = seo.localizedAlternates(r.path, l);
    const own = reg.localizedPath(r.path, l);
    if (a.canonical !== own) err(`${l} ${r.path}: canonical ${a.canonical} ≠ ${own}`);
    const pub = reg.publicLocales(r.path);
    if (pub.length < 2 || r.noindex) {
      if (a.languages) err(`${l} ${r.path}: hreflang bei nur einer Sprache`);
    } else {
      const exp = Object.fromEntries(pub.map((x) => [cfg.localeMeta[x].htmlLang, reg.localizedPath(r.path, x)]));
      if (pub.includes(cfg.defaultLocale)) exp["x-default"] = reg.localizedPath(r.path, cfg.defaultLocale);
      if (JSON.stringify(a.languages) !== JSON.stringify(exp)) err(`${l} ${r.path}: hreflang ${JSON.stringify(a.languages)} ≠ ${JSON.stringify(exp)}`);
      if (!pub.includes(cfg.defaultLocale)) err(`${r.path}: Übersetzung "live" ohne deutsche Seite (x-default fehlt)`);
    }
    const og = seo.localizedOpenGraph(r.path, l);
    if (og.locale !== cfg.localeMeta[l].ogLocale) err(`${l} ${r.path}: og:locale ${og.locale}`);
  }
}

// 6: Sitemap (nur wenn gebaut)
const smFile = path.join(root, ".next/server/app/sitemap.xml.body");
if (fs.existsSync(smFile)) {
  const urls = [...fs.readFileSync(smFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const pathsInMap = new Set(urls.map((u) => new URL(u).pathname));
  for (const p of pathsInMap) {
    const m = /^\/(en|ru)(\/.*)?$/.exec(p);
    if (m && (!reg.isPublic(m[2] ?? "/", m[1]) || reg.isNoindex(m[2] ?? "/"))) err(`Sitemap enthält nicht veröffentlichte oder noindex-Seite ${p}`);
  }
  for (const r of reg.routes) for (const l of foreign) {
    if (!r.noindex && reg.isPublic(r.path, l) && !pathsInMap.has(reg.localizedPath(r.path, l))) err(`Sitemap enthält ${reg.localizedPath(r.path, l)} (live) nicht`);
  }
} else console.log("Hinweis: keine gebaute Sitemap gefunden – Sitemap-Prüfung übersprungen (erst `next build`).");

// 7: Artikel-Slugs
const arts = fs.readFileSync(path.join(appDir, "(de)/wissen/_lib/articles.ts"), "utf8");
const slugs = [...arts.matchAll(/^\s{4}slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
const regSlugs = reg.routes.map((r) => /^\/wissen\/(.+)$/.exec(r.path)?.[1]).filter(Boolean);
for (const s of slugs) if (!regSlugs.includes(s)) err(`Artikel-Slug "${s}" fehlt im Register`);
for (const s of regSlugs) if (!slugs.includes(s)) err(`Register enthält unbekannten Artikel-Slug "${s}"`);

fs.rmSync(out, { recursive: true, force: true });
if (errors.length) {
  console.error(`check-i18n: ${errors.length} Fehler`);
  for (const e of errors) console.error(" ✗ " + e);
  process.exit(1);
}
console.log("check-i18n: OK");
