import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // Testadressen *.vercel.app von der Indexierung ausnehmen; Hauptdomain und andere Hosts bleiben unberührt (Bedingung nur über den Hostnamen)
  async headers() {
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
