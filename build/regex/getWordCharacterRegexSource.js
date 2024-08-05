export function getWordCharacterRegexSource(options) {
    const dash = options?.allowDashes ? "\\-" : "";
    const period = options?.allowPeriods ? "\\." : "";
    const quantifier = options?.quantifier ?? "";
    return `[\\w\\pL\\pN${dash}${period}]${quantifier}`;
}
