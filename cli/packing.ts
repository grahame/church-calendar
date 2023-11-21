import { Festival, LiturgicalYearContext, Observance, ObservanceFestivalList, ResolvedCalendar } from "../calendar.ts";
import { Temporal } from "../temporal.ts";

export type PackingIndex = { [key: string]: [Observance, Festival] };

export const pack_observance = (
    ctxt: LiturgicalYearContext,
    index: PackingIndex,
    observance: Observance,
    festival: Festival,
    can_fail: boolean
) => {
    const dates = observance.dates(ctxt);
    const blockages = [];
    for (const date of dates) {
        if (Temporal.PlainDate.compare(date, ctxt.first_day) == -1) {
            throw new Error(
                `Date ${date.toString()} for slug ${
                    festival.slug
                } is before the start of the liturgical year (${ctxt.first_day.toString()})`
            );
        }
        if (Temporal.PlainDate.compare(date, ctxt.last_day) == 1) {
            throw new Error(
                `Date ${date.toString()} for slug ${
                    festival.slug
                } is after the end of the liturgical year (${ctxt.last_day.toString()})`
            );
        }
        const date_key = date.toString();
        if (!index[date_key]) {
            index[date_key] = [observance, festival];
            return;
        } else {
            blockages.push(index[date_key][1].slug);
        }
    }
    if (!can_fail && dates.length > 0) {
        throw new Error(
            `Could not place ${festival.name} on any of ${dates.join(", ")}, blocked by ${blockages.join(", ")}`
        );
    }
};

export const resolve_observances = (ctxt: LiturgicalYearContext, index: PackingIndex): ResolvedCalendar => {
    const events: ResolvedCalendar = [];
    for (let dt = ctxt.first_day; Temporal.PlainDate.compare(dt, ctxt.last_day) != 1; dt = dt.add({ days: 1 })) {
        const dt_key = dt.toString();
        if (!index[dt_key]) {
            continue;
        }
        const [observance, festival] = index[dt.toString()];
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

export const pack_observances = (
    ctxt: LiturgicalYearContext,
    index: PackingIndex,
    ofl: ObservanceFestivalList,
    can_fail: boolean
) => {
    for (const idx in ofl) {
        pack_observance(ctxt, index, ...ofl[idx], can_fail);
    }
};
