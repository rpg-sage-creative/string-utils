import { debug, info, warn } from "@rsc-utils/console-utils";
import { assert, runTests, startAsserting, stopAsserting } from "@rsc-utils/test-utils";
import { isWrapped } from "../../build/index.js";

runTests(async function test_unwrap() {
	const s = "value";
	const tests = [
		[`(${s})`, "()"],
		[`[${s}]`, "[]"],
		[`{${s}}`, "{}"],
	];
	tests.forEach(([input, chars]) => assert(chars, isWrapped, input));

	const goodTests = [
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
	goodTests.forEach(([s, chars, input]) => assert(chars, isWrapped, input, chars));

	const badTests = [
		[s, "(", `(${s})`],
	];
	badTests.forEach(([s, chars, input]) => assert(false, isWrapped, input, chars));
});