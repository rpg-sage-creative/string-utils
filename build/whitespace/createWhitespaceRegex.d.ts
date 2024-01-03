type Options = {
    globalFlag?: boolean;
    horizontalOnly?: boolean;
    modifier?: "" | "*" | "+";
};
/**
 * Convenience for creating/sharing whitespace regex in case we change it later.
 * Uses default options: { globalFlag:false, horizontalOnly:false, modifier:"+" }
 */
export declare function createWhitespaceRegex(): RegExp;
/**
 * Convenience for creating/sharing whitespace regex in case we change it later.
 */
export declare function createWhitespaceRegex(options: Options): RegExp;
export {};
