import type { ChunkOptions } from "./ChunkOptions.js";

/** @internal Creates ChunkOptions by applying optionsTwo to optionsOne and setting defaults for missing options. */
export function optionsToChunkOptions(optionsOne?: ChunkOptions, optionsTwo?: ChunkOptions): ChunkOptions {
	return {
		lineSplitter: optionsTwo?.lineSplitter ?? optionsOne?.lineSplitter ?? "\n",
		maxChunkLength: optionsTwo?.maxChunkLength ?? optionsOne?.maxChunkLength!,
		newLineCharacter: optionsTwo?.newLineCharacter ?? optionsOne?.newLineCharacter ?? "\n",
		wordSplitter: optionsTwo?.wordSplitter ?? optionsOne?.wordSplitter ?? " ",
		spaceCharacter: optionsTwo?.spaceCharacter ?? optionsOne?.spaceCharacter ?? " "
	};
}