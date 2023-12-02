import XRegExp from "xregexp";
import { getQuotedRegexSource } from "./getQuotedRegexSource.js";
export function isQuoted(value) {
    return XRegExp(`^${getQuotedRegexSource("*")}$`).test(value);
}
