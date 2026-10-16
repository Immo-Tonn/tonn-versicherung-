#!/usr/bin/env node
/**
 * Öffnet die EN/RU-Entwürfe (src/app/(en|ru)/_drafts/…) NUR für einen Prüf-Build (Staging, z. B. Hetzner hinter SSH-Tunnel).
 *
 * Aufruf: im Dockerfile vor `next build`. Das Skript tut nur etwas, wenn STAGING_OPEN_I18N_DRAFTS=1 gesetzt ist
 * (Docker-Build-Arg). Ohne dieses Flag (Production-Build) endet es sofort, ohne etwas zu verändern.
 *
 * Wirkt nur auf die Build-Kopie im Image – das Register im Repository bleibt "draft"; die Veröffentlichung von EN/RU auf der
 * Hauptdomain bleibt ein eigener, bewusster Schritt (Register auf "live" + öffentliche page.tsx, geprüft von check-i18n).
 */
import fs from "node:fs";
import path from "node:path";

if (process.env.STAGING_OPEN_I18N_DRAFTS !== "1") {
  console.log("open-drafts-staging: übersprungen (STAGING_OPEN_I18N_DRAFTS != 1).");
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
  `\n// nur Staging-Build:\nfor (const [l, p] of ${JSON.stringify(drafts.map((d) => [d.l, "/" + d.rel]))} as ["en" | "ru", string][]) {\n  const e = routes.find((r) => r.path === p);\n  if (e) e.status[l] = "live";\n}\n`,
);
console.log(`open-drafts-staging: ${drafts.length} EN/RU-Entwürfe für diesen Build geöffnet.`);
