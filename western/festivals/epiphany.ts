import { Denomination, Festival, LiturgicalYearContext, ObservationLevel, in_year } from "../../calendar.ts";
import { Temporal } from "../../temporal.ts";
import { n_sundays_after, n_sundays_before } from "../sunday.ts";

export const epiphany_date = (ctxt: LiturgicalYearContext) => {
    return in_year(ctxt, 1, 6);
};

const Festivals: Festival[] = [
    {
        slug: "epiphany",
        name: "Epiphany",
        wikipedia_en_article_title: "Epiphany (holiday)",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    const epiphany = in_year(ctxt, 1, 6);
                    return [epiphany, n_sundays_before(epiphany, 1)];
                },
            },
        ],
    },
    {
        slug: "the-baptism-of-our-lord",
        name: "The Baptism of our Lord",
        wikipedia_en_article_title: "Baptism of the Lord",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    const epiphany = new Temporal.PlainDate(ctxt.year, 1, 6);
                    return [n_sundays_after(epiphany, 1)];
                },
            },
        ],
    },
];

export default Festivals;
