define(['jquery', '../../../src/js/app2/controllers/index', '../../../src/js/app2/views/index', 'API', 'handlebars', 'jasmineJQuery'],
	function($, controller, view, API, Handlebars) {

		describe('Task2', function() {
			var text = readFixtures('../../../../../src/task2.html');
			var endText = text.indexOf('<script data-main');
			var beginText = text.indexOf('<div id="wrap');
			text = text.substring(0, endText);
			text = text.substring(beginText);

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
				loadStyleFixtures('../../../../../src/style/main.css');

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



			describe('Controller', function() {

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
					it('should call view.showChart() with correct data', function() {
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

			describe('View', function() {
				it('should be defined', function() {
					expect(view).toBeDefined();
				});

				describe('render()', function() {
					beforeEach(function() {
						controller.makeRequest(data);
						jasmine.clock().tick(101);
					});

					it('should create wrap for button', function() {
						expect($('#wrapButton')).toExist();
					});

					it('should add css class for wrapButton', function() {
						expect($('#wrapButton')).toHaveClass('errors');
					});

					it('should add compiled template to table', function() {
						expect($('#show tbody')).toExist();
					});
				});

				describe('showChart', function() {

					it('should add css class for #chart', function() {
						controller.makeRequest(data);
						jasmine.clock().tick(101);
						expect($('#chart')).toHaveClass('chart');
					});

					it('should be call with correct parameters', function() {
						spyOn($, 'plot').and.stub();
						var successChart = {
							"label": "success",
							"color": "green",
							"data": [
								[0, 0],
								[1, 0]
							],
						};
						var errorsChart = {
							"label": "errors",
							"color": "red",
							"data": [
								[0, 0],
								[1, 1]
							],
						};
						var options = {
							yaxis: {
								tickSize: 1,
							},
							xaxis: {
								tickSize: 1,
							},
							grid: {
								borderWidth: 1,
								backgroundColor: {
									colors: ["#fff", "#e4f4f4"]
								},
								margin: {
									bottom: 10,
									left: 10
								}
							},
						};

						controller.makeRequest(data);
						jasmine.clock().tick(101);
						expect($.plot).toHaveBeenCalledWith($("#chart"), [successChart, errorsChart], options);
					});

				});

			});
		});

	});