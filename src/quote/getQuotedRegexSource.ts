
/** Returns the string source of our quoted value regex. */
export function getQuotedRegexSource(s: "*" | "+"): string {
	return `(?:“[^”]${s}”|„[^“]${s}“|„[^”]${s}”|"[^"]${s}")`;
}

