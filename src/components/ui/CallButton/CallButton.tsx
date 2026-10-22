import { siteConfig } from "@/data/site";
import Icon from "../Icon/Icon";
import button from "../Button/Button.module.css";

/**
 * Direkter Anruf bei Andreas Tonn: gewöhnlicher tel:-Link auf die Hauptnummer (Mobil, siehe siteConfig.contact), kein Formular, kein Rückruf.
 * Der Klick wird wie jeder tel:-Link von GoogleAnalytics.tsx gezählt (nur mit Analytics-Einwilligung); hier gibt es keinen eigenen Handler.
 * Sichtbare Beschriftung steht am Anfang des zugänglichen Namens.
 */
export default function CallButton({ label, ariaLabel, className }: { label: string; ariaLabel: string; className?: string }) {
  return (
    <a href={siteConfig.contact.phoneHref} aria-label={`${ariaLabel}, ${siteConfig.contact.phone}`} className={[button.button, button.md, button.primary, className].filter(Boolean).join(" ")}>
      <Icon name="phone" size={18} strokeWidth={1.6} />
      <span>{label}</span>
    </a>
  );
}
