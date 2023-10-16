import { easter } from "./easter.ts";
import { assertEquals } from "std/assert/mod.ts";
import { testDateFunc } from "../../testcommon.ts";

Deno.test("easter calculations correct", () => {
    assertEquals(testDateFunc(easter, 1583, 4, 10), true);
    assertEquals(testDateFunc(easter, 1583, 4, 10), true);
    assertEquals(testDateFunc(easter, 1981, 4, 19), true);
    assertEquals(testDateFunc(easter, 2013, 3, 31), true);
    assertEquals(testDateFunc(easter, 2016, 3, 27), true);
    assertEquals(testDateFunc(easter, 2022, 4, 17), true);
    assertEquals(testDateFunc(easter, 2023, 4, 9), true);
    // example from Knuth, will fail if we had simply used '%' instead of rem_euclid()
    assertEquals(testDateFunc(easter, 14250, 4, 14), true);
});
