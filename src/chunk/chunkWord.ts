import type { ChunkData } from "./ChunkData.js";
import type { ChunkOptions } from "./ChunkOptions.js";

/** @internal Creates a new chunk if adding the word would cause the current chunk to become too long. */
export function chunkWord(data: ChunkData, options: ChunkOptions, word: string, wordIndex: number): void {
	// We don't want a leading space
	const space = wordIndex > 0 ? options.spaceCharacter : "";

	// Test if the word would put the chunk over the maxChunkLength
	if (data.currentChunk.length + space.length + word.length < data.maxChunkLength(data.currentIndex)) {
		// If not, simply add it, including the space since we split on that
		data.currentChunk += space + word;

	}else {
		// We know we are too long, so we push the current chunk and start a new one
		data.currentIndex = data.chunks.push(data.currentChunk);

		// Start the new chunk with the current word
		data.currentChunk = word;
	}
}
