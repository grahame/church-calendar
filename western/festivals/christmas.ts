import { Denomination, Festival, LiturgicalYearContext, ObservationLevel, in_year } from "../../calendar.ts";
import { Temporal } from "../../temporal.ts";
import { n_sundays_after } from "../sunday.ts";
import { epiphany_date } from "./epiphany.ts";

const christmas_date = (ctxt: LiturgicalYearContext) => {
    return in_year(ctxt, 12, 25);
};

const Festivals: Festival[] = [
    {
        slug: "christmas-day",
        name: "Christmas Day",
        wikipedia_en_article_title: "Christmas",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [christmas_date(ctxt)];
                },
            },
        ],
    },
    {
        slug: "christmas-1",
        name: "First Sunday after Christmas",
        wikipedia_en_article_title: "Christmas Sunday",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE, // this is ambiguous in APBA but makes sense
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_after(christmas_date(ctxt), 1)];
                },
            },
        ],
    },
    {
        slug: "christmas-2",
        name: "Second Sunday after Christmas",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE, // this is ambiguous in APBA but makes sense
                dates: (ctxt: LiturgicalYearContext) => {
                    const christmas_2 = n_sundays_after(christmas_date(ctxt), 2);
                    const epiphany = epiphany_date(ctxt);
                    // we only have Christmas 2 if it's before Epiphany
                    if (Temporal.PlainDate.compare(christmas_2, epiphany) == -1) {
                        return [christmas_2];
                    }
                    return [];
                },
            },
        ],
    },
];

export default Festivals;
