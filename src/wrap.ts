/** Used to wrap parentheses, brackets, or braces around a piece of text. */
export function wrap(input: string, chars: "[]"): string;
export function wrap(input: string, chars: "{}"): string;
export function wrap(input: string, chars: "()"): string;
export function wrap(input: string, chars: string): string {
	const [l, r] = chars;
	return `${l}${input}${r}`;
}

/** Used to unwrap parentheses, brackets, or braces from around a piece of text. */
export function unwrap(input: string, chars: "[]"): string;
export function unwrap(input: string, chars: "{}"): string;
export function unwrap(input: string, chars: "()"): string;
export function unwrap(input: string, chars: string): string {
	const [l, r] = chars;
	while (input.startsWith(l) && input.endsWith(r)) {
		input = input.slice(1, -1);
	}
	return input;
}

/** Returns the characters wrapping the content (if parentheses, brackets, or braces) or false. */
export function isWrapped(input: string): string | false;

/** Returns the given chars if it is wrapping the content. Retruns false otherwise. */
export function isWrapped(input: string, chars: string): string | false;

export function isWrapped(input: string, chars?: string): string | false {
	const checks: string[] = [];
	if (chars?.length === 2) {
		checks.push(chars);
	}
	if (!checks.length) {
		checks.push("[]", "{}", "()");
	}
	return checks.find(([l, r]) => input.startsWith(l) && input.endsWith(r)) ?? false;
}