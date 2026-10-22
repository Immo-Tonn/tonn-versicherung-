"use client";

import Link from "next/link";
import { ConsentDialog, ConsentReopenButton, type ConsentTexts } from "@/components/consent/ConsentUI";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import DeTag from "./DeTag";

/**
 * Cookie-Banner für EN/RU: gleiche Logik und Gestaltung wie components/consent/ConsentBanner, nur die Texte sind übersetzt.
 * Die Datenschutzerklärung bleibt vorerst die deutsche Originalfassung (mit „DE“ markiert).
 */
export function LocalizedConsentReopen({ locale }: { locale: Exclude<Locale, "de"> }) {
  const t = getDictionary(locale);
  return <ConsentReopenButton label={t.consent.reopen} ariaLabel={t.footer.cookieSettings} />;
}

export default function LocalizedConsentBanner({ locale }: { locale: Exclude<Locale, "de"> }) {
  const t = getDictionary(locale);
  const c = t.consent;
  const texts: ConsentTexts = {
    title: c.title,
    intro: (
      <>
        {c.textBefore}
        <Link href="/datenschutz#cookies">{c.privacyLink}</Link>
        <DeTag badge={t.common.germanOnlyBadge} hint={t.common.germanOnlyHint} />
        {c.textAfter}
      </>
    ),
    necessaryName: c.necessaryName,
    necessaryDesc: c.necessaryDesc,
    analyticsName: c.analyticsName,
    analyticsDesc: c.analyticsDesc,
    mapsName: c.mapsName,
    mapsDesc: c.mapsDesc,
    storageNote: c.storageNote,
    acceptAll: c.acceptAll,
    rejectOptional: c.rejectOptional,
    settings: c.settings,
    saveSelection: c.saveSelection,
    reopen: c.reopen,
  };
  return <ConsentDialog t={texts} />;
}
