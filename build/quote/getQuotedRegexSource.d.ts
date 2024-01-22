import type { RegExpQuantifier } from "../regex/RegExpQuantifier.js";
type Options = {
    /** Specifies allowed number of characters inside the quotes. */
    lengthQuantifier?: RegExpQuantifier;
};
/**
 * Returns the string source of our quoted value regex.
 * Returned regex string is a non-capture group.
 * Returned regex one of the following quote pairs: “”, „“, „”, "", '', ‘’
 * Uses default options: { lengthQuantifier:"+" }
 */
export declare function getQuotedRegexSource(): string;
/**
 * Returns the string source of our quoted value regex.
 * Returned regex string is a non-capture group.
 * Returned regex one of the following quote pairs: “”, „“, „”, "", '', ‘’
 */
export declare function getQuotedRegexSource(options: Options): string;
export {};
