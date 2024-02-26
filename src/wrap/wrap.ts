/**
 * Used to wrap parentheses, brackets, or braces around a piece of text.
 * If the chars argument is even, then they are split and used as left/right.
 * If the chars argument is odd, then they are uesd as left and then they are reversed and used as right.
 */
export function wrap(input: string, chars: "[]"): string;
export function wrap(input: string, chars: "{}"): string;
export function wrap(input: string, chars: "()"): string;
export function wrap(input: string, chars: string): string;
export function wrap(input: string, chars: string): string {
	const length = chars?.length ?? 0;
	if (length) {
		if (length % 2 === 0) {
			const half = length / 2;
			const left = chars.slice(0, half);
			const right = chars.slice(half);
			return `${left}${input}${right}`;
		}else {
			const left = chars;
			const right = chars.split("").reverse().join("");
			return `${left}${input}${right}`;
		}
	}
	return input;
}
