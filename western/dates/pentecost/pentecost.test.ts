import { pentecost } from "./pentecost.ts";
import { testDateFunc } from "../../../testcommon.ts";

Deno.test("pentecost calculations correct", () => {
    testDateFunc(pentecost, 2023, 5, 28);
    testDateFunc(pentecost, 2024, 5, 19);
});
