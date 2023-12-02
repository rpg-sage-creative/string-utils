import { isQuoted } from "./isQuoted.js";
export function dequote(value) {
    return isQuoted(value) ? value.slice(1, -1) : value;
}
