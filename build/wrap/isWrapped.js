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
