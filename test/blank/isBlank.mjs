import { assert, runTests } from "@rsc-utils/console-utils";
import { isBlank } from "../../build/index.js";

async function testIsBlank() {
	const trueTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	trueTests.forEach(s => assert(true, isBlank, s));
	const falseTests = ["bob", "."];
	falseTests.forEach(s => assert(false, isBlank, s));
}
runTests(testIsBlank);
