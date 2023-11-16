import { Temporal } from "./temporal.ts";

export const testDateFunc = (fn: (year: number) => Temporal.PlainDate, year: number, month: number, day: number) => {
    const res = fn(year);
    if (!res) {
        return false;
    }
    return res.year === year && res.month === month && res.day === day;
};
