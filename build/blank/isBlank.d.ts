import type { Optional } from "@rsc-utils/core-utils";
/** Returns true if null, undefined, or only whitespace. */
export declare function isBlank(text: Optional<string>): text is null | undefined | "";
