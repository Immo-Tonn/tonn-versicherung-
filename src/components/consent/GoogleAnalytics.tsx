"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "./consent-store";

const ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/** Google Analytics 4 – wird nur mit Einwilligung und gesetzter Mess-ID geladen. */
export default function GoogleAnalytics() {
  const consent = useConsent();
  const on = Boolean(ID && consent?.analytics);

  // Widerruf: Messung abschalten und Google-Analytics-Cookies entfernen
  useEffect(() => {
    if (!ID || on || consent === undefined) return;
    (window as unknown as Record<string, unknown>)[`ga-disable-${ID}`] = true;
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) document.cookie = `${name}=; Max-Age=0; path=/`;
    });
  }, [on, consent]);

  if (!on || !ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ID)}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(ID)},{anonymize_ip:true});`}
      </Script>
    </>
  );
}
