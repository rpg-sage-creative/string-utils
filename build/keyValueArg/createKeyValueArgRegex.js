import XRegExp from "xregexp";
import { getKeyValueArgSource } from "./getKeyValueArgSource.js";
export function createKeyValueArgRegex(key) {
    return XRegExp(getKeyValueArgSource(key), "i");
}
