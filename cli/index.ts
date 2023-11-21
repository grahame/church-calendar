import { calendar as aca_calendar } from "../western/calendars/anglican-church-of-australia.ts";

const main = () => {
    const year = Number.parseInt(Deno.args[0]) || new Date().getFullYear();
    const placed_events = aca_calendar(year);
    for (const [dt, obvs] of placed_events) {
        console.log([dt.toString(), obvs]);
    }
};

main();
