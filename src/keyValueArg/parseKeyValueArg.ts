import { dequote, quote } from "../quote";
import { KeyValueArg } from "./KeyValueArg.js";
import { isKeyValueArg } from "./isKeyValueArg.js";

/** Returns KeyValueArg if the input is a valid key/value pairing, null otherwise. */
export function parseKeyValueArg(input: string): KeyValueArg | null;

/** Returns KeyValueArg if the input is a valid key/value pairing that matches the given key, null otherwise. */
export function parseKeyValueArg(input: string, key: string): KeyValueArg | null;

export function parseKeyValueArg(input: string, key?: string): KeyValueArg | null {
	if (isKeyValueArg(input, key)) {
		const index = input.indexOf("=");
		const key = input.slice(0, index);
		const keyLower = key.toLowerCase();
		const value = dequote(input.slice(index + 1).trim());
		const quoted = quote(value);
		const clean = `${keyLower}=${quoted}`;
		return { key, keyLower, value, clean };
	}
	return null;
}