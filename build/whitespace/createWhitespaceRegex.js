export function createWhitespaceRegex(globalFlag = false) {
    return globalFlag ? /\s+/ : /\s+/g;
}
