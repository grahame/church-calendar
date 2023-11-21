import { Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { advent } from "../dates/advent/advent.ts";
import { easter } from "../dates/easter/easter.ts";
import { pentecost } from "../dates/pentecost/pentecost.ts";
import Festivals from "../festivals/index.ts";

const make_festival_index = (festivals: Festival[]) => {
    // index by denomination, then by level, then by order of appearance in the list
    const index: { [key: string]: { [key: string]: Festival[] } } = {};
    for (const festival of festivals) {
        for (const observation of festival.observations) {
            for (const denomination in observation.denominations) {
                if (!index[denomination]) {
                    index[denomination] = {};
                }
            }
            for (const observation of festival.observations[denomination]) {
                if (!index[denomination][observation.level]) {
                    index[denomination][observation.level] = [];
                }
                index[denomination][observation.level].push(festival);
            }
        }
    }
    return index;
};

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
