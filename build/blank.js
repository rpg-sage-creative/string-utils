export function isBlank(text) {
    return text === null || text === undefined || text.trim() === "";
}
export function isNotBlank(text) {
    return !isBlank(text);
}
