import { advent } from "./advent.ts";
import { assertEquals } from "../../../testfuncs.ts";
import { testDateFunc } from "../../../testcommon.ts";

Deno.test("advent calculations correct", () => {
    testDateFunc(advent, 2020, 11, 29);
    testDateFunc(advent, 2021, 11, 28);
    testDateFunc(advent, 2022, 11, 27);
    testDateFunc(advent, 2023, 12, 3);
});
