import { Denomination, Festival, FestivalAttributes, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
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
                    attributes: [],
                    level: ObservationLevel.LESSER_FESTIVAL,
                    dates: (ctxt: LiturgicalYearContext) => {
                        const dt = ctxt.pentecost.add({ days: 7 * sunday_after });
                        // the last Sunday is a special-case
                        if (Temporal.PlainDate.compare(dt, ctxt.last_day.add({ days: -7 })) == 1) {
                            return [];
                        }
                        return [dt];
                    },
                },
            ],
        });
        sundays.push({
            slug: `christ-the-king-${sunday_after}`,
            name: "Christ the King",
            wikipedia_article_titles: ["Christ the King"],
            observances: [
                {
                    denominations: [Denomination.ANG_AU],
                    attributes: [FestivalAttributes.COLOUR_WHITE],
                    level: ObservationLevel.LESSER_FESTIVAL,
                    dates: (ctxt: LiturgicalYearContext) => {
                        const dt = ctxt.pentecost.add({ days: 7 * sunday_after });
                        // we must be the last Sunday in ordinary time
                        if (
                            Temporal.PlainDate.compare(dt, ctxt.last_day.add({ days: -7 })) == 1 &&
                            Temporal.PlainDate.compare(dt, ctxt.last_day) != 1
                        ) {
                            return [dt];
                        }
                        return [];
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
        wikipedia_article_titles: ["Pentecost"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [],
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
        wikipedia_article_titles: ["Trinity Sunday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [FestivalAttributes.COLOUR_WHITE],
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
