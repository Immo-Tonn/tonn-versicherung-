import { TRACKING_ENABLED, TRACKING_GTM_ID, TRACKING_UC_SERVICE_NAME } from "@/lib/tracking";
import AdsTrackingEvents from "./AdsTrackingEvents";

/**
 * Consent Mode v2: dataLayer anlegen und alles auf "denied" setzen (normales Inline-Script, wird beim Parsen ausgeführt, also
 * vor dem GTM-Loader). Das Update bei Einwilligung/Änderung sendet die Google-Consent-Mode-Integration von Usercentrics selbst
 * (gtag("consent","update",…)); hier gibt es dafür bewusst keinen eigenen Code. Ohne diese Integration bleibt alles "denied".
 */
const CONSENT_DEFAULTS = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=window.gtag||gtag;gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",wait_for_update:500});`;

const gtmLoader = (id: string) =>
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","${id}");`;

/**
 * Google Tag Manager für Google Ads. Ohne NEXT_PUBLIC_TRACKING_ENABLED=true und gültige NEXT_PUBLIC_GTM_ID wird nichts ausgegeben
 * (keine Scripts, keine Anfrage an googletagmanager.com).
 * Der Loader ist für Usercentrics als Dienst "Google Tag Manager" markiert (type="text/plain", data-usercentrics): Der Browser führt
 * ihn nicht aus, bis Usercentrics diesen Dienst nach Einwilligung freigibt. Ohne Einwilligung (oder ohne passenden Dienst in
 * Usercentrics) gibt es keine Anfrage an googletagmanager.com. Kein <noscript>-iframe (würde ohne Einwilligung laden).
 */
export default function AdsTracking() {
  if (!TRACKING_ENABLED) return null;
  return (
    <>
      <script id="ads-consent-default" dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULTS }} />
      <script
        id="ads-gtm"
        type="text/plain"
        data-usercentrics={TRACKING_UC_SERVICE_NAME}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: gtmLoader(TRACKING_GTM_ID) }}
      />
      <AdsTrackingEvents />
    </>
  );
}
