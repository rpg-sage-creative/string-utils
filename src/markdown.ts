/*
 * export const ZERO_LENGTH_SPACE = "\u200b";
 * export const NONBREAKING_SPACE = "\u00A0";
*/

export const HORIZONTAL_TAB = " \u00A0 \u00A0";
export const BULLET = "\u2022";

/*
 * https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-
 */

type TAttributes = { [key:string]: string; };

function parseAttributes(attributesString: string): TAttributes {
	if (!attributesString) {
		return {};
	}

	const attsRegex = /\w+="[^"]+"/gi;
	const matches = attsRegex.exec(attributesString);
	if (!matches) {
		return {};
	}

	const attributes: TAttributes = { };
	const pairRegex = /(\w+)="([^"]+)"/i;
	matches.forEach(pair => {
		const match = pairRegex.exec(pair);
		if (match) {
			attributes[match[1]] = match[2];
		}
	});
	return attributes;
}

type THtmlToMarkdownHandler = (innerHtml: string, attributes: TAttributes, nodeName: string, outerHtml: string) => string;

/**
 * Handles nested html tags
 */
function htmlToMarkdown(text: string, elementName: string, openMarkdown: string): string;
function htmlToMarkdown(text: string, elementName: string, handler: THtmlToMarkdownHandler): string;
function htmlToMarkdown(text: string, elementName: string, handlerOrOpenMarkdown: string | THtmlToMarkdownHandler): string {
	if (!text) {
		return text;
	}

	let handler: THtmlToMarkdownHandler;
	if (typeof handlerOrOpenMarkdown === "function") {
		handler = handlerOrOpenMarkdown;
	}else {
		const openMarkdown = handlerOrOpenMarkdown;
		const closeMarkdown = Array.from(openMarkdown).reverse().join("");
		handler = (inner: string) => openMarkdown + inner + closeMarkdown;
	}

	const regex = new RegExp(`<(${elementName})( [^>]+)?>((?:.|\\n)*?)<\\/(?:${elementName})>`, "gi");
	return text.replace(regex, (outer, nodeName, attributes, inner) => handler(inner, parseAttributes(attributes), nodeName, outer));
}

function stripHtml(text: string): string {
	return text.replace(/<[^>]+>/gi, "");
}

class Formatter {
	public constructor(public text: string) { }

	public formatBlockQuote(): this {
		this.text = htmlToMarkdown(this.text, "blockquote", innerHtml => innerHtml.split("\n").map(s => "> " + s).join("\n"));
		return this;
	}

	public formatBold(): this {
		this.text = htmlToMarkdown(this.text, "b|strong", "**");
		return this;
	}

	public formatCode(): this {
		this.text = htmlToMarkdown(this.text, "code", "`");
		return this;
	}

	public formatHeaders(): this {
		this.text = htmlToMarkdown(this.text, "h1", innerHtml => `\n# ` + innerHtml);
		this.text = htmlToMarkdown(this.text, "h2", innerHtml => `\n## ` + innerHtml);
		this.text = htmlToMarkdown(this.text, "h3", innerHtml => `\n### ` + innerHtml);
		this.text = htmlToMarkdown(this.text, "h\\d", "\n__**");
		return this;
	}

	public formatHorizontalTab(): this {
		if (this.text) {
			// ensures blockquotes aren't broken
			this.text = this.text.replace(/\t([^>]|$)/g, HORIZONTAL_TAB + "$1");
		}
		return this;
	}

	public formatItalics(): this {
		this.text = htmlToMarkdown(this.text, "i|em", "*");
		return this;
	}

	public formatLinks(): this {
		this.text = htmlToMarkdown(this.text, "a", (text, attributes) => {
			if (!attributes?.href) {
				return text;
			}
			const titleText = attributes.title ? ` "${attributes.title}"` : ``;
			return `[${text}](${attributes.href}${titleText})`;
		});
		return this;
	}

	public formatNewLine(): this {
		this.text = htmlToMarkdown(this.text, "br/?", "\n");
		return this;
	}

	public formatOrderedList(): this {
		this.text = htmlToMarkdown(this.text, "ol", (list, attributes) => {
			const start = isNaN(+attributes.start) ? 1 : +attributes.start;
			let index = 0;
			return htmlToMarkdown(list, "li", value => `\n> **${start + index++}.** ${value}`);
		});
		return this;
	}

	public formatParagraph(): this {
		/** @todo format <p> tags */
		return this;
	}

	public formatStrikethrough(): this {
		this.text = htmlToMarkdown(this.text, "s|strike", "~~");
		return this;
	}

	public formatTable(): this {
		this.text = htmlToMarkdown(this.text, "table", tableHtml => {
			const table = [] as string[][];
			htmlToMarkdown(tableHtml, "tr", rowHtml => {
				const row = [] as string[];
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

	public formatUnderline(): this {
		this.text = htmlToMarkdown(this.text, "u", "__");
		return this;
	}

	public formatUnorderedList(): this {
		this.text = htmlToMarkdown(this.text, "ul", parentList => {
			const childHandled = htmlToMarkdown(parentList, "ul", nestedList => htmlToMarkdown(nestedList, "li", value => `\n> - ${value}`));
			return htmlToMarkdown(childHandled, "li", value => `\n>- ${value}`);
		});
		return this;
	}

	public toString(): string {
		return this.text;
	}
}

/** Converts HTML text to Markdown text. */
export function toMarkdown(html: string): string {
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
