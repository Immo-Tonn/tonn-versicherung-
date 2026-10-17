// Wird von Next.js einmal beim Start des Servers aufgerufen (nur Node-Laufzeit, nur Production).
// Der Aufruf ist bewusst NICHT awaited: register() muss abgeschlossen sein, bevor der Server Anfragen annimmt.
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.env.NODE_ENV !== "production") return;
  const { warmAboveTheFoldImages } = await import("./lib/warm-images");
  void warmAboveTheFoldImages();
}
