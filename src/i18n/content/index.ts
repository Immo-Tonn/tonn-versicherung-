import type { Locale } from "../config";
import { homeEn } from "./home.en";
import { homeRu } from "./home.ru";
import type { HomeContent } from "./home.types";

export const homeContent: Record<Exclude<Locale, "de">, HomeContent> = { en: homeEn, ru: homeRu };
export type { HomeContent };

import { pkvEn, subLabelsEn } from "./pkv.en";
import { pkvRu, subLabelsRu } from "./pkv.ru";
import type { PkvContent, SubLabels } from "./pkv.types";
import { angestellteEn, beamteEn, selbststaendigeEn } from "./pkv-sub.en";
import { angestellteRu, beamteRu, selbststaendigeRu } from "./pkv-sub.ru";
import type { SubPageContent } from "@/app/(de)/private-krankenversicherung/_sub/types";

type Foreign = Exclude<Locale, "de">;

export const pkvContent: Record<Foreign, PkvContent> = { en: pkvEn, ru: pkvRu };
export const pkvSubLabels: Record<Foreign, SubLabels> = { en: subLabelsEn, ru: subLabelsRu };
export const pkvSubPages: Record<Foreign, Record<"angestellte" | "selbststaendige" | "beamte", SubPageContent>> = {
  en: { angestellte: angestellteEn, selbststaendige: selbststaendigeEn, beamte: beamteEn },
  ru: { angestellte: angestellteRu, selbststaendige: selbststaendigeRu, beamte: beamteRu },
};

/** SEO-Texte der Unterseiten (Entwurf, aus den deutschen Seiten übertragen). */
export const pkvSubMeta: Record<Foreign, Record<"angestellte" | "selbststaendige" | "beamte", { title: string; description: string }>> = {
  en: {
    angestellte: {
      title: "PKV for employees: switching, income threshold, employer subsidy | TONN",
      description:
        "When employees can switch to PKV: compulsory insurance threshold 2026, employer subsidy, advantages, limits and choice of tariff. Personal advice in Münster.",
    },
    selbststaendige: {
      title: "PKV for self-employed people: tariffs & daily sickness allowance | TONN",
      description:
        "PKV for self-employed people and freelancers: choice of tariff, deductible, daily sickness allowance, contributions with fluctuating income and long-term planning. Advice in Münster.",
    },
    beamte: {
      title: "PKV for civil servants: Beihilfe and residual-cost insurance | TONN",
      description:
        "PKV for civil servants and civil-service candidates: interplay with Beihilfe, residual-cost insurance, opening campaign, trainee teachers and lawyers, and family. Advice in Münster.",
    },
  },
  ru: {
    angestellte: {
      title: "PKV для наёмных работников: переход, порог дохода, субсидия работодателя | TONN",
      description:
        "Когда наёмные работники могут перейти в PKV: порог обязательного страхования 2026, субсидия работодателя, преимущества, ограничения и выбор тарифа. Личная консультация в Мюнстере.",
    },
    selbststaendige: {
      title: "PKV для самозанятых: тарифы и дневное пособие по болезни | TONN",
      description:
        "PKV для предпринимателей, самозанятых и фрилансеров: выбор тарифа, франшиза, пособие по болезни, взносы при нестабильном доходе и долгосрочное планирование. Консультация в Мюнстере.",
    },
    beamte: {
      title: "PKV для госслужащих: Beihilfe и страхование остаточных расходов | TONN",
      description:
        "PKV для государственных служащих и кандидатов на госслужбу: сочетание с Beihilfe, страхование остаточных расходов, акция открытого приёма, референдары и семья. Консультация в Мюнстере.",
    },
  },
};

import { dankeEn, kontaktEn } from "./kontakt.en";
import { dankeRu, kontaktRu } from "./kontakt.ru";
import type { DankeContent, KontaktContent } from "./kontakt.types";

export const kontaktContent: Record<Foreign, KontaktContent> = { en: kontaktEn, ru: kontaktRu };
export const dankeContent: Record<Foreign, DankeContent> = { en: dankeEn, ru: dankeRu };

import { buEn, kaEn } from "./bu-ka.en";
import { buRu, kaRu } from "./bu-ka.ru";
import type { BuContent, KaContent } from "./bu-ka.types";

export const buContent: Record<Foreign, BuContent> = { en: buEn, ru: buRu };
export const kaContent: Record<Foreign, KaContent> = { en: kaEn, ru: kaRu };

import { ueEn, wvEn } from "./wv-ue.en";
import { ueRu, wvRu } from "./wv-ue.ru";
import type { UeContent, WvContent } from "./wv-ue.types";

export const wvContent: Record<Foreign, WvContent> = { en: wvEn, ru: wvRu };
export const ueContent: Record<Foreign, UeContent> = { en: ueEn, ru: ueRu };

import { articleLabelsEn, pkvOderGkvEn, risikovoranfrageEn, tarifwechselEn, topicsEn } from "./wissen-pkv.en";
import { articleLabelsRu, pkvOderGkvRu, risikovoranfrageRu, tarifwechselRu, topicsRu } from "./wissen-pkv.ru";
import type { ArticleLabels, ArticleTranslation } from "./wissen.types";

export const articleLabels: Record<Foreign, ArticleLabels> = { en: articleLabelsEn, ru: articleLabelsRu };
export const articleTopics: Record<Foreign, Record<string, string>> = { en: topicsEn, ru: topicsRu };
/** Übersetzte Ratgeber-Beiträge je Sprache und Slug (wird mit weiteren Beiträgen ergänzt) */
export const articleTranslations: Record<Foreign, Record<string, ArticleTranslation>> = {
  en: { "pkv-oder-gkv": pkvOderGkvEn, "anonyme-risikovoranfrage": risikovoranfrageEn, "tarifwechsel-pkv": tarifwechselEn },
  ru: { "pkv-oder-gkv": pkvOderGkvRu, "anonyme-risikovoranfrage": risikovoranfrageRu, "tarifwechsel-pkv": tarifwechselRu },
};

import { buRentePlanenEn, buVertragsbedingungenEn, gesundheitsfragenBuEn, ursachenFolgenEn } from "./wissen-bu.en";
import { buRentePlanenRu, buVertragsbedingungenRu, gesundheitsfragenBuRu, ursachenFolgenRu } from "./wissen-bu.ru";

Object.assign(articleTranslations.en, {
  "bu-rente-planen": buRentePlanenEn,
  "gesundheitsfragen-bu": gesundheitsfragenBuEn,
  "bu-vertragsbedingungen": buVertragsbedingungenEn,
  "berufsunfaehigkeit-ursachen-folgen": ursachenFolgenEn,
});
Object.assign(articleTranslations.ru, {
  "bu-rente-planen": buRentePlanenRu,
  "gesundheitsfragen-bu": gesundheitsfragenBuRu,
  "bu-vertragsbedingungen": buVertragsbedingungenRu,
  "berufsunfaehigkeit-ursachen-folgen": ursachenFolgenRu,
});

import { grundlagenKapitalanlageEn, streuungKapitalanlageEn } from "./wissen-kapital.en";
import { grundlagenKapitalanlageRu, streuungKapitalanlageRu } from "./wissen-kapital.ru";

Object.assign(articleTranslations.en, { "grundlagen-kapitalanlage": grundlagenKapitalanlageEn, "streuung-kapitalanlage": streuungKapitalanlageEn });
Object.assign(articleTranslations.ru, { "grundlagen-kapitalanlage": grundlagenKapitalanlageRu, "streuung-kapitalanlage": streuungKapitalanlageRu });

import { ratgeberEn } from "./wissen-hub.en";
import { ratgeberRu } from "./wissen-hub.ru";
import type { RatgeberContent } from "./wissen-hub.types";

export const ratgeberContent: Record<Foreign, RatgeberContent> = { en: ratgeberEn, ru: ratgeberRu };
