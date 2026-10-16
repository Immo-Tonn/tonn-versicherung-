import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // 404-Seite außerhalb der Layouts (nötig, da es kein oberstes layout.tsx mehr gibt – siehe global-not-found.tsx)
  experimental: { globalNotFound: true },
  images: { formats: ["image/avif", "image/webp"] },
  // Testadressen *.vercel.app von der Indexierung ausnehmen; Hauptdomain und andere Hosts bleiben unberührt (Bedingung nur über den Hostnamen)
  async headers() {
    // Prüf-Build (Staging): komplett von der Indexierung ausnehmen
    if (process.env.STAGING_OPEN_I18N_DRAFTS === "1") {
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
