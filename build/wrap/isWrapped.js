import { splitChars } from "./splitChars.js";
export function isWrapped(input, chars) {
    const checks = [];
    if (chars?.length) {
        checks.push(chars);
    }
    else {
        checks.push("[]", "{}", "()");
    }
    return checks.find(leftRight => {
        const { left, right } = splitChars(leftRight);
        return input.startsWith(left) && input.endsWith(right);
    }) ?? false;
}
