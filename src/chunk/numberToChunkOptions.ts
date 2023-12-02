import type { ChunkOptions } from "./ChunkOptions.js";
import type { MaxChunkLengthCallback } from "./MaxChunkLengthCallback.js";

/** @internal Create chunk options from defaults with the given maxChunkLength. */
export function numberToChunkOptions(maxChunkLength: number | MaxChunkLengthCallback, options?: ChunkOptions): ChunkOptions {
	return {
		lineSplitter: options?.lineSplitter ?? "\n",
		maxChunkLength: options?.maxChunkLength ?? maxChunkLength,
		newLineCharacter: options?.newLineCharacter ?? "\n",
		spaceCharacter: options?.spaceCharacter ?? " ",
		wordSplitter: options?.wordSplitter ?? " "
	};
}
