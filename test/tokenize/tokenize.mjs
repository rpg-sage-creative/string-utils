import { assert, runTests } from "@rsc-utils/core-utils";
import { tokenize } from "../../build/index.js";

runTests(async function test_tokenize() {
	/*
	* tokenize('this is text.', { word:/\w+/, whitespace:/\s+/, punctuation:/[^\w\s]/ }, 'invalid');
	* result => [{ token="this", key="word" }, { token=" ", key="whitespace" }, { token="is", key="word" }, ... ]
	*/
	let input = 'this is text.';
	let parsers = { word:/\w+/, whitespace:/\s+/, punctuation:/[^\w\s]/ };
	let defToken = 'invalid';
	let expected = [
		{ key:"word", matches:[], token:"this" },
		{ key:"whitespace", matches:[], token:" " },
		{ key:"word", matches:[], token:"is" },
		{ key:"whitespace", matches:[], token:" " },
		{ key:"word", matches:[], token:"text" },
		{ key:"punctuation", matches:[], token:"." }
	];
	assert(expected, tokenize, input, parsers, defToken);

	input = 'hi first.last!';
	parsers = { firstDotLast:/(\w+)\.(\w+)/, word:/\w+/, whitespace:/\s+/, punctuation:/[^\w\s]/ };
	expected = [
		{ key:"word", matches:[], token:"hi" },
		{ key:"whitespace", matches:[], token:" " },
		{ key:"firstDotLast", matches:["first", "last"], token:"first.last" },
		{ key:"punctuation", matches:[], token:"!" }
	];
	assert(expected, tokenize, input, parsers, defToken);

}, true);