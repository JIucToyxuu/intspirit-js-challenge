describe('App', function() {
	var webdriver = require('selenium-webdriver');
	var driver;

	describe('Task1', function() {

		beforeEach(function() {
			driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).
			build();
			driver.get('http://localhost:9000/src/task1.html');
		});

		afterEach(function() {
			driver.quit();
		});

		xit('should be shown the text - "This field is empty!"', function(done) { //worked
			driver.findElement(webdriver.By.id('inputText')).sendKeys('          ');
			driver.findElement(webdriver.By.id('btnPost')).click();
			driver.findElement(webdriver.By.xpath('//*[@id="messagesContainer"]/div')).getText().then(function(text) {
				expect(text).toEqual('This field is empty!');
				done();
			});
		});

		xit('should be shown the text - "Error! No Content! Status request: 204"', function(done) { //worked
			driver.findElement(webdriver.By.id('inputText')).sendKeys('error');
			driver.findElement(webdriver.By.id('btnPost')).click();
			driver.findElement(webdriver.By.xpath('//*[@id="messagesContainer"]/div')).getText().then(function(text) {
				expect(text).toEqual('Error! No Content! Status request: 204');
				done();
			});
		});

		xit('should be called alert with message about success', function() { //in development
			driver.findElement(webdriver.By.id('inputText')).sendKeys('Luke, I\'m your father');
			driver.findElement(webdriver.By.id('btnPost')).click();

			driver.switchTo().alert().getText().then(function(text) {
				expect(text).toEqual('Successfully recieved data from user');
				done();
			});
			driver.switchTo().alert().cancel();

			// Alert alert = driver.switchTo().alert();
			// alert.getText();
			// alert.accept();
		});

	});

});