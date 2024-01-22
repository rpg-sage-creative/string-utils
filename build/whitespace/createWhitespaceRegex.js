import XRegExp from "xregexp";
import { getWhitespaceRegexSource } from "./getWhitespaceRegexSource.js";
export function createWhitespaceRegex(options) {
    const regex = getWhitespaceRegexSource({ horizontalOnly: options?.horizontalOnly });
    const quantifier = options?.quantifier ?? "+";
    const flags = options?.globalFlag ? "g" : "";
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
