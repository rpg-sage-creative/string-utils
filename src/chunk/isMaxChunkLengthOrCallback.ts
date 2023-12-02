import type { ChunkOptions } from "./ChunkOptions.js";
import type { MaxChunkLengthCallback } from "./MaxChunkLengthCallback.js";

/** @internal Convenient way of checking and casting the data type. */
export function isMaxChunkLengthOrCallback(maxChunkLength: number | ChunkOptions | MaxChunkLengthCallback | undefined): maxChunkLength is number | MaxChunkLengthCallback {
	const type = typeof(maxChunkLength);
	return type === "function" || type === "number";
}
