import type { Optional } from "@rsc-utils/type-utils";
export declare function capitalize<T extends string = string>(value: T): string;
export declare function capitalize<T extends string = string>(value: Optional<T>): Optional<string>;
export declare function capitalize<T extends string = string>(value: T, splitter: string | RegExp): string;
export declare function capitalize<T extends string = string>(value: Optional<T>, splitter: string | RegExp): Optional<string>;
export declare function capitalize<T extends string = string>(value: T, splitter: string | RegExp, joiner: string): string;
export declare function capitalize(value: string, splitter: string | RegExp, joiner: string): string;
