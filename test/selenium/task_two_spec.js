describe('Task2', function() {
	var webdriver = require('selenium-webdriver');


	var driver = new webdriver.Builder().
	withCapabilities(webdriver.Capabilities.chrome()).
	build();
	driver.manage().window().maximize();



	driver.get('http://localhost:9000/src/task2.html');

	beforeEach(function() {

	});

	it('should be added wrapper for button', function(done) { //worked
		driver.sleep(100);
		driver.findElement(webdriver.By.id('getData')).click();
		driver.findElements(webdriver.By.id('wrapButton')).then(function(elements) {
			expect(elements.length).toEqual(1);
			done();
		});
	});

	it('should be added data in table', function(done) {
		driver.findElements(webdriver.By.xpath('//*[@id="show"]/tbody')).then(function(elements) {
			expect(elements.length).toEqual(1);
			done();
		});
	});

	it('should be added data in chart', function(done) {
		driver.findElements(webdriver.By.xpath('//*[@id="chart"]/canvas')).then(function(elements) {
			expect(elements.length).toEqual(2);
			driver.quit();
			done();
		});
	});
});