import { debug, info, warn } from "@rsc-utils/console-utils";
import { assert, runTests, startAsserting, stopAsserting } from "@rsc-utils/test-utils";
import { stringOrUndefined } from "../../build/index.js";

runTests(async function teststringOrUndefined() {
	const nonBlankTests = ["bob", "."];
	nonBlankTests.forEach(s => assert(s, stringOrUndefined, s));

	const blankTests = [null, undefined, "", "      ", "\n", "\t", "\n\t", "\n \t"];
	blankTests.forEach(s => assert(undefined, stringOrUndefined, s));
}, true);
