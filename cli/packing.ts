import {
    EitherObservanceFestival,
    LiturgicalYearContext,
    ObservanceFestivalList,
    ResolvedCalendar,
    date_within_liturgical_year,
} from "../calendar.ts";
import { Temporal } from "../temporal.ts";

export type PackingIndex = { [key: string]: EitherObservanceFestival };

export const pack_observance = (
    ctxt: LiturgicalYearContext,
    index: PackingIndex,
    dates: Temporal.PlainDate[],
    either: EitherObservanceFestival,
    can_fail: boolean
) => {
    const blockages = [];
    for (const date of dates) {
        // final, paranoid cross-check
        if (either.type == "liturgical") {
            if (Temporal.PlainDate.compare(date, ctxt.first_day) == -1) {
                throw new Error(
                    `Date ${date.toString()} for slug ${
                        either.festival.slug
                    } is before the start of the liturgical year (${ctxt.first_day.toString()})`
                );
            }
            if (Temporal.PlainDate.compare(date, ctxt.last_day) == 1) {
                throw new Error(
                    `Date ${date.toString()} for slug ${
                        either.festival.slug
                    } is after the end of the liturgical year (${ctxt.last_day.toString()})`
                );
            }
        }
        const date_key = date.toString();
        if (!index[date_key]) {
            index[date_key] = either;
            return;
        } else {
            blockages.push(index[date_key].festival.slug);
        }
    }
    if (!can_fail && dates.length > 0) {
        throw new Error(
            `Could not place ${either.festival.name} on any of ${dates.join(", ")}, blocked by ${blockages.join(", ")}`
        );
    }
};

export const resolve_observances = (index: PackingIndex, ctxt: LiturgicalYearContext): ResolvedCalendar => {
    const events: ResolvedCalendar = [];
    const keys = Object.keys(index).sort();
    for (const dt_key of keys) {
        if (!index[dt_key]) {
            continue;
        }
        const either = index[dt_key];
        const dt = Temporal.PlainDate.from(dt_key);
        if (!date_within_liturgical_year(ctxt, dt)) {
            continue;
        }
        events.push([
            dt,
            {
                level: either.observance.level,
                slug: either.festival.slug,
                name: either.observance.name || either.festival.name,
                description: either.festival.description,
                image_link: either.festival.image_link,
            },
        ]);
    }
    return events;
};

export const pack_observances = (
    ctxt: LiturgicalYearContext,
    index: PackingIndex,
    ofl: ObservanceFestivalList,
    can_fail: boolean
) => {
    for (const idx in ofl) {
        const either = ofl[idx];
        switch (either.type) {
            case "calendar": {
                const dates = either.observance.dates(ctxt, ctxt.year);
                pack_observance(ctxt, index, dates, either, can_fail);
                break;
            }
            case "liturgical": {
                const dates = either.observance.dates(ctxt);
                pack_observance(ctxt, index, dates, either, can_fail);
                break;
            }
        }
    }
};
