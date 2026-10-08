import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { published } from "@/app/wissen/_lib/articles";

const routes = [
  "",
  "/private-krankenversicherung",
  "/berufsunfaehigkeitsversicherung",
  "/versicherungen",
  "/kapitalanlage",
  "/ueber-uns",
  "/wissen",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...routes, ...published().map((a) => `/wissen/${a.slug}`)];
  return all.map((r) => ({ url: `${siteConfig.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.6 }));
}
