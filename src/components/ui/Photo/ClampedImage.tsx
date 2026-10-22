"use client";

import Image, { type ImageProps } from "next/image";

/**
 * next/image mit Obergrenze für die angeforderte Breite. Nötig, wenn die Quelldatei schmaler ist als die größte Breite, die der Browser
 * rechnerisch anfordert (z. B. ein hochformatig beschnittenes Querformat-Hero bei 3-facher Pixeldichte): Mehr Pixel als die Datei hat,
 * entstehen nur durch Hochskalieren, kosten aber Kodierzeit und Bytes. Gleiche URL-Form wie der Standard-Loader.
 */
export default function ClampedImage({ maxWidth, alt, ...props }: ImageProps & { maxWidth: number }) {
  return <Image alt={alt} {...props} loader={({ src, width, quality }) => `/_next/image?url=${encodeURIComponent(src)}&w=${Math.min(width, maxWidth)}&q=${quality ?? 75}`} />;
}
