import { in_calendar_year } from "../../calendar.ts";
import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";

export type QuickFixedAnglican = {
    name: string;
    wikipedia_article_titles?: string[];
    month: number;
    day: number;
};

const quick_anglican_lesser = (obs: QuickFixedAnglican): Festival => {
    return {
        slug: obs.name.toLowerCase().replace(/ /g, "-"),
        name: obs.name,
        wikipedia_article_titles: obs.wikipedia_article_titles,
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.LESSER_FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 1, 2)];
                },
            },
        ],
    };
};

const Festivals: Festival[] = [
    quick_anglican_lesser({
        name: "Basil of Caesarea and Gregory of Nazianzus",
        wikipedia_article_titles: ["Basil of Caesarea", "Gregory of Nazianzus"],
        month: 1,
        day: 2,
    }),
    quick_anglican_lesser({
        name: "Eliza Hassall",
        wikipedia_article_titles: ["Eliza_Marsden_Hassall"],
        month: 1,
        day: 2,
    }),
    quick_anglican_lesser({
        name: "William Laud",
        wikipedia_article_titles: ["William Laud"],
        month: 1,
        day: 10,
    }),
    quick_anglican_lesser({
        name: "Hilary of Poitiers",
        wikipedia_article_titles: ["Hilary_of_Poitiers"],
        month: 1,
        day: 13,
    }),
    quick_anglican_lesser({
        name: "Sava, Archbishop of the Serbs",
        wikipedia_article_titles: ["Saint_Sava"],
        month: 1,
        day: 14,
    }),
    quick_anglican_lesser({
        name: "Antony of Egypt, abbot",
        wikipedia_article_titles: ["Antony_of_Egypt"],
        month: 1,
        day: 17,
    }),
    quick_anglican_lesser({
        name: "Confession of Peter",
        wikipedia_article_titles: ["Confession_of_Peter"],
        month: 1,
        day: 18,
    }),
    quick_anglican_lesser({
        name: "Agnes, martyr",
        wikipedia_article_titles: ["Agnes_of_Rome"],
        month: 1,
        day: 21,
    }),
    quick_anglican_lesser({
        name: "Vincent, deacon and martyr",
        wikipedia_article_titles: ["Vincent_of_Saragossa"],
        month: 1,
        day: 22,
    }),
    quick_anglican_lesser({
        name: "Companions of Paul, including Timothy, Titus and Silas",
        month: 1,
        day: 22,
    }),
    quick_anglican_lesser({
        name: "Conversion of Paul the apostle",
        wikipedia_article_titles: ["Conversion_of_Paul_the_Apostle"],
        month: 1,
        day: 25,
    }),
    quick_anglican_lesser({
        name: "Australia Day",
        wikipedia_article_titles: ["Australia_Day"],
        month: 1,
        day: 26,
    }),
    quick_anglican_lesser({
        name: "John Chrysostom, bishop and teacher",
        wikipedia_article_titles: ["John_Chrysostom"],
        month: 1,
        day: 27,
    }),
    quick_anglican_lesser({
        name: "Thomas Aquinas, theologian",
        wikipedia_article_titles: ["Thomas_Aquinas"],
        month: 1,
        day: 28,
    }),
    quick_anglican_lesser({
        name: "Charles, King of England",
        wikipedia_article_titles: ["Charles_I_of_England"],
        month: 1,
        day: 30,
    }),
    quick_anglican_lesser({
        name: "First Anglican service at Sydney Cove, 1788",
        wikipedia_article_titles: ["Richard_Johnson_(chaplain)"],
        month: 2,
        day: 3,
    }),
    quick_anglican_lesser({
        name: "Anscar, missionary to Sweden",
        wikipedia_article_titles: ["Ansgar"],
        month: 2,
        day: 4,
    }),
    quick_anglican_lesser({
        name: "Martyrs of Japan",
        wikipedia_article_titles: ["Twenty-six_Martyrs_of_Japan"],
        month: 2,
        day: 5,
    }),
    quick_anglican_lesser({
        name: "Cyril and Methodius, missionaries to the Slavs",
        wikipedia_article_titles: ["Cyril_and_Methodius"],
        month: 2,
        day: 14,
    }),
    quick_anglican_lesser({
        name: "William Grant Broughton, first Bishop of Australia",
        wikipedia_article_titles: ["William_Broughton_(bishop)"],
        month: 2,
        day: 20,
    }),
    quick_anglican_lesser({
        name: "Polycarp, bishop and martyr",
        wikipedia_article_titles: ["Polycarp"],
        month: 2,
        day: 23,
    }),
    {
        slug: "matthias-apostle-and-martyr",
        name: "Matthias, apostle and martyr",
        wikipedia_article_titles: ["Polycarp"],
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.LESSER_FESTIVAL,
                dates: (_ctxt, year: number) => {
                    return [in_calendar_year(year, 2, 24), in_calendar_year(year, 5, 14)];
                },
            },
        ],
    },
    quick_anglican_lesser({
        name: "George Herbert, priest and poet",
        wikipedia_article_titles: ["George_Herbert"],
        month: 2,
        day: 27,
    }),
];

export default Festivals;
