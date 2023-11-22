import advent_festivals from "./advent.ts";
import christmas_festivals from "./christmas.ts";
import easter_festivals from "./easter.ts";
import epiphany_festivals from "./epiphany.ts";
import feasts_festivals from "./feasts.ts";
import holy_week_festivals from "./holy_week.ts";
import lent_festivals from "./lent.ts";
import lesser_festivals from "./lesser_festivals.ts";
import pentecost_festivals from "./pentecost.ts";
import triduum_festivals from "./triduum.ts";

const festivals = [
    ...advent_festivals,
    ...christmas_festivals,
    ...easter_festivals,
    ...epiphany_festivals,
    ...feasts_festivals,
    ...holy_week_festivals,
    ...lent_festivals,
    ...lesser_festivals,
    ...pentecost_festivals,
    ...triduum_festivals,
];

export default festivals;
