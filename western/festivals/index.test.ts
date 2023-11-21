import { assertEquals } from "../../testfuncs.ts";
import Festivals from "./index.ts";

Deno.test("Festivals", () => {
    const slug_set = new Set<string>();
    const errors = [];

    for (const idx in Festivals) {
        const festival = Festivals[idx];
        if (slug_set.has(festival.slug)) {
            errors.push(`Duplicate slug ${festival.slug} in ${idx}`);
        }
        slug_set.add(festival.slug);
    }

    assertEquals(errors, []);
});
