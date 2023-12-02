import type { Matcher, MatcherResolvable, Optional } from "@rsc-utils/type-utils";
import { normalizeAscii } from "./normalize/normalizeAscii.js";
import { cleanWhitespace } from "./whitespace/cleanWhitespace.js";
import { removeAccents } from "./normalize/removeAccents.js";

/** A reusable object for comparing a string without the need to repeatedly manipulate the value. */
export class StringMatcher implements Matcher {
	public constructor(value: Optional<string>) {
		this.clean = StringMatcher.clean(value ?? "");
		this.isBlank = this.clean === "";
		this.lower = value?.toLowerCase() ?? "";
		this.value = value;
	}

	/** Stores StringMatcher.clean(value) */
	public clean: string;

	/** Stores string.isBlank(value) */
	public isBlank: boolean;

	/** Stores string.toLowerCase() */
	public lower: string;

	/** Stores the raw value. */
	public value: Optional<string>;

	/** Compares the clean values. */
	public matches(other: MatcherResolvable): boolean {
		if (other === null || other === undefined) {
			return false;
		}
		const otherClean = (other as StringMatcher).clean ?? StringMatcher.clean(String(other));
		return otherClean === this.clean;
	}

	/** Compares the clean values until it finds a match. */
	public matchesAny(others: MatcherResolvable[]): boolean {
		return others.find(other => this.matches(other)) !== undefined;
	}

	/** Returns the original value. */
	public toString(): string {
		return this.value ?? "";
	}

	/**
	 * Cleans the given value to make comparisons more reliable.
	 * Convenience for cleanWhitespace(normalizeAscii(removeAccents(String(value ?? "")))).toLowerCase()
	 */
	public static clean(value: Optional<string>): string {
		return cleanWhitespace(normalizeAscii(removeAccents(String(value ?? "")))).toLowerCase();
	}

	/** Convenience for StringMatcher.from(value).matches(other) */
	public static matches(value: MatcherResolvable, other: MatcherResolvable): boolean {
		return StringMatcher.from(value).matches(other);
	}

	/** Convenience for StringMatcher.from(value).matchesAny(others) */
	public static matchesAny(value: MatcherResolvable, others: MatcherResolvable[]): boolean {
		return StringMatcher.from(value).matchesAny(others);
	}

	/** Convenience for new StringMatcher(value) */
	public static from(value: Optional<MatcherResolvable>): StringMatcher {
		return new StringMatcher(typeof(value) === "string" ? value : value?.value);
	}
}
