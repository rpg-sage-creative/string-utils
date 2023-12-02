import { getQuotedRegexSource } from "../quote/getQuotedRegexSource.js";

/** Returns the string source of our word character regex. */
function getWordCharSource(s: "*" | "+" | ""): string {
	return `[\\w\\pL\\pN]${s}`;
}

/** @internal Returns the string source of our key/value regex. */
export function getKeyValueArgSource(key = getWordCharSource("+")): string {
	return `${key}\\s*=+\\s*(?:${getQuotedRegexSource("*")}|\\S+)`;
}