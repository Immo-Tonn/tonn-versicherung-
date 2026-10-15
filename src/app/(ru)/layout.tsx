import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { siteConfig } from "@/data/site";
import { localeMeta } from "@/i18n/config";
import LocalizedShell from "@/components/layout-i18n/LocalizedShell";
import "../globals.css";

/**
 * Root-Layout der Sprachversion "ru". Header, Footer, Menü, Sprachumschalter und Cookie-Einwilligung
 * sind übersetzte Entwürfe (components/layout-i18n); die Seiten selbst bleiben bis zur Freigabe unveröffentlicht.
 */
const serif = Source_Serif_4({ subsets: ["latin", "cyrillic"], variable: "--font-source-serif", display: "swap" });
const sans = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });

// Absolute Basis für canonical, hreflang und og:url/og:image (wie im deutschen Layout).
// Robots: Sicherheitsvorgabe noindex für alle Seiten ohne eigene Regel; Seiten mit pageMetadata setzen
// die Regel nach Registerstatus (nur "live" = index, follow – siehe lib/seo.ts localizedRobots).
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), robots: { index: false, follow: false } };
export const viewport: Viewport = { themeColor: "#06263f", width: "device-width", initialScale: 1 };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={localeMeta.ru.htmlLang} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <LocalizedShell locale="ru">{children}</LocalizedShell>
      </body>
    </html>
  );
}
