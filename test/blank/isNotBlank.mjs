import { assert, runTests } from "@rsc-utils/console-utils";
import { isNotBlank } from "../../build/index.js";

async function testIsBlank() {
	const trueTests = ["bob", "."];
	trueTests.forEach(s => assert(true, isNotBlank, s));
	const falseTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	falseTests.forEach(s => assert(false, isNotBlank, s));
}
runTests(testIsBlank);
