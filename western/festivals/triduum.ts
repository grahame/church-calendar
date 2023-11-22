import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

const Festivals: Festival[] = [
    {
        slug: "maundy-thursday",
        name: "Maundy Thursday",
        wikipedia_article_titles: ["Maundy Thursday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -3 })];
                },
            },
        ],
    },
    {
        slug: "good-friday",
        name: "Good Friday",
        wikipedia_article_titles: ["Good Friday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -2 })];
                },
            },
        ],
    },
    {
        slug: "holy-saturday",
        name: "Holy Saturday",
        wikipedia_article_titles: ["Holy Saturday"],
        observances: [
            {
                name: "Saturday in Holy Week",
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -1 })];
                },
            },
        ],
    },
];

export default Festivals;
