export function cleanWhitespace(value) {
    return value.replace(/\s+/g, " ").trim();
}
export function createWhitespaceRegex(globalFlag = false) {
    return globalFlag ? /\s+/ : /\s+/g;
}
