type CodeBlockMatch = {
	index: number;
	length: number;
	ticks: number;
};

function findNext(text: string, startIndex: number): CodeBlockMatch | null {
	// let's work with a shorter string
	const sliced = text.slice(startIndex);

	// we only want ticks that aren't followed by slashes, min 1 max 3
	const leftRegex = /(`(?!\\)){1,3}/;
	const leftMatch = leftRegex.exec(sliced);
	if (!leftMatch) {
		return null;
	}

	let leftIndex = leftMatch.index;
	let ticks = leftMatch[0].length;

	do {
		// we try to grab as many ticks as we can
		const rightRegex = new RegExp(`(\`(?!\\\\)){${ticks}}`);

		// we need to start out regex after the left ticks
		const rightMatch = rightRegex.exec(sliced.slice(leftIndex + ticks));

		if (rightMatch) {
			/** final computed index of first tick */
			const index = startIndex + leftIndex;
			/** total length of match, including ticks */
			const length = rightMatch.index + ticks * 2;
			// return match
			return { index, length, ticks };
		}

		// we didn't get a match, so we try with fewer ticks
		ticks--;

		// we didn't get a match, so we move our start index by one tick
		leftIndex++;

	}while (ticks > 0);

	return null;
}

function findMatches(text: string): CodeBlockMatch[] {
	const matches: CodeBlockMatch[] = [];
	let match: CodeBlockMatch | null;
	let lastIndex = 0;
	while (match = findNext(text, lastIndex)) {
		matches.push(match);
		lastIndex = match.index + match.length;
	}
	return matches;
}

function reverse(text: string) {
	return text.split("").reverse().join("");
}

function redact(match: CodeBlockMatch): string {
	const ticks = "".padEnd(match.ticks, "`");
	const redacted = "".padEnd(match.length - match.ticks * 2, "*");
	return ticks + redacted + ticks;
}

function replaceAll(text: string, matches: CodeBlockMatch[]) {
	matches.forEach(match => {
		text = text.slice(0, match.index)
			+ redact(match)
			+ text.slice(match.index + match.length);
	});
	return text;
}

/**
 * Converts any characters within `` blocks to asterisks. Ex: "a `code` block" becomes "a `****` block".
 * Matches 1, 2, or 3 ` characters.
*/
export function redactCodeBlocks(content: string) {
	// reverse the string for simpler regex of escaped back-ticks
	const reversed = reverse(content);

	// find all the matches
	const matches = findMatches(reversed);

	// redact all matches
	const redacted = replaceAll(reversed, matches);

	// return correct value
	return reverse(redacted);
}
