export function chunkWord(data, options, word, wordIndex) {
    const space = wordIndex > 0 ? options.spaceCharacter : "";
    if (data.currentChunk.length + space.length + word.length < data.maxChunkLength(data.currentIndex)) {
        data.currentChunk += space + word;
    }
    else {
        data.currentIndex = data.chunks.push(data.currentChunk);
        data.currentChunk = word;
    }
}
