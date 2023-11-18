import { redactCodeBlocks } from "../build"

/** A handful of tests to ensure the logic is working. */
export function testRedactCodeBlocks() {
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
		const actual = redactCodeBlocks(raw);
		console.assert(expected === actual, `"${raw}" expected "${expected}" got "${actual}"`);
	});
}
