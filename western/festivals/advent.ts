import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { advent } from "../dates/advent/advent.ts";

const Festivals: Festival[] = [
    {
        slug: "advent-1",
        name: "First Sunday of Advent",
        wikipedia_article_titles: ["First Sunday of Advent"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [advent(ctxt.year - 1)];
                },
            },
        ],
    },
    {
        slug: "advent-2",
        name: "Second Sunday of Advent",
        wikipedia_article_titles: ["Second Sunday of Advent"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [advent(ctxt.year - 1).add({ days: 7 })];
                },
            },
        ],
    },
    {
        slug: "advent-3",
        name: "Third Sunday of Advent",
        wikipedia_article_titles: ["Third Sunday of Advent"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [advent(ctxt.year - 1).add({ days: 14 })];
                },
            },
        ],
    },
    {
        slug: "advent-4",
        name: "Fourth Sunday of Advent",
        wikipedia_article_titles: ["Fourth Sunday of Advent"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [advent(ctxt.year - 1).add({ days: 21 })];
                },
            },
        ],
    },
];

export default Festivals;
