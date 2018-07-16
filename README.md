Author
======
* Name:     Joseph Gaspar
* Nickname: Joe Gee
* Website:  Joe-Gee.com
* Email:    josephg21886@gmail.com, Joe@Joe-Gee.com

How to create a new newsletter from xml feeds:
==============================================
1. Create EJS template.
	1. EJS is javascript inside tags <% ... %> mixed in with HTML
		* example:
			```
			<% if (true) { %>
				<p> This section of HTML will be included in the final HTML output </p>
			<% } else { %>
				<p> This section of HTML will not be included in the final HTML output </p>
			<% } %>
			<% /* This is a Javascript comment and will not appear in the final output */ %>
			<%# This is also a comment, but it uses the EJS style %>
			```
	2. See http://ejs.co for official documentation.
2. Create a config file.
	1. A config file is just a javascript file that exports an object with a specific structure:
		* example:
			```
			exports.config = {
				view:   "./views/name-of-template.ejs",
				output: "./output/name-of-output-html.html",
				links: [
					"http://some-link-url.com/category/featured-articles/?feed=xtxml",
					"http://etc.com ..."
				],
				names: [
					"featured_items",
					"etc_items"
				]
			};
			```
		* NOTE 1: the order of the list of names in the config must correspond to the order of the list of xml feed links.
		* NOTE 2: names can contain underscores, but not dashes.
		* NOTE 3: names are the same names of lists of items referenced in the template files.
		* Example: `<% for (let item of featured_items) { %>`
3. Add line to the app.js file:
	* Example: `app.build_newsletter (require ("./configs/some-config-file.js").config);`
4. Run the app to compile the templates into HTML
	* On the command line, make sure your current working directory is the directory with this README.md file in it.
	* type: `node app.js`
	* Please be patient, as the program has to access the xml feeds, which could take seconds.
	* Compiled HTML Output is sent to the output directory.
