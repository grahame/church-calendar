import { Temporal } from "../temporal.ts";

export const n_sundays_after = (date: Temporal.PlainDate, sundays: number) => {
    // Monday = 1, Sunday = 7
    const offset = date.dayOfWeek === 7 ? 7 : 7 - date.dayOfWeek;
    return date.add({ days: offset + (sundays - 1) * 7 });
};

export const n_sundays_before = (date: Temporal.PlainDate, sundays: number) => {
    // Monday = 1, Sunday = 7
    const offset = date.dayOfWeek;
    return date.add({ days: -offset - (sundays - 1) * 7 });
};
