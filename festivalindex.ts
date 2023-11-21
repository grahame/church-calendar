import { FestivalIndex } from "./calendar.ts";
import { Festival } from "./calendar.ts";

export const make_festival_index = (festivals: Festival[]): FestivalIndex => {
    const ensure_index = (denomination: string, level: string) => {
        if (!festival_level_index[denomination]) {
            festival_level_index[denomination] = {};
        }
        if (!festival_level_index[denomination][level]) {
            festival_level_index[denomination][level] = [];
        }
    };
    const index_observances = (festival: Festival) => {
        if (!festival.observances) {
            return;
        }
        for (const observance of festival.observances) {
            for (const denomination of observance.denominations) {
                ensure_index(denomination, observance.level);
                festival_level_index[denomination][observance.level].push({
                    type: "liturgical",
                    observance,
                    festival,
                });
            }
        }
    };

    const index_calendar_observances = (festival: Festival) => {
        if (!festival.calendar_observances) {
            return;
        }
        for (const observance of festival.calendar_observances) {
            for (const denomination of observance.denominations) {
                ensure_index(denomination, observance.level);
                festival_level_index[denomination][observance.level].push({
                    type: "calendar",
                    observance,
                    festival,
                });
            }
        }
    };

    // index by denomination, then by level, then by order of appearance in the list
    const festival_level_index: FestivalIndex = {};
    for (const festival of festivals) {
        index_observances(festival);
        index_calendar_observances(festival);
    }
    return festival_level_index;
};
