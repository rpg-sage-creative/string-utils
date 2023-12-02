import XRegExp from "xregexp";
function findNext(content, startIndex) {
    const sliced = content.slice(startIndex);
    const leftRegex = /((?<!\\)`){1,3}/;
    const leftMatch = leftRegex.exec(sliced);
    if (!leftMatch) {
        return null;
    }
    let leftIndex = leftMatch.index;
    let ticks = leftMatch[0].length;
    do {
        const rightRegex = XRegExp(`((?<!\\\\)\`){${ticks}}`);
        const rightMatch = rightRegex.exec(sliced.slice(leftIndex + ticks));
        if (rightMatch) {
            const index = startIndex + leftIndex;
            const length = rightMatch.index + ticks * 2;
            const match = content.slice(index, index + length);
            return { index, length, match, ticks };
        }
        ticks--;
        leftIndex++;
    } while (ticks > 0);
    return null;
}
export function matchCodeBlocks(content) {
    const matches = [];
    let lastIndex = 0;
    let match;
    while (match = findNext(content, lastIndex)) {
        matches.push(match);
        lastIndex = match.index + match.length;
    }
    return matches;
}
