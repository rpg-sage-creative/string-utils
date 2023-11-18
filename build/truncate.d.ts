import type { Optional } from "@rsc-utils/type-utils";
export declare function truncate<T extends string = string>(value: T, maxLength: number): T;
export declare function truncate<T extends string = string>(value: Optional<T>, maxLength: number): Optional<T>;
export declare function truncate<T extends string = string>(value: T, maxLength: number, ellipsis: true): T;
export declare function truncate<T extends string = string>(value: Optional<T>, maxLength: number, ellipsis: true): Optional<T>;
export declare function truncate<T extends string = string, U extends string = string>(value: T, maxLength: number, suffix: U): T;
export declare function truncate<T extends string = string, U extends string = string>(value: Optional<T>, maxLength: number, suffix: U): Optional<T>;
