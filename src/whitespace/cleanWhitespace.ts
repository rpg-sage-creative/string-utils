
/** Reduces multiple whitespace characteres to a single space, then trims the string. */
export function cleanWhitespace(value: string): string {
	return value.replace(/\s+/g, " ").trim();
}
