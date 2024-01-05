import { createWhitespaceRegex } from "./createWhitespaceRegex.js";
export function cleanWhitespace(value, options) {
    const regex = createWhitespaceRegex({ globalFlag: true, quantifier: "+", horizontalOnly: options?.horizontalOnly });
    return value.replace(regex, options?.replacement ?? " ").trim();
}
