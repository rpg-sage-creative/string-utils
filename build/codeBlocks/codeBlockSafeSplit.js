import XRegExp from "xregexp";
import { matchCodeBlocks } from "./matchCodeBlocks.js";
export function codeBlockSafeSplit(value, splitter, limit) {
    const lines = [];
    const testLimit = limit !== undefined;
    const codeBlocks = matchCodeBlocks(value);
    const regex = typeof (splitter) === "string" ? XRegExp(splitter) : splitter;
    let index = -1;
    let lastIndex = 0;
    do {
        do {
            index = XRegExp.exec(value, regex, index + 1)?.index ?? -1;
        } while (-1 < index && codeBlocks.find(codeBlock => codeBlock.index < index && index < codeBlock.index + codeBlock.length));
        if (-1 < index) {
            lines.push(value.slice(lastIndex, index));
            lastIndex = index + 1;
        }
        else {
            lines.push(value.slice(lastIndex));
        }
        if (testLimit && lines.length === limit) {
            break;
        }
    } while (-1 < index);
    return lines;
}
