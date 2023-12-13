import { Temporal } from "npm:@js-temporal/polyfill@0.4.4";
import { calendar as aca_calendar } from "../western/calendars/anglican-church-of-australia.ts";
import { getLiturgicalYear } from "../western/liturgicalyear.ts";

const main = () => {
    // hard-coded timezone is to work around Chromium/node bug on macOS 14
    const year = Number.parseInt(Deno.args[0]) || getLiturgicalYear(Temporal.Now.plainDateISO("Australia/Perth"));
    const [ctxt, placed_events] = aca_calendar(year);
    console.log(
        `Calendar for liturgical year beginning ${ctxt.first_day.toString()}, ending ${ctxt.last_day.toString()}:`
    );
    for (const [dt, obvs] of placed_events) {
        const slugs = obvs.map((o) => o.slug).join(", ");
        console.log(`${dt.toString()}: ${slugs}`);
    }
};

main();
