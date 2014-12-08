describe('Task1', function() {
	var webdriver = require('selenium-webdriver');


	var driver = new webdriver.Builder().
	withCapabilities(webdriver.Capabilities.chrome()).
	build();
	driver.manage().window().maximize();



	driver.get('http://localhost:9000/src/task1.html');

	beforeEach(function() {
		driver.findElement(webdriver.By.id('inputText')).clear();
	});

	it('should be shown the text - "This field is empty!"', function(done) { //worked
		driver.findElement(webdriver.By.id('inputText')).sendKeys('          ');
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.findElement(webdriver.By.xpath('//*[@id="messagesContainer"]/div[1]')).getText().then(function(text) {
			expect(text).toEqual('This field is empty!');
			done();
		});
	});

	it('should be shown the text - "Error! No Content! Status request: 204"', function(done) { //worked
		driver.findElement(webdriver.By.id('inputText')).sendKeys('error');
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.sleep(100);
		driver.findElement(webdriver.By.xpath('//*[@id="messagesContainer"]/div[1]')).getText().then(function(text) {
			expect(text).toEqual('Error! No Content! Status request: 204');
			done();
		});
	});

	it('should be to change value button to "Resubmit" if introduced wrong text', function(done) { //worked
		driver.findElement(webdriver.By.id('btnPost')).getAttribute('value').then(function(text) {
			expect(text).toEqual('Resubmit');
			done();
		});
	});

	it('should be to showed not over 5 errors', function(done) { //worked
		driver.findElement(webdriver.By.id('inputText')).sendKeys('error');
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.sleep(100);
		driver.findElements(webdriver.By.className('errors')).then(function(elements) {
			expect(elements.length).toEqual(5);
			done();
		});
	});

	it('should be to show alert with message about success', function(done) { //worked
		driver.findElement(webdriver.By.id('inputText')).sendKeys('Luke, I\'m your father');
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.sleep(100);
		driver.switchTo().alert().getText().then(function(text) {
			expect(text).toEqual('Successfully recieved data from user');
			done();
		});
		driver.switchTo().alert().accept();
	});

	it('should be change value button to "Submit" if introduced right text', function(done) { //worked
		driver.findElement(webdriver.By.id('inputText')).sendKeys('Luke, I\'m your father');
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.sleep(100);
		driver.switchTo().alert().accept();
		driver.findElement(webdriver.By.id('btnPost')).getAttribute('value').then(function(text) {
			expect(text).toEqual('Submit');
			done();
		});
	});

	it('should be reset value input text field', function(done) { //worked
		driver.findElement(webdriver.By.id('inputText')).sendKeys('Luke, I\'m your father');
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.sleep(100);
		driver.switchTo().alert().accept();
		driver.findElement(webdriver.By.id('inputText')).getAttribute('value').then(function(text) {
			expect(text).toEqual('');
			done();
		});
	});

	it('should be to deleted container for messages', function(done) { //worked
		driver.findElement(webdriver.By.id('inputText')).sendKeys('Luke, I\'m your father');
		driver.findElement(webdriver.By.id('btnPost')).click();
		driver.sleep(100);
		driver.switchTo().alert().accept();
		driver.findElements(webdriver.By.id('messagesContainer')).then(function(elements) {
			expect(elements.length).toEqual(0);
			driver.quit();
			done();
		});
	});
});