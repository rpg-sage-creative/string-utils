/** Used to unwrap parentheses, brackets, or braces from around a piece of text. */
export declare function unwrap(input: string, chars: "[]"): string;
export declare function unwrap(input: string, chars: "{}"): string;
export declare function unwrap(input: string, chars: "()"): string;
export declare function unwrap(input: string, chars: string): string;
