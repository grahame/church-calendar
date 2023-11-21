import { Festival, LiturgicalYearContext } from "../../calendar.ts";
import { advent } from "../dates/advent/advent.ts";
import { easter } from "../dates/easter/easter.ts";
import { pentecost } from "../dates/pentecost/pentecost.ts";
import { lent } from "../dates/lent/lent.ts";

export const calendar = (year: number) => {
    const events: string[] = [];

    const context: LiturgicalYearContext = {
        advent: advent(year - 1),
        easter: easter(year),
        pentecost: pentecost(year),
        lent: lent(year),
        first_day: advent(year - 1),
        last_day: advent(year).add({ days: -1 }),
    };

    const calendar: { [key: string]: Festival } = {};

    // principal festivals go into our year first

    return events;
};
