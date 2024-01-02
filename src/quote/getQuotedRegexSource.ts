
/**
 * Returns the string source of our quoted value regex.
 * Matches one of the following qoute pairs:
 * “”, „“, „”, "", '', ‘’
 */
export function getQuotedRegexSource(s: "*" | "+"): string {
	return `(?:“[^”]${s}”|„[^“]${s}“|„[^”]${s}”|"[^"]${s}"|'[^']${s}'|‘[^’]${s}’)`;
}

