import { normalizeAscii } from "./normalize/normalizeAscii.js";
import { cleanWhitespace } from "./whitespace/cleanWhitespace.js";
import { removeAccents } from "./normalize/removeAccents.js";
export class StringMatcher {
    constructor(value) {
        this.clean = StringMatcher.clean(value ?? "");
        this.isBlank = this.clean === "";
        this.lower = value?.toLowerCase() ?? "";
        this.value = value;
    }
    clean;
    isBlank;
    lower;
    value;
    matches(other) {
        if (other === null || other === undefined) {
            return false;
        }
        const otherClean = other.clean ?? StringMatcher.clean(String(other));
        return otherClean === this.clean;
    }
    matchesAny(others) {
        return others.find(other => this.matches(other)) !== undefined;
    }
    toString() {
        return this.value ?? "";
    }
    static clean(value) {
        return cleanWhitespace(normalizeAscii(removeAccents(String(value ?? "")))).toLowerCase();
    }
    static matches(value, other) {
        return StringMatcher.from(value).matches(other);
    }
    static matchesAny(value, others) {
        return StringMatcher.from(value).matchesAny(others);
    }
    static from(value) {
        return new StringMatcher(typeof (value) === "string" ? value : value?.value);
    }
}
