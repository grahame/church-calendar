import { assertEquals } from "../libs.ts";
import { Temporal } from "../temporal.ts";
import { getLiturgicalYear } from "./liturgicalyear.ts";

Deno.test("liturgical year before advent 2023", () => {
    assertEquals(2023, getLiturgicalYear(new Temporal.PlainDate(2023, 1, 1)));
});

Deno.test("liturgical year on advent 2023", () => {
    assertEquals(2024, getLiturgicalYear(new Temporal.PlainDate(2023, 12, 3)));
});

Deno.test("liturgical year after advent 2023", () => {
    assertEquals(2024, getLiturgicalYear(new Temporal.PlainDate(2023, 12, 25)));
});
