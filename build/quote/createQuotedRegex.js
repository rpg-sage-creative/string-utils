import XRegExp from "xregexp";
import { getQuotedRegexSource } from "./getQuotedRegexSource.js";
export function createQuotedRegex(allowEmpty) {
    return XRegExp(getQuotedRegexSource(allowEmpty ? "*" : "+"));
}
