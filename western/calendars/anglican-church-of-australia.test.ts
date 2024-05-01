import { assert } from "../../libs.ts";
import { Temporal } from "../../temporal.ts";
import { calendar } from "./anglican-church-of-australia.ts";

// This test is mostly here to make sure we don't crash producing the calendar for any year.
Deno.test("Anglican Church of Australia calendar produces output", () => {
    for (let year = 1900; year < 2100; year++) {
        assert(calendar(year).observances.length > 0);
        assert(calendar(year).attributes.length > 0);
    }
});

Deno.test("Attribute generation", () => {
    const year = 2024;
    const attributes = calendar(year).attributes;
    const isEmber = (month: number, day: number) => {
        const date = new Temporal.PlainDate(year, month, day);
        return attributes.find(([attrdate, attrs]) => attrdate.equals(date) && attrs.includes("ember-day"));
    };
    assert(!isEmber(5, 19));
    assert(isEmber(5, 20));
    assert(isEmber(5, 21));
    assert(isEmber(5, 22));
    assert(isEmber(5, 23));
    assert(isEmber(5, 24));
    assert(isEmber(5, 25));
    assert(!isEmber(5, 26));

    assert(isEmber(11, 23));
    assert(!isEmber(11, 24)); // a Sunday inside the range of ember days
    assert(isEmber(11, 25));
    assert(isEmber(11, 26));
    assert(isEmber(11, 27));
    assert(isEmber(11, 28));
    assert(isEmber(11, 29));
    assert(!isEmber(11, 30));
});
