export function createQuotedRegex(allowEmpty) {
    return new RegExp(getQuotedRegexSource(allowEmpty ? "*" : "+"));
}
export function dequote(value) {
    return isQuoted(value) ? value.slice(1, -1) : value;
}
export function getQuotedRegexSource(s) {
    return `(?:“[^”]${s}”|„[^“]${s}“|„[^”]${s}”|"[^"]${s}")`;
}
export function isQuoted(value) {
    const regex = new RegExp(`^${getQuotedRegexSource("*")}$`);
    return regex.test(value);
}
export function quote(value) {
    if (value.includes(`"`)) {
        if (!/[“”]/.test(value)) {
            return `“${value}”`;
        }
        if (!/[„“]/.test(value)) {
            return `„${value}“`;
        }
        if (!/[„”]/.test(value)) {
            return `„${value}”`;
        }
    }
    return `"${value}"`;
}
