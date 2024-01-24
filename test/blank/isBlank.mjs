import { assert, runTests } from "@rsc-utils/console-utils";
import { isBlank } from "../../build/index.js";

runTests(async function testIsBlank() {
	const blankTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	blankTests.forEach(s => assert(true, isBlank, s));

	const nonBlankTests = ["bob", "."];
	nonBlankTests.forEach(s => assert(false, isBlank, s));
}, true);
