import { assert, runTests } from "@rsc-utils/core-utils";
import { isNotBlank } from "../../build/index.js";

runTests(async function test_isNotBlank() {
	const nonBlankTests = ["bob", "."];
	nonBlankTests.forEach(s => assert(true, isNotBlank, s));

	const blankTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	blankTests.forEach(s => assert(false, isNotBlank, s));
}, true);
