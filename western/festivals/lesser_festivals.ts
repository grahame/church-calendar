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
    quick_anglican_lesser({
        name: "David, bishop of Wales and martyr",
        wikipedia_article_titles: ["David_of_Wales"],
        month: 3,
        day: 1,
    }),
    quick_anglican_lesser({
        name: "Chad, bishop of Lichfield and missionary",
        wikipedia_article_titles: ["Chad_of_Mercia"],
        month: 3,
        day: 2,
    }),
    quick_anglican_lesser({
        name: "Perpetua and her companions, martyrs",
        wikipedia_article_titles: ["Perpetua_and_Felicity"],
        month: 3,
        day: 7,
    }),
    quick_anglican_lesser({
        name: "John of God, worker among the sick and poor",
        wikipedia_article_titles: ["John_of_God"],
        month: 3,
        day: 8,
    }),
    quick_anglican_lesser({
        name: "Sister Emma SSA, superior of the Society of the Sacred Advent",
        wikipedia_article_titles: ["Emma_Crawford"],
        month: 3,
        day: 9,
    }),
    quick_anglican_lesser({
        name: "Patrick, bishop and missionary",
        wikipedia_article_titles: ["Saint_Patrick"],
        month: 3,
        day: 17,
    }),
    quick_anglican_lesser({
        name: "Cyril of Jerusalem, bishop and teacher",
        wikipedia_article_titles: ["Cyril_of_Jerusalem"],
        month: 3,
        day: 18,
    }),
    quick_anglican_lesser({
        name: "Cuthbert, bishop and missionary",
        wikipedia_article_titles: ["Cuthbert_of_Lindisfarne"],
        month: 3,
        day: 20,
    }),
    quick_anglican_lesser({
        name: "Thomas Cranmer, archbishop of Canterbury, martyr and liturgist",
        wikipedia_article_titles: ["Thomas_Cranmer"],
        month: 3,
        day: 21,
    }),
    quick_anglican_lesser({
        name: "Thomas Ken, bishop of Bath and Wells, teacher",
        wikipedia_article_titles: ["Thomas_Ken"],
        month: 3,
        day: 21,
    }),
    quick_anglican_lesser({
        name: "Oscar Romero, archbishop of San Salvador",
        wikipedia_article_titles: ["Óscar_Romero"],
        month: 3,
        day: 24,
    }),
    quick_anglican_lesser({
        name: "Paul Couturier, ecumenist",
        wikipedia_article_titles: ["Paul_Couturier"],
        month: 3,
        day: 24,
    }),
    quick_anglican_lesser({
        name: "John Keble, priest",
        wikipedia_article_titles: ["John_Keble"],
        month: 3,
        day: 29,
    }),
    quick_anglican_lesser({
        name: "Richard of Chichester, bishop",
        wikipedia_article_titles: ["Richard_of_Chichester"],
        month: 4,
        day: 3,
    }),
    quick_anglican_lesser({
        name: "Frederic Barker, bishop of Sydney and pioneer of theological education and the General Synod",
        wikipedia_article_titles: ["Frederic_Barker"],
        month: 4,
        day: 4,
    }),
    quick_anglican_lesser({
        name: "Georgiana Molloy, pioneer church leader and botanist from Western Australia",
        wikipedia_article_titles: ["Georgiana_Molloy"],
        month: 4,
        day: 8,
    }),
    quick_anglican_lesser({
        name: "William Law, priest and teacher",
        wikipedia_article_titles: ["William_Law"],
        month: 4,
        day: 9,
    }),
    quick_anglican_lesser({
        name: "Dietrich Bonhoeffer, pastor and martyr",
        wikipedia_article_titles: ["Dietrich_Bonhoeffer"],
        month: 4,
        day: 9,
    }),
    quick_anglican_lesser({
        name: "George Augustus Selwyn, first missionary bishop of New Zealand",
        wikipedia_article_titles: ["George_Selwyn_(bishop_of_Lichfield)"],
        month: 4,
        day: 11,
    }),
    quick_anglican_lesser({
        name: "Anselm, archbishop of Canterbury, teacher",
        wikipedia_article_titles: ["Anselm_of_Canterbury"],
        month: 4,
        day: 21,
    }),
    quick_anglican_lesser({
        name: "George, martyr",
        wikipedia_article_titles: ["Saint_George"],
        month: 4,
        day: 23,
    }),
    quick_anglican_lesser({
        name: "ANZAC Day",
        wikipedia_article_titles: ["Anzac_Day"],
        month: 4,
        day: 25,
    }),
    quick_anglican_lesser({
        name: "Catherine of Siena, spiritual teacher",
        wikipedia_article_titles: ["Catherine_of_Siena"],
        month: 4,
        day: 29,
    }),
    quick_anglican_lesser({
        name: "Athanasius, bishop of Alexandria, teacher",
        wikipedia_article_titles: ["Athanasius_of_Alexandria"],
        month: 5,
        day: 2,
    }),
    quick_anglican_lesser({
        name: "Julian of Norwich, holy woman and mystic",
        wikipedia_article_titles: ["Julian_of_Norwich"],
        month: 5,
        day: 8,
    }),
    quick_anglican_lesser({
        name: "Dunstan, archbishop of Canterbury",
        wikipedia_article_titles: ["Dunstan"],
        month: 5,
        day: 19,
    }),
    quick_anglican_lesser({
        name: "John and Charles Wesley, evangelists",
        wikipedia_article_titles: ["John_Wesley", "Charles_Wesley"],
        month: 5,
        day: 24,
    }),
    quick_anglican_lesser({
        name: "Bede of Jarrow, monk, priest and teacher",
        wikipedia_article_titles: ["Bede"],
        month: 5,
        day: 25,
    }),
    quick_anglican_lesser({
        name: "Augustine of Canterbury, missionary and bishop",
        wikipedia_article_titles: ["Augustine_of_Canterbury"],
        month: 5,
        day: 26,
    }),
    // NB: week of prayer for reconcilliation has been skipped
    quick_anglican_lesser({
        name: "The Visit of the Blessed Virgin Mary to Elizabeth",
        wikipedia_article_titles: ["Visitation_(Christianity)"],
        month: 5,
        day: 31,
    }),
    quick_anglican_lesser({
        name: "Justin, martyr at Rome",
        wikipedia_article_titles: ["Justin_Martyr"],
        month: 6,
        day: 1,
    }),
    quick_anglican_lesser({
        name: "Martyrs of Uganda",
        wikipedia_article_titles: ["Martyrs_of_Uganda"],
        month: 6,
        day: 3,
    }),
    quick_anglican_lesser({
        name: "Janani Luwum, archbishop of Uganda, martyr",
        wikipedia_article_titles: ["Janani_Luwum"],
        month: 6,
        day: 3,
    }),
    quick_anglican_lesser({
        name: "John XXIII, bishop of Rome, reformer",
        wikipedia_article_titles: ["Pope_John_XXIII"],
        month: 6,
        day: 3,
    }),
];

export default Festivals;