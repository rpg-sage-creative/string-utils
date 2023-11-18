import type { Matcher, MatcherResolvable, Optional } from "@rsc-utils/type-utils";
export declare class StringMatcher implements Matcher {
    constructor(value: Optional<string>);
    clean: string;
    isBlank: boolean;
    lower: string;
    value: Optional<string>;
    matches(other: MatcherResolvable): boolean;
    matchesAny(others: MatcherResolvable[]): boolean;
    toString(): string;
    static clean(value: Optional<string>): string;
    static matches(value: MatcherResolvable, other: MatcherResolvable): boolean;
    static matchesAny(value: MatcherResolvable, others: MatcherResolvable[]): boolean;
    static from(value: Optional<MatcherResolvable>): StringMatcher;
}
