import { Denomination, ObservationLevel, ResolvedCalendar, make_festival_index } from "../../calendar.ts";
import { PackingIndex, pack_observances, resolve_observances } from "../../cli/packing.ts";
import { make_liturgical_year_context } from "../dates/index.ts";
import Festivals from "../festivals/index.ts";

export const calendar = (year: number): ResolvedCalendar => {
    const ctxt = make_liturgical_year_context(year);
    const index: PackingIndex = {};
    const denom = Denomination.ANG_AU;

    const festival_index = make_festival_index(Festivals);

    // principal festivals go into our year first
    pack_observances(
        ctxt,
        index,
        [
            ...festival_index[denom][ObservationLevel.PRINCIPAL],
            ...festival_index[denom][ObservationLevel.NON_DISPLACABLE],
        ],
        false
    );

    // festivals go in next
    pack_observances(ctxt, index, festival_index[denom][ObservationLevel.FESTIVAL], true);

    // we also fence off all the weekdays in Holy Week and Easter Week (APBA 452)
    // as they can't be

    // linearise the placed dictionary into a list
    return resolve_observances(ctxt, index);
};
