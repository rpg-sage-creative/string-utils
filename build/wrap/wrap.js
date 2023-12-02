export function wrap(input, chars) {
    const [l, r] = chars;
    return `${l}${input}${r}`;
}
