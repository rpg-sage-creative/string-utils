import { chunkWord } from "./chunkWord.js";
export function chunkLine(data, options, line, lineIndex) {
    const newLine = lineIndex > 0 ? options.newLineCharacter : "";
    if (data.currentChunk.length + newLine.length + line.length < data.maxChunkLength(data.currentIndex)) {
        data.currentChunk += newLine + line;
    }
    else {
        data.currentIndex = data.chunks.push(data.currentChunk);
        if (line.length < data.maxChunkLength(data.currentIndex)) {
            data.currentChunk = line;
        }
        else {
            data.currentChunk = "";
            const words = line.split(options.wordSplitter);
            words.forEach((word, wordIndex) => chunkWord(data, options, word, wordIndex));
            data.currentIndex = data.chunks.push(data.currentChunk);
            data.currentChunk = "";
        }
    }
}
