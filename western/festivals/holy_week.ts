import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

const Festivals: Festival[] = [
    {
        slug: "palm-sunday",
        name: "Palm Sunday",
        wikipedia_en_article_title: "Palm Sunday",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                name: "Sunday in Holy Week (Palm Sunday)",
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -7 })];
                },
            },
        ],
    },
    {
        slug: "holy-monday",
        name: "Holy Monday",
        wikipedia_en_article_title: "Holy Monday",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                name: "Monday in Holy Week",
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -6 })];
                },
            },
        ],
    },
    {
        slug: "holy-tuesday",
        name: "Holy Tuesday",
        wikipedia_en_article_title: "Holy Tuesday",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                name: "Tuesday in Holy Week",
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -5 })];
                },
            },
        ],
    },
    {
        slug: "holy-wednesday",
        name: "Holy Wednesday",
        wikipedia_en_article_title: "Holy Wednesday",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                name: "Wednesday in Holy Week",
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -4 })];
                },
            },
        ],
    },
];

export default Festivals;
