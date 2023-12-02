export function optionsToChunkOptions(optionsOne, optionsTwo) {
    return {
        lineSplitter: optionsTwo?.lineSplitter ?? optionsOne?.lineSplitter ?? "\n",
        maxChunkLength: optionsTwo?.maxChunkLength ?? optionsOne?.maxChunkLength,
        newLineCharacter: optionsTwo?.newLineCharacter ?? optionsOne?.newLineCharacter ?? "\n",
        wordSplitter: optionsTwo?.wordSplitter ?? optionsOne?.wordSplitter ?? " ",
        spaceCharacter: optionsTwo?.spaceCharacter ?? optionsOne?.spaceCharacter ?? " "
    };
}
