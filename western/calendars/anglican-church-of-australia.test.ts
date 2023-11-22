import { assert } from "../../libs.ts";
import { calendar } from "./anglican-church-of-australia.ts";

Deno.test("Anglican Church of Australia calendar produces output", () => {
    for (let year = 1900; year < 2100; year++) {
        assert(calendar(year).length > 0);
    }
});
