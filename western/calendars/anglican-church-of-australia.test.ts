import { assert } from "../../libs.ts";
import { calendar } from "./anglican-church-of-australia.ts";

// This test is mostly here to make sure we don't crash producing the calendar for any year.
Deno.test("Anglican Church of Australia calendar produces output", () => {
    for (let year = 1900; year < 2100; year++) {
        assert(calendar(year).observances.length > 0);
        assert(calendar(year).attributes.length > 0);
    }
});
