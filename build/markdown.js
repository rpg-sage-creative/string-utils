export const HORIZONTAL_TAB = " \u00A0 \u00A0";
export const BULLET = "\u2022";
function parseAttributes(attributesString) {
    if (!attributesString) {
        return {};
    }
    const attsRegex = /\w+="[^"]+"/gi;
    const matches = attsRegex.exec(attributesString);
    if (!matches) {
        return {};
    }
    const attributes = {};
    const pairRegex = /(\w+)="([^"]+)"/i;
    matches.forEach(pair => {
        const match = pairRegex.exec(pair);
        if (match) {
            attributes[match[1]] = match[2];
        }
    });
    return attributes;
}
function htmlToMarkdown(text, elementName, handlerOrOpenMarkdown) {
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
    const regex = new RegExp(`<(${elementName})( [^>]+)?>((?:.|\\n)*?)<\\/(?:${elementName})>`, "gi");
    return text.replace(regex, (outer, nodeName, attributes, inner) => handler(inner, parseAttributes(attributes), nodeName, outer));
}
function stripHtml(text) {
    return text.replace(/<[^>]+>/gi, "");
}
class Formatter {
    text;
    constructor(text) {
        this.text = text;
    }
    formatBlockQuote() {
        this.text = htmlToMarkdown(this.text, "blockquote", innerHtml => innerHtml.split("\n").map(s => "> " + s).join("\n"));
        return this;
    }
    formatBold() {
        this.text = htmlToMarkdown(this.text, "b|strong", "**");
        return this;
    }
    formatCode() {
        this.text = htmlToMarkdown(this.text, "code", "`");
        return this;
    }
    formatHeaders() {
        this.text = htmlToMarkdown(this.text, "h1", innerHtml => `\n# ` + innerHtml);
        this.text = htmlToMarkdown(this.text, "h2", innerHtml => `\n## ` + innerHtml);
        this.text = htmlToMarkdown(this.text, "h3", innerHtml => `\n### ` + innerHtml);
        this.text = htmlToMarkdown(this.text, "h\\d", "\n__**");
        return this;
    }
    formatHorizontalTab() {
        if (this.text) {
            this.text = this.text.replace(/\t([^>]|$)/g, HORIZONTAL_TAB + "$1");
        }
        return this;
    }
    formatItalics() {
        this.text = htmlToMarkdown(this.text, "i|em", "*");
        return this;
    }
    formatLinks() {
        this.text = htmlToMarkdown(this.text, "a", (text, attributes) => {
            if (!attributes?.href) {
                return text;
            }
            const titleText = attributes.title ? ` "${attributes.title}"` : ``;
            return `[${text}](${attributes.href}${titleText})`;
        });
        return this;
    }
    formatNewLine() {
        this.text = htmlToMarkdown(this.text, "br/?", "\n");
        return this;
    }
    formatOrderedList() {
        this.text = htmlToMarkdown(this.text, "ol", (list, attributes) => {
            const start = isNaN(+attributes.start) ? 1 : +attributes.start;
            let index = 0;
            return htmlToMarkdown(list, "li", value => `\n> **${start + index++}.** ${value}`);
        });
        return this;
    }
    formatParagraph() {
        return this;
    }
    formatStrikethrough() {
        this.text = htmlToMarkdown(this.text, "s|strike", "~~");
        return this;
    }
    formatTable() {
        this.text = htmlToMarkdown(this.text, "table", tableHtml => {
            const table = [];
            htmlToMarkdown(tableHtml, "tr", rowHtml => {
                const row = [];
                htmlToMarkdown(rowHtml, "th|td", cellHtml => {
                    row.push(stripHtml(cellHtml));
                    return "";
                });
                table.push(row);
                return "";
            });
            return table.map((row, rowIndex) => {
                const underline = rowIndex ? "" : "__";
                const cells = row.join(" | ");
                return `> ${underline}${cells}${underline}`;
            }).join("\n");
        });
        return this;
    }
    formatUnderline() {
        this.text = htmlToMarkdown(this.text, "u", "__");
        return this;
    }
    formatUnorderedList() {
        this.text = htmlToMarkdown(this.text, "ul", parentList => {
            const childHandled = htmlToMarkdown(parentList, "ul", nestedList => htmlToMarkdown(nestedList, "li", value => `\n> - ${value}`));
            return htmlToMarkdown(childHandled, "li", value => `\n>- ${value}`);
        });
        return this;
    }
    toString() {
        return this.text;
    }
}
export function toMarkdown(html) {
    if (!html) {
        return html;
    }
    return new Formatter(html)
        .formatNewLine()
        .formatTable()
        .formatBold()
        .formatCode()
        .formatHeaders()
        .formatHorizontalTab()
        .formatItalics()
        .formatLinks()
        .formatOrderedList()
        .formatParagraph()
        .formatStrikethrough()
        .formatUnderline()
        .formatUnorderedList()
        .formatBlockQuote()
        .toString();
}
