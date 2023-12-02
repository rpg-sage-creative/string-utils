
/** Convenience for creating/sharing whitespace regex in case we change it later. */
export function createWhitespaceRegex(globalFlag = false): RegExp {
	return globalFlag ? /\s+/ : /\s+/g;
}
