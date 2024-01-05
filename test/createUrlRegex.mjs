import { createUrlRegex } from "../build";

export function testCreateUrlRegex() {
	const regex = createUrlRegex();
	const urls = [
		"http://google.com/q?word=text#marked",
		"https://google.com:80/q?word=text#marked",
		"https://google.com:655350/q?word=text#marked",
		"ftp://google.com:80/q?word=text#marked",
		"sftp://google.com:80/q?word=text#marked",
		"ftps://google.com:80/q?word=text#marked",
	];
	urls.forEach(url => {
		console.assert(regex.exec(url)?.[0] === url, url);
	});
}