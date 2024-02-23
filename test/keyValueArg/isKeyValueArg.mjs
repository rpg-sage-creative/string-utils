import { debug, info, warn } from "@rsc-utils/console-utils";
import { assert, runTests, startAsserting, stopAsserting } from "@rsc-utils/test-utils";
import { isKeyValueArg, wrap, quote } from "../../build/index.js";

runTests(async function test_isKeyValueArg() {
	// “”, „“, „”, "", '', ‘’
	const quotes = [`“”`, `„“`, `„”`, `""`, `''`, `‘’`, "``"];
	const goodKeys = ["lower", "UPPER", "camelCase", "dot.notation"];
	const empties = quotes.map(quotes => wrap("", quotes));
	const values = quotes.map(quotes => wrap("value", quotes));
	const quotedValues = values.map(value => quote(`quoted ${value}`));
	const doubleQuotedValues = quotedValues.map(value => quote(value));
	const goodValues = empties.concat(values).concat(quotedValues).concat(doubleQuotedValues);
	const goodTests = goodKeys.map(key => goodValues.map(val => `${key}=${val}`)).flat();
	goodTests.forEach(test => debug(test));
	goodTests.forEach(value => assert(true, isKeyValueArg, value));

	const badValues = [``, `=`, `= `, `=" '`];
	const badTests = goodKeys.map(key => badValues.map(val => key+val)).flat();
	badTests.forEach(value => assert(false, isKeyValueArg, value));

});