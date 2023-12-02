export function unwrap(input, chars) {
    const [l, r] = chars;
    while (input.startsWith(l) && input.endsWith(r)) {
        input = input.slice(1, -1);
    }
    return input;
}
