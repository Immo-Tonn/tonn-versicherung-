import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

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
  return routes.map((r) => ({ url: `${siteConfig.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.6 }));
}
