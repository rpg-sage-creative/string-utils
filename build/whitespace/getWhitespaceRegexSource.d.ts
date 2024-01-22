import { RegExpQuantifier } from "../regex/RegExpQuantifier.js";
type Options = {
    /** uses HORIZONTAL_WHITESPACE_REGEX if true, \s otherwise */
    horizontalOnly?: boolean;
    /** how many to capture */
    quantifier?: RegExpQuantifier;
};
/**
 * Default options: { horizontalOnly:false, quantifier:"" }
 */
export declare function getWhitespaceRegexSource(): string;
export declare function getWhitespaceRegexSource(options: Options): string;
export {};
