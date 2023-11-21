import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

const Festivals: Festival[] = [
    {
        slug: "palm-sunday",
        name: "Palm Sunday",
        wikipedia_en_article_title: "Palm Sunday",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        name: "Sunday in Holy Week (Palm Sunday)",
                        level: ObservationLevel.NON_DISPLACABLE,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -7 })];
                },
            },
        ],
    },
    {
        slug: "holy-monday",
        name: "Holy Monday",
        wikipedia_en_article_title: "Holy Monday",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        name: "Monday in Holy Week",
                        level: ObservationLevel.NON_DISPLACABLE,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -6 })];
                },
            },
        ],
    },
    {
        slug: "holy-tuesday",
        name: "Holy Tuesday",
        wikipedia_en_article_title: "Holy Tuesday",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        name: "Tuesday in Holy Week",
                        level: ObservationLevel.NON_DISPLACABLE,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -5 })];
                },
            },
        ],
    },
    {
        slug: "holy-wednesday",
        name: "Holy Wednesday",
        wikipedia_en_article_title: "Holy Wednesday",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        name: "Wednesday in Holy Week",
                        level: ObservationLevel.NON_DISPLACABLE,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -4 })];
                },
            },
        ],
    },
];

export default Festivals;
