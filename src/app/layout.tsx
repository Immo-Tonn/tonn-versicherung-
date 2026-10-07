import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import "./globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Private Krankenversicherung Münster | TONN Versicherungsberatung",
    template: "%s | TONN Versicherungsberatung",
  },
  description:
    "Individuelle Beratung zur privaten Krankenversicherung in Münster und deutschlandweit. Anonyme Risikovoranfrage, Tarifvergleich und persönliche Begleitung.",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  // TODO: vor Livegang auf index/follow setzen (aktuell sinnvoll, solange Platzhalterdaten enthalten sind)
};

export const viewport: Viewport = { themeColor: "#06263f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
