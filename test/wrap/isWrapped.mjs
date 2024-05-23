import { assert, runTests } from "@rsc-utils/core-utils";
import { isWrapped } from "../../build/index.js";

runTests(async function test_isWrapped() {
	const s = "value";

	const goodTests = [
		[s, "||", `||||`], // basically "|(||)|"
		[s, "()", `(${s})`],
		[s, "[]", `[${s}]`],
		[s, "[]", `[[${s}]]`],
		[s, "[[]]", `[[${s}]]`],
		[s, "[[[]]]", `[[[${s}]]]`],
		[s, "[]", `[[[${s}]]]`],
		[s, "'", `'${s}'`],
		[s, "'''", `'''${s}'''`],
		[s, "'", `'''${s}'''`],
		[s, "'|:", `'|:${s}:|'`],
	];
	goodTests.forEach(([s, chars, input]) => assert(true, isWrapped, input, chars));

	const badTests = [
		[s, "||||", `||||`],
		[s, "()", `()`],
		[s, "(", `(${s})`],
	];
	badTests.forEach(([s, chars, input]) => assert(false, isWrapped, input, chars));
}, true);