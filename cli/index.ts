import { Temporal } from "npm:@js-temporal/polyfill@0.4.4";
import { calendar as aca_calendar, aca_seasons } from "../western/calendars/anglican-church-of-australia.ts";
import { getLiturgicalYear } from "../western/liturgicalyear.ts";

const main = () => {
    // hard-coded timezone is to work around Chromium/node bug on macOS 14
    const year = Number.parseInt(Deno.args[0]) || getLiturgicalYear(Temporal.Now.plainDateISO("Australia/Perth"));
    const [ctxt, placed_events] = aca_calendar(year);
    console.log(
        `Calendar for liturgical year beginning ${ctxt.first_day.toString()}, ending ${ctxt.last_day.toString()}:`
    );
    console.log("\nLiturgical seasons:");
    const seasons = aca_seasons(year);
    for (const season of seasons) {
        console.log(`  ${season.name}: ${season.start_date.toString()} to ${season.end_date.toString()}`);
    }
    console.log("\nObservations:");
    for (const [dt, obvs] of placed_events) {
        const slugs = obvs.map((o) => o.slug).join(", ");
        console.log(`  ${dt.toString()}: ${slugs}`);
    }
};

main();
