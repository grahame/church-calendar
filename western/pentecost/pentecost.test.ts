import { pentecost } from "./pentecost.ts";
import { assertEquals } from "std/assert/mod.ts";
import { testDateFunc } from "../../testcommon.ts";

Deno.test("pentecost calculations correct", () => {
    assertEquals(testDateFunc(pentecost, 2023, 5, 28), true);
    assertEquals(testDateFunc(pentecost, 2024, 5, 19), true);
});
