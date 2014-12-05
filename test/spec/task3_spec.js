define(['jquery', '../../src/js/app3/controllers/index', '../../src/js/app3/views/index', 'API', 'handlebars', 'jasmineJQuery'],
	function($, controller, view, API, Handlebars) {

		describe('Task2', function() {
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

			xdescribe('View', function() {

			});
		});

	});