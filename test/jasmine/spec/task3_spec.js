define(['jquery', '../../../src/js/app3/controllers/index', '../../../src/js/app3/views/index', 'API', 'handlebars', 'jasmineJQuery'],
	function($, controller, view, API, Handlebars) {

		describe('Task3', function() {

			describe('View', function() {
				var text = readFixtures('../../../../../src/task3.html');
				var endText = text.indexOf('<script data-main');
				var beginText = text.indexOf('<div id="wrap');
				text = text.substring(0, endText);
				text = text.substring(beginText);

				var allItems = {
					items: {
						fruit: {
							banana: 1,
						},
						vegetable: {
							cucumber: 666,
						}
					}
				};

				beforeEach(function() {
					setFixtures(text);
					loadStyleFixtures('../../../../../src/style/main.css');

				});


				it('should be defined', function() {
					expect(view).toBeDefined();
				});

				it('should be added container for display result', function() {
					view.render(allItems);
					expect($('#container')).toExist();
				});

				it('should be to added button for clearing data', function() {
					view.render(allItems);
					expect($('#btnClear')).toExist();
				});

				it('should be added ul elements to contain types', function() {
					view.render(allItems);
					expect($('#container ul:contains("vegetable")')).toBeInDOM();
					expect($('#container ul:contains("fruit")')).toBeInDOM();
				});

				it('should be added li elements to contain items', function() {
					view.render(allItems);
					expect($('ul li:contains("banana")')).toContainText('banana: 1');
					expect($('ul li:contains("cucumber")')).toContainText('cucumbers: 666');
				});

				it('should be to clear data at clicked button', function() {
					view.render(allItems);
					$('#btnClear').click();
					expect(allItems.items).toEqual({});
					expect($('#container')).not.toExist();
					expect($('#btnClear')).not.toExist();
				});
			});


			describe('Controller', function() {

				controller.allItems.items = {
					fruit: {
						banana: 10,
					}
				};

				beforeEach(function() {
					spyOn(API, "getDataSet").and.callFake(function() {
						var dfd = new $.Deferred();
						setTimeout(function() {
							dfd.resolve({
								"type": "fruit",
								"item": "apple"
							});
						}, 100);
						return dfd.promise();
					});

					jasmine.clock().install();
				});

				afterEach(function() {
					jasmine.clock().uninstall();
				});

				it('should be defined', function() {
					expect(controller).toBeDefined();
				});

				it('should be add new Type', function() {
					controller.makeRequest();
					jasmine.clock().tick(101);
					expect(controller.allItems.items.hasOwnProperty('fruit')).toBeTruthy();
				});

				it('should be add new Item', function() {
					expect(controller.allItems.items.fruit.hasOwnProperty('apple')).toBeTruthy();
				});

				it('should be increase count apples', function() {
					controller.makeRequest();
					jasmine.clock().tick(101);
					expect(controller.allItems.items.fruit.apple).toEqual(2);
				});

				it('should be called view.render() with correct parameters', function() {
					spyOn(view, 'render').and.stub();
					controller.makeRequest();
					jasmine.clock().tick(101);
					expect(view.render).toHaveBeenCalledWith(controller.allItems);
				});
			});
		});
	});