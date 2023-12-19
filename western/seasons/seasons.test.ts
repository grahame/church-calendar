import { assert } from "../../libs.ts";
import { Temporal } from "../../temporal.ts";
import { aca_seasons } from "../calendars/anglican-church-of-australia.ts";
import { get_season_for_date } from "./index.ts";

Deno.test("correct season for date", () => {
    const seasons = aca_seasons(2024);

    const check_season = (y: number, m: number, d: number, season: string) => {
        const s = get_season_for_date(seasons, Temporal.PlainDate.from({ year: y, month: m, day: d }));
        assert(s);
        assert(s.name == season);
    };

    check_season(2023, 12, 3, "Advent");
    check_season(2023, 12, 19, "Advent");
    check_season(2024, 5, 20, "Season after Pentecost");
    check_season(2024, 11, 30, "Season after Pentecost");
});

Deno.test("no season for early/late date", () => {
    const seasons = aca_seasons(2024);

    const check_no_season = (y: number, m: number, d: number) => {
        const s = get_season_for_date(seasons, Temporal.PlainDate.from({ year: y, month: m, day: d }));
        assert(s === null);
    };

    check_no_season(2023, 12, 2);
    check_no_season(2024, 12, 1);
});
