export type TokenParsers = {
    [key: string]: RegExp;
};
export type TokenData<Key extends string = string> = {
    key: Key;
    matches: string[];
    token: string;
};
export declare function tokenize(input: string, parsers: TokenParsers, defaultKey?: string): TokenData[];
