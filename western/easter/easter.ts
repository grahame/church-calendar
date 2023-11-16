import { Temporal } from "../../temporal.ts";

const rem_euclid = (a: number, b: number): number => {
    const r = a % b;
    return r < 0 ? r + b : r;
};

export const easter = (year: number): Temporal.PlainDate => {
    const f = Math.floor;
    const golden_number = rem_euclid(year, 19) + 1;
    const century = f(year / 100) + 1;
    const dropped_leap_years = f((3 * century) / 4) - 12;
    const moon_correction = f((8 * century + 5) / 25) - 5;
    const sunday = f((5 * year) / 4) - dropped_leap_years - 10;
    let epact = rem_euclid(11 * golden_number + 20 + moon_correction - dropped_leap_years, 30);
    if ((epact === 25 && golden_number > 11) || epact === 24) {
        epact += 1;
    }
    let calendar_moon = 44 - epact;
    if (calendar_moon < 21) {
        calendar_moon += 30;
    }
    const advance_sunday = calendar_moon + 7 - rem_euclid(sunday + calendar_moon, 7);
    if (advance_sunday > 31) {
        // our answer is in April
        return new Temporal.PlainDate(year, 4, advance_sunday - 31);
    } else {
        return new Temporal.PlainDate(year, 3, advance_sunday);
    }
};
