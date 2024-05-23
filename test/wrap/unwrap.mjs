import { assert, runTests } from "@rsc-utils/core-utils";
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
}, true);