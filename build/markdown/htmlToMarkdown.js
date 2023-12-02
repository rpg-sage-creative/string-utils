import XRegExp from "xregexp";
import { parseKeyValueArgs } from "../keyValueArg/parseKeyValueArgs.js";
export function htmlToMarkdown(text, elementName, handlerOrOpenMarkdown) {
    if (!text) {
        return text;
    }
    let handler;
    if (typeof handlerOrOpenMarkdown === "function") {
        handler = handlerOrOpenMarkdown;
    }
    else {
        const openMarkdown = handlerOrOpenMarkdown;
        const closeMarkdown = Array.from(openMarkdown).reverse().join("");
        handler = (inner) => openMarkdown + inner + closeMarkdown;
    }
    const regex = XRegExp(`<(${elementName})( [^>]+)?>((?:.|\\n)*?)<\\/(?:${elementName})>`, "gi");
    return text.replace(regex, (outer, nodeName, attributes, inner) => {
        const attributeMap = parseKeyValueArgs(attributes).reduce((map, arg) => {
            map.set(arg.key, arg.value);
            return map;
        }, new Map());
        return handler(inner, attributeMap, nodeName, outer);
    });
}
