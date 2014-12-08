describe('Task3', function() {
	var webdriver = require('selenium-webdriver');


	var driver = new webdriver.Builder().
	withCapabilities(webdriver.Capabilities.chrome()).
	build();



	driver.get('http://localhost:9000/src/task3.html');

	beforeEach(function() {

	});

	it('should to be added container for data', function(done) {
		driver.sleep(100);
		driver.findElement(webdriver.By.id('getData')).click();
		driver.sleep(100);
		driver.findElements(webdriver.By.id('container')).then(function(elements) {
			expect(elements.length).toEqual(1);
			done();
		});
	});

	it('should to be to added button for clean data', function(done) {
		driver.findElements(webdriver.By.id('btnClear')).then(function(elements) {
			expect(elements.length).toEqual(1);
			done();
		});
	});

	it('should to be delete container, when press button "Clear data"', function(done) {
		driver.findElement(webdriver.By.id('btnClear')).click();
		driver.findElements(webdriver.By.xpath('//*[@id="wrap"]/*')).then(function(elements) {
			expect(elements.length).toEqual(2);
			driver.quit();
			done();
		});
	});
});