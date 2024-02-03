import { debug, info, warn } from "@rsc-utils/console-utils";
import { assert, runTests, startAsserting, stopAsserting } from "@rsc-utils/test-utils";
import { chunk } from "../../build/index.js";

runTests(async function testChunk() {
	// [expectedArray, inputString, maxLength]
	const input = [
		[["this is\n a sentence\n that has a\n bunch of words."], "this is\n a sentence\n that has a\n bunch of words.", 2000],
		[["this is", " a sentence", " that has a", " bunch of", " words."], "this is\n a sentence\n that has a\n bunch of words.", 15],
		[["this is a", " sentence that", " has a bunch", " of words."], "this is a sentence that has a bunch of words.", 15],
	];
	input.forEach(([expected, value, length]) => {
		assert(expected, chunk, value, length);
	});
}, true);
