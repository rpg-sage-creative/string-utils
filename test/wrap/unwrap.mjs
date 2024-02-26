import { debug, info, warn } from "@rsc-utils/console-utils";
import { assert, runTests, startAsserting, stopAsserting } from "@rsc-utils/test-utils";
import { unwrap } from "../../build/index.js";

runTests(async function test_unwrap() {
	const s = "value";
	const tests = [
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
	tests.forEach(([output, chars, input]) => assert(output, unwrap, input, chars));
});