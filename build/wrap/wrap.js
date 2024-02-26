export function wrap(input, chars) {
    const length = chars?.length ?? 0;
    if (length) {
        if (length % 2 === 0) {
            const half = length / 2;
            const left = chars.slice(0, half);
            const right = chars.slice(half);
            return `${left}${input}${right}`;
        }
        else {
            const left = chars;
            const right = chars.split("").reverse().join("");
            return `${left}${input}${right}`;
        }
    }
    return input;
}
