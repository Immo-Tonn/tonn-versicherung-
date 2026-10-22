import Image from "next/image";
import ClampedImage from "./ClampedImage";
import { publicAssetExists } from "@/lib/assets";
import styles from "./Photo.module.css";

type Props = {
  src: string;
  alt: string;
  /** Seitenverhältnis als CSS-Wert, z. B. "4 / 3". Entfällt bei fill-Containern. */
  ratio?: string;
  sizes: string;
  /** Foto im ersten Bildschirm: Preload im <head> UND fetchpriority="high" (Next 16: `priority` ist veraltet und setzt nur noch den Preload). */
  priority?: boolean;
  /** Obergrenze der angeforderten Bildbreite in Pixeln (siehe ClampedImage), z. B. die Breite der Quelldatei. */
  maxWidth?: number;
  position?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Zeigt das Bild, sobald die Datei unter /public existiert.
 * Bis dahin: neutraler Platzhalter mit identischem Seitenverhältnis (kein Layout Shift).
 * TODO: finale Bilder unter dem angegebenen Pfad ablegen.
 */
export default function Photo({ src, alt, ratio, sizes, priority, maxWidth, position, className, imgClassName }: Props) {
  const exists = publicAssetExists(src);
  const imgProps = {
    src,
    fill: true as const,
    sizes,
    ...(priority ? { preload: true, fetchPriority: "high" as const } : {}),
    className: [styles.img, imgClassName].filter(Boolean).join(" "),
    style: position ? { objectPosition: position } : undefined,
  };
  return (
    <div className={[styles.frame, className].filter(Boolean).join(" ")} style={ratio ? { aspectRatio: ratio } : undefined}>
      {exists ? (
        maxWidth ? (
          <ClampedImage maxWidth={maxWidth} alt={alt} {...imgProps} />
        ) : (
          <Image alt={alt} {...imgProps} />
        )
      ) : (
        <div className={styles.placeholder} role="img" aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
          <span>Bild fehlt: {src.split("/").pop()}</span>
        </div>
      )}
    </div>
  );
}
