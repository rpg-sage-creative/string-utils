/**
 * Used to wrap parentheses, brackets, or braces around a piece of text.
 * If the chars argument is even, then they are split and used as left/right.
 * If the chars argument is odd, then they are uesd as left and then they are reversed and used as right.
 */
export declare function wrap(input: string, chars: "[]"): string;
export declare function wrap(input: string, chars: "{}"): string;
export declare function wrap(input: string, chars: "()"): string;
export declare function wrap(input: string, chars: string): string;
