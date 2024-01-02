import { testGetCodeBlockSafeSplitter } from "./getCodeBlockSafeSplitter.mjs";
import { testRedactCodeBlocks } from "./redactCodeBlocks.mjs";

async function main() {
	testRedactCodeBlocks();
	testGetCodeBlockSafeSplitter();
}
main();