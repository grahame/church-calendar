import { in_year } from "../../calendar.ts";
import { Denomination, Festival, LiturgicalYearContext, ObservationLevel } from "../../calendar.ts";
import { n_sundays_after } from "../sunday.ts";

const Festivals: Festival[] = [
    {
        slug: "all-saints-day",
        name: "All Saints' Day",
        wikipedia_en_article_title: "All Saints' Day",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.PRINCIPAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    const all_saints = in_year(ctxt, 11, 1);
                    return [all_saints, n_sundays_after(all_saints, 1)];
                },
            },
        ],
    },
    {
        slug: "the-naming-and-circumcision-of-jesus",
        name: "The Naming and Circumcision of Jesus",
        wikipedia_en_article_title: "Circumcision of Jesus",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 1, 1)];
                },
            },
        ],
    },
    {
        slug: "the-presentation-of-christ-in-the-temple",
        name: "The Presentation of Christ in the Temple",
        wikipedia_en_article_title: "Presentation of Jesus at the Temple",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 2, 2)];
                },
            },
        ],
    },
    {
        slug: "matthias-the-apostle",
        name: "Matthias the Apostle",
        wikipedia_en_article_title: "Saint Matthias",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 2, 24), in_year(ctxt, 5, 14)];
                },
            },
        ],
    },
    {
        slug: "saint-joseph",
        name: "Saint Joseph",
        wikipedia_en_article_title: "Saint Joseph",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 3, 19)];
                },
            },
        ],
    },
    {
        slug: "the-annunciation-of-our-lord-to-the-blessed-virgin-mary",
        name: "The Annunciation of Our Lord to the Blessed Virgin Mary",
        wikipedia_en_article_title: "Annunciation",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                name: "The Annunciation to the Blessed Virgin Mary",
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 3, 25)];
                },
            },
        ],
    },
    {
        slug: "mark-the-evangelist",
        name: "Mark (evangelist and martyr)",
        wikipedia_en_article_title: "Mark the Evangelist",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 4, 25), in_year(ctxt, 4, 26)];
                },
            },
        ],
    },
    {
        slug: "philip-and-james-apostles",
        name: "Philip and James (apostles and martyrs)",
        wikipedia_en_article_title: "Philip the Apostle",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 5, 1), in_year(ctxt, 5, 3)];
                },
            },
        ],
    },
    {
        slug: "barnabas-the-apostle",
        name: "Barnabas (apostle and martyr)",
        wikipedia_en_article_title: "Barnabas",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 6, 11)];
                },
            },
        ],
    },
    {
        slug: "the-birth-of-john-the-baptist",
        name: "The Birth of John the Baptist",
        wikipedia_en_article_title: "Nativity of Saint John the Baptist",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 6, 24)];
                },
            },
        ],
    },
    {
        slug: "peter-and-paul-apostles",
        name: "Peter and Paul (apostles and martyrs)",
        wikipedia_en_article_title: "Feast_of_Saints_Peter_and_Paul",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 6, 29)];
                },
            },
        ],
    },
    {
        slug: "mary-magdalene",
        name: "Mary Magdalene",
        wikipedia_en_article_title: "Mary Magdalene",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 7, 22)];
                },
            },
        ],
    },
    {
        slug: "james-apostle",
        name: "James (apostle and martyr)",
        wikipedia_en_article_title: "James, son of Zebedee",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 7, 25)];
                },
            },
        ],
    },
    {
        slug: "transfiguration",
        name: "The Transfiguration of our Lord",
        wikipedia_en_article_title: "Transfiguration_of_Jesus",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 8, 6)];
                },
            },
        ],
    },
    {
        slug: "mary-mother-of-our-lord",
        name: "Mary, Mother of our Lord",
        wikipedia_en_article_title: "Mary, mother of Jesus",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 8, 15)];
                },
            },
        ],
    },
    {
        slug: "bartholomew-the-apostle",
        name: "Bartholomew (apostle and martyr)",
        wikipedia_en_article_title: "Bartholomew the Apostle",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 8, 24)];
                },
            },
        ],
    },
    {
        slug: "matthew-apostle-and-evangelist",
        name: "Matthew (apostle, evangelist and martyr)",
        wikipedia_en_article_title: "Matthew the Apostle",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 9, 21)];
                },
            },
        ],
    },
    {
        slug: "michael-and-all-angels",
        name: "Michael and All Angels",
        wikipedia_en_article_title: "Michaelmas",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 9, 29)];
                },
            },
        ],
    },
    {
        slug: "luke-the-evangelist",
        name: "Luke (evangelist and martyr)",
        wikipedia_en_article_title: "Luke the Evangelist",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 10, 18)];
                },
            },
        ],
    },
    {
        slug: "simon-and-jude-apostles",
        name: "Simon and Jude (apostles and martyrs)",
        wikipedia_en_article_title: "Saints Simon and Jude",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 10, 28)];
                },
            },
        ],
    },
    {
        slug: "andrew-the-apostle",
        name: "Andrew (apostle and martyr)",
        wikipedia_en_article_title: "Andrew the Apostle",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 11, 30)];
                },
            },
        ],
    },
    {
        slug: "thomas-the-apostle",
        name: "Thomas (apostle and martyr)",
        wikipedia_en_article_title: "Thomas the Apostle",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 12, 21), in_year(ctxt, 8, 3)];
                },
            },
        ],
    },
    {
        slug: "stephen-the-martyr",
        name: "Stephen (deacon and martyr)",
        wikipedia_en_article_title: "Saint Stephen",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 12, 26), in_year(ctxt, 8, 3)];
                },
            },
        ],
    },
    {
        slug: "john-apostle-and-evangelist",
        name: "John (apostle and evangelist)",
        wikipedia_en_article_title: "John the Apostle",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 12, 27), in_year(ctxt, 5, 6)];
                },
            },
        ],
    },
    {
        slug: "holy-innocents",
        name: "Holy Innocents",
        wikipedia_en_article_title: "Massacre of the Innocents",
        observances: [
            {
                denominations: [Denomination.ANG_AU],
                level: ObservationLevel.FESTIVAL,
                dates: (ctxt: LiturgicalYearContext) => {
                    return [in_year(ctxt, 12, 28)];
                },
            },
        ],
    },
];

export default Festivals;
