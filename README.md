
# Exact Target XML (WordPress Plugin)

### Description:
###### App is a WordPress plugin that is used to convert posts into an XML feed, used in conjunction with DigitalRSS node app for enews/eblast e-mailings.


### Technologies:
- HTML/CSS
- NodeJS
- EJS
- XML to JSON Promise
	- Refer to ```package.json``` file for complete list of dependancies


### Installation:
1. ###### Configure Exact-Target-XML-Feed Wordpress Plugin with attached categories to specific POSTS
	- GitHub Repo: https://github.com/EPG-Media/exact-target-xml-feed

2. ###### Create a config file
	- Create ``config.json`` file using template below (each ejs template should have their own ``config.json`` file)
	- Path: ``./DigitalRSS/configs/ ``
		```
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
		```

3. ###### Create EJS template
	- Create an EJS template file including wrapper
	- Path: ``./DigitalRSS/views/``
		```
			<% for (let item of CATEGORY_NAME_SET_IN_CONFIG.json_items) { %>
			<!-- elements being looped on go here -->
			<% } %>
		```
	- See http://ejs.co for official documentation

4. ###### Add Template to newsletter.json file
	- Add Enews Letter to UI Select Option
	- Path: ``./DigitalRSS/configs/newsletter.json``
		```
			{
				"name": "NAME TO APPEAR IN SELECT OPTION",
				"config": "<LINK TO CONFIG.JSON FILE>"
			}
			<!-- example -->
			{
				"name": "snow-goer-store",
				"config": "https://epgmedia.s3.amazonaws.com/DigitalRSS/configs/snow-goer-store-newsletter-config.json"
			}
		```
		- NOTE: ``` ./DigitalRSS/configs/newsletter.json``` format is an array of objects

5. Starting Server (server is not used with this app/served with AWS)
	- ```npm start``` starts Server
	- ```npm test``` starts server with nodemon
