import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { Temporal } from "../../temporal.ts";
import { n_sundays_after } from "../sunday.ts";

const Festivals: Festival[] = [
    {
        slug: "all-saints-day",
        name: "All Saints' Day",
        wikipedia_en_article_title: "All Saints' Day",
        observations: [
            {
                denominations: {
                    [Denomination.ANG_AU]: {
                        level: ObservationLevel.PRINCIPAL,
                    },
                },
                observation_dates: (ctxt: LiturgicalYearContext) => {
                    const all_saints = new Temporal.PlainDate(ctxt.year, 11, 1);
                    return [all_saints, n_sundays_after(all_saints, 1)];
                },
            },
        ],
    },
];

export default Festivals;
