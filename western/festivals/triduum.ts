import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

Denomination.ANG_AU;

const Festivals: Festival[] = [
    {
        slug: "maundy-thursday",
        name: "Maundy Thursday",
        wikipedia_en_article_title: "Maundy Thursday",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        level: ObservationLevel.PRINCIPAL,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -3 })];
                },
            },
        ],
    },
    {
        slug: "good-friday",
        name: "Good Friday",
        wikipedia_en_article_title: "Good Friday",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        level: ObservationLevel.PRINCIPAL,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -2 })];
                },
            },
        ],
    },
    {
        slug: "holy-saturday",
        name: "Holy Saturday",
        wikipedia_en_article_title: "Holy Saturday",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        name: "Holy Saturday",
                        level: ObservationLevel.NON_DISPLACABLE,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -1 })];
                },
            },
        ],
    },
];

export default Festivals;
