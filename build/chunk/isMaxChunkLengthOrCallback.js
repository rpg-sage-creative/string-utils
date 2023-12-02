export function isMaxChunkLengthOrCallback(maxChunkLength) {
    const type = typeof (maxChunkLength);
    return type === "function" || type === "number";
}
