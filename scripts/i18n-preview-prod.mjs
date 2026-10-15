#!/usr/bin/env node
/**
 * Lokale Vorschau der EN/RU-Entwürfe (src/app/(en|ru)/_drafts/…) als PRODUCTION-Build (`next build` + `next start`).
 *
 * Stabile Variante von i18n-preview.mjs: Der Dev-Server von Next.js fällt nach einigen hundert Anfragen aus
 * (500-Fehler, reiner Dev-Modus-Fehler); der Production-Build nicht. Dafür wird bei jedem Start neu gebaut (ca. 30 s);
 * Änderungen im Projekt werden nur durch erneutes Starten übernommen.
 *
 * Das Repository wird NICHT verändert: Das Projekt wird in ein temporäres Verzeichnis kopiert, dort werden die
 * Entwürfe als Routen eingehängt (und nur dort als „live“ markiert), gebaut und nur auf 127.0.0.1 gestartet.
 * Auf Servern/in CI/mit NODE_ENV=production bricht das Skript ab. Die Vorschau-Routen existieren nur in der Kopie.
 * Ohne .env: keine echten Google-Bewertungen/Karte.
 *
 * Aufruf: npm run preview:i18n   oder   node scripts/i18n-preview-prod.mjs [port]   (Standard 3300)
 */
import { execFileSync, spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = process.argv[2] ?? "3300";

if (process.env.NODE_ENV === "production" || process.env.CI || process.platform === "linux") {
  console.error("Abbruch: Die Entwurfsvorschau läuft nur lokal (nicht in Production/CI/Linux-Servern).");
  process.exit(1);
}

const tmp = path.join(os.tmpdir(), "tonn-i18n-preview-prod");
fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp, { recursive: true });
execFileSync("rsync", ["-a", "--exclude", "node_modules", "--exclude", ".next", "--exclude", ".git", "--exclude", ".env*", "--exclude", "docs", "--exclude", "design-source", `${root}/`, `${tmp}/`]);
execFileSync("cp", ["-cR", path.join(root, "node_modules"), path.join(tmp, "node_modules")]);

const drafts = [];
for (const l of ["en", "ru"]) {
  const base = path.join(tmp, "src/app", `(${l})`, "_drafts");
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
  const pub = path.join(tmp, "src/app", `(${l})`, l, rel);
  fs.mkdirSync(pub, { recursive: true });
  const toDrafts = path.relative(pub, path.join(tmp, "src/app", `(${l})`, "_drafts", rel)).split(path.sep).join("/");
  fs.writeFileSync(path.join(pub, "page.tsx"), `export { default, generateMetadata } from "${toDrafts}/page";\n`);
  if (rel === "") fs.rmSync(path.join(pub, "route.ts"), { force: true });
}
const reg = path.join(tmp, "src/i18n/registry.ts");
fs.appendFileSync(
  reg,
  `\n// nur Vorschau-Kopie:\nfor (const [l, p] of ${JSON.stringify(drafts.map((d) => [d.l, "/" + d.rel]))} as [\"en\" | \"ru\", string][]) {\n  const e = routes.find((r) => r.path === p);\n  if (e) e.status[l] = "live";\n}\n`,
);

console.log(`Vorschau-Kopie: ${tmp}\nEntwürfe: ${drafts.length ? drafts.map((d) => `/${d.l}/${d.rel}`).join(", ") : "(keine)"}\nhttp://127.0.0.1:${port}/ (nur lokal erreichbar)`);
console.log("Production-Build der Vorschau-Kopie …");
const next = path.join(tmp, "node_modules/.bin/next");
execFileSync(next, ["build"], { cwd: tmp, stdio: "inherit", env: { ...process.env, NODE_ENV: "production" } });
// „next start“ meldet bei output: "standalone" eine Warnung, funktioniert aber (nur lokale Vorschau)
const child = spawn(next, ["start", "-H", "127.0.0.1", "-p", port], { cwd: tmp, stdio: "inherit", env: { ...process.env, NODE_ENV: "production" } });
process.on("SIGINT", () => child.kill("SIGINT"));
child.on("exit", (c) => process.exit(c ?? 0));
