import { existsSync } from "node:fs";
import path from "node:path";

/** Server-only: prüft, ob ein Bild unter /public bereits geliefert wurde. */
export function publicAssetExists(src: string): boolean {
  return existsSync(path.join(process.cwd(), "public", src));
}
