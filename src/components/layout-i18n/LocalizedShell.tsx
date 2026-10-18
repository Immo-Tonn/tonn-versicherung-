import GoogleAnalytics from "@/components/consent/GoogleAnalytics";
import Usercentrics from "@/components/consent/Usercentrics";
import JsonLd from "@/components/seo/JsonLd";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import LocalizedConsentBanner from "./LocalizedConsentBanner";
import LocalizedFooter from "./LocalizedFooter";
import LocalizedHeader from "./LocalizedHeader";

/** Gemeinsamer Rahmen der EN/RU-Seiten (entspricht dem Body-Aufbau von (de)/layout.tsx). */
export default function LocalizedShell({ locale, children }: { locale: Exclude<Locale, "de">; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        {getDictionary(locale).common.skipToContent}
      </a>
      <LocalizedHeader locale={locale} />
      <main id="main">{children}</main>
      <LocalizedFooter locale={locale} />
      <JsonLd locale={locale} />
      <LocalizedConsentBanner locale={locale} />
      <GoogleAnalytics />
      <Usercentrics locale={locale} />
    </>
  );
}
