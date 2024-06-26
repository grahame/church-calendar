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

export enum LiturgicalColour {
    COLOUR_RED = "colour-red",
    COLOUR_WHITE = "colour-white",
    COLOUR_GREEN = "colour-green",
    COLOUR_VIOLET = "colour-violet",
    COLOUR_VIOLET_OR_BLUE = "colour-violet-or-blue",
    COLOUR_BLACK = "colour-black",
    COLOUR_ROSE = "colour-rose",
}

export type LiturgicalYearContext = {
    year: number;
    first_day: Temporal.PlainDate;
    last_day: Temporal.PlainDate;
    advent: Temporal.PlainDate;
    easter: Temporal.PlainDate;
    pentecost: Temporal.PlainDate;
};

export type LiturgicalSeason = {
    name: string;
    start_date: Temporal.PlainDate;
    end_date: Temporal.PlainDate;
    colour: LiturgicalColour;
};

export type Observance = {
    // the denominations that observe the feast in this manner
    denominations: Denomination[];
    // the denominational name of the observance
    name?: string;
    level: ObservationLevel;
    colour?: LiturgicalColour;
    dates: (ctxt: LiturgicalYearContext) => Temporal.PlainDate[];
};

export type CalendarObservance = {
    // the denominations that observe the feast in this manner
    denominations: Denomination[];
    // the denominational name of the observance
    name?: string;
    level: ObservationLevel;
    colour?: LiturgicalColour;
    dates: (ctxt: LiturgicalYearContext, calendar_year: number) => Temporal.PlainDate[];
};

export type FestivalAttrs = {
    slug: string;
    name: string;
    description?: string;
    image_link?: string;
    wikipedia_article_titles?: string[];
    lesser_feasts_and_fasts?: string;
    exciting_holiness?: string;
};

// The definition of a festival within the Calendar of the Church
// A festival might have multiple potential observation dates.
export type Festival = FestivalAttrs & {
    observances?: Observance[];
    calendar_observances?: CalendarObservance[];
};

export type ResolvedObservance = {
    colour?: LiturgicalColour;
    level: ObservationLevel;
} & FestivalAttrs;

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

export const findObservanceDate = (placed_events: DateObservances, slug: string): Temporal.PlainDate | null => {
    for (const [dt, obvs] of placed_events) {
        for (const obv of obvs) {
            if (obv.slug === slug) {
                return dt;
            }
        }
    }
    return null;
};

export type DateAttributeSlug =
    | "ember-day"
    | "week-of-prayer-for-christian-unity"
    | "week-of-prayer-for-reconciliation";
export type DateAttributes = [Temporal.PlainDate, DateAttributeSlug[]][];
export type DateObservances = [Temporal.PlainDate, ResolvedObservance[]][];

export type Calendar = {
    context: LiturgicalYearContext;
    observances: DateObservances;
    attributes: DateAttributes;
};

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
