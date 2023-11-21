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

export type CalendarObservance = {
    // the denominations that observe the feast in this manner
    denominations: Denomination[];
    // the denominational name of the observance
    name?: string;
    level: ObservationLevel;
    dates: (ctxt: LiturgicalYearContext, calendar_year: number) => Temporal.PlainDate[];
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
    observances?: Observance[];
    calendar_observances?: CalendarObservance[];
};

export type ResolvedObservance = {
    level: ObservationLevel;
    slug: string;
    name: string;
    description?: string;
    image_link?: string;
};

export const date_within_liturgical_year = (ctxt: LiturgicalYearContext, date: Temporal.PlainDate) => {
    if (Temporal.PlainDate.compare(date, ctxt.first_day) == -1) {
        return false;
    }
    if (Temporal.PlainDate.compare(date, ctxt.last_day) == 1) {
        return false;
    }
    return true;
};

export const in_calendar_year = (year: number, month: number, day: number) => {
    // return a date within the given calendar year, or none if this is not possible
    return new Temporal.PlainDate(year, month, day);
};

export const in_liturgical_year = (ctxt: LiturgicalYearContext, month: number, day: number) => {
    // return a date within the given liturgical year, or none if this is not possible
    const possible = [new Temporal.PlainDate(ctxt.year, month, day), new Temporal.PlainDate(ctxt.year - 1, month, day)];
    for (const dt of possible) {
        if (date_within_liturgical_year(ctxt, dt)) {
            return dt;
        }
    }
};

export type ResolvedCalendar = [Temporal.PlainDate, ResolvedObservance][];

export type CalendarObservanceFestival = {
    type: "calendar";
    observance: CalendarObservance;
    festival: Festival;
};

export type LiturgicalObservanceFestival = {
    type: "liturgical";
    observance: Observance;
    festival: Festival;
};

export type EitherObservanceFestival = CalendarObservanceFestival | LiturgicalObservanceFestival;
export type ObservanceFestivalList = EitherObservanceFestival[];

export type FestivalIndex = {
    [key: string]: {
        [key: string]: ObservanceFestivalList;
    };
};
