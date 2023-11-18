import type { Optional } from "@rsc-utils/type-utils";
export type TStringMatcher = {
    clean: string;
    isBlank: boolean;
    lower: string;
    value: Optional<string>;
};
export type TStringMatcherResolvable = Optional<string> | TStringMatcher;
export type TParsers = {
    [key: string]: RegExp;
};
export type TToken<Type extends string = string> = {
    token: string;
    type: Type;
    matches: string[];
};
export type TKeyValueArg = {
    key: string;
    keyLower: string;
    value: string;
    clean: string;
};
