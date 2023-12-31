import { LiturgicalColour, in_calendar_year } from "../../calendar.ts";
import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { n_sundays_after } from "../sunday.ts";

const Festivals: Festival[] = [
    {
        slug: "all-saints-day",
        name: "All Saints' Day",
        wikipedia_article_titles: ["All Saints' Day"],
        exciting_holiness: "m11/d01.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                colour: LiturgicalColour.COLOUR_WHITE,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    const all_saints = in_calendar_year(year, 11, 1);
                    return [all_saints, n_sundays_after(all_saints, 1)];
                },
            },
        ],
    },
    {
        slug: "the-naming-and-circumcision-of-jesus",
        name: "The Naming and Circumcision of Jesus",
        wikipedia_article_titles: ["Circumcision of Jesus"],
        exciting_holiness: "m01/d01.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 1, 1)];
                },
            },
        ],
    },
    {
        slug: "the-presentation-of-christ-in-the-temple",
        name: "The Presentation of Christ in the Temple",
        wikipedia_article_titles: ["Presentation of Jesus at the Temple"],
        exciting_holiness: "m02/d02.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 2, 2)];
                },
            },
        ],
    },
    {
        slug: "matthias-the-apostle",
        name: "Matthias the Apostle",
        wikipedia_article_titles: ["Saint Matthias"],
        exciting_holiness: "m05/d14.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 2, 24), in_calendar_year(year, 5, 14)];
                },
            },
        ],
    },
    {
        slug: "saint-joseph",
        name: "Saint Joseph",
        wikipedia_article_titles: ["Saint Joseph"],
        exciting_holiness: "m03/d19.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 3, 19)];
                },
            },
        ],
    },
    {
        slug: "the-annunciation-of-our-lord-to-the-blessed-virgin-mary",
        name: "The Annunciation of Our Lord to the Blessed Virgin Mary",
        wikipedia_article_titles: ["Annunciation"],
        exciting_holiness: "m03/d25.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                name: "The Annunciation to the Blessed Virgin Mary",
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 3, 25)];
                },
            },
        ],
    },
    {
        slug: "mark-the-evangelist",
        name: "Mark (evangelist and martyr)",
        wikipedia_article_titles: ["Mark the Evangelist"],
        exciting_holiness: "m04/d25.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 4, 25), in_calendar_year(year, 4, 26)];
                },
            },
        ],
    },
    {
        slug: "philip-and-james-apostles",
        name: "Philip and James (apostles and martyrs)",
        wikipedia_article_titles: ["Philip the Apostle"],
        exciting_holiness: "m05/d01.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 5, 1), in_calendar_year(year, 5, 3)];
                },
            },
        ],
    },
    {
        slug: "barnabas-the-apostle",
        name: "Barnabas (apostle and martyr)",
        wikipedia_article_titles: ["Barnabas"],
        exciting_holiness: "m06/d11.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 6, 11)];
                },
            },
        ],
    },
    {
        slug: "the-birth-of-john-the-baptist",
        name: "The Birth of John the Baptist",
        wikipedia_article_titles: ["Nativity of Saint John the Baptist"],
        exciting_holiness: "m06/d24.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 6, 24)];
                },
            },
        ],
    },
    {
        slug: "peter-and-paul-apostles",
        name: "Peter and Paul (apostles and martyrs)",
        wikipedia_article_titles: ["Feast_of_Saints_Peter_and_Paul"],
        exciting_holiness: "m06/d29.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 6, 29)];
                },
            },
        ],
    },
    {
        slug: "mary-magdalene",
        name: "Mary Magdalene",
        wikipedia_article_titles: ["Mary Magdalene"],
        exciting_holiness: "m07/d22.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 7, 22)];
                },
            },
        ],
    },
    {
        slug: "james-apostle",
        name: "James (apostle and martyr)",
        wikipedia_article_titles: ["James, son of Zebedee"],
        exciting_holiness: "m07/d25.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 7, 25)];
                },
            },
        ],
    },
    {
        slug: "transfiguration",
        name: "The Transfiguration of our Lord",
        wikipedia_article_titles: ["Transfiguration_of_Jesus"],
        exciting_holiness: "m08/d06.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 8, 6)];
                },
            },
        ],
    },
    {
        slug: "mary-mother-of-our-lord",
        name: "Mary, Mother of our Lord",
        wikipedia_article_titles: ["Mary, mother of Jesus"],
        exciting_holiness: "m08/d15.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 8, 15)];
                },
            },
        ],
    },
    {
        slug: "bartholomew-the-apostle",
        name: "Bartholomew (apostle and martyr)",
        wikipedia_article_titles: ["Bartholomew the Apostle"],
        exciting_holiness: "m08/d24.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 8, 24)];
                },
            },
        ],
    },
    {
        slug: "matthew-apostle-and-evangelist",
        name: "Matthew (apostle, evangelist and martyr)",
        wikipedia_article_titles: ["Matthew the Apostle"],
        exciting_holiness: "m09/d21.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 9, 21)];
                },
            },
        ],
    },
    {
        slug: "michael-and-all-angels",
        name: "Michael and All Angels",
        wikipedia_article_titles: ["Michaelmas"],
        exciting_holiness: "m09/d29.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_WHITE,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 9, 29)];
                },
            },
        ],
    },
    {
        slug: "luke-the-evangelist",
        name: "Luke (evangelist and martyr)",
        wikipedia_article_titles: ["Luke the Evangelist"],
        exciting_holiness: "m10/d18.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 10, 18)];
                },
            },
        ],
    },
    {
        slug: "simon-and-jude-apostles",
        name: "Simon and Jude (apostles and martyrs)",
        wikipedia_article_titles: ["Saints Simon and Jude"],
        exciting_holiness: "m10/d28.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 10, 28)];
                },
            },
        ],
    },
    {
        slug: "andrew-the-apostle",
        name: "Andrew (apostle and martyr)",
        wikipedia_article_titles: ["Andrew the Apostle"],
        exciting_holiness: "m11/d30.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 11, 30)];
                },
            },
        ],
    },
    {
        slug: "thomas-the-apostle",
        name: "Thomas (apostle and martyr)",
        wikipedia_article_titles: ["Thomas the Apostle"],
        exciting_holiness: "m07/d03.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 12, 21), in_calendar_year(year, 8, 3)];
                },
            },
        ],
    },
    {
        slug: "stephen-the-martyr",
        name: "Stephen (deacon and martyr)",
        wikipedia_article_titles: ["Saint Stephen"],
        exciting_holiness: "m12/d26.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 12, 26), in_calendar_year(year, 8, 3)];
                },
            },
        ],
    },
    {
        slug: "john-apostle-and-evangelist",
        name: "John (apostle and evangelist)",
        wikipedia_article_titles: ["John the Apostle"],
        exciting_holiness: "m12/d27.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 12, 27), in_calendar_year(year, 5, 6)];
                },
            },
        ],
    },
    {
        slug: "holy-innocents",
        name: "Holy Innocents",
        wikipedia_article_titles: ["Massacre of the Innocents"],
        exciting_holiness: "m12/d28.html",
        calendar_observances: [
            {
                denominations: [Denomination.ANG_AU],
                colour: LiturgicalColour.COLOUR_RED,
                level: ObservationLevel.FESTIVAL,
                dates: (_ctxt: LiturgicalYearContext, year: number) => {
                    return [in_calendar_year(year, 12, 28)];
                },
            },
        ],
    },
];

export default Festivals;
