import { RealFileSystemHost } from "https://deno.land/x/ts_morph@18.0.0/common/ts_morph_common.js";
import { Festival, LiturgicalYearContext } from "../../calendar.ts";
import { advent } from "../dates/advent/advent.ts";
import { easter } from "../dates/easter/easter.ts";
import { pentecost } from "../dates/pentecost/pentecost.ts";
import Festivals from "../festivals/index.ts";

export const calendar = (year: number) => {
    const events: string[] = [];

    const context: LiturgicalYearContext = {
        year: year,
        advent: advent(year - 1),
        easter: easter(year),
        pentecost: pentecost(year),
        first_day: advent(year - 1),
        last_day: advent(year).add({ days: -1 }),
    };

    const calendar: { [key: string]: Festival } = {};

    // principal festivals go into our year first
    for (const idx in Festivals) {
        const festival = Festivals[idx];
        console.log([idx, festival]);
    }

    // we also fence off all the weekdays in Holy Week and Easter Week (APBA 452)
    // as they can't be

    return events;
};
