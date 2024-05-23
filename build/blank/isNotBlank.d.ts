import type { Optional } from "@rsc-utils/core-utils";
/** Returns true if not null and not undefined and not only whitespace. */
export declare function isNotBlank(text: Optional<string>): text is string;
