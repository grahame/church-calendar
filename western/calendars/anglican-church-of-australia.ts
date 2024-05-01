import {
    Calendar,
    DateAttributes,
    Denomination,
    LiturgicalColour,
    LiturgicalSeason,
    LiturgicalYearContext,
    ObservationLevel,
    in_calendar_year,
    in_liturgical_year,
} from "../../calendar.ts";
import { make_festival_index } from "../../festivalindex.ts";
import { PackingIndex, pack_observances, resolve_observances } from "../../packing.ts";
import { Temporal } from "../../temporal.ts";
import { epiphany_date } from "../festivals/epiphany.ts";
import Festivals from "../festivals/index.ts";
import { ash_wednesday_date } from "../festivals/lent.ts";
import { make_liturgical_year_context } from "../seasons/index.ts";
import { n_sundays_after } from "../sunday.ts";

export const ember_days = (context: LiturgicalYearContext): Temporal.PlainDate[] => {
    // APBA p.450: Prayers are offered on the weekdays following the day of Pentecost
    const days: Temporal.PlainDate[] = [];
    const pentecostDate = context.pentecost;
    const emberStart = pentecostDate.add({ days: 1 });
    const emberEnd = pentecostDate.add({ days: 5 });
    for (let dt = emberStart; Temporal.PlainDate.compare(dt, emberEnd) <= 0; dt = dt.add({ days: 1 })) {
        days.push(dt);
    }
    // ... and the week preceding St Andrew’s Day; this seems to mean an inclusive octave prior
    // to the feast of Andrew, skipping any Sundays but including Saturdays
    const andrewDate = in_calendar_year(context.last_day.year, 11, 30);
    let dt = andrewDate.add({ days: -7 });
    const until = andrewDate.add({ days: -1 });
    while (Temporal.PlainDate.compare(dt, until) <= 0) {
        if (dt.dayOfWeek !== 7) {
            days.push(dt);
        }
        dt = dt.add({ days: 1 });
    }
    return days;
};

export const aca_seasons = (year: number): LiturgicalSeason[] => {
    const seasons: LiturgicalSeason[] = [];
    const ctxt = make_liturgical_year_context(year);

    seasons.push({
        name: "Advent",
        start_date: ctxt.advent,
        end_date: in_liturgical_year(ctxt, 12, 24)!,
        colour: LiturgicalColour.COLOUR_VIOLET_OR_BLUE,
    });

    seasons.push({
        name: "Christmas",
        start_date: in_liturgical_year(ctxt, 12, 25)!,
        end_date: epiphany_date(ctxt).add({ days: -1 }),
        colour: LiturgicalColour.COLOUR_WHITE,
    });

    const epiphany = epiphany_date(ctxt);
    const sunday_after_epiphany = n_sundays_after(epiphany, 1);

    seasons.push({
        name: "Epiphany",
        start_date: epiphany,
        end_date: sunday_after_epiphany.add({ days: -1 }),
        colour: LiturgicalColour.COLOUR_WHITE,
    });

    seasons.push({
        name: "Season after Epiphany",
        start_date: sunday_after_epiphany,
        end_date: ash_wednesday_date(ctxt).add({ days: -1 }),
        colour: LiturgicalColour.COLOUR_GREEN,
    });

    seasons.push({
        name: "Lent",
        start_date: ash_wednesday_date(ctxt),
        end_date: ctxt.easter.add({ days: -1 }),
        colour: LiturgicalColour.COLOUR_VIOLET,
    });

    seasons.push({
        name: "Easter",
        start_date: ctxt.easter,
        end_date: ctxt.pentecost.add({ days: -1 }),
        colour: LiturgicalColour.COLOUR_WHITE,
    });

    seasons.push({
        name: "Season after Pentecost",
        start_date: ctxt.pentecost.add({ days: 1 }),
        end_date: ctxt.last_day,
        colour: LiturgicalColour.COLOUR_GREEN,
    });

    return seasons;
};

const resolve_attributes = (context: LiturgicalYearContext): DateAttributes => {
    const embers = ember_days(context);
    const date_attributes: DateAttributes = [];

    // if we add more than one attribute type, this will need to be fixed up to merge them together
    for (const dt of embers) {
        date_attributes.push([dt, ["ember-day"]]);
    }

    return date_attributes;
};

export const calendar = (year: number): Calendar => {
    const denom = Denomination.ANG_AU;
    const index: PackingIndex = {};
    const festival_index = make_festival_index(Festivals);

    const pack_principal_years = (ctxts: LiturgicalYearContext[]) => {
        for (const ctxt of ctxts) {
            pack_observances(
                ctxt,
                index,
                [
                    ...festival_index[denom][ObservationLevel.PRINCIPAL],
                    ...festival_index[denom][ObservationLevel.NON_DISPLACABLE],
                ],
                false,
                false
            );
        }
    };
    const pack_festival_year = (ctxts: LiturgicalYearContext[]) => {
        for (const ctxt of ctxts) {
            pack_observances(ctxt, index, festival_index[denom][ObservationLevel.FESTIVAL], true, false);
        }
    };
    const pack_lesser_festival_year = (ctxts: LiturgicalYearContext[]) => {
        for (const ctxt of ctxts) {
            pack_observances(ctxt, index, festival_index[denom][ObservationLevel.LESSER_FESTIVAL], true, true);
        }
    };

    // this seems complicated... because it is. we really have two calendars tangled up:
    // one running from the secular 'calendar' (Jan 1 - Dec 31) and the other running
    // from the Church calendar (Advent - Christ the King). We need to resolve the
    // full year before in order to be able to resolve the current liturgical year,
    // because some calendar-based observances from the prior secular year might fall
    // in this liturgical year.
    //
    // An example of the problem occurs in 2022-2023; the Feast of Saint Andrew (on the
    // 30th of November) occurs twice within the liturgical year (2022-11-27 -> 2023-12-03)
    //
    // Further, in 1997 the Feast of Saint Andrew doesn't occur at all, because that liturgical
    // year begins on the 1st of December and ends on the 29th of November.
    const contexts = [make_liturgical_year_context(year - 1), make_liturgical_year_context(year)];
    pack_principal_years(contexts);
    pack_festival_year(contexts);
    pack_lesser_festival_year(contexts);

    const context = contexts[1];
    const observances = resolve_observances(index, context);
    const attributes = resolve_attributes(context);

    return {
        // we can throw away the context for the prior year
        context,
        observances,
        attributes,
    };
};
