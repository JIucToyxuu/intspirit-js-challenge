define(['jquery', '../../src/js/app2/controllers/index', '../../src/js/app2/views/index', 'API', 'handlebars', 'jasmineJQuery'],
	function($, controller, view, API, Handlebars) {

		describe('Task2', function() {
			var text = readFixtures('../../../../src/task2.html');
			var endText = text.indexOf('<script data-main');
			var beginText = text.indexOf('<div id="wrap');
			text = text.substring(0, endText);
			text = text.substring(beginText);


			describe('Controller', function() {
				var data = {
					counter: 0,
					success: 0,
					fails: 0,
					percent: 0,
					history: "",
				};

				beforeEach(function() {
					jasmine.clock().install();

					setFixtures(text);
					loadStyleFixtures('../../../../src/style/main.css');

					spyOn(API, "getResponseCodes").and.callFake(function() {
						var dfd = new $.Deferred();

						setTimeout(function() {
							dfd.resolve({
								result: false
							});
						}, 100);
						return dfd.promise();
					});

				});

				afterEach(function() {
					data = {
						counter: 0,
						success: 0,
						fails: 0,
						percent: 0,
						history: "",
					};

					jasmine.clock().uninstall();
				});

				it('should be defined', function() {
					expect(controller).toBeDefined();
				});

				describe('makeRequest()', function() {
					it('should be defined', function() {
						expect(controller.makeRequest).toBeDefined();
					});

					it('should call view.render() with correct data', function() {
						spyOn(view, 'render').and.stub();
						controller.makeRequest(data);
						jasmine.clock().tick(101);
						expect(view.render).toHaveBeenCalledWith(false, {
							counter: 1,
							success: 0,
							fails: 1,
							percent: 100.00,
							history: "0",
						});
					});
				});

				describe('collectChart()', function() {
					it('should works correctly', function() {
						spyOn(view, 'showChart').and.stub();
						controller.makeRequest(data);
						jasmine.clock().tick(101);
						expect(view.showChart).toHaveBeenCalledWith({
							success: [
								[0, 0],
								[1, 0]
							],
							errors: [
								[0, 0],
								[1, 1]
							]
						});
					});
				});
			});

			xdescribe('View', function() {

			});
		});

	});