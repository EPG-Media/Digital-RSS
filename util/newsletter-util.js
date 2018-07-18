
// exporting months
exports.months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

// getting and exporting rss data from WP feed
exports.getContent  = function (url) {
	return new Promise((resolve, reject) => {
		const lib = url.startsWith('https') ? require('https') : require('http');
		const request = lib.get(url, (response) => {
			if (response.statusCode < 200 || response.statusCode > 299) {
				reject(new Error('Failed to load page, status code: ' + response.statusCode));
			}
			const body = [];
			response.on('data', (chunk) => body.push(chunk));
			response.on('end', () => resolve(body.join('')));
		});
		request.on('error', (err) => reject(err))
	})
};
