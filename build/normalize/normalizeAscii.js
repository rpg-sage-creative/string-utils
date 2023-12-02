import { normalizeApostrophes } from "./normalizeApostrophes.js";
import { normalizeDashes } from "./normalizeDashes.js";
import { normalizeEllipses } from "./normalizeEllipses.js";
import { normalizeQuotes } from "./normalizeQuotes.js";
export function normalizeAscii(text) {
    return normalizeApostrophes(normalizeDashes(normalizeEllipses(normalizeQuotes(text))));
}
