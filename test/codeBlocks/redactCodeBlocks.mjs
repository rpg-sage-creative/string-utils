import { assert, runTests } from "@rsc-utils/console-utils";
import { redactCodeBlocks } from "../../build/index.js";

runTests(async function testRedactCodeBlocks() {
	const tests = [
	//   input                          expected output
		[" hi `redacted` no `shit` ",   " hi `********` no `****` "],
		[" \\`notredacted\\` `hi` go ", " \\`notredacted\\` `**` go "],
		["`0` ``redacted`` \\`9`",      "`*` ``********`` \\`9`"],
		[" \\``redacted`\\` ",          " \\``********`\\` "],
		[" `\\`redacted\\`` ",          " `************` "],
		[" ```redacted``` ",            " ```********``` "],
		[" ```redacted\nredacted``` ",  " ```*****************``` "],
		[" \\```redacted``\\` ",        " \\```********``\\` "],
		[" `\\``notredacted`\\`` ",     " `**`notredacted`**` "],
		[" \\``\\`redacted``\\` ",      " \\``**********``\\` "],
		[" \\``\\`redacted``\\` ",      " \\``**********``\\` "],
	];
	tests.forEach(([raw, expected]) => {
		assert(expected, redactCodeBlocks, raw);
	});
}, true);
