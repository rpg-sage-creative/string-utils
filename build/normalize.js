export function normalizeApostrophes(text) {
    return text.replace(/[\u2018\u2019]/g, `'`);
}
export function normalizeDashes(text) {
    return text.replace(/[\u2013\u2014]/g, `-`);
}
export function normalizeEllipses(text) {
    return text.replace(/…/g, `...`);
}
export function normalizeQuotes(text) {
    return text.replace(/[\u201C\u201D]/g, `"`);
}
export function normalizeAscii(text) {
    return normalizeApostrophes(normalizeDashes(normalizeEllipses(normalizeQuotes(text))));
}
export function removeAccents(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
