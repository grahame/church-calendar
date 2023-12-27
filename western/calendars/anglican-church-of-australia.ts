import {
    Denomination,
    LiturgicalColour,
    LiturgicalSeason,
    LiturgicalYearContext,
    ObservationLevel,
    ResolvedCalendar,
    in_liturgical_year,
} from "../../calendar.ts";
import { PackingIndex, pack_observances, resolve_observances } from "../../packing.ts";
import { make_festival_index } from "../../festivalindex.ts";
import { make_liturgical_year_context } from "../seasons/index.ts";
import Festivals from "../festivals/index.ts";
import { epiphany_date } from "../festivals/epiphany.ts";
import { n_sundays_after } from "../sunday.ts";
import { ash_wednesday_date } from "../festivals/lent.ts";

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

export const calendar = (year: number): [LiturgicalYearContext, ResolvedCalendar] => {
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
    const ctxts = [make_liturgical_year_context(year - 1), make_liturgical_year_context(year)];
    pack_principal_years(ctxts);
    pack_festival_year(ctxts);
    pack_lesser_festival_year(ctxts);

    // linearise the placed dictionary into a list
    const ctxt = ctxts[1];
    return [ctxt, resolve_observances(index, ctxt)];
};
