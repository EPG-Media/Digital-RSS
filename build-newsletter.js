
// defining dependancies
const ejs = require ("ejs");
const fs = require ("fs");
const convert = require ("xml-to-json-promise");
const util = require ("./util/newsletter-util.js");

// eporting newsletter build
exports.build_newsletter = function (config) {
	Promise.all (
		config.links.map (link => util.getContent (link))
	)
	.then (bodies => {
		Promise.all (
			bodies.map (body => convert.xmlDataToJSON (body, {explicitArray:false}))
		)
		.then (jsons => {
			const date = new Date();

			let data = {
				month: util.months [date.getMonth()],
				day:   date.getDate(),
				year:  date.getFullYear()
			};

			for (let i = 0; i < jsons.length; i++) {
				let item = Array.isArray (jsons [i].rss.channel.item) ? jsons [i].rss.channel.item : [jsons [i].rss.channel.item];

				data [config.names [i]] = item;
			}

			ejs.renderFile (config.view, data, (err, result) => {
				if (err) {
					console.log ('info', 'error encountered: ' + err);
					throw err;
				}
				else {
					fs.writeFileSync (config.output, result, 'utf8');
				}
			});
		})
		.catch (err => console.log (err));
	})
	.catch (err => console.log (err));
};
