import { Temporal } from "./temporal.ts";

export enum Denomination {
    ANG_AU = "anglican-church-of-australia",
}

export enum ObservationLevel {
    // APBA observation levels
    PRINCIPAL = "principal-festival",
    // APBA doesn't want to call these Principal Holy Days, but they effectively
    // are in that they can't be displaced and therefore have the highest priority
    NON_DISPLACABLE = "non-displacable-festival",
    FESTIVAL = "festival",
    LESSER_FESTIVAL = "lesser-festival",
}

export type LiturgicalYearContext = {
    year: number;
    first_day: Temporal.PlainDate;
    last_day: Temporal.PlainDate;
    advent: Temporal.PlainDate;
    easter: Temporal.PlainDate;
    pentecost: Temporal.PlainDate;
};

export type Observance = {
    // the denominations that observe the feast in this manner
    denominations: Denomination[];
    // the denominational name of the observance
    name?: string;
    level: ObservationLevel;
    dates: (ctxt: LiturgicalYearContext) => Temporal.PlainDate[];
};

// The definition of a festival within the Calendar of the Church
// A festival might have multiple potential observation dates.
export type Festival = {
    slug: string;
    name: string;
    description?: string;
    image_link?: string;
    // e.g. https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow
    wikipedia_en_article_title?: string;
    observances: Observance[];
};

// The date of observation of a festival within one or more calendars
export type FestivalInCalendars = Festival & {
    calendar_slugs: string[];
    observance_dates: Temporal.PlainDate[];
};

export type FestivalObservance = Festival & {
    calendar_slug: string;
    date: Temporal.PlainDate;
};

export type ResolvedObservance = {
    level: ObservationLevel;
    slug: string;
    name: string;
    description?: string;
    image_link?: string;
};

export const in_year = (ctxt: LiturgicalYearContext, month: number, day: number) => {
    const this_year = new Temporal.PlainDate(ctxt.year, month, day);
    if (Temporal.PlainDate.compare(this_year, ctxt.last_day) == 1) {
        return new Temporal.PlainDate(ctxt.year - 1, month, day);
    }
    return this_year;
};

export type ResolvedCalendar = [Temporal.PlainDate, ResolvedObservance][];

export type ObservanceFestivalList = [Observance, Festival][];

export type FestivalIndex = {
    [key: string]: {
        [key: string]: ObservanceFestivalList;
    };
};

export const make_festival_index = (festivals: Festival[]): FestivalIndex => {
    // index by denomination, then by level, then by order of appearance in the list
    const festival_level_index: FestivalIndex = {};
    for (const festival of festivals) {
        for (const observance of festival.observances) {
            for (const denomination of observance.denominations) {
                if (!festival_level_index[denomination]) {
                    festival_level_index[denomination] = {};
                }
                if (!festival_level_index[denomination][observance.level]) {
                    festival_level_index[denomination][observance.level] = [];
                }
                festival_level_index[denomination][observance.level].push([observance, festival]);
            }
        }
    }
    return festival_level_index;
};
