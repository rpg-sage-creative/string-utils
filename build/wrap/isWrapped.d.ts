/**
 * Returns the characters wrapping the content, usually (), [], or {}.
 * Returns false if the content is not wrapped by the given characters or (), [], or {}.
 * If the chars argument is even, then they are split and used as left/right.
 * If the chars argument is odd, then they are uesd as left and then they are reversed and used as right.
 */
export declare function isWrapped(input: string, chars?: string): string | false;
