import { getQuotedRegexSource } from "../quote/getQuotedRegexSource.js";
import { getWordCharacterRegexSource } from "../regex/getWordCharacterRegexSource.js";
export function getKeyValueArgSource(key) {
    key = key ?? getWordCharacterRegexSource({ allowDashes: true, allowPeriods: true, quantifier: "+" });
    const quotedRegexSource = getQuotedRegexSource({ lengthQuantifier: "*" });
    return `${key}=(?:${quotedRegexSource}|\\S+)`;
}
