import { LiturgicalYearContext } from "../../calendar.ts";
import { advent } from "../dates/advent/advent.ts";
import { easter } from "../dates/easter/easter.ts";
import { pentecost } from "../dates/pentecost/pentecost.ts";

export const make_liturgical_year_context = (year: number): LiturgicalYearContext => {
    return {
        year: year,
        advent: advent(year - 1),
        easter: easter(year),
        pentecost: pentecost(year),
        first_day: advent(year - 1),
        last_day: advent(year).add({ days: -1 }),
    };
};
