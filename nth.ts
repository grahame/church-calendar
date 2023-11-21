// credit: https://stackoverflow.com/a/20426113

const special = [
    "zeroth",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
];
const deca = ["twent", "thirt", "fort", "fift", "sixt", "sevent", "eight", "ninet"];

export const nthify = (n: number): string => {
    if (n > 99) {
        throw new Error("nthify only supports numbers up to 99");
    }
    if (n < 20) {
        return special[n];
    }
    if (n % 10 == 0) {
        return deca[Math.floor(n / 10) - 2] + "ieth";
    }
    return deca[Math.floor(n / 10) - 2] + "y-" + special[n % 10];
};

export const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);
