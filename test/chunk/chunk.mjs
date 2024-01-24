import { chunk } from "../../build/index.js";
import { assert, debug, enableLogLevels, getAssertData, info, warn, error, runTests } from "@rsc-utils/console-utils";

async function testChunk() {
	const input = [
		[["this is\n a sentence\n that has a\n bunch of words."], "this is\n a sentence\n that has a\n bunch of words.", 2000],
		[["this is", " a sentence", " that has a", " bunch of", " words."], "this is\n a sentence\n that has a\n bunch of words.", 15],
		[["this is a", " sentence that", " has a bunch", " of words."], "this is a sentence that has a bunch of words.", 15],
	];
	input.forEach(([expected, value, length]) => {
		assert(expected, chunk, value, length);
	});
}
runTests(testChunk);
