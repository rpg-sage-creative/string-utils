export function getQuotedRegexSource(options) {
    const length = options?.lengthQuantifier ?? "+";
    return `(?:“[^”]${length}”|„[^“]${length}“|„[^”]${length}”|"[^"]${length}"|'[^']${length}'|‘[^’]${length}’)`;
}
