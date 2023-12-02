import type { ChunkOptions } from "./ChunkOptions.js";
import type { MaxChunkLengthCallback } from "./MaxChunkLengthCallback.js";
import { isMaxChunkLengthOrCallback } from "./isMaxChunkLengthOrCallback.js";
import { numberToChunkOptions } from "./numberToChunkOptions.js";
import { optionsToChunkOptions } from "./optionsToChunkOptions.js";

/** @internal Parses the given arguments into ChunkOptions */
export function parseChunkOptions(argOne?: number | ChunkOptions | MaxChunkLengthCallback, argTwo?: ChunkOptions): ChunkOptions {
	if (isMaxChunkLengthOrCallback(argOne)) {
		return numberToChunkOptions(argOne, argTwo);
	}
	return optionsToChunkOptions(argOne, argTwo);
}
