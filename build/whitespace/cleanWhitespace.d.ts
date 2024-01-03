type Options = {
    horizontalOnly?: boolean;
    replacement?: string;
};
/**
 * Reduces adjacent whitespace characters to a single space, then trims the string.
 * Convenience for: value.replace(/\s+/g, " ").trim();
 */
export declare function cleanWhitespace(value: string): string;
/**
 * Reduces adjacent whitespace characters to the options.replacement (default is a single space), then trims the string.
 * If options.horizontalOnly is true, then \n and \r are excluded from the whitespace replaced.
 */
export declare function cleanWhitespace(value: string, options: Options): string;
export {};
