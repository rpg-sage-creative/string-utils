import { splitChars } from "./splitChars.js";
export function unwrap(input, chars) {
    const leftRight = splitChars(chars);
    if (leftRight) {
        const { left, right } = leftRight;
        while (input.startsWith(left) && input.endsWith(right)) {
            input = input.slice(left.length, -right.length);
        }
    }
    return input;
}
