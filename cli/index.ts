import { calendar as aca_calendar } from "../western/calendars/anglican-church-of-australia.ts";

const main = () => {
    const year = Number.parseInt(Deno.args[0]) || new Date().getFullYear();
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
