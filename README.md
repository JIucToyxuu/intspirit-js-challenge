# intspirit-js-challenge
     Test project for russian company by web development.
	
#### First run
Need go to path this project and run command:
```sh
$ make -f Makefile
```
It install all needed components for project and run server on  localhost:9000.

Note: in future time, start server with command:
```sh
$ node_modules/.bin/grunt server
```

####Tests
For start tests need:
* download and put to root path project [ChromeDriver], [Selenium server].
* (selenium-webdriver + jasmine) run command:
```sh
    $ node_modules/jasmine-node/bin/jasmine-node test/selenium/name_test_spec.js
```
* (jasmine) open in browser - test/jasmine/test.html
	
	
	
#### Documentation:

API
```sh
* postResponse(endUrl, params) - post request to server.
	input: 
			> endUrl - last fragment of url;
			> params - JSON object - { "request": "any text" }.
	output:
			> if success: deferred object;
			> if error: "postResponse - Post request failed!".
```
```sh
* getResponseCodes(endUrl) - get request to server.
	input: 
			> endUrl - last fragment of url.
	output:
			> if success: deferred object;
			> if error: "getResponseCodes - Get request failed!".
```			
```sh
* getDataSet(endUrl) - get request to server.
	input: 
			> endUrl - last fragment of url.
	output:
			> if success: deferred object;
			> if error: "getDataSet - Get request failed!".
```


[ChromeDriver]:http://chromedriver.storage.googleapis.com/index.html
[Selenium server]:http://selenium-release.storage.googleapis.com/index.html
