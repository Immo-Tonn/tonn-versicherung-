import { getImageProps } from "next/image";
import styles from "./Hero.module.css";

type Props = { src: string; mobileSrc: string; alt: string };

const MOBILE_MQ = "(max-width: 767px)";
const DESKTOP_MQ = "(min-width: 768px)";

/**
 * Hero-Foto mit "Art Direction": ab 768 px das bisherige Querformat-Foto (unverändert), bis 767 px das Hochformat-Foto.
 * Gleiche Optimierung wie zuvor: next/image-Varianten (AVIF/WebP, srcset, sizes="100vw"), fetchPriority="high", kein Lazy-Loading.
 * Der frühere Preload (priority) wird je Breakpoint per media-Attribut gesetzt, damit nie das jeweils andere Foto vorgeladen wird.
 */
export default function HeroPhoto({ src, mobileSrc, alt }: Props) {
  const common = { alt, sizes: "100vw", quality: 80, fill: true as const };
  const { props: desktop } = getImageProps({ ...common, src, fetchPriority: "high", loading: "eager", className: styles.image });
  const { props: mobile } = getImageProps({ ...common, src: mobileSrc });
  return (
    <>
      <link rel="preload" as="image" imageSrcSet={mobile.srcSet} imageSizes="100vw" media={MOBILE_MQ} fetchPriority="high" />
      <link rel="preload" as="image" imageSrcSet={desktop.srcSet} imageSizes="100vw" media={DESKTOP_MQ} fetchPriority="high" />
      <picture className={styles.picture}>
        <source media={MOBILE_MQ} srcSet={mobile.srcSet} sizes="100vw" />
        <img {...desktop} alt={alt} />
      </picture>
    </>
  );
}
