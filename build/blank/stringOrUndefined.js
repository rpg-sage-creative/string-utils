import { isBlank } from "./isBlank";
export function stringOrUndefined(value) {
    return isBlank(value) ? undefined : value;
}
