import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { Temporal } from "../../temporal.ts";
import { n_sundays_after, n_sundays_before } from "../sunday.ts";

const Festivals: Festival[] = [
    {
        slug: "epiphany",
        name: "Epiphany",
        wikipedia_en_article_title: "Epiphany (holiday)",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        level: ObservationLevel.PRINCIPAL,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    const epiphany = new Temporal.PlainDate(ctxt.year, 1, 6);
                    return [epiphany, n_sundays_before(epiphany, 1)];
                },
            },
        ],
    },
    {
        slug: "the-baptism-of-our-lord",
        name: "The Baptism of our Lord",
        wikipedia_en_article_title: "Baptism of the Lord",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        level: ObservationLevel.FESTIVAL,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    const epiphany = new Temporal.PlainDate(ctxt.year, 1, 6);
                    return [n_sundays_after(epiphany, 1)];
                },
            },
        ],
    },
];

export default Festivals;
