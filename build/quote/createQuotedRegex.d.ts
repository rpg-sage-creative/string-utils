import type { RegExpQuantifier } from "../regex/RegExpQuantifier.js";
import type { RegExpCreateOptions } from "../regex/RegExpCreateOptions.js";
type Options = RegExpCreateOptions & {
    /** Specifies allowed number of characters inside the quotes. */
    lengthQuantifier?: RegExpQuantifier;
};
/**
 * Convenience for creating/sharing quoted value regex.
 * Uses default options: { globalFlag:false, lengthQuantifier:"+" }
 */
export declare function createQuotedRegex(): RegExp;
/**
 * Convenience for creating/sharing quoted value regex.
 */
export declare function createQuotedRegex(options: Options): RegExp;
export {};
