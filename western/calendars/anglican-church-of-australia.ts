import { Denomination, LiturgicalYearContext, ObservationLevel, ResolvedCalendar } from "../../calendar.ts";
import { PackingIndex, pack_observances, resolve_observances } from "../../packing.ts";
import { make_festival_index } from "../../festivalindex.ts";
import { make_liturgical_year_context } from "../dates/index.ts";
import Festivals from "../festivals/index.ts";

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
    // because some calendar-based observances from the previous year might fall in this
    // liturgical year. This could possibly cascade back even further when the optional
    // placement of liturgical dates is taken into account, but we can probably ignore
    // that for now.
    //
    // An example of the problem occurs in 2022-2023; the Feast of Saint Andrew is observed
    // twice within the liturgical year (2022-11-27 -> 2023-12-03)
    const ctxts = [make_liturgical_year_context(year - 1), make_liturgical_year_context(year)];
    pack_principal_years(ctxts);
    pack_festival_year(ctxts);
    pack_lesser_festival_year(ctxts);

    // linearise the placed dictionary into a list
    const ctxt = ctxts[1];
    return [ctxt, resolve_observances(index, ctxt)];
};
