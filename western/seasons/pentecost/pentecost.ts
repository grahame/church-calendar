import { Temporal } from "../../../temporal.ts";
import { easter } from "../easter/easter.ts";

export const pentecost = (year: number) => {
    const esunday = easter(year);
    const basis = Temporal.PlainDate.from(esunday);
    return basis.add({ days: 49 });
};
