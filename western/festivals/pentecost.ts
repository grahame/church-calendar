import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { capitalize, nthify } from "../../nth.ts";
import { Temporal } from "../../temporal.ts";

const sundays_after_pentecost = () => {
    const sundays: Festival[] = [];
    for (let sunday_after = 2; sunday_after <= 30; sunday_after++) {
        const nth = capitalize(nthify(sunday_after));
        sundays.push({
            slug: `sunday-after-pentecost-${sunday_after}`,
            name: `${nth} Sunday after Pentecost`,
            observances: [
                {
                    denominations: [Denomination.ANG_AU],
                    level: ObservationLevel.NON_DISPLACABLE,
                    dates: (ctxt: LiturgicalYearContext) => {
                        const dt = ctxt.pentecost.add({ days: 7 * sunday_after });
                        if (Temporal.PlainDate.compare(dt, ctxt.last_day) === 1) {
                            return [];
                        }
                        return [dt];
                    },
                },
            ],
        });
    }
    return sundays;
};

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
    ...sundays_after_pentecost(),
];

export default Festivals;
