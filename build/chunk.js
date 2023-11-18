function isMaxChunkLengthOrCallback(maxChunkLength) {
    const type = typeof (maxChunkLength);
    return type === "function" || type === "number";
}
function numberToChunkOptions(maxChunkLength, options) {
    return {
        lineSplitter: options?.lineSplitter ?? "\n",
        maxChunkLength: options?.maxChunkLength ?? maxChunkLength,
        newLineCharacter: options?.newLineCharacter ?? "\n",
        spaceCharacter: options?.spaceCharacter ?? " ",
        wordSplitter: options?.wordSplitter ?? " "
    };
}
function optionsToChunkOptions(optionsOne, optionsTwo) {
    return {
        lineSplitter: optionsTwo?.lineSplitter ?? optionsOne?.lineSplitter ?? "\n",
        maxChunkLength: optionsTwo?.maxChunkLength ?? optionsOne?.maxChunkLength,
        newLineCharacter: optionsTwo?.newLineCharacter ?? optionsOne?.newLineCharacter ?? "\n",
        wordSplitter: optionsTwo?.wordSplitter ?? optionsOne?.wordSplitter ?? " ",
        spaceCharacter: optionsTwo?.spaceCharacter ?? optionsOne?.spaceCharacter ?? " "
    };
}
function parseChunkOptions(argOne, argTwo) {
    if (isMaxChunkLengthOrCallback(argOne)) {
        return numberToChunkOptions(argOne, argTwo);
    }
    return optionsToChunkOptions(argOne, argTwo);
}
export function chunk(input, argOne, argTwo) {
    const options = parseChunkOptions(argOne, argTwo);
    const lines = input.split(options.lineSplitter);
    if (typeof (options.maxChunkLength) !== "function" && (options.maxChunkLength ?? 0) <= 0) {
        return lines;
    }
    const info = {
        chunks: [],
        currentChunk: "",
        currentIndex: 0,
        maxChunkLength: typeof options.maxChunkLength === "function"
            ? options.maxChunkLength
            : () => options.maxChunkLength
    };
    lines.forEach((line, lineIndex) => chunkLine(info, options, line, lineIndex));
    if (info.currentChunk.length > 0) {
        info.currentIndex = info.chunks.push(info.currentChunk);
    }
    return info.chunks;
}
function chunkLine(info, options, line, lineIndex) {
    const newLine = lineIndex > 0 ? options.newLineCharacter : "";
    if (info.currentChunk.length + newLine.length + line.length < info.maxChunkLength(info.currentIndex)) {
        info.currentChunk += newLine + line;
    }
    else {
        info.currentIndex = info.chunks.push(info.currentChunk);
        if (line.length < info.maxChunkLength(info.currentIndex)) {
            info.currentChunk = line;
        }
        else {
            info.currentChunk = "";
            const words = line.split(options.wordSplitter);
            words.forEach((word, wordIndex) => chunkWord(info, options, word, wordIndex));
            info.currentIndex = info.chunks.push(info.currentChunk);
            info.currentChunk = "";
        }
    }
}
function chunkWord(info, options, word, wordIndex) {
    const space = wordIndex > 0 ? options.spaceCharacter : "";
    if (info.currentChunk.length + space.length + word.length < info.maxChunkLength(info.currentIndex)) {
        info.currentChunk += space + word;
    }
    else {
        info.currentIndex = info.chunks.push(info.currentChunk);
        info.currentChunk = word;
    }
}
