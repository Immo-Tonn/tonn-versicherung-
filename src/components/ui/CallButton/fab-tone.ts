/**
 * Hintergrund unter der festen Anruf-Schaltfläche bestimmen: "dark" (dunkelblaue Fläche), "light" (helle Fläche) oder null (nicht bestimmbar:
 * Foto, Verlauf, halbtransparent). Es wird nur die Fläche direkt unter der Schaltfläche geprüft (3 Punkte auf Höhe ihrer Mitte), nicht der Bildschirm.
 * Pro Element wird das Ergebnis zwischengespeichert; die Auswertung läuft gedrosselt (siehe CallFab), nicht bei jedem Scroll-Ereignis.
 */
export type Tone = "dark" | "light" | null;

const cache = new WeakMap<Element, Tone | "pass">();
const PHOTO = new Set(["IMG", "PICTURE", "VIDEO", "CANVAS", "SVG", "IFRAME"]);

function luminance(r: number, g: number, b: number) {
  const f = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/** Eigener Hintergrund eines Elements: dark/light (deckend), null (Bild/Verlauf = unbestimmt), "pass" (durchsichtig: Eltern fragen). */
function own(el: Element): Tone | "pass" {
  const hit = cache.get(el);
  if (hit !== undefined) return hit;
  let result: Tone | "pass";
  if (PHOTO.has(el.tagName.toUpperCase())) result = null;
  else {
    const cs = getComputedStyle(el);
    if (cs.backgroundImage !== "none") result = null;
    else {
      const m = /rgba?\(([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)(?:[ ,/]+([\d.]+%?))?\)/.exec(cs.backgroundColor);
      const a = m ? (m[4] === undefined ? 1 : m[4].endsWith("%") ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 0;
      if (!m || a < 0.05) result = "pass";
      else if (a < 0.9) result = null;
      else result = luminance(+m[1], +m[2], +m[3]) < 0.2 ? "dark" : "light";
    }
  }
  cache.set(el, result);
  return result;
}

/** Von oben nach unten durch alle Elemente an dieser Stelle (inkl. Vorfahren und darunterliegender Geschwister wie Hero-Foto): das erste mit eigenem Hintergrund entscheidet. */
function toneAt(x: number, y: number, skip: Element): Tone {
  for (const e of document.elementsFromPoint(x, y)) {
    if (e === skip || skip.contains(e)) continue;
    const t = own(e);
    if (t !== "pass") return t;
  }
  return "light"; // nichts Deckendes: Seitenhintergrund (weiß)
}

export function backgroundTone(fab: Element): Tone {
  const r = fab.getBoundingClientRect();
  if (r.width === 0) return null;
  const y = r.top + r.height / 2;
  const votes = [0.2, 0.5, 0.8].map((p) => toneAt(r.left + r.width * p, y, fab));
  const dark = votes.filter((v) => v === "dark").length;
  const light = votes.filter((v) => v === "light").length;
  return dark >= 2 ? "dark" : light >= 2 ? "light" : null;
}
