import {} from "../regex/RegExpQuantifier.js";
import { HORIZONTAL_WHITESPACE_REGEX } from "../consts.js";
export function getWhitespaceRegexSource(options) {
    const regex = options?.horizontalOnly ? HORIZONTAL_WHITESPACE_REGEX : "\\s";
    const quantifier = options?.quantifier ?? "";
    return regex + quantifier;
}
