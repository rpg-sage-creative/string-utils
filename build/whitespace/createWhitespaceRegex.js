import XRegExp from "xregexp";
import { HORIZONTAL_WHITESPACE_REGEX } from "./consts.js";
export function createWhitespaceRegex(options) {
    const flags = options?.globalFlag ? "g" : "";
    const regex = options?.horizontalOnly ? HORIZONTAL_WHITESPACE_REGEX : "\\s";
    const quantifier = options?.quantifier ?? "+";
    if (options?.capture) {
        if (options.capture === true) {
            return XRegExp(`(${regex}${quantifier})`, flags);
        }
        else {
            return XRegExp(`(?<${options.capture}>${regex}${quantifier})`, flags);
        }
    }
    return XRegExp(regex + quantifier, flags);
}
