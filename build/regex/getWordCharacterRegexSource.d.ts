import type { RegExpQuantifier } from "./RegExpQuantifier.js";
type Options = {
    /** determines if periods are allowed */
    allowDotNotation?: boolean;
    /** how many to capture */
    quantifier?: RegExpQuantifier;
};
/**
 * Returns the string source of our word character regex using XRegExp extensions.
 * Uses default options: { quantifier:"" }
 */
export declare function getWordCharacterRegexSource(): string;
/**
 * Returns the string source of our word character regex using XRegExp extensions.
 */
export declare function getWordCharacterRegexSource(options: Options): string;
export {};
