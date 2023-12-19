import { LiturgicalSeason, LiturgicalYearContext } from "../../calendar.ts";
import { Temporal } from "../../temporal.ts";
import { advent } from "./advent/advent.ts";
import { easter } from "./easter/easter.ts";
import { pentecost } from "./pentecost/pentecost.ts";

export const get_season_for_date = (seasons: LiturgicalSeason[], date: Temporal.PlainDate) => {
    for (const season of seasons) {
        if (
            Temporal.PlainDate.compare(season.start_date, date) <= 0 &&
            Temporal.PlainDate.compare(season.end_date, date) >= 0
        ) {
            return season;
        }
    }
    return null;
};

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
