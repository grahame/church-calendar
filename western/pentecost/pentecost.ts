import { Temporal } from "../../temporal.ts";
import { easter } from "../easter/easter.ts";

export const pentecost = (year: number) => {
    const esunday = easter(year);
    const basis = new Temporal.PlainDate(esunday["year"], esunday["month"], esunday["day"]);
    return basis.add({ days: 49 });
};
