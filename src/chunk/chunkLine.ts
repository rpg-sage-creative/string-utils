import type { ChunkData } from "./ChunkData.js";
import type { ChunkOptions } from "./ChunkOptions.js";
import { chunkWord } from "./chunkWord.js";

/** @internal Breaks down a line if adding it would cause the current chunk to become too long. */
export function chunkLine(data: ChunkData, options: ChunkOptions, line: string, lineIndex: number): void {
	// We don't want a leading newLine
	const newLine = lineIndex > 0 ? options.newLineCharacter : "";

	// Test if the line would put the chunk over the maxChunkLength
	if (data.currentChunk.length + newLine.length + line.length < data.maxChunkLength(data.currentIndex)) {
		// If not, simply add it, including newLine since we split on that
		data.currentChunk += newLine + line;

	}else {
		// We know we are too long, so we push the current chunk and start a new one
		data.currentIndex = data.chunks.push(data.currentChunk);

		// Check to see if the line's length is shorter than maxChunkLength
		if (line.length < data.maxChunkLength(data.currentIndex)) {
			// If shorter, use it to start the new chunk
			data.currentChunk = line;

		}else {
			// The line needs to be split up, so start an empty chunk
			data.currentChunk = "";

			// Split the line into words (generally splitting on " ")
			const words = line.split(options.wordSplitter);

			// Iterate the words
			words.forEach((word, wordIndex) => chunkWord(data, options, word, wordIndex));

			// Include the last, trailing chunk
			data.currentIndex = data.chunks.push(data.currentChunk);

			// End of line, end of chunk
			data.currentChunk = "";
		}
	}
}
