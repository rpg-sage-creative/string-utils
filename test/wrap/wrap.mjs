import { assert, runTests } from "@rsc-utils/core-utils";
import { wrap } from "../../build/index.js";

runTests(async function test_wrap() {
	const s = "value";
	const tests = [
		[s, "()", `(${s})`],
		[s, "[]", `[${s}]`],
		[s, "[[]]", `[[${s}]]`],
		[s, "[[[]]]", `[[[${s}]]]`],
		[s, "'", `'${s}'`],
		[s, "'''", `'''${s}'''`],
		[s, "'|:", `'|:${s}:|'`],
	];
	tests.forEach(([input, chars, output]) => assert(output, wrap, input, chars));
}, true);