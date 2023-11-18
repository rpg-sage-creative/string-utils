export type KeyValueArg<T extends string = string> = {
    key: string;
    keyLower: string;
    value: T;
    clean: string;
    simple: string;
};
export declare function createKeyValueArgRegex(key?: string): RegExp;
export declare function isKeyValueArg(value: string, key?: string): boolean;
export declare function parseKeyValueArg(input: string, key?: string): KeyValueArg | null;
