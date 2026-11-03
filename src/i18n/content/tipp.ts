import type { Locale } from "../config";
import { tippDe } from "./tipp.de";
import { tippEn } from "./tipp.en";
import { tippRu } from "./tipp.ru";
import type { TippContent } from "./tipp.types";

export const tippContent: Record<Locale, TippContent> = { de: tippDe, en: tippEn, ru: tippRu };
export type { TippContent };
