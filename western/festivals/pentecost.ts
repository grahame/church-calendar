import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

const Festivals: Festival[] = [
    {
        slug: "pentecost",
        name: "Pentecost",
        wikipedia_en_article_title: "Pentecost",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.pentecost];
                },
            },
        ],
    },
    {
        slug: "trinity-sunday",
        name: "Trinity Sunday",
        wikipedia_en_article_title: "Trinity Sunday",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.pentecost.add({ days: 7 })];
                },
            },
        ],
    },
];

export default Festivals;
