import { Temporal } from "./temporal.ts";
import { assertEquals } from "./libs.ts";

export const testDateFunc = (fn: (year: number) => Temporal.PlainDate, year: number, month: number, day: number) => {
    const res = fn(year);
    if (!res) {
        return false;
    }
    assertEquals(res.year, year);
    assertEquals(res.month, month);
    assertEquals(res.day, day);
};
