import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

Denomination.ANG_AU;

const Festivals: Festival[] = [
    {
        slug: "ash-wednesday",
        name: "Ash Wednesday",
        wikipedia_en_article_title: "Ash Wednesday",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: -46 })];
                },
            },
        ],
    },
];

export default Festivals;
