export function numberToChunkOptions(maxChunkLength, options) {
    return {
        lineSplitter: options?.lineSplitter ?? "\n",
        maxChunkLength: options?.maxChunkLength ?? maxChunkLength,
        newLineCharacter: options?.newLineCharacter ?? "\n",
        spaceCharacter: options?.spaceCharacter ?? " ",
        wordSplitter: options?.wordSplitter ?? " "
    };
}
