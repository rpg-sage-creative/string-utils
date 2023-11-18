import { dequote, getQuotedRegexSource, quote } from "./quotes.js";
function getWordCharSource(s) {
    return `[\\w\\pL\\pN]${s}`;
}
function getKeyValueArgSource(key = getWordCharSource("+")) {
    const value = `(?:${getQuotedRegexSource("*")}|\\S+)`;
    return `${key}\\s*=+\\s*${value}`;
}
export function createKeyValueArgRegex(key) {
    return new RegExp(getKeyValueArgSource(key), "i");
}
export function isKeyValueArg(value, key) {
    const regex = new RegExp(`^${getKeyValueArgSource(key)}$`, "i");
    return value.match(regex) !== null;
}
export function parseKeyValueArg(input, key) {
    if (isKeyValueArg(input, key)) {
        const index = input.indexOf("=");
        const key = input.slice(0, index);
        const keyLower = key.toLowerCase();
        const value = dequote(input.slice(index + 1).trim());
        const quoted = quote(value);
        const clean = `${keyLower}=${quoted}`;
        const simple = `${keyLower}=${value.trim()}`;
        return { key, keyLower, value, clean, simple };
    }
    return null;
}
