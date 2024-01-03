import { createWhitespaceRegex } from "./createWhitespaceRegex.js";
export function cleanWhitespace(value, options) {
    const regex = createWhitespaceRegex({ globalFlag: true, modifier: "+", horizontalOnly: options?.horizontalOnly });
    return value.replace(regex, options?.replacement ?? " ").trim();
}
