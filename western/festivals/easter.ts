import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { n_sundays_after } from "../sunday.ts";

const Festivals: Festival[] = [
    {
        slug: "easter-day",
        name: "Easter Day",
        wikipedia_article_titles: ["Easter"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter];
                },
            },
        ],
    },
    {
        slug: "easter-monday",
        name: "Monday in Easter Week",
        wikipedia_article_titles: ["Easter Monday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 1 })];
                },
            },
        ],
    },
    {
        slug: "easter-tuesday",
        name: "Tuesday in Easter Week",
        wikipedia_article_titles: ["Easter Tuesday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 2 })];
                },
            },
        ],
    },
    {
        slug: "easter-wednesday",
        name: "Wednesday in Easter Week",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 3 })];
                },
            },
        ],
    },
    {
        slug: "easter-thursday",
        name: "Thursday in Easter Week",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 4 })];
                },
            },
        ],
    },
    {
        slug: "easter-friday",
        name: "Friday in Easter Week",
        wikipedia_article_titles: ["Easter Friday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 5 })];
                },
            },
        ],
    },
    {
        slug: "easter-saturday",
        name: "Saturday in Easter Week",
        wikipedia_article_titles: ["Easter Saturday"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 6 })];
                },
            },
        ],
    },
    {
        slug: "easter-2",
        name: "Second Sunday of Easter",
        wikipedia_article_titles: ["Second Sunday of Easter"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_after(ctxt.easter, 1)];
                },
            },
        ],
    },
    {
        slug: "easter-3",
        name: "Third Sunday of Easter",
        wikipedia_article_titles: ["Third Sunday of Easter"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_after(ctxt.easter, 2)];
                },
            },
        ],
    },
    {
        slug: "easter-4",
        name: "Fourth Sunday of Easter",
        wikipedia_article_titles: ["Fourth Sunday of Easter"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_after(ctxt.easter, 3)];
                },
            },
        ],
    },
    {
        slug: "easter-5",
        name: "Fifth Sunday of Easter",
        wikipedia_article_titles: ["Fifth Sunday of Easter"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_after(ctxt.easter, 4)];
                },
            },
        ],
    },
    {
        slug: "easter-6",
        name: "Sixth Sunday of Easter",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_after(ctxt.easter, 5)];
                },
            },
        ],
    },
    {
        slug: "ascension-day",
        name: "Ascension Day",
        wikipedia_article_titles: ["Feast of the Ascension"],
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [ctxt.easter.add({ days: 39 })];
                },
            },
        ],
    },
    {
        slug: "easter-7",
        name: "Seventh Sunday of Easter",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.NON_DISPLACABLE,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [n_sundays_after(ctxt.easter, 6)];
                },
            },
        ],
    },
];

export default Festivals;
