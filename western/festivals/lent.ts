import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { n_sundays_before } from "../sunday.ts";

export const ash_wednesday_date = (ctxt: LiturgicalYearContext) => {
    return ctxt.easter.add({ days: -46 });
};

const Festivals: Festival[] = [
    {
        slug: "ash-wednesday",
        name: "Ash Wednesday",
        wikipedia_article_titles: ["Ash Wednesday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ash_wednesday_date(ctxt)];
                },
            },
        ],
    },
    {
        slug: "lent-1",
        name: "First Sunday in Lent",
        wikipedia_article_titles: ["Quadragesima Sunday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_before(ctxt.easter, 6)];
                },
            },
        ],
    },
    {
        slug: "lent-2",
        name: "Second Sunday in Lent",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_before(ctxt.easter, 5)];
                },
            },
        ],
    },
    {
        slug: "lent-3",
        name: "Third Sunday in Lent",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_before(ctxt.easter, 4)];
                },
            },
        ],
    },
    {
        slug: "lent-4",
        name: "Fourth Sunday in Lent",
        wikipedia_article_titles: ["Laetare Sunday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_before(ctxt.easter, 3)];
                },
            },
        ],
    },
    {
        slug: "lent-5",
        name: "Fifth Sunday in Lent",
        wikipedia_article_titles: ["Passion Sunday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_before(ctxt.easter, 2)];
                },
            },
        ],
    },
];

export default Festivals;
