import { Temporal } from "../../temporal.ts";

export const advent = (year: number): Temporal.PlainDate => {
    // for some nonsense reason JS months index from zero
    const christmas = new Temporal.PlainDate(year, 12, 25);
    const weekday = christmas.dayOfWeek;

    // the number of days we need to seek back for the Sunday prior to Christmas Day
    // (if Christmas Day is on a Sunday, this is 7)
    const sunday_offset = weekday ? weekday : 7;
    const advent_sunday = christmas.add({ days: -21 - sunday_offset });

    return advent_sunday;
};
