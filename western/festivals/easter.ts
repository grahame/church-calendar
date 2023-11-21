import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

Denomination.ANG_AU;

const Festivals: Festival[] = [
    {
        slug: "easter-day",
        name: "Easter Day",
        wikipedia_en_article_title: "Easter",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        level: ObservationLevel.PRINCIPAL,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter];
                },
            },
        ],
    },
    {
        slug: "ascension-day",
        name: "Ascension Day",
        wikipedia_en_article_title: "Feast of the Ascension",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        level: ObservationLevel.PRINCIPAL,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 39 })];
                },
            },
        ],
    },
];

export default Festivals;
