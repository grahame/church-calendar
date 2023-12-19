import { Temporal } from "../temporal.ts";
import { make_liturgical_year_context } from "./seasons/index.ts";

export const getLiturgicalYear = (dt: Temporal.PlainDate): number => {
    // find the liturgical year containing `dt`
    const ctxt = make_liturgical_year_context(dt.year);
    if (Temporal.PlainDate.compare(dt, ctxt.last_day) == 1) {
        return ctxt.year + 1;
    }
    return ctxt.year;
};
