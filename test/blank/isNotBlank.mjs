import { assert, runTests } from "@rsc-utils/console-utils";
import { isNotBlank } from "../../build/index.js";

runTests(async function testIsBlank() {
	const nonBlankTests = ["bob", "."];
	nonBlankTests.forEach(s => assert(true, isNotBlank, s));

	const blankTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	blankTests.forEach(s => assert(false, isNotBlank, s));
}, true);
