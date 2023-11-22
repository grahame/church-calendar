import { Denomination, Festival, FestivalAttributes, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { n_sundays_before } from "../sunday.ts";

const Festivals: Festival[] = [
    {
        slug: "palm-sunday",
        name: "Palm Sunday",
        wikipedia_article_titles: ["Palm Sunday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [FestivalAttributes.COLOUR_RED],
                level: ObservationLevel.NON_DISPLACABLE,
                name: "Sunday in Holy Week (Palm Sunday)",
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_before(ctxt.easter, 1)];
                },
            },
        ],
    },
    {
        slug: "holy-monday",
        name: "Holy Monday",
        wikipedia_article_titles: ["Holy Monday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [],
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
        wikipedia_article_titles: ["Holy Tuesday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [],
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
        wikipedia_article_titles: ["Holy Wednesday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [],
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
