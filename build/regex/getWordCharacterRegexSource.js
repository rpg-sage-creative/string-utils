export function getWordCharacterRegexSource(options) {
    const quantifier = options?.quantifier ?? "";
    return `[\\w\\pL\\pN]${quantifier}`;
}
