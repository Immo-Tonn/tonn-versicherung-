import Image from "next/image";
import { publicAssetExists } from "@/lib/assets";
import styles from "./Photo.module.css";

type Props = {
  src: string;
  alt: string;
  /** Seitenverhältnis als CSS-Wert, z. B. "4 / 3". Entfällt bei fill-Containern. */
  ratio?: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Zeigt das Bild, sobald die Datei unter /public existiert.
 * Bis dahin: neutraler Platzhalter mit identischem Seitenverhältnis (kein Layout Shift).
 * TODO: finale Bilder unter dem angegebenen Pfad ablegen.
 */
export default function Photo({ src, alt, ratio, sizes, priority, position, className, imgClassName }: Props) {
  const exists = publicAssetExists(src);
  return (
    <div className={[styles.frame, className].filter(Boolean).join(" ")} style={ratio ? { aspectRatio: ratio } : undefined}>
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={[styles.img, imgClassName].filter(Boolean).join(" ")}
          style={position ? { objectPosition: position } : undefined}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
          <span>Bild fehlt: {src.split("/").pop()}</span>
        </div>
      )}
    </div>
  );
}
