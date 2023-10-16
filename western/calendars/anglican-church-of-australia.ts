import { advent } from "../advent/advent.ts";

export const calendar = (year: number) => {
    const events: string[] = [];

    // we start on the prior year's First Sunday of Advent
    // ... and we end on the day prior to the next year's First Sunday of Advent
    const start = advent(year - 1);
    const end = advent(year).add({ days: -1 });

    console.log(start.toString());
    console.log(end.toString());

    return events;
};
