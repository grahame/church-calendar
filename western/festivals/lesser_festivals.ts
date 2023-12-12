import { FestivalAttributes, in_calendar_year } from "../../calendar.ts";
import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { n_sundays_after, n_sundays_before } from "../sunday.ts";

export type QuickFixedAnglican = {
    name: string;
    wikipedia_article_titles?: string[];
    month: number;
    day: number;
    attributes: FestivalAttributes[];
};

const quick_anglican_lesser = (obs: QuickFixedAnglican): Festival => {
    return {
        slug: obs.name.toLowerCase().replace(/ /g, "-").replace(",", ""),
        name: obs.name,
        wikipedia_article_titles: obs.wikipedia_article_titles,
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: obs.attributes,
                level: ObservationLevel.LESSER_FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, obs.month, obs.day)];
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
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Eliza Hassall",
        wikipedia_article_titles: ["Eliza_Marsden_Hassall"],
        month: 1,
        day: 2,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "William Laud",
        wikipedia_article_titles: ["William Laud"],
        month: 1,
        day: 10,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Hilary of Poitiers",
        wikipedia_article_titles: ["Hilary_of_Poitiers"],
        month: 1,
        day: 13,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Sava, Archbishop of the Serbs",
        wikipedia_article_titles: ["Saint_Sava"],
        month: 1,
        day: 14,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Antony of Egypt, abbot",
        wikipedia_article_titles: ["Antony_of_Egypt"],
        month: 1,
        day: 17,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Confession of Peter",
        wikipedia_article_titles: ["Confession_of_Peter"],
        month: 1,
        day: 18,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Agnes, martyr",
        wikipedia_article_titles: ["Agnes_of_Rome"],
        month: 1,
        day: 21,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Vincent, deacon and martyr",
        wikipedia_article_titles: ["Vincent_of_Saragossa"],
        month: 1,
        day: 22,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Companions of Paul, including Timothy, Titus and Silas",
        month: 1,
        day: 22,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Conversion of Paul the apostle",
        wikipedia_article_titles: ["Conversion_of_Paul_the_Apostle"],
        month: 1,
        day: 25,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Australia Day",
        wikipedia_article_titles: ["Australia_Day"],
        month: 1,
        day: 26,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John Chrysostom, bishop and teacher",
        wikipedia_article_titles: ["John_Chrysostom"],
        month: 1,
        day: 27,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Thomas Aquinas, theologian",
        wikipedia_article_titles: ["Thomas_Aquinas"],
        month: 1,
        day: 28,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Charles, King of England",
        wikipedia_article_titles: ["Charles_I_of_England"],
        month: 1,
        day: 30,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "First Anglican service at Sydney Cove, 1788",
        wikipedia_article_titles: ["Richard_Johnson_(chaplain)"],
        month: 2,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Anscar, missionary to Sweden",
        wikipedia_article_titles: ["Ansgar"],
        month: 2,
        day: 4,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Martyrs of Japan",
        wikipedia_article_titles: ["Twenty-six_Martyrs_of_Japan"],
        month: 2,
        day: 5,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Cyril and Methodius, missionaries to the Slavs",
        wikipedia_article_titles: ["Cyril_and_Methodius"],
        month: 2,
        day: 14,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "William Grant Broughton, first Bishop of Australia",
        wikipedia_article_titles: ["William_Broughton_(bishop)"],
        month: 2,
        day: 20,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Polycarp, bishop and martyr",
        wikipedia_article_titles: ["Polycarp"],
        month: 2,
        day: 23,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    {
        slug: "matthias-apostle-and-martyr",
        name: "Matthias, apostle and martyr",
        wikipedia_article_titles: ["Polycarp"],
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [FestivalAttributes.COLOUR_RED],
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
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "David, bishop of Wales and martyr",
        wikipedia_article_titles: ["David_of_Wales"],
        month: 3,
        day: 1,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Chad, bishop of Lichfield and missionary",
        wikipedia_article_titles: ["Chad_of_Mercia"],
        month: 3,
        day: 2,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Perpetua and her companions, martyrs",
        wikipedia_article_titles: ["Perpetua_and_Felicity"],
        month: 3,
        day: 7,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "John of God, worker among the sick and poor",
        wikipedia_article_titles: ["John_of_God"],
        month: 3,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Sister Emma SSA, superior of the Society of the Sacred Advent",
        wikipedia_article_titles: ["Emma_Crawford"],
        month: 3,
        day: 9,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Patrick, bishop and missionary",
        wikipedia_article_titles: ["Saint_Patrick"],
        month: 3,
        day: 17,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Cyril of Jerusalem, bishop and teacher",
        wikipedia_article_titles: ["Cyril_of_Jerusalem"],
        month: 3,
        day: 18,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Cuthbert, bishop and missionary",
        wikipedia_article_titles: ["Cuthbert_of_Lindisfarne"],
        month: 3,
        day: 20,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Thomas Cranmer, archbishop of Canterbury, martyr and liturgist",
        wikipedia_article_titles: ["Thomas_Cranmer"],
        month: 3,
        day: 21,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Thomas Ken, bishop of Bath and Wells, teacher",
        wikipedia_article_titles: ["Thomas_Ken"],
        month: 3,
        day: 21,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Oscar Romero, archbishop of San Salvador",
        wikipedia_article_titles: ["Óscar_Romero"],
        month: 3,
        day: 24,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Paul Couturier, ecumenist",
        wikipedia_article_titles: ["Paul_Couturier"],
        month: 3,
        day: 24,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John Keble, priest",
        wikipedia_article_titles: ["John_Keble"],
        month: 3,
        day: 29,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Richard of Chichester, bishop",
        wikipedia_article_titles: ["Richard_of_Chichester"],
        month: 4,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Frederic Barker, bishop of Sydney and pioneer of theological education and the General Synod",
        wikipedia_article_titles: ["Frederic_Barker"],
        month: 4,
        day: 4,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Georgiana Molloy, pioneer church leader and botanist from Western Australia",
        wikipedia_article_titles: ["Georgiana_Molloy"],
        month: 4,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "William Law, priest and teacher",
        wikipedia_article_titles: ["William_Law"],
        month: 4,
        day: 9,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Dietrich Bonhoeffer, pastor and martyr",
        wikipedia_article_titles: ["Dietrich_Bonhoeffer"],
        month: 4,
        day: 9,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "George Augustus Selwyn, first missionary bishop of New Zealand",
        wikipedia_article_titles: ["George_Selwyn_(bishop_of_Lichfield)"],
        month: 4,
        day: 11,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Anselm, archbishop of Canterbury, teacher",
        wikipedia_article_titles: ["Anselm_of_Canterbury"],
        month: 4,
        day: 21,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "George, martyr",
        wikipedia_article_titles: ["Saint_George"],
        month: 4,
        day: 23,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "ANZAC Day",
        wikipedia_article_titles: ["Anzac_Day"],
        month: 4,
        day: 25,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Catherine of Siena, spiritual teacher",
        wikipedia_article_titles: ["Catherine_of_Siena"],
        month: 4,
        day: 29,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Athanasius, bishop of Alexandria, teacher",
        wikipedia_article_titles: ["Athanasius_of_Alexandria"],
        month: 5,
        day: 2,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Julian of Norwich, holy woman and mystic",
        wikipedia_article_titles: ["Julian_of_Norwich"],
        month: 5,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Dunstan, archbishop of Canterbury",
        wikipedia_article_titles: ["Dunstan"],
        month: 5,
        day: 19,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John and Charles Wesley, evangelists",
        wikipedia_article_titles: ["John_Wesley", "Charles_Wesley"],
        month: 5,
        day: 24,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Bede of Jarrow, monk, priest and teacher",
        wikipedia_article_titles: ["Bede"],
        month: 5,
        day: 25,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Augustine of Canterbury, missionary and bishop",
        wikipedia_article_titles: ["Augustine_of_Canterbury"],
        month: 5,
        day: 26,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    // NB: week of prayer for reconcilliation has been skipped
    quick_anglican_lesser({
        name: "The Visit of the Blessed Virgin Mary to Elizabeth",
        wikipedia_article_titles: ["Visitation_(Christianity)"],
        month: 5,
        day: 31,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Justin, martyr at Rome",
        wikipedia_article_titles: ["Justin_Martyr"],
        month: 6,
        day: 1,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Martyrs of Uganda",
        wikipedia_article_titles: ["Martyrs_of_Uganda"],
        month: 6,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Janani Luwum, archbishop of Uganda, martyr",
        wikipedia_article_titles: ["Janani_Luwum"],
        month: 6,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "John XXIII, bishop of Rome, reformer",
        wikipedia_article_titles: ["Pope_John_XXIII"],
        month: 6,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Boniface of Mainz, bishop and martyr",
        wikipedia_article_titles: ["Saint_Boniface"],
        month: 6,
        day: 5,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Columba of Iona, abbot and missionary",
        wikipedia_article_titles: ["Columba"],
        month: 6,
        day: 9,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Antony of Padua, missionary and preacher",
        wikipedia_article_titles: ["Anthony_of_Padua"],
        month: 6,
        day: 13,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Evelyn Underhill, spiritual writer",
        wikipedia_article_titles: ["Evelyn_Underhill"],
        month: 6,
        day: 15,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Alban, first British martyr",
        wikipedia_article_titles: ["Saint_Alban"],
        month: 6,
        day: 22,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Cyril of Alexandria, bishop and teacher",
        wikipedia_article_titles: ["Cyril_of_Alexandria"],
        month: 6,
        day: 27,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Irenaeus of Lyons, bishop and teacher",
        wikipedia_article_titles: ["Irenaeus"],
        month: 6,
        day: 28,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Coming of the Light, first missionaries to the Torres Strait",
        month: 7,
        day: 1,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John Fisher, bishop, and Thomas More, martyrs",
        wikipedia_article_titles: ["John_Fisher", "Thomas_More"],
        month: 7,
        day: 6,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Benedict of Nursia, abbot",
        wikipedia_article_titles: ["Benedict_of_Nursia"],
        month: 7,
        day: 11,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Sydney James Kirkby, pioneer of outback ministry and Bush Church Aid Society",
        wikipedia_article_titles: ["Sydney_Kirkby"],
        month: 7,
        day: 11,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Anne, mother of the Blessed Virgin Mary",
        wikipedia_article_titles: ["Saint_Anne"],
        month: 7,
        day: 26,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Mary and Marta of Bethany",
        wikipedia_article_titles: ["Mary_of_Bethany", "Martha"],
        month: 7,
        day: 29,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "William Wilberforce, social reformer",
        wikipedia_article_titles: ["William_Wilberforce"],
        month: 7,
        day: 30,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Joseph of Arimathea",
        wikipedia_article_titles: ["Joseph_of_Arimathea"],
        month: 7,
        day: 31,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Ignatius of Loyola, priest and founder of the Society of Jesus",
        wikipedia_article_titles: ["Ignatius_of_Loyola"],
        month: 7,
        day: 31,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Holy men and women of the Old Testament",
        month: 8,
        day: 1,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Jean-Baptiste Vianney, priest",
        wikipedia_article_titles: ["John_Vianney"],
        month: 8,
        day: 4,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Oswald, king and martyr",
        wikipedia_article_titles: ["Oswald_of_Northumbria"],
        month: 8,
        day: 5,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Dominic, priest and friar",
        wikipedia_article_titles: ["Saint_Dominic"],
        month: 8,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Mary Sumner, founder of the Mothers' Union",
        wikipedia_article_titles: ["Mary_Sumner"],
        month: 8,
        day: 9,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Laurence, deacon and martyr at Rome",
        wikipedia_article_titles: ["Laurence_of_Rome"],
        month: 8,
        day: 10,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Clare of Assisi",
        wikipedia_article_titles: ["Clare_of_Assisi"],
        month: 8,
        day: 11,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John Henry Newman, cardinal and theologian",
        wikipedia_article_titles: ["John_Henry_Newman"],
        month: 8,
        day: 11,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Jeremy Taylor, bishop and spiritual writer",
        wikipedia_article_titles: ["Jeremy_Taylor"],
        month: 8,
        day: 13,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Twentieth century martyrs, including Maximilian Kolbe, Maria Skobtsova, Martin Luther King, jr, worker for civil liberties",
        wikipedia_article_titles: ["Maximilian_Kolbe", "Maria_Skobtsova", "Martin_Luther_King_Jr."],
        month: 8,
        day: 14,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Bernard of Clairvaux, abbot and teacher",
        wikipedia_article_titles: ["Bernard_of_Clairvaux"],
        month: 8,
        day: 20,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Monica, mother of Augustine",
        wikipedia_article_titles: ["Monica_of_Hippo"],
        month: 8,
        day: 27,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Augustine, bishop and teacher",
        wikipedia_article_titles: ["Augustine_of_Hippo"],
        month: 8,
        day: 28,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Beheading of John the Baptist",
        wikipedia_article_titles: ["John_the_Baptist"],
        month: 8,
        day: 29,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "John Bunyan, preacher and spiritual writer",
        wikipedia_article_titles: ["John_Bunyan"],
        month: 8,
        day: 31,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Aidan of Lindisfarne, bishop and missionary",
        wikipedia_article_titles: ["Aidan_of_Lindisfarne"],
        month: 8,
        day: 31,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Martyrs of New Guinea",
        wikipedia_article_titles: ["Martyrs_of_New_Guinea#The_New_Guinea_Martyrs"],
        month: 9,
        day: 2,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Gregory of Rome, bishop and teacher",
        wikipedia_article_titles: ["Gregory_the_Great"],
        month: 9,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Eliza Darling, pioneer social reformer in New South Wales",
        wikipedia_article_titles: ["Eliza_Darling"],
        month: 9,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Birth of Mary, mother of the Lord",
        month: 9,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Mother Esther CHN, founder of the Community of the Holy Name (Melbourne)",
        wikipedia_article_titles: ["Emma_Caroline_Silcock"],
        month: 9,
        day: 11,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Cyprian of Carthage, bishop and martyr",
        wikipedia_article_titles: ["Cyprian"],
        month: 9,
        day: 13,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Holy Cross",
        wikipedia_article_titles: ["Feast_of_the_Cross"],
        month: 9,
        day: 14,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "John Oliver Feetham, bishop and bush brother",
        wikipedia_article_titles: ["John_Feetham_(bishop)"],
        month: 9,
        day: 15,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Ninian of Galloway, bishop and missionary",
        wikipedia_article_titles: ["Saint_Ninian"],
        month: 9,
        day: 16,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Hildegard of Bingen, abbess and spiritual writer",
        wikipedia_article_titles: ["Hildegard_of_Bingen"],
        month: 9,
        day: 17,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John Ramsden Wollaston, priest and missionary of Western Australia",
        wikipedia_article_titles: ["John_Wollaston_(priest)"],
        month: 9,
        day: 18,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John Coleridge Patteson, first bishop of Melanesia, martyr",
        wikipedia_article_titles: ["John_Patteson_(bishop)"],
        month: 9,
        day: 20,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Sergius of Moscow, abbot and teacher",
        wikipedia_article_titles: ["Sergius_of_Radonezh"],
        month: 9,
        day: 25,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Lancelot Andrewes, bishop and teacher",
        wikipedia_article_titles: ["Lancelot_Andrewes"],
        month: 9,
        day: 26,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Vincent de Paul, priest and worker with the poor",
        wikipedia_article_titles: ["Vincent_de_Paul"],
        month: 9,
        day: 27,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Jerome, priest and biblical scholar",
        wikipedia_article_titles: ["Jerome"],
        month: 9,
        day: 30,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Francis of Assisi, friar and preacher",
        wikipedia_article_titles: ["Francis_of_Assisi"],
        month: 10,
        day: 4,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "William Tyndale, biblical scholar",
        wikipedia_article_titles: ["William_Tyndale"],
        month: 10,
        day: 6,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Elizabeth Fry, prison reformer",
        wikipedia_article_titles: ["Elizabeth_Fry"],
        month: 10,
        day: 6,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Teresa of Avila, teacher",
        wikipedia_article_titles: ["Teresa_of_Avila"],
        month: 10,
        day: 15,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Hugh Latimer and Nicholas Ridley, bishops and martyrs",
        wikipedia_article_titles: ["Hugh_Latimer", "Nicholas_Ridley_(martyr)"],
        month: 10,
        day: 16,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Ignatius of Antioch, bishop and martyr",
        wikipedia_article_titles: ["Ignatius_of_Antioch"],
        month: 10,
        day: 17,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Henry Martyn, missionary and Bible translator in India and Persia",
        wikipedia_article_titles: ["Henry_Martyn"],
        month: 10,
        day: 18,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "James of Jerusalem, brother of our Lord, martyr",
        wikipedia_article_titles: ["James,_brother_of_Jesus"],
        month: 10,
        day: 23,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "United Nations",
        wikipedia_article_titles: ["United_Nations"],
        month: 10,
        day: 24,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Martin Luther and other Continental reformers",
        wikipedia_article_titles: ["Martin_Luther"],
        month: 10,
        day: 31,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "All Souls",
        wikipedia_article_titles: ["All_Souls%27_Day"],
        month: 11,
        day: 2,
        attributes: [FestivalAttributes.COLOUR_VIOLET],
    }),
    quick_anglican_lesser({
        name: "Richard Hooker, priest and teacher",
        wikipedia_article_titles: ["Richard_Hooker"],
        month: 11,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Saints, martyrs, missionaries and teachers of the Anglican Communion",
        month: 11,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Leo of Rome, bishop and teacher",
        wikipedia_article_titles: ["Pope_Leo_I"],
        month: 11,
        day: 10,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Martin, Bishop of Tours",
        wikipedia_article_titles: ["Martin_of_Tours"],
        month: 11,
        day: 11,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Charles Siméon, evangelist",
        wikipedia_article_titles: ["Charles_Simeon"],
        month: 11,
        day: 12,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Margaret of Scotland, queen, helper of the poor",
        wikipedia_article_titles: ["Saint_Margaret_of_Scotland"],
        month: 11,
        day: 16,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Hilda of Whitby, abbess",
        wikipedia_article_titles: ["Hilda_of_Whitby"],
        month: 11,
        day: 17,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Hugh, bishop of Lincoln",
        wikipedia_article_titles: ["Hugh_of_Lincoln"],
        month: 11,
        day: 17,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Elizabeth of Hungary, princess and philanthropist",
        wikipedia_article_titles: ["Elizabeth_of_Hungary"],
        month: 11,
        day: 19,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Clement of Rome, bishop and martyr",
        wikipedia_article_titles: ["Pope_Clement_I"],
        month: 11,
        day: 23,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "James Noble, first indigenous Australian ordained",
        wikipedia_article_titles: ["James_Noble_(clergyman)"],
        month: 11,
        day: 25,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Frances Perry, founder of the Royal Women’s Hospital, Melbourne",
        wikipedia_article_titles: ["Frances_Perry_(philanthropist)"],
        month: 12,
        day: 2,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Francis Xavier, priest and missionary",
        wikipedia_article_titles: ["Francis_Xavier"],
        month: 12,
        day: 3,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Nicholas Ferrar, deacon and man of prayer",
        wikipedia_article_titles: ["Nicholas_Ferrar"],
        month: 12,
        day: 4,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Nicholas of Myra, bishop and philanthropist",
        wikipedia_article_titles: ["Saint_Nicholas"],
        month: 12,
        day: 6,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Ambrose of Milan, bishop and teacher",
        wikipedia_article_titles: ["Ambrose"],
        month: 12,
        day: 7,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "The Conception of the Blessed Virgin Mary",
        wikipedia_article_titles: ["Feast_of_the_Immaculate_Conception"],
        month: 12,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Richard Baxter, pastor and spiritual writer",
        wikipedia_article_titles: ["Richard_Baxter"],
        month: 12,
        day: 8,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Lucy, martyr and virgin",
        wikipedia_article_titles: ["Saint_Lucy"],
        month: 12,
        day: 13,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John of the Cross, mystic and teacher",
        wikipedia_article_titles: ["John_of_the_Cross"],
        month: 12,
        day: 14,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "Thomas Becket, archbishop of Canterbury, martyr",
        wikipedia_article_titles: ["Thomas_Becket"],
        month: 12,
        day: 29,
        attributes: [FestivalAttributes.COLOUR_RED],
    }),
    quick_anglican_lesser({
        name: "Josephine Butler, social reformer",
        wikipedia_article_titles: ["Josephine_Butler"],
        month: 12,
        day: 30,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    quick_anglican_lesser({
        name: "John Wyclif, teacher and reformer",
        wikipedia_article_titles: ["John_Wycliffe"],
        month: 12,
        day: 31,
        attributes: [FestivalAttributes.COLOUR_WHITE],
    }),
    {
        slug: "defence-forces-sunday",
        name: "Defence Forces Sunday",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                attributes: [FestivalAttributes.COLOUR_WHITE],
                level: ObservationLevel.LESSER_FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    // the Sunday nearest to November 11
                    const nov11 = in_calendar_year(ctxt.year, 11, 11);
                    if (nov11.dayOfWeek === 7) {
                        return [nov11];
                    }
                    const before = n_sundays_before(nov11, 1);
                    const after = n_sundays_after(nov11, 1);
                    if (11 - before.day < after.day - 11) {
                        return [before];
                    }
                    return [after];
                },
            },
        ],
    },
];

export default Festivals;
