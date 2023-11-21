import { Denomination, Festival, LiturgicalYearContext, ObservationLevel, in_liturgical_year } from "../../calendar.ts";
import { capitalize, nthify } from "../../nth.ts";
import { Temporal } from "../../temporal.ts";
import { n_sundays_after, n_sundays_before } from "../sunday.ts";

export const epiphany_date = (ctxt: LiturgicalYearContext) => {
    // epiphany is clear of any moving bits of the calendar
    return in_liturgical_year(ctxt, 1, 6)!;
};

const sundays_after_epiphany = () => {
    const sundays: Festival[] = [];
    for (let sunday_after = 2; sunday_after <= 30; sunday_after++) {
        const nth = capitalize(nthify(sunday_after));
        sundays.push({
            slug: `sunday-after-epiphany-${sunday_after}`,
            name: `${nth} Sunday after Epiphany`,
            observances: [
                {
                    denominations: [Denomination.ANG_AU],
                    level: ObservationLevel.LESSER_FESTIVAL,
                    dates: (ctxt: LiturgicalYearContext) => {
                        const epiphany = epiphany_date(ctxt);
                        const lent_1 = n_sundays_before(ctxt.easter, 6);
                        const dt = n_sundays_after(epiphany, sunday_after);
                        // we must be before the last Sunday in Epiphany
                        if (Temporal.PlainDate.compare(dt, lent_1.add({ days: -7 })) == -1) {
                            return [dt];
                        }
                        return [];
                    },
                },
            ],
        });
        sundays.push({
            slug: `last-sunday-of-epiphany-${sunday_after}`,
            name: "Last Sunday of Epiphany",
            observances: [
                {
                    denominations: [Denomination.ANG_AU],
                    level: ObservationLevel.LESSER_FESTIVAL,
                    dates: (ctxt: LiturgicalYearContext) => {
                        const epiphany = epiphany_date(ctxt);
                        const lent_1 = n_sundays_before(ctxt.easter, 6);
                        const dt = n_sundays_after(epiphany, sunday_after);
                        // we must be the last Sunday prior to Lent 1
                        if (Temporal.PlainDate.compare(dt, lent_1.add({ days: -7 })) == 0) {
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
        slug: "epiphany",
        name: "Epiphany",
        wikipedia_en_article_title: "Epiphany (holiday)",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    const epiphany = epiphany_date(ctxt);
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
                    const epiphany = epiphany_date(ctxt);
                    return [n_sundays_after(epiphany, 1)];
                },
            },
        ],
    },
    ...sundays_after_epiphany(),
];

export default Festivals;
