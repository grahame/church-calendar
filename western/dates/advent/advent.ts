import { Temporal } from "../../../temporal.ts";
import { n_sundays_before } from "../../sunday.ts";

export const advent = (year: number): Temporal.PlainDate => {
    // for some nonsense reason JS months index from zero
    const christmas = new Temporal.PlainDate(year, 12, 25);
    // there are always four Sundays in Advent
    return n_sundays_before(christmas, 4);
};
