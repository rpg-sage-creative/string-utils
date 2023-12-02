import XRegExp from "xregexp";
import { getKeyValueArgSource } from "./getKeyValueArgSource.js";
export function isKeyValueArg(value, key) {
    return XRegExp(`^${getKeyValueArgSource(key)}$`, "i").test(value);
}
