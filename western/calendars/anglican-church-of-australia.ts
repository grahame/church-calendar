import { Denomination, LiturgicalYearContext, ObservationLevel, ResolvedCalendar } from "../../calendar.ts";
import { PackingIndex, pack_observances, resolve_observances } from "../../cli/packing.ts";
import { make_festival_index } from "../../festivalindex.ts";
import { make_liturgical_year_context } from "../dates/index.ts";
import Festivals from "../festivals/index.ts";

export const calendar = (year: number): ResolvedCalendar => {
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
                false
            );
        }
    };
    const pack_festival_year = (ctxts: LiturgicalYearContext[]) => {
        for (const ctxt of ctxts) {
            pack_observances(ctxt, index, festival_index[denom][ObservationLevel.FESTIVAL], true);
        }
    };
    const pack_lesser_festival_year = (ctxts: LiturgicalYearContext[]) => {
        for (const ctxt of ctxts) {
            pack_observances(ctxt, index, festival_index[denom][ObservationLevel.LESSER_FESTIVAL], true);
        }
    };

    const ctxts = [make_liturgical_year_context(year - 1), make_liturgical_year_context(year)];
    pack_principal_years(ctxts);
    pack_festival_year(ctxts);
    pack_lesser_festival_year(ctxts);

    // linearise the placed dictionary into a list
    return resolve_observances(index, ctxts[1]);
};
