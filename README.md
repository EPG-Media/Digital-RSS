# Exact Target XML

### Description:
###### App is a WordPress plugin that is used to convert posts into an XML feed, used in conjunction with DigitalRSS node app for enews/eblast e-mailings.


### Technologies:
- HTML/CSS
- NodeJS
- EJS
- XML To JSON Promise


### Installation
- Create EJS template.
	1. Create an EJS template
	2. See http://ejs.co for official documentation.
- Create a config file.
	1. A config file is just a javascript file that exports an object with a specific structure:
	
		``
			{
				"template": "<LINK?PATH TO EJS TEMPLATE>",
				"feeds": [
				  {
						"name": "SPECIFIC CATEGORY_items",
						"link": "<YOUR LINK TO SPECIFIC CATEGORY XML FEED>"
					},
					<!-- example -->
					{
						"name": "enews_two_items",
						"link": "https://womanrider.com/category/enews-two/?feed=xtxml"
					},
				]
			}
		``

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
