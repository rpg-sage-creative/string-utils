import type { Optional } from "@rsc-utils/type-utils";
/** Returns true if not null and not undefined and not only whitespace. */
export declare function isNotBlank(text: Optional<string>): text is string;
