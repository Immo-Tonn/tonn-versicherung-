#!/usr/bin/env node
/**
 * Öffnet die EN/RU-Entwürfe (src/app/(en|ru)/_drafts/…) NUR für Vercel-PREVIEW-Builds.
 *
 * Aufruf: über das npm-Skript "vercel-build" (Vercel nutzt es statt "build"). Das Skript tut nur dann etwas, wenn
 * VERCEL=1 und VERCEL_ENV=preview gesetzt sind (Preview-Deployment auf Vercel). In jedem anderen Fall (Production auf Vercel,
 * lokaler Build, Docker/Hetzner, CI) beendet es sich sofort, ohne etwas zu verändern.
 *
 * Im Preview-Build (frischer, temporärer Checkout auf Vercel – nie im Git-Repository):
 *  - jeder Entwurf bekommt eine Route (page.tsx re-exportiert den Entwurf),
 *  - das Register markiert diese Seiten in der Build-Kopie als "live" (Sprachumschalter, Sitemap, hreflang).
 * Das Register im Repository bleibt "draft"; die Veröffentlichung auf der Hauptdomain bleibt ein eigener, bewusster Schritt.
 * Noindex: next.config.ts sendet für *.vercel.app X-Robots-Tag "noindex, nofollow" (zusätzlich setzt Vercel Preview-Deployments auf noindex).
 */
import fs from "node:fs";
import path from "node:path";

if (process.env.VERCEL !== "1" || process.env.VERCEL_ENV !== "preview") {
  console.log(`vercel-preview-prepare: übersprungen (VERCEL=${process.env.VERCEL ?? "-"}, VERCEL_ENV=${process.env.VERCEL_ENV ?? "-"}).`);
  process.exit(0);
}

const root = process.cwd();
const drafts = [];
for (const l of ["en", "ru"]) {
  const base = path.join(root, "src/app", `(${l})`, "_drafts");
  if (!fs.existsSync(base)) continue;
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === "page.tsx") drafts.push({ l, rel: path.relative(base, path.dirname(p)) });
    }
  };
  walk(base);
}

for (const { l, rel } of drafts) {
  const pub = path.join(root, "src/app", `(${l})`, l, rel);
  fs.mkdirSync(pub, { recursive: true });
  const toDrafts = path.relative(pub, path.join(root, "src/app", `(${l})`, "_drafts", rel)).split(path.sep).join("/");
  fs.writeFileSync(path.join(pub, "page.tsx"), `export { default, generateMetadata } from "${toDrafts}/page";\n`);
  if (rel === "") fs.rmSync(path.join(pub, "route.ts"), { force: true });
}

const reg = path.join(root, "src/i18n/registry.ts");
fs.appendFileSync(
  reg,
  `\n// nur Vercel-Preview-Build:\nfor (const [l, p] of ${JSON.stringify(drafts.map((d) => [d.l, "/" + d.rel]))} as ["en" | "ru", string][]) {\n  const e = routes.find((r) => r.path === p);\n  if (e) e.status[l] = "live";\n}\n`,
);
console.log(`vercel-preview-prepare: ${drafts.length} EN/RU-Entwürfe für diesen Preview-Build geöffnet.`);
