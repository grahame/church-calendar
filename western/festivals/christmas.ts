import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { Temporal } from "../../temporal.ts";

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
                    return [new Temporal.PlainDate(ctxt.year, 12, 25)];
                },
            },
        ],
    },
];

export default Festivals;
