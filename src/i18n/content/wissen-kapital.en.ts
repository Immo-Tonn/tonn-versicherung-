import type { ArticleTranslation } from "./wissen.types";

/**
 * ENTWURF – nicht fachlich/rechtlich geprüft, nicht veröffentlicht. Quelle der Aussagen: deutsche Beiträge.
 * Allgemeine Information, keine Anlageberatung: Die Hinweise am Ende der Beiträge müssen sinngemäß erhalten bleiben.
 */

export const grundlagenKapitalanlageEn: ArticleTranslation = {
  slug: "grundlagen-kapitalanlage",
  topic: "Investment",
  title: "Investment basics: goals, time, risk and costs",
  seo: {
    title: "Investment basics: goals, time, risk, costs | TONN",
    description:
      "How to prepare your investing: an overview of your finances, reserves, investment goal, investment horizon, risk and costs – with sources from BaFin.",
  },
  answer:
    "Before you compare products, clarify your financial situation, build up reserves and set your goal and time frame. Return, risk and costs belong together: the higher the possible return, the higher the risk as a rule, and costs reduce the result. An investment should fit your personal situation.",
  blocks: [
    { t: "h2", text: "First clarify your own situation" },
    {
      t: "p",
      text: "BaFin recommends first getting an overview of your own finances and building up reserves for emergencies. As a guideline for an emergency reserve, it cites roughly three months' income in a quickly available, safe form such as instant-access savings (Tagesgeld). You should pay off existing debts before you invest money.",
    },
    { t: "h2", text: "Setting the investment goal" },
    {
      t: "p",
      text: "BaFin names three classic investment goals: security, availability and return. They cannot all be maximised at the same time. Anyone looking for high return opportunities has to accept higher risks. Anyone who wants to have access to their money at any time usually gives up return.",
    },
    { t: "h2", text: "Time" },
    {
      t: "p",
      text: "The investment horizon (Anlagehorizont) determines which investments come into question. With securities, according to BaFin, longer investment periods increase the chance of more stable results, but do not guarantee them. Money you need in a few years therefore does not belong in investments that fluctuate strongly.",
    },
    { t: "h2", text: "Risk" },
    {
      t: "p",
      text: "The higher the promised return, the greater the risk of a loss of capital as a rule. What matters is which fluctuations and losses you can bear financially and personally. This depends on your income, your reserves and your personal disposition.",
    },
    { t: "h2", text: "Costs" },
    {
      t: "p",
      text: "Investing money often causes costs that reduce the return, such as front-end loads (Ausgabeaufschläge), ongoing management costs or custody account fees (Depotgebühren). Providers must disclose costs and their effect on the return in advance. Check and compare these before you decide.",
    },
    { t: "h2", text: "Reviewing your portfolio regularly" },
    {
      t: "p",
      text: "Your situation and the markets change. BaFin recommends reviewing your own portfolio regularly and adjusting it where necessary.",
    },
    {
      t: "example",
      text: "A person wants to make a down payment on a property in two years. Although higher return opportunities are tempting, for this short period an investment with low fluctuation is more suitable. For money they will not need for twenty years, the weighing-up may turn out differently.",
    },
    {
      t: "p",
      text: "This article is general information, not investment advice (Anlageberatung); no return forecasts are provided. Losses are possible with investments.",
    },
  ],
  sourceLabels: ["BaFin: The basics of investing money", "BaFin: securities funds"],
};

export const streuungKapitalanlageEn: ArticleTranslation = {
  slug: "streuung-kapitalanlage",
  topic: "Investment",
  title: "Diversification when investing money: possibilities and limits",
  seo: {
    title: "Diversification when investing: what it can and cannot do | TONN",
    description:
      "What does diversification (Streuung) mean when investing money, how does it work and why does it not remove all risks? Clearly explained, with sources from BaFin.",
  },
  answer:
    "Diversification (Streuung) means not putting your money into just one investment but spreading it across different forms of investment. This can limit the risk of loss. It does not, however, remove all risks and does not generally protect against losses: even a broadly diversified portfolio can lose value.",
  blocks: [
    { t: "h2", text: "What diversification means" },
    {
      t: "p",
      text: "BaFin recommends not investing your assets in just one asset but spreading them across different forms of investment. This limits the risk of loss and lets you expect more stable results. This means different asset classes, but also different terms and risks.",
    },
    { t: "h2", text: "How diversification can be put into practice" },
    {
      t: "p",
      text: "Anyone who buys individual securities themselves has to put together, monitor and adjust a broad portfolio. With units in a securities fund (Wertpapierfonds), you diversify your risk without having to do this yourself. According to BaFin's guidance, broad diversification usually reduces the risk of loss.",
    },
    { t: "h2", text: "Where the limits lie" },
    {
      t: "ul",
      items: [
        "The value of the assets in a fund, and thus of your units, can fall, for example in market turbulence or when companies run into economic problems.",
        "Nobody can guarantee how things will develop. Investors bear the risks of investing themselves.",
        "Diversifying across many investments helps little if they all depend on the same risk, for example the same market development.",
        "Costs also arise with diversified investments: front-end load, ongoing costs and, where applicable, custody account fees reduce the return.",
      ],
    },
    { t: "h2", text: "What you can look out for" },
    {
      t: "ul",
      items: [
        "Do not spread your money onto a single investment.",
        "Check how the investments in the portfolio differ and what they depend on.",
        "Compare costs before buying. Providers must disclose them in advance.",
        "Review your portfolio regularly.",
      ],
    },
    {
      t: "example",
      text: "A person has invested all their money in the shares of a single company. If this company gets into difficulty, it affects their entire assets. If they spread their money across different forms of investment, a single development has less of an effect. Losses nevertheless remain possible.",
    },
    {
      t: "p",
      text: "This article is general information, not investment advice (Anlageberatung). It makes no promises of returns.",
    },
  ],
  sourceLabels: ["BaFin: The basics of investing money", "BaFin: securities funds"],
};
