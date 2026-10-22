import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // 404-Seite außerhalb der Layouts (nötig, da es kein oberstes layout.tsx mehr gibt – siehe global-not-found.tsx)
  experimental: { globalNotFound: true },
  // minimumCacheTTL: 7 Tage statt Standard 4 Stunden (Browser-Cache und Server-Cache der Bildvarianten). Ersetzte Fotos bekommen einen neuen Dateinamen (-v2 …).
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 604800 },
  // Testadressen *.vercel.app von der Indexierung ausnehmen; Hauptdomain und andere Hosts bleiben unberührt (Bedingung nur über den Hostnamen)
  async headers() {
    // Indexierung gesperrt (Build-Arg SITE_NOINDEX=1, Standard im Dockerfile): alle Seiten mit noindex ausliefern
    if (process.env.SITE_NOINDEX === "1") {
      return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
    }
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "^[a-z0-9-]+\\.vercel\\.app$" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
