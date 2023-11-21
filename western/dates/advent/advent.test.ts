import { advent } from "./advent.ts";
import { assertEquals } from "../../../testfuncs.ts";
import { testDateFunc } from "../../../testcommon.ts";

Deno.test("advent calculations correct", () => {
    assertEquals(testDateFunc(advent, 2020, 11, 29), true);
    assertEquals(testDateFunc(advent, 2021, 11, 28), true);
    assertEquals(testDateFunc(advent, 2022, 11, 27), true);
    assertEquals(testDateFunc(advent, 2023, 12, 3), true);
});
