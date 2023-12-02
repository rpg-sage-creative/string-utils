import type { Matcher, MatcherResolvable, Optional } from "@rsc-utils/type-utils";
/** A reusable object for comparing a string without the need to repeatedly manipulate the value. */
export declare class StringMatcher implements Matcher {
    constructor(value: Optional<string>);
    /** Stores StringMatcher.clean(value) */
    clean: string;
    /** Stores string.isBlank(value) */
    isBlank: boolean;
    /** Stores string.toLowerCase() */
    lower: string;
    /** Stores the raw value. */
    value: Optional<string>;
    /** Compares the clean values. */
    matches(other: MatcherResolvable): boolean;
    /** Compares the clean values until it finds a match. */
    matchesAny(others: MatcherResolvable[]): boolean;
    /** Returns the original value. */
    toString(): string;
    /**
     * Cleans the given value to make comparisons more reliable.
     * Convenience for cleanWhitespace(normalizeAscii(removeAccents(String(value ?? "")))).toLowerCase()
     */
    static clean(value: Optional<string>): string;
    /** Convenience for StringMatcher.from(value).matches(other) */
    static matches(value: MatcherResolvable, other: MatcherResolvable): boolean;
    /** Convenience for StringMatcher.from(value).matchesAny(others) */
    static matchesAny(value: MatcherResolvable, others: MatcherResolvable[]): boolean;
    /** Convenience for new StringMatcher(value) */
    static from(value: Optional<MatcherResolvable>): StringMatcher;
}
