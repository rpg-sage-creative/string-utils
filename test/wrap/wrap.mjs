import { debug, info, warn } from "@rsc-utils/console-utils";
import { assert, runTests, startAsserting, stopAsserting } from "@rsc-utils/test-utils";
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
});