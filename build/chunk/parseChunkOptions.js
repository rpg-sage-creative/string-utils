import { isMaxChunkLengthOrCallback } from "./isMaxChunkLengthOrCallback.js";
import { numberToChunkOptions } from "./numberToChunkOptions.js";
import { optionsToChunkOptions } from "./optionsToChunkOptions.js";
export function parseChunkOptions(argOne, argTwo) {
    if (isMaxChunkLengthOrCallback(argOne)) {
        return numberToChunkOptions(argOne, argTwo);
    }
    return optionsToChunkOptions(argOne, argTwo);
}
