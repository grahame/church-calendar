import { easter } from "./easter.ts";
import { assertEquals } from "../../../testfuncs.ts";
import { testDateFunc } from "../../../testcommon.ts";

Deno.test("easter calculations correct", () => {
    testDateFunc(easter, 1583, 4, 10);
    testDateFunc(easter, 1583, 4, 10);
    testDateFunc(easter, 1981, 4, 19);
    testDateFunc(easter, 2013, 3, 31);
    testDateFunc(easter, 2016, 3, 27);
    testDateFunc(easter, 2022, 4, 17);
    testDateFunc(easter, 2023, 4, 9);
    // example from Knuth, will fail if we had simply used '%' instead of rem_euclid()
    testDateFunc(easter, 14250, 4, 14);
});
