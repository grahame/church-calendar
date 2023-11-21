import {
    ResolvedCalendar,
    Denomination,
    Festival,
    LiturgicalYearContext,
    Observance,
    ObservationLevel,
} from "../../calendar.ts";
import { Temporal } from "../../temporal.ts";
import { advent } from "../dates/advent/advent.ts";
import { easter } from "../dates/easter/easter.ts";
import { pentecost } from "../dates/pentecost/pentecost.ts";
import Festivals from "../festivals/index.ts";

const make_festival_index = (festivals: Festival[]) => {
    // index by denomination, then by level, then by order of appearance in the list
    const festival_level_index: { [key: string]: { [key: string]: [Observance, Festival][] } } = {};
    for (const festival of festivals) {
        for (const observance of festival.observances) {
            for (const denomination of observance.denominations) {
                if (!festival_level_index[denomination]) {
                    festival_level_index[denomination] = {};
                }
                if (!festival_level_index[denomination][observance.level]) {
                    festival_level_index[denomination][observance.level] = [];
                }
                festival_level_index[denomination][observance.level].push([observance, festival]);
            }
        }
    }
    return festival_level_index;
};

export const calendar = (year: number): ResolvedCalendar => {
    const date_observance: { [key: string]: [Observance, Festival] } = {};
    const denom = Denomination.ANG_AU;

    const context: LiturgicalYearContext = {
        year: year,
        advent: advent(year - 1),
        easter: easter(year),
        pentecost: pentecost(year),
        first_day: advent(year - 1),
        last_day: advent(year).add({ days: -1 }),
    };

    const festival_index = make_festival_index(Festivals);

    const principal = [
        ...festival_index[denom][ObservationLevel.PRINCIPAL],
        ...festival_index[denom][ObservationLevel.NON_DISPLACABLE],
    ];

    const place = (observance: Observance, festival: Festival, can_fail: boolean) => {
        const dates = observance.dates(context);
        let placed = false;
        for (const date of dates) {
            const date_key = date.toString();
            if (!date_observance[date_key]) {
                date_observance[date_key] = [observance, festival];
                placed = true;
            }
        }
        if (!placed && !can_fail) {
            throw new Error(`Could not place ${festival.name} on any of ${dates.join(", ")}`);
        }
    };

    // principal festivals go into our year first
    for (const idx in principal) {
        const [observance, festival] = principal[idx];
        place(observance, festival, false);
    }

    // we also fence off all the weekdays in Holy Week and Easter Week (APBA 452)
    // as they can't be

    // linearise the placed dictionary into a list
    const events: ResolvedCalendar = [];
    for (let dt = context.first_day; Temporal.PlainDate.compare(dt, context.last_day) != 1; dt = dt.add({ days: 1 })) {
        const dt_key = dt.toString();
        if (!date_observance[dt_key]) {
            continue;
        }
        const [observance, festival] = date_observance[dt.toString()];
        events.push([
            dt,
            {
                level: observance.level,
                slug: festival.slug,
                name: observance.name || festival.name,
                description: festival.description,
                image_link: festival.image_link,
            },
        ]);
    }

    return events;
};
