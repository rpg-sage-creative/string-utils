import { testGetCodeBlockSafeSplitter } from "./getCodeBlockSafeSplitter.mjs";
import { testRedactCodeBlocks } from "./redactCodeBlocks.mjs";
import { testCreateUrlRegex } from "./createUrlRegex.mjs";

async function main() {
	testRedactCodeBlocks();
	testGetCodeBlockSafeSplitter();
	testCreateUrlRegex();
}
main();