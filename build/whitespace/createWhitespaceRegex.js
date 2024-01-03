import XRegExp from "xregexp";
import { HORIZONTAL_WHITESPACE_REGEX } from "./consts.js";
export function createWhitespaceRegex(options) {
    const flags = options?.globalFlag ? "g" : "";
    const regex = options?.horizontalOnly ? HORIZONTAL_WHITESPACE_REGEX : "\\s";
    const modifier = options?.modifier ?? "+";
    return XRegExp(regex + modifier, flags);
}
