import type { Locale } from "../config";

/**
 * Über uns: „Wie wir arbeiten“ (Status, Vergütung, Schlichtung) und „Partner-Versicherer“.
 * Registerangaben stammen aus dem Impressum; Namen der Versicherer sind unverändert (nicht übersetzen, nicht kürzen).
 * Keine Erstinformation verlinkt: Es gibt dafür noch keine Seite.
 */
export type UeTransparenz = {
  how: {
    title: string;
    status: { title: string; text: string; items: string[]; registerLabel: string; iht: string; registryBody: string };
    pay: { title: string; text: string };
    complaint: { title: string; text: string; items: { name: string; href: string; host: string }[] };
  };
  partners: { title: string; stand: string; groups: { key: "leben" | "kranken" | "sach"; summary: string; lists: { label?: string; items: string[] }[] }[] };
};

/** Versicherer (Namen sind Eigennamen und in allen Sprachen identisch). */
export const leben = [
  "Allianz", "Alte Leipziger", "AXA", "Basler", "BY die Bayerische Vorsorge", "Canada Life", "Condor", "Concordia oeco", "Continentale", "DELA",
  "Delta Direkt (über LV 1871)", "Dialog", "Die Dortmunder", "Direkte Leben (über Stuttgarter)", "DLVAG (über Allianz)", "ERGO Vorsorge", "Europa (über Conti)",
  "Gothaer", "Hannoversche", "HanseMerkur", "HDI", "Heidelberger", "Helvetia/Baloise", "IDEAL", "Inter", "InterRisk", "LV 1871", "Münchener Verein", "mylife",
  "Nürnberger", "Öffentliche Braunschweig", "Pangaea Life (über Bayerische)", "PrismaLife", "ProLife", "Provinzial Nordwest", "Signal Iduna", "Standard Life",
  "Stuttgarter", "Süddeutsche", "Swiss Life", "Universa", "Volkswohl Bund", "VPV", "Württembergische", "WWK", "Zurich Deutscher Herold", "Zurich Life Assurance",
];

export const kranken = [
  "Advigon", "Allianz PKV (APKV)", "Allianz Travel", "Alte Oldenburger", "ARAG", "AXA", "Barmenia", "Bayerische Beamtenkrankenkasse (über Maklermanagement Kranken GmbH)",
  "CareConcept", "Central", "Concordia", "Continentale", "Deutscher Ring", "DFV Deutsche Familienversicherung", "Die Bayerische", "DKV", "ERGO", "Gothaer", "Hallesche",
  "HanseMerkur", "HEK", "Inter", "Janitos", "Knappschaft", "Landeskrankenhilfe", "Maklerexperten GmbH", "Münchener Verein", "Nürnberger", "Optisano", "ottonova", "R+V",
  "SDK", "Signal Iduna", "Stuttgarter", "Union", "Universa", "Württembergische",
];

export const sachPrivat = [
  "AIG", "Allianz", "Ammerländer", "ARAG Allgemeine", "Asspario", "Auxilia Rechtsschutz", "AXA Art", "AXA", "Baloise", "Barmenia Allgemeine", "BGV Badische",
  "Condor Allgemeine", "DEURAG", "Dialog", "Die Bayerische (Sach)", "Die Haftpflichtkasse", "DMB Rechtsschutz", "domcura", "ERGO Rechtsschutz", "ERGO Versicherung",
  "GEV Grundeigentümer", "Gothaer Allgemeine", "HanseMerkur Allgemeine", "HDI", "Helvetia", "Hiscox", "InterRisk", "Janitos", "Konzept und Marketing", "Mannheimer",
  "Nürnberger Allgemeine", "Prokundo", "R+V Allgemeine", "Rhion", "Roland Rechtsschutz", "Stuttgarter", "SV Sparkassenversicherung", "Uelzener", "Universa Allgemeine",
  "Versicherungskammer Bayern", "VHV", "Waldenburger", "Würzburger", "Zurich",
];
export const sachKfz = ["ACE", "Campingfreunde Assekuradeur", "CEAT Assekuranz", "Concordia VaG", "KRAVAG", "Württembergische"];
export const sachFirmen = [
  "Allcura", "Cogitanda", "Gemeinnützige Haftpflicht Darmstadt", "HDI Global SE", "Hoffmann & Co Assekuradeur", "Hübener", "Markel International", "MKM Group",
  "NRV Rechtsschutz", "Signal Iduna Allgemeine", "Stoik",
];

const links = [
  { name: "Versicherungsombudsmann e.V.", href: "https://www.versicherungsombudsmann.de", host: "versicherungsombudsmann.de" },
  { name: "Ombudsmann Private Kranken- und Pflegeversicherung", href: "https://www.pkv-ombudsmann.de", host: "pkv-ombudsmann.de" },
];

const de: UeTransparenz = {
  how: {
    title: "Wie wir arbeiten",
    status: {
      title: "Unser Status",
      text: "Andreas Tonn ist Versicherungsvertreter (Mehrfachagent) mit Erlaubnis nach § 34d Abs. 1 GewO. Zusätzlich besteht eine Erlaubnis als Finanzanlagenvermittler und als Immobiliardarlehensvermittler.",
      items: [
        "§ 34d Abs. 1 GewO (Versicherungsvertreter): Vermittlerregister-Nr. D-A18Z-BI6ZD-48",
        "§ 34f Abs. 1 GewO (Finanzanlagenvermittler): D-F-156-SNEC-18",
        "§ 34i Abs. 1 GewO (Immobiliardarlehensvermittler): D-W-156-DSNU-13",
      ],
      registerLabel: "Zuständige Behörde",
      iht: "IHK Nord Westfalen, Sentmaringer Weg 61, 48151 Münster",
      registryBody: "Registerstelle: DIHK, www.vermittlerregister.info",
    },
    pay: {
      title: "Vergütung",
      text: "Für die Tätigkeit als Versicherungsvermittler erhalten wir eine Provision vom jeweiligen Versicherungsunternehmen, die in der Versicherungsprämie enthalten ist. Darüber hinaus erhalten wir keine weiteren Zuwendungen.",
    },
    complaint: {
      title: "Beschwerde und Schlichtung",
      text: "Bei Beschwerden zur Versicherungsvermittlung können Sie sich an folgende Schlichtungsstellen wenden:",
      items: links,
    },
  },
  partners: {
    title: "Mit welchen Versicherern wir zusammenarbeiten",
    stand: "Stand: November 2026. Die Zusammenarbeit kann sich ändern.",
    groups: [
      { key: "leben", summary: "Leben (47)", lists: [{ items: leben }] },
      { key: "kranken", summary: "Kranken (37)", lists: [{ items: kranken }] },
      {
        key: "sach",
        summary: "Sach (ca. 61)",
        lists: [
          { label: "Komposit Privat (44)", items: sachPrivat },
          { label: "Zusätzlich KFZ", items: sachKfz },
          { label: "Zusätzlich Firmen/Industrie", items: sachFirmen },
        ],
      },
    ],
  },
};

const en: UeTransparenz = {
  how: {
    title: "How we work",
    status: {
      title: "Our status",
      text: "Andreas Tonn is an insurance agent working with several insurers (Versicherungsvertreter, Mehrfachagent) with a permit under § 34d (1) of the German Trade Regulation Act (GewO). He also holds permits as a financial investment intermediary and as a property loan intermediary.",
      items: [
        "§ 34d (1) GewO (insurance agent): intermediary register no. D-A18Z-BI6ZD-48",
        "§ 34f (1) GewO (financial investment intermediary): D-F-156-SNEC-18",
        "§ 34i (1) GewO (property loan intermediary): D-W-156-DSNU-13",
      ],
      registerLabel: "Competent authority",
      iht: "IHK Nord Westfalen (Chamber of Commerce and Industry), Sentmaringer Weg 61, 48151 Münster",
      registryBody: "Register body: DIHK, www.vermittlerregister.info",
    },
    pay: {
      title: "Remuneration",
      text: "For our work as an insurance intermediary we receive a commission from the respective insurance company, which is included in the insurance premium. We do not receive any other benefits beyond this.",
    },
    complaint: {
      title: "Complaints and dispute resolution",
      text: "For complaints about insurance intermediation you can turn to the following dispute resolution bodies:",
      items: links,
    },
  },
  partners: {
    title: "Which insurers we work with",
    stand: "As of November 2026. The cooperation may change.",
    groups: [
      { key: "leben", summary: "Life (47)", lists: [{ items: leben }] },
      { key: "kranken", summary: "Health (37)", lists: [{ items: kranken }] },
      {
        key: "sach",
        summary: "Property and casualty (approx. 61)",
        lists: [
          { label: "Private lines (44)", items: sachPrivat },
          { label: "Additionally motor", items: sachKfz },
          { label: "Additionally commercial/industrial", items: sachFirmen },
        ],
      },
    ],
  },
};

const ru: UeTransparenz = {
  how: {
    title: "Как мы работаем",
    status: {
      title: "Наш статус",
      text: "Андреас Тонн — страховой агент, сотрудничающий с несколькими страховыми компаниями (Versicherungsvertreter, Mehrfachagent), с разрешением по § 34d абз. 1 GewO (Промышленный кодекс Германии). Кроме того, есть разрешения на деятельность посредника по финансовым инвестициям и посредника по ипотечным кредитам.",
      items: [
        "§ 34d абз. 1 GewO (страховой агент): номер в реестре посредников D-A18Z-BI6ZD-48",
        "§ 34f абз. 1 GewO (посредник по финансовым инвестициям): D-F-156-SNEC-18",
        "§ 34i абз. 1 GewO (посредник по ипотечным кредитам): D-W-156-DSNU-13",
      ],
      registerLabel: "Компетентный орган",
      iht: "IHK Nord Westfalen (Торгово-промышленная палата), Sentmaringer Weg 61, 48151 Münster",
      registryBody: "Регистрирующий орган: DIHK, www.vermittlerregister.info",
    },
    pay: {
      title: "Вознаграждение",
      text: "За деятельность страхового посредника мы получаем комиссию от соответствующей страховой компании, которая включена в страховой взнос. Иных выплат, кроме этого, мы не получаем.",
    },
    complaint: {
      title: "Жалобы и внесудебное урегулирование",
      text: "По жалобам, связанным со страховым посредничеством, вы можете обратиться в следующие органы внесудебного урегулирования споров:",
      items: links,
    },
  },
  partners: {
    title: "С какими страховщиками мы сотрудничаем",
    stand: "По состоянию на ноябрь 2026 года. Сотрудничество может измениться.",
    groups: [
      { key: "leben", summary: "Страхование жизни (47)", lists: [{ items: leben }] },
      { key: "kranken", summary: "Медицинское страхование (37)", lists: [{ items: kranken }] },
      {
        key: "sach",
        summary: "Имущество и ответственность (ок. 61)",
        lists: [
          { label: "Частные клиенты (44)", items: sachPrivat },
          { label: "Дополнительно: автострахование", items: sachKfz },
          { label: "Дополнительно: бизнес и промышленность", items: sachFirmen },
        ],
      },
    ],
  },
};

export const ueTransparenz: Record<Locale, UeTransparenz> = { de, en, ru };
