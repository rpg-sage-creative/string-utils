import XRegExp from "xregexp";
import { getQuotedRegexSource } from "./getQuotedRegexSource.js";
export function createQuotedRegex(options) {
    const regex = getQuotedRegexSource(options);
    const quantifier = options?.quantifier ?? "";
    const flags = options?.globalFlag ? "g" : "";
    if (options?.capture) {
        if (options.capture === true) {
            return XRegExp(`(${regex}${quantifier})`, flags);
        }
        return XRegExp(`(?<${options.capture}>${regex}${quantifier})`, flags);
    }
    return XRegExp(regex + quantifier, flags);
}
