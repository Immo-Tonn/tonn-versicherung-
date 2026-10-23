import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import ConsentBanner from "@/components/consent/ConsentBanner";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import CallFab from "@/components/ui/CallButton/CallFab";
import { getDictionary } from "@/i18n/dictionaries";
import GoogleAnalytics from "@/components/consent/GoogleAnalytics";
import Usercentrics from "@/components/consent/Usercentrics";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import JsonLd from "@/components/seo/JsonLd";
import ScrollReveal from "@/components/ui/ScrollReveal/ScrollReveal";
import { siteConfig } from "@/data/site";
import "../globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Private Krankenversicherung Münster | TONN",
    template: "%s | TONN",
  },
  description:
    "Individuelle Beratung zur privaten Krankenversicherung in Münster und deutschlandweit. Anonyme Risikovoranfrage, Vergleich verschiedener Angebote und persönliche Begleitung.",
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
        <ConsentBanner />
        <CallFab label={getDictionary("de").header.call} ariaLabel={getDictionary("de").header.callAria} />
        <BackToTop label={getDictionary("de").common.backToTop} />
        <GoogleAnalytics />
        <ScrollReveal />
        <Usercentrics locale={"de"} />
      </body>
    </html>
  );
}
