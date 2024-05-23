import { assert, runTests } from "@rsc-utils/core-utils";
import { stringOrUndefined } from "../../build/index.js";

runTests(async function test_stringOrUndefined() {
	const nonBlankTests = ["bob", "."];
	nonBlankTests.forEach(s => assert(s, stringOrUndefined, s));

	const blankTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	blankTests.forEach(s => assert(undefined, stringOrUndefined, s));
}, true);
