export type Festival = {
    slug: string;
    name: string;
    description?: string;
    image_link?: string;
    wikipedia_article_title?: string;
    // https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow
    observation_dates: Date[];
};

export type Calendar = {
    slug: string;
};

export type FestivalObservance = Festival & {
    calendar_slug: string;
};
