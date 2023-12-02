export function getQuotedRegexSource(s) {
    return `(?:“[^”]${s}”|„[^“]${s}“|„[^”]${s}”|"[^"]${s}")`;
}
