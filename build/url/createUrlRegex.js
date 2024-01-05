function getProtocolRegex() {
    return /(?:s?ftp|https?):\/\//i;
}
function getDomainRegex() {
    return /(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,}/i;
}
function getIp4Regex() {
    return /(?:\d{1,3}\.){3}\d{1,3}/;
}
function getHostnameRegex() {
    const sources = [
        getDomainRegex().source,
        getIp4Regex().source,
        "localhost"
    ];
    const regex = sources.join("|");
    return new RegExp(`(?:${regex})`, "i");
}
function getPortRegex() {
    return /(?::\d{1,5})?/;
}
function getPathRegex() {
    return /(?:\/[-a-z\d%_.~+]*)*/i;
}
function getQuerystringRegex() {
    return /(?:\?[;&a-z\d%_.~+=-]*)?/i;
}
function getAnchorRegex() {
    return /(?:#[-a-z\d_]*)?/i;
}
export function createUrlRegex(options) {
    const capture = options?.capture;
    const flags = options?.globalFlag ? "gi" : "i";
    const sources = [
        getProtocolRegex().source,
        getHostnameRegex().source,
        getPortRegex().source,
        getPathRegex().source,
        getQuerystringRegex().source,
        getAnchorRegex().source
    ];
    if (options?.wrapped?.length === 2) {
        const [left, right] = options.wrapped.split("");
        sources.unshift(left);
        sources.push(right);
    }
    if (options?.anchored) {
        sources.unshift("^");
        sources.push("$");
    }
    const regex = sources.join("");
    if (capture) {
        if (capture === true) {
            return new RegExp(`(${regex})`, flags);
        }
        return new RegExp(`(?<${capture}>${regex})`, flags);
    }
    return new RegExp(sources.join(""), flags);
}
