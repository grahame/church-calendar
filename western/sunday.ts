import { Temporal } from "../temporal.ts";

export const n_sundays_after = (date: Temporal.PlainDate, sundays: number) => {
    const weekday = date.dayOfWeek;
    const sunday_offset = weekday ? weekday : 7;
    return date.add({ days: 7 - sunday_offset + (sundays - 1) * 7 });
};

export const n_sundays_before = (date: Temporal.PlainDate, sundays: number) => {
    const weekday = date.dayOfWeek;
    const sunday_offset = weekday ? weekday : 7;
    return date.add({ days: -sunday_offset - (sundays - 1) * 7 });
};
