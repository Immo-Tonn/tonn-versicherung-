import { siteConfig } from "@/data/site";

/**
 * Text mit Telefonlink: Der in [eckigen Klammern] stehende Teil wird zum tel:-Link auf die Hauptnummer (siteConfig.contact.phoneHref).
 * Gewöhnlicher Link, kein eigener Klick-Handler (die Zählung click_phone übernimmt GoogleAnalytics.tsx, nur mit Einwilligung).
 */
export default function CallText({ text, linkClassName }: { text: string; linkClassName?: string }) {
  const [before, link = "", after = ""] = text.split(/\[|\]/);
  return (
    <>
      {before}
      <a href={siteConfig.contact.phoneHref} className={linkClassName}>
        {link}
      </a>
      {after}
    </>
  );
}
