import { assert } from "../libs.ts";
import { Temporal } from "../temporal.ts";
import { n_sundays_after, n_sundays_before } from "./sunday.ts";

const d = (y: number, m: number, d: number) => new Temporal.PlainDate(y, m, d);

Deno.test("Next Sunday (on a Saturday)", () => {
    assert(n_sundays_after(d(2023, 11, 18), 1).equals(d(2023, 11, 19)));
});

Deno.test("Next Sunday (on a Monday)", () => {
    assert(n_sundays_after(d(2023, 11, 20), 1).equals(d(2023, 11, 26)));
});

Deno.test("Next Sunday (on a Sunday)", () => {
    assert(n_sundays_after(d(2023, 11, 19), 1).equals(d(2023, 11, 26)));
});

Deno.test("Previous Sunday (on a Monday)", () => {
    assert(n_sundays_before(d(2023, 12, 25), 1).equals(d(2023, 12, 24)));
});

Deno.test("Previous Sunday (on a Sunday)", () => {
    assert(n_sundays_before(d(2023, 12, 24), 1).equals(d(2023, 12, 17)));
});

Deno.test("Previous Sunday (on a Saturday)", () => {
    assert(n_sundays_before(d(2023, 12, 23), 1).equals(d(2023, 12, 17)));
});
