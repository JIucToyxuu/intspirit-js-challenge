define(['jquery', '../../src/js/app1/controllers/index', '../../src/js/app1/views/index', 'API', 'jasmineJQuery'],
	function($, controller, view, API) {

		describe('Task1', function() {

			describe('Controller', function() {
				var data = {
					request: ""
				};

				beforeEach(function() {
					jasmine.clock().install();

					spyOn(view, "showSuccessMessage");
					spyOn(view, "prependErrorMessage");

					spyOn(API, "postResponse").and.callFake(function() {
						var dfd = new $.Deferred();
						var status;

						if (data.request.substring(0, 5) !== "error") {
							status = "success";
						} else {
							status = "";
						}

						setTimeout(function() {
							dfd.resolve({
								result: status
							})
						}, 100);
						return dfd.promise();
					});
				});

				afterEach(function() {
					jasmine.clock().uninstall();
				});

				it('should be defined', function() {
					expect(controller).toBeDefined();
				});

				it('should have method makeRequest()', function() {
					expect(controller.makeRequest).toBeDefined();
				});

				it('method "makeRequest()" has been started with correct data', function() {
					spyOn(view, 'getText').and.returnValue("Luke, I'm your father");
					data.request = view.getText();
					controller.makeRequest();
					jasmine.clock().tick(101);
					expect(view.showSuccessMessage.calls.any()).toBeTruthy();
				});

				it('method "makeRequest()" has been started with not correct data', function() {
					spyOn(view, 'getText').and.returnValue("error! Blue screen of death...");
					data.request = view.getText();
					controller.makeRequest();
					jasmine.clock().tick(101);
					expect(view.prependErrorMessage.calls.any()).toBeTruthy();
					expect(view.prependErrorMessage).not.toHaveBeenCalledWith("This field is empty!");
				});

				it('method "makeRequest()" has been started with empty field', function() {
					spyOn(view, 'getText').and.returnValue("");
					data.request = view.getText();
					controller.makeRequest();
					jasmine.clock().tick(101);
					expect(view.prependErrorMessage).toHaveBeenCalledWith("This field is empty!");
				});
			});

			describe('View', function() {

				beforeEach(function() {
					var text = readFixtures('../../../../src/task1.html');
					var endText = text.indexOf('<script')
					var beginText = text.indexOf('<div id="wrap')
					text = text.substring(0, endText);
					text = text.substring(beginText);
					setFixtures(text);
				});

				it('should be defined', function() {
					expect(view).toBeDefined();
				});

				it('should have method getText()', function() {
					expect(view.getText).toBeDefined();
				});

				it('should have method prependErrorMessage()', function() {
					expect(view.prependErrorMessage).toBeDefined();
				});

				it('should have method showSuccessMessage()', function() {
					expect(view.showSuccessMessage).toBeDefined();
				});

				xdescribe('base html page', function() {

					it('contain div with id = "wrap"', function() {
						var wrap = $('#wrap');
						expect(wrap).toExist();
						expect($('#postForm')).toExist();
						expect(wrap).toEqual('div#wrap');
					});

					it('should contain form with needed elements', function() {
						var postForm = $('#postForm');

						expect(postForm).toHaveLength(1);
						expect(postForm).toEqual('form');
						expect(postForm).toContainElement('#inputText');
						expect(postForm).toContainElement('#btnPost');
					});

					it('contain one field for input text', function() {
						var inputText = $('#inputText');
						expect(inputText).toExist();
						expect(inputText).toHaveLength(1);
						expect(inputText).toBeEmpty();
						expect(inputText).toEqual('input');
						expect(inputText).toHaveProp('type', 'text');
					});

					it('contain one submit button for send request', function() {
						var btnPost = $('#btnPost');
						expect(btnPost).toExist();
						expect(btnPost).toHaveLength(1);
						expect(btnPost).toEqual('input');
						expect(btnPost).toHaveProp('type', 'submit');
						expect(btnPost).toHaveValue('Submit');
						expect(btnPost).toHaveClass('buttons');
					});
				});

				describe('getText()', function() {
					it('should return empty string', function() {
						$('#inputText').val('');
						result = view.getText();
						expect(result).toEqual('');
					});
					it('should trim spacebar and return empty string', function() {
						$('#inputText').val('                  ');
						result = view.getText();
						expect(result).toEqual('');
					});
					it('should trim spacebar the edges in string', function() {
						$('#inputText').val('        text  ');
						result = view.getText();
						expect(result).toEqual('text');
					})
					it('should return string from #inputText', function() {
						$('#inputText').val('foobar');
						var result = view.getText();
						expect(result).toEqual('foobar');
					});
				});

			});
		});
	});