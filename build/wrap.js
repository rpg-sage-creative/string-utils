export function wrap(input, chars) {
    const [l, r] = chars;
    return `${l}${input}${r}`;
}
export function unwrap(input, chars) {
    const [l, r] = chars;
    while (input.startsWith(l) && input.endsWith(r)) {
        input = input.slice(1, -1);
    }
    return input;
}
export function isWrapped(input, chars) {
    const checks = [];
    if (chars?.length === 2) {
        checks.push(chars);
    }
    if (!checks.length) {
        checks.push("[]", "{}", "()");
    }
    return checks.find(([l, r]) => input.startsWith(l) && input.endsWith(r)) ?? false;
}
