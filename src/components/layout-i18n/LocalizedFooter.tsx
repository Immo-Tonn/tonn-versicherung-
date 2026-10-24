import FooterLayout, { type FooterLinkItem } from "@/components/layout/Footer/FooterLayout";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/links";
import DeTag from "./DeTag";

/**
 * Footer für EN/RU: gleiche Struktur und Reihenfolge wie components/layout/Footer (gemeinsames FooterLayout).
 * Links auf nicht übersetzte Seiten (inkl. Impressum/Datenschutz) führen zu den deutschen Seiten und sind mit „DE“ markiert.
 */
export default function LocalizedFooter({ locale }: { locale: Exclude<Locale, "de"> }) {
  const t = getDictionary(locale);
  const f = t.footer;
  const tag = <DeTag badge={t.common.germanOnlyBadge} hint={t.common.germanOnlyHint} />;
  const item = (label: string, href: string): FooterLinkItem => {
    const target = localizedHref(href, locale);
    return { label, href: target.href, german: target.german };
  };
  return (
    <FooterLayout
      contactTitle={f.contactTitle}
      hours={{ title: f.hoursTitle, rows: [f.hoursWeekdays, f.hoursSaturday, f.hoursSunday] }}
      social={{ label: f.socialLabel, linkedin: f.linkedin, google: f.googleProfile, email: f.email }}
      legalLabel={f.legalTitle}
      legal={[item(f.imprint, "/impressum"), item(f.privacy, "/datenschutz"), { label: f.cookieSettings, href: "#cookie-einstellungen", cookie: true }]}
      tag={tag}
    />
  );
}
