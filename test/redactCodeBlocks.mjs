import { redactCodeBlocks } from "../build"
export function testRedactCodeBlocks() {
	const tests = [
	//    input                         expected output
		[" `redacted` ",               " `********` "],
		[" \\`notredacted\\` ",        " \\`notredacted\\` "],
		[" ``redacted`` ",             " ``********`` "],
		[" \\``redacted`\\` ",         " \\``********`\\` "],
		[" `\\`redacted\\`` ",         " `************` "],
		[" ```redacted``` ",           " ```********``` "],
		[" ```redacted\nredacted``` ", " ```*****************``` "],
		[" \\```redacted``\\` ",       " \\```********``\\` "],
		[" `\\``notredacted`\\`` ",    " `**`notredacted`**` "],
		[" \\``\\`redacted``\\` ",     " \\``**********``\\` "],
		[" \\``\\`redacted``\\` ",     " \\``**********``\\` "],
	];
	tests.forEach(([raw, expected]) => {
		const actual = redactCodeBlocks(raw);
		console.assert(expected === actual, `"${raw}" expected "${expected}" got "${actual}"`);
	});
}