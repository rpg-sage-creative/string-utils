import type { Optional } from "@rsc-utils/type-utils";
export declare function isBlank(text: Optional<string>): text is null | undefined | "";
export declare function isNotBlank(text: Optional<string>): text is string;
