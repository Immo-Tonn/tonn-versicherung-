import type { SubPageContent } from "@/app/(de)/private-krankenversicherung/_sub/types";

/** ENTWURF – nicht fachlich geprüft, nicht veröffentlicht. Alle Sachaussagen stammen von den deutschen Seiten. */

export const angestellteEn: SubPageContent = {
  path: "/private-krankenversicherung/angestellte",
  crumb: "PKV for employees",
  title: "PKV for employees: switching, threshold and employer subsidy",
  answer:
    "Employees can switch to private health insurance if their regular annual earnings exceed the compulsory insurance threshold (Versicherungspflichtgrenze). In 2026 it is €77,400 per year. Under certain conditions, the employer pays a subsidy. Whether switching makes sense depends not only on the contribution, but also on family, health and long-term planning.",
  blocks: [
    { t: "h2", text: "When employees can switch to PKV" },
    {
      t: "p",
      text: "Employees are exempt from compulsory statutory health insurance if their regular annual earnings exceed the annual earnings threshold (Jahresarbeitsentgeltgrenze, § 6 para. 1 no. 1 SGB V). This threshold is also called the compulsory insurance threshold (Versicherungspflichtgrenze). For 2026 it is €77,400 per year, which is €6,450 per month. It is adjusted every year on 1 January.",
    },
    {
      t: "p",
      text: "If the threshold is exceeded, compulsory insurance ends at the end of the calendar year in which this happens (§ 6 para. 4 SGB V). An exception applies if earnings in the following year stay below the threshold then in force. A switch is therefore usually possible at the turn of the year. Check in good time whether your income will continue to exceed the threshold on a lasting basis.",
    },
    {
      t: "note",
      label: "Good to know",
      text: "What counts is your regular annual earnings. How individual components of your income are counted depends on your employment contract. If in doubt, have this clarified before switching.",
    },

    { t: "h2", text: "The employer subsidy" },
    {
      t: "p",
      text: "Privately insured employees receive a contribution subsidy from their employer (§ 257 para. 2 SGB V). It equals half of the general contribution rate of statutory health insurance plus half of the average additional contribution rate, but at most half of your actual PKV contribution. You pay the remaining part yourself.",
    },
    {
      t: "p",
      text: "The subsidy is only paid if your tariff offers benefits that correspond in kind to those of statutory health insurance. In addition, the insurance company must meet certain statutory requirements (§ 257 para. 2a SGB V), and you must submit a certificate from the insurer to your employer every three years. Before you take out a policy, ask whether a tariff meets these conditions.",
    },

    { t: "h2", text: "Advantages and limits of PKV" },
    { t: "h3", text: "What can speak in favour of PKV" },
    {
      t: "ul",
      items: [
        "The contribution does not depend on income but, among other things, on age, state of health at entry, tariff and deductible.",
        "Benefits and deductible can be agreed by contract and adapted to your own needs.",
        "For single people and childless couples in which both partners work, PKV can make financial sense (according to the Verbraucherzentrale consumer advice centre).",
      ],
    },
    { t: "h3", text: "What you should bear in mind" },
    {
      t: "ul",
      items: [
        "Before you take out a policy, the insurer asks health questions. Pre-existing conditions can lead to risk surcharges, benefit exclusions or rejection.",
        "Contributions can rise over the years. Insurers may adjust them if costs have risen permanently and an independent trustee agrees (BaFin).",
        "Contributions do not fall automatically when you retire. The Verbraucherzentrale recommends building up reserves for this.",
        "Returning to statutory health insurance is often difficult or not possible. From the age of 55, special restrictions apply (§ 6 para. 3a SGB V).",
      ],
    },
    {
      t: "link",
      text: "PKV or GKV: differences and decision criteria",
      href: "/wissen/pkv-oder-gkv",
    },

    { t: "h2", text: "Family and long-term costs" },
    {
      t: "p",
      text: "In statutory health insurance, children, spouses and registered partners can be covered by family insurance (Familienversicherung) without a contribution of their own. This does not exist in PKV: every person needs their own contract with their own contribution. This also applies to children and to partners without income.",
    },
    {
      t: "p",
      text: "Especially when planning a family, it is worth looking ahead. How will your income develop, for example during parental leave, part-time work or a change of job? How high would the total contribution for the whole family be? And how sustainable is the contribution if your income falls in old age?",
    },
    {
      t: "note",
      label: "Example (simplified)",
      text: "A couple in which both partners work and who do not plan to have children asks different questions than a family with two children and only one income. In the first case your own contribution is the main concern; in the second, the contributions for partner and children are added. The example does not replace a calculation for your situation.",
    },

    { t: "h2", text: "What to look out for when choosing a tariff" },
    {
      t: "ul",
      items: [
        "Scope of benefits: compare benefits, terms and deductible, not just the initial contribution.",
        "Contribution development: ask about ageing reserves (Alterungsrückstellung), past contribution adjustments and affordability in retirement.",
        "Eligibility for the subsidy: check whether the tariff meets the conditions for the employer subsidy.",
        "Health questions: answer them completely and truthfully. If you have pre-existing conditions, an anonymous preliminary risk assessment can provide clarity in advance.",
        "Caution with cheap tariffs with reduced benefits: the Verbraucherzentrale advises against switching to PKV purely for cost reasons.",
        "Take your time: obtain offers without time pressure and compare them with your existing cover.",
      ],
    },
    { t: "link", text: "Anonymous preliminary risk assessment: process, benefits and limits", href: "/wissen/anonyme-risikovoranfrage" },
    { t: "link", text: "PKV for self-employed people and freelancers: tariffs, deductible and daily sickness allowance", href: "/private-krankenversicherung/selbststaendige" },
    { t: "link", text: "PKV for civil servants (Beamte): Beihilfe, residual-cost insurance and family", href: "/private-krankenversicherung/beamte" },
    {
      t: "p",
      text: "This page is general information and does not replace personal advice. Figures such as the compulsory insurance threshold change every year; the values given apply to 2026.",
    },
  ],
  sources: [
    { label: "Federal Government: contribution assessment ceilings 2026 (compulsory insurance threshold)", url: "https://www.bundesregierung.de/breg-de/aktuelles/beitragsgemessungsgrenzen-2386514" },
    { label: "Gesetze im Internet: § 6 SGB V, exemption from compulsory insurance", url: "https://www.gesetze-im-internet.de/sgb_5/__6.html" },
    { label: "Gesetze im Internet: § 257 SGB V, contribution subsidies for employees", url: "https://www.gesetze-im-internet.de/sgb_5/__257.html" },
    { label: "Federal Ministry of Health: contributions to statutory health insurance", url: "https://www.bundesgesundheitsministerium.de/beitraege" },
    { label: "BaFin: private health and long-term care insurance", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung.html" },
    { label: "Verbraucherzentrale: private health insurance, not sensible for everyone", url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/private-krankenversicherung-nicht-fuer-jeden-sinnvoll-13884" },
  ],
};

export const selbststaendigeEn: SubPageContent = {
  path: "/private-krankenversicherung/selbststaendige",
  crumb: "PKV for self-employed people",
  title: "PKV for self-employed people and freelancers: tariffs, deductible and daily sickness allowance",
  answer:
    "Self-employed people and freelancers can choose between statutory and private health insurance and bear their contribution entirely themselves. In PKV you design benefits, deductible and daily sickness allowance (Krankentagegeld) according to your needs. What matters is that the cover remains sustainable even with fluctuating income and over decades.",
  blocks: [
    { t: "h2", text: "PKV options for self-employed people" },
    {
      t: "p",
      text: "Anyone who is self-employed as their main occupation is exempt from statutory health insurance and can insure privately. There is no employer subsidy: you pay the contribution alone, whether statutory or private. If you also work as an employee alongside self-employment, you are classified by time spent and income. Your status then depends on which activity predominates.",
    },
    {
      t: "p",
      text: "In PKV the contribution does not depend on income but, among other things, on age and state of health at entry, the scope of benefits and the agreed deductible. Before you take out a policy, the insurer asks health questions. Whether and on what terms it accepts you depends on your answers. It is best to clarify the tax treatment of contributions with your tax adviser.",
    },
    { t: "link", text: "Anonymous preliminary risk assessment: process, benefits and limits", href: "/wissen/anonyme-risikovoranfrage" },

    { t: "h2", text: "Choosing tariffs and benefits" },
    {
      t: "p",
      text: "In PKV you agree the insurance cover by contract. This gives you freedom, but it also requires care: two tariffs with a similar contribution can differ considerably in benefits, reimbursement limits and terms. Compare the benefit descriptions, not just the price.",
    },
    {
      t: "ul",
      items: [
        "Which benefits matter to you, for example outpatient, inpatient, dental or remedies and medical aids?",
        "Are there reimbursement limits or exclusions that could affect you in everyday life?",
        "How is the tariff built for changes, for example if your income, your family or your needs change?",
        "How has the insurer handled contribution adjustments so far?",
      ],
    },

    { t: "h2", text: "Deductible: lowering the contribution, bearing the risk" },
    {
      t: "p",
      text: "With a deductible (Selbstbehalt) you bear part of the costs yourself and can thereby lower the ongoing contribution. This only pays off if you can actually afford the amount in an emergency. With fluctuating income this is especially important: a high deductible can become a burden in a weak business year.",
    },
    {
      t: "p",
      text: "Please also note that when contributions are raised, insurers can also adjust deductibles (BaFin). Therefore do not plan the deductible too tightly, and build up a reserve for treatment costs.",
    },

    { t: "h2", text: "Daily sickness allowance: protection against loss of earnings" },
    {
      t: "p",
      text: "If you are ill and cannot work, your income falls away. For privately insured self-employed people, daily sickness allowance insurance (Krankentagegeldversicherung) is therefore particularly important. It pays an agreed daily allowance if you are unable to work.",
    },
    {
      t: "ul",
      items: [
        "Amount: the daily sickness allowance may be at most as high as your net income. As a rule, the average of the last twelve months is decisive.",
        "Deferral period (Karenzzeit): the allowance is only paid after an agreed deferral period has passed. Depending on the tariff, this can be as early as the fourth day of illness. A shorter deferral period generally leads to a higher contribution.",
        "Waiting period (Wartezeit): for certain benefits, for example during maternity protection, the model terms provide for a waiting period of eight months.",
        "Adjustment: if your net income falls permanently, you should tell your insurer so that the allowance and your income match.",
      ],
    },

    { t: "h2", text: "Contributions with fluctuating income" },
    {
      t: "p",
      text: "In statutory health insurance the contribution is based on income subject to contributions up to the contribution assessment ceiling (Beitragsbemessungsgrenze; 2026: €69,750 per year). In PKV, by contrast, you pay a contractually agreed contribution, regardless of how well a year goes. This gives you predictability, but it also means: the contribution is due in a weak year just as in a strong one.",
    },
    {
      t: "note",
      label: "Example (simplified)",
      text: "A freelancer has strong income in one year and weak income in the next. Her PKV contribution stays the same. A fixed reserve for contributions and a deductible that remains affordable even in a weak year are therefore helpful. The example does not replace a personal calculation.",
    },

    { t: "h2", text: "Long-term financial planning" },
    {
      t: "ul",
      items: [
        "Contribution in old age: contributions can rise and do not fall automatically when you work less or retire. Build up reserves for this (Verbraucherzentrale).",
        "Contribution adjustments: insurers may adjust contributions if costs have risen permanently and an independent trustee agrees (BaFin).",
        "Family: children and partners without income need their own contracts with contributions.",
        "Return to GKV: this is often difficult. From the age of 55, special restrictions apply (§ 6 para. 3a SGB V).",
        "Self-employment and protection: besides health insurance, also consider cover for occupational disability and retirement provision.",
      ],
    },
    { t: "link", text: "PKV or GKV: differences and decision criteria", href: "/wissen/pkv-oder-gkv" },
    { t: "link", text: "PKV for employees: switching, threshold and employer subsidy", href: "/private-krankenversicherung/angestellte" },
    { t: "link", text: "PKV for civil servants (Beamte): Beihilfe, residual-cost insurance and family", href: "/private-krankenversicherung/beamte" },
    {
      t: "p",
      text: "This page is general information and does not replace personal advice. Figures such as the contribution assessment ceiling change every year; the values given apply to 2026.",
    },
  ],
  sources: [
    { label: "PKV-Verband: private health insurance for self-employed people (industry association)", url: "https://www.pkv.de/wissen/private-krankenversicherung/leistungen-und-erstattung/privatversichert-bei-selbststaendiger-taetigkeit/" },
    { label: "BaFin: private health and long-term care insurance", url: "https://www.bafin.de/DE/verbraucherinnen-verbraucher/themen-finanzprodukte/versicherungen/kranken-pflegeversicherung/kranken-pflegeversicherung.html" },
    { label: "Verbraucherzentrale: private health insurance, not sensible for everyone", url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/krankenversicherung/private-krankenversicherung-nicht-fuer-jeden-sinnvoll-13884" },
    { label: "Federal Ministry of Health: contributions to statutory health insurance", url: "https://www.bundesgesundheitsministerium.de/beitraege" },
    { label: "Gesetze im Internet: § 6 SGB V, exemption from compulsory insurance", url: "https://www.gesetze-im-internet.de/sgb_5/__6.html" },
  ],
};

export const beamteEn: SubPageContent = {
  path: "/private-krankenversicherung/beamte",
  crumb: "PKV for civil servants",
  title: "PKV for civil servants (Beamte): Beihilfe, residual-cost insurance and family",
  answer:
    "Civil servants (Beamte) are exempt from statutory health insurance if they are entitled to government assistance with healthcare costs (Beihilfe). Beihilfe covers part of the costs of illness. Most civil servants cover the rest with private health insurance that matches their Beihilfe rate. The amount of Beihilfe depends on the employer (Dienstherr), marital status and life situation, and can change over the course of life.",
  blocks: [
    { t: "h2", text: "PKV and Beihilfe: how the two work together" },
    {
      t: "p",
      text: "Civil servants, judges and soldiers are exempt from statutory health insurance if, under civil-service law, they are entitled to continued payment of salary and to government assistance with healthcare costs (Beihilfe) or free medical care (Heilfürsorge) (§ 6 para. 1 no. 2 SGB V). Beihilfe bears a percentage share of the eligible costs of illness; it does not cover all costs.",
    },
    {
      t: "p",
      text: "Civil servants must insure the remaining share themselves. For this, private health insurers offer tariffs tailored to the respective Beihilfe rate. This combination is often called residual-cost insurance (Restkostenversicherung). Beihilfe and PKV together are meant to cover the costs. Suitable tariffs close the gap up to the Beihilfe rate.",
    },
    {
      t: "note",
      label: "Example (simplified)",
      text: "If Beihilfe covers 50 percent of the eligible costs, PKV insures the other 50 percent. If the Beihilfe rate rises later, for example because of children or retirement, PKV's share becomes smaller. The tariff should therefore be adjustable.",
    },

    { t: "h2", text: "Beihilfe rates: federal civil servants as an example" },
    {
      t: "p",
      text: "For federal civil servants, the Federal Beihilfe Ordinance (Bundesbeihilfeverordnung) sets the assessment rates (§ 46 BBhV). As a rule they are 50 percent for those entitled to Beihilfe, 70 percent for pension recipients and for eligible spouses and registered partners, and 80 percent for eligible children. For those entitled to Beihilfe with two or more children, the rate rises to 70 percent.",
    },
    {
      t: "p",
      text: "For state civil servants, the Beihilfe rules of the respective federal state apply. Rates and conditions can differ. Always clarify under which rules your employer grants Beihilfe.",
    },

    { t: "h2", text: "Civil-service candidates and civil servants on revocable appointment" },
    {
      t: "p",
      text: "Civil-service candidates (Beamtenanwärter) and civil servants on revocable appointment (Beamte auf Widerruf) are also generally entitled to Beihilfe and should clarify their health insurance cover early. According to the PKV-Verband, insurers run an opening campaign (Öffnungsaktion) for first-time entry to PKV, which makes it easier for civil servants and those starting a civil-service career to join, even if they have pre-existing conditions.",
    },
    {
      t: "ul",
      items: [
        "The application must be submitted within six months of first being appointed as a civil servant. What counts is the date of application, not the start of insurance.",
        "Benefit exclusions are not provided for in the opening campaign; risk surcharges are limited to a maximum of 30 percent of the contribution.",
        "A condition is that there is not yet a private full health insurance policy.",
        "According to the PKV-Verband, the campaign also applies to close relatives.",
      ],
    },
    {
      t: "p",
      text: "This is an arrangement of the insurance industry, not a statutory entitlement. Check the current conditions and the deadline before you rely on it.",
    },

    { t: "h2", text: "Special features for trainee teachers and lawyers (Referendare)" },
    {
      t: "p",
      text: "Whether a traineeship (Referendariat) takes place as a civil-service relationship on revocable appointment depends on the federal state and on the career path. The rules described here only apply if you have civil-servant status with an entitlement to Beihilfe. If the traineeship is served as an employee, different social insurance rules apply. Therefore clarify your status with your employer before taking out a policy.",
    },
    {
      t: "p",
      text: "According to the PKV-Verband, civil servants on revocable appointment are first admitted to tariffs that are open to them. Ask how the contribution develops after training and whether the tariff matches your future Beihilfe rate.",
    },

    { t: "h2", text: "Family and children" },
    {
      t: "p",
      text: "Beihilfe and PKV depend on your family situation. Children generally receive a higher Beihilfe rate and need their own insurance cover matched to the Beihilfe rate. For spouses and registered partners, entitlement to Beihilfe depends, among other things, on their own income. The federal government and the states regulate the details.",
    },
    {
      t: "p",
      text: "What matters is that the insurance cover can be adjusted when things change: the birth of a child, parental leave, part-time work, a change of employer or retirement. Before taking out a policy, discuss how flexibly a tariff responds to changed Beihilfe rates.",
    },

    { t: "h2", text: "Alternative: flat-rate Beihilfe in some federal states" },
    {
      t: "p",
      text: "Some federal states offer civil servants with statutory health insurance a flat-rate Beihilfe as a subsidy towards their health insurance contribution. According to the PKV-Verband, it amounts to half of the contribution. The decision for it is generally irrevocable. Examine the rules of your state carefully and get advice before you commit.",
    },

    { t: "h2", text: "How to find a suitable tariff" },
    {
      t: "ul",
      items: [
        "Beihilfe rate: the tariff must match your Beihilfe rate and be adjustable when it changes.",
        "Eligibility for Beihilfe: check whether the tariff covers benefits that Beihilfe reimburses only to a limited extent or not at all.",
        "Health questions: answer them completely and truthfully. If you have pre-existing conditions, an anonymous preliminary risk assessment can help.",
        "Contribution development: ask about ageing reserves (Alterungsrückstellung) and past contribution adjustments.",
        "Deadlines: note the six-month deadline for the opening campaign after first being appointed as a civil servant.",
        "Take your time: compare offers without time pressure.",
      ],
    },
    { t: "link", text: "Changing tariff in PKV: options within your existing contract", href: "/wissen/tarifwechsel-pkv" },
    { t: "link", text: "PKV for employees: switching, threshold and employer subsidy", href: "/private-krankenversicherung/angestellte" },
    { t: "link", text: "PKV for self-employed people and freelancers: tariffs, deductible and daily sickness allowance", href: "/private-krankenversicherung/selbststaendige" },
    { t: "link", text: "PKV or GKV: differences and decision criteria", href: "/wissen/pkv-oder-gkv" },
    {
      t: "p",
      text: "This page is general information and does not replace personal advice. Beihilfe rates and conditions differ depending on the employer and can change.",
    },
  ],
  sources: [
    { label: "Gesetze im Internet: § 6 SGB V, exemption from compulsory insurance (civil servants)", url: "https://www.gesetze-im-internet.de/sgb_5/__6.html" },
    { label: "Gesetze im Internet: § 46 BBhV, Beihilfe assessment rates (federal)", url: "https://www.gesetze-im-internet.de/bbhv/__46.html" },
    { label: "PKV-Verband: private health insurance for civil servants (industry association)", url: "https://www.pkv.de/positionen/krankenversicherung-fuer-beamtinnen-und-beamte/" },
    { label: "PKV-Verband: opening campaign for civil servants (brochure, industry association)", url: "https://www.pkv.de/fileadmin/user_upload/PKV/3_PDFs/Publikationen/Beamte_Brosch%C3%BCre-%C3%96ffnungsaktion.pdf" },
    { label: "Federal Office of Administration (BVA): Beihilfe, contribution subsidy and assessment rate", url: "https://www.bva.bund.de/DE/Services/Bundesbedienstete/Gesundheit-Vorsorge/Beihilfe/_documents/Beitragzuschuss_zur_privaten_Krankenversicherung_und_Bemessungssatz.html" },
  ],
};
