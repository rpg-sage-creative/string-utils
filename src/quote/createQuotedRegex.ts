import XRegExp from "xregexp";
import { getQuotedRegexSource } from "./getQuotedRegexSource.js";

/** Convenience for creating/sharing quoted value regex in case we change it later. */
export function createQuotedRegex(allowEmpty: boolean): RegExp {
	return XRegExp(getQuotedRegexSource(allowEmpty ? "*" : "+"));
}