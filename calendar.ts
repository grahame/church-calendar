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

export type DenominationObservance = {
    name?: string; // a denomination may have its own name for a festival
    level: ObservationLevel;
};

export type LiturgicalYearContext = {
    year: number;
    first_day: Temporal.PlainDate;
    last_day: Temporal.PlainDate;
    advent: Temporal.PlainDate;
    easter: Temporal.PlainDate;
    pentecost: Temporal.PlainDate;
};

export type Observance = {
    denominations: { [denomination in Denomination]: DenominationObservance };
    observation_dates: (ctxt: LiturgicalYearContext) => Temporal.PlainDate[];
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
    observations: Observance[];
};

// The date of observation of a festival within one or more calendars
export type FestivalInCalendars = Festival & {
    calendar_slugs: string[];
    observation_dates: Temporal.PlainDate[];
};

export type FestivalObservance = Festival & {
    calendar_slug: string;
    date: Temporal.PlainDate;
};
