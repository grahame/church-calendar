import { assertEquals } from "../../testfuncs.ts";
import { testDateFunc } from "../../testcommon.ts";
import { ashWednesday } from "./lent.ts";

Deno.test("lent algorithm correct", () => {
    assertEquals(testDateFunc(ashWednesday, 1900, 2, 28), true);
    assertEquals(testDateFunc(ashWednesday, 2022, 3, 2), true);
    assertEquals(testDateFunc(ashWednesday, 2023, 2, 22), true);
    assertEquals(testDateFunc(ashWednesday, 2024, 2, 14), true);
});
