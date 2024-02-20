import { debug, info, warn } from "@rsc-utils/console-utils";
import { assert, runTests, startAsserting, stopAsserting } from "@rsc-utils/test-utils";
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

	const wrapRegex = createUrlRegex({ wrapChars:"<>" });
	const wrapTest = url => wrapRegex.exec(url)?.[0];

	const wrapGoodUrls = [
		"<http://google.com/q?word=text#marked>",
		"<https://google.com:80/q?word=text#marked>"
	];
	wrapGoodUrls.forEach(url => assert(url, wrapTest, url));

	const wrapBadUrls = [
		"http://google.com/q?word=text#marked",
		"https://google.com:80/q?word=text#marked"
	];
	wrapBadUrls.forEach(url => assert(undefined, wrapTest, url));

	const wrapOptionalRegex = createUrlRegex({ wrapChars:"<>", wrapOptional:true });
	const wrapOptionalTest = url => wrapOptionalRegex.exec(url)?.[0];

	const wrapOptionalGoodUrls = [
		"http://google.com/q?word=text#marked",
		"<https://google.com:80/q?word=text#marked>"
	];
	wrapOptionalGoodUrls.forEach(url => assert(url, wrapOptionalTest, url));

	const wrapOptionalBadUrls = [
		"shttp://google.com/q?word=text#marked",
		"<shttps://google.com:80/q?word=text#marked>"
	];
	wrapOptionalBadUrls.forEach(url => assert(undefined, wrapOptionalTest, url));

	const anchoredWrapOptionalRegex = createUrlRegex({ anchored:true, wrapChars:"<>", wrapOptional:true });
	const anchoredWrapOptionalTest = url => anchoredWrapOptionalRegex.exec(url)?.[0];
	const anchoredWrapOptionalGoodUrls = [
		"https://cdn.discordapp.com/attachments/1173111558428184678/1204632128369983578/image.png?ex=65d57018&is=65c2fb18&hm=dfe49eddd9d55f29dd00a6d12e1bcc6e64218b7598b62827c32b15c5f0d466e3&",
	];
	anchoredWrapOptionalGoodUrls.forEach(url => assert(url, anchoredWrapOptionalTest, url));
});
