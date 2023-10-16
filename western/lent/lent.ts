import { Temporal } from "npm:@js-temporal/polyfill@0.4.4";
import { easter } from "../easter/easter.ts";

export const ashWednesday = (year: number) => {
	const esunday = easter(year);
	const basis = new Temporal.PlainDate(
		esunday["year"],
		esunday["month"],
		esunday["day"],
	);
	return basis.add({ days: -46 });
};
