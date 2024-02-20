import { getQuotedRegexSource } from "../quote/getQuotedRegexSource.js";
import { getWordCharacterRegexSource } from "../regex/getWordCharacterRegexSource.js";
import { getWhitespaceRegexSource } from "../whitespace/getWhitespaceRegexSource.js";
export function getKeyValueArgSource(key) {
    key = key ?? getWordCharacterRegexSource({ allowDotNotation: true, quantifier: "+" });
    const space = getWhitespaceRegexSource({ horizontalOnly: true, quantifier: "*" });
    const quotedRegexSource = getQuotedRegexSource({ lengthQuantifier: "*" });
    return `${key}${space}=${space}(?:${quotedRegexSource}|\\S+)`;
}
