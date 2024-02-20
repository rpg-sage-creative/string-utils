export function getWordCharacterRegexSource(options) {
    const period = options?.allowDotNotation ? "\\." : "";
    const quantifier = options?.quantifier ?? "";
    return `[\\w\\pL\\pN${period}]${quantifier}`;
}
