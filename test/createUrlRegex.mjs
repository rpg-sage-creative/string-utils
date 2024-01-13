import { createUrlRegex } from "../build/index.js";

export function testCreateUrlRegex() {
	const regex = createUrlRegex();
	const goodUrls = [
		"http://google.com/q?word=text#marked",
		"https://google.com:80/q?word=text#marked",
		"ftp://google.com:80/q?word=text#marked",
		"sftp://google.com:80/q?word=text#marked",
	];
	const badUrls = [
		"https://google.com:655350/q?word=text#marked",
		"shttp://google.com:80/q?word=text#marked",
		"ftps://google.com:80/q?word=text#marked",
	];
	goodUrls.forEach(url => {
		console.assert(regex.exec(url)?.[0] === url, `Invalid url: ${url}`);
	});
	badUrls.forEach(url => {
		console.assert(regex.exec(url)?.[0] !== url, `Valid url: ${url}`);
	});
}