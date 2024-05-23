import { assert, runTests } from "@rsc-utils/core-utils";
import { isBlank } from "../../build/index.js";

runTests(async function test_isBlank() {
	const blankTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	blankTests.forEach(s => assert(true, isBlank, s));

	const nonBlankTests = ["bob", "."];
	nonBlankTests.forEach(s => assert(false, isBlank, s));
}, true);
