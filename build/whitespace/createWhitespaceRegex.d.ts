import type { RegExpCreateOptions } from "../regex/RegExpCreateOptions.js";
type Options = RegExpCreateOptions & {
    /** uses HORIZONTAL_WHITESPACE_REGEX if true, \s otherwise */
    horizontalOnly?: boolean;
};
/**
 * Convenience for creating/sharing whitespace regex in case we change it later.
 * Uses default options: { globalFlag:false, horizontalOnly:false, quantifier:"+" }
 */
export declare function createWhitespaceRegex(): RegExp;
/**
 * Convenience for creating/sharing whitespace regex in case we change it later.
 */
export declare function createWhitespaceRegex(options: Options): RegExp;
export {};
