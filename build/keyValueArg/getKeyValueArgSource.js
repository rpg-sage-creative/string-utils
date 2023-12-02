import { getQuotedRegexSource } from "../quote/getQuotedRegexSource.js";
function getWordCharSource(s) {
    return `[\\w\\pL\\pN]${s}`;
}
export function getKeyValueArgSource(key = getWordCharSource("+")) {
    return `${key}\\s*=+\\s*(?:${getQuotedRegexSource("*")}|\\S+)`;
}
