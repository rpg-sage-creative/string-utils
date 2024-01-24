import { assert, runTests } from "@rsc-utils/console-utils";
import { createUrlRegex } from "../build/index.js";

runTests(async function testCreateUrlRegex() {
	const regex = createUrlRegex({ anchored:true });
	const test = url => regex.exec(url)?.[0];

	const goodUrls = [
		"http://google.com/q?word=text#marked",
		"https://google.com:80/q?word=text#marked",
		"ftp://google.com:80/q?word=text#marked",
		"sftp://google.com:80/q?word=text#marked",
	];
	goodUrls.forEach(url => assert(url, test, url));

	const badUrls = [
		// port too long
		"https://google.com:655350/q?word=text#marked",
		// shttp not valid
		"shttp://google.com:80/q?word=text#marked",
		// ftps not valid
		"ftps://google.com:80/q?word=text#marked",
	];
	badUrls.forEach(url => assert(undefined, test, url));
});
