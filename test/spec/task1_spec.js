define(['jquery', '../../src/js/app1/controllers/index', '../../src/js/app1/views/index', 'API', 'jasmineJQuery'],
	function($, controller, view, API) {

		describe('Task1', function() {
			describe('Controller', function() {
				var data = {
					request: ""
				};

				beforeEach(function() {
					spyOn(view, "showSuccessMessage");
					spyOn(view, "prependErrorMessage");

					spyOn(API, "postResponse").and.callFake(function() {
						var reply = new $.Deferred();

						if (data.request.substring(0, 5) !== "error") {
							reply.responseText = "Successfully recieved data from user";
							reply.statusText = "OK";
							reply.status = 200;
						} else {
							reply.responseText = "";
							reply.statusText = "No Content";
							reply.status = 204;
						}

						reply.resolve({
							result: reply.responseText,
							statusText: reply.statusText,
							status: reply.status
						});
						return reply.promise();
					});
				});


				it('should be defined', function() { //worked
					expect(controller).toBeDefined();
					expect(controller.makeRequest).toBeDefined();
					expect(controller.makeRequest).toEqual(jasmine.any(Function));
				});

				it('method "makeRequest()" has been started with correct data', function() {
					view.getText = jasmine.createSpy().and.returnValue("Luke, I'm your father");
					data.request = view.getText();
					controller.makeRequest();
					expect(view.showSuccessMessage.calls.any()).toBeTruthy();
					expect(view.prependErrorMessage.calls.any()).toBeFalsy();
				});

				it('method "makeRequest()" has been started with not correct data', function() {
					view.getText = jasmine.createSpy().and.returnValue("error! Blue screen of death...");
					data.request = view.getText();
					controller.makeRequest();
					expect(view.prependErrorMessage.calls.any()).toBeTruthy();
					expect(view.showSuccessMessage.calls.any()).toBeFalsy();
				});

				it('method "makeRequest()" has been started with empty field', function() {
					view.getText = jasmine.createSpy().and.returnValue("");
					data.request = view.getText();
					controller.makeRequest();
					expect(view.prependErrorMessage).toHaveBeenCalledWith("This field is empty!");
					expect(view.showSuccessMessage.calls.any()).toBeFalsy();
				});
			});

			xdescribe('View', function() {
				it('should be defined', function() {
					expect(view).toBeDefined();
					expect(view.getText).toBeDefined();
					expect(view.getText).toEqual(jasmine.any(Function));
					expect(view.prependErrorMessage).toBeDefined();
					expect(view.prependErrorMessage).toEqual(jasmine.any(Function));
					expect(view.showSuccessMessage).toBeDefined();
					expect(view.showSuccessMessage).toEqual(jasmine.any(Function));
				});

				describe('base html page should', function() {
					beforeEach(function() {
						loadFixtures('../../../../src/task1.html');
						var wrap = $('#wrap').html();
						setFixtures('<div id="wrap">' + wrap + '</div>');
					});

					afterEach(function() {
					});

					it('contain div with id = "wrap"', function() {
						var wrap = $('#wrap');
						expect(wrap).toExist();
						expect(wrap).toEqual('div#wrap');
					});

					it('contain one form with input text field and submit button', function() {
						var postForm = $('#postForm');
						expect(postForm).toEqual(postForm);
						expect(postForm).toHaveLength(1);
						expect(postForm).toEqual('form');
						expect(postForm).toContainElement('input#inputText');
						expect(postForm).toContainElement('input#btnPost');
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


					// it('', function() {

					// });
					
				});

				xit('getText() returns correct data', function() {
					
				});
			});
			jasmine.getEnv().execute();
		});
	});


// define(['jquery', '../../src/js/app1/controllers/index', '../../src/js/app1/views/index', 'API', 'jasmineJQuery'],
// 	function($, controller, view, API) {

// 		describe('Task1', function() {
// 			describe('Controller', function() {
// 				var data = {
// 					request: ""
// 				};

// 				beforeEach(function() {
// 					spyOn(view, "showSuccessMessage");
// 					spyOn(view, "prependErrorMessage");

// 					spyOn(API, "postResponse").and.callFake(function() {
// 						var reply = new $.Deferred();

// 						if (data.request.substring(0, 5) !== "error") {
// 							reply.responseText = "Successfully recieved data from user";
// 							reply.statusText = "OK";
// 							reply.status = 200;
// 						} else {
// 							reply.responseText = "";
// 							reply.statusText = "No Content";
// 							reply.status = 204;
// 						}

// 						reply.resolve({
// 							result: reply.responseText,
// 							statusText: reply.statusText,
// 							status: reply.status
// 						});
// 						return reply.promise();
// 					});
// 				});


// 				it('should be defined', function() { //worked
// 					expect(controller).toBeDefined();
// 					expect(controller.makeRequest).toBeDefined();
// 					expect(controller.makeRequest).toEqual(jasmine.any(Function));
// 				});

// 				it('method "makeRequest()" has been started with correct data', function() {
// 					view.getText = jasmine.createSpy().and.returnValue("Luke, I'm your father");
// 					data.request = view.getText();
// 					controller.makeRequest();
// 					expect(view.showSuccessMessage.calls.any()).toBeTruthy();
// 					expect(view.prependErrorMessage.calls.any()).toBeFalsy();
// 				});

// 				it('method "makeRequest()" has been started with not correct data', function() {
// 					view.getText = jasmine.createSpy().and.returnValue("error! Blue screen of death...");
// 					data.request = view.getText();
// 					controller.makeRequest();
// 					expect(view.prependErrorMessage.calls.any()).toBeTruthy();
// 					expect(view.showSuccessMessage.calls.any()).toBeFalsy();
// 				});

// 				it('method "makeRequest()" has been started with empty field', function() {
// 					view.getText = jasmine.createSpy().and.returnValue("");
// 					data.request = view.getText();
// 					controller.makeRequest();
// 					expect(view.prependErrorMessage).toHaveBeenCalledWith("This field is empty!");
// 					expect(view.showSuccessMessage.calls.any()).toBeFalsy();
// 				});
// 			});

// 			describe('View', function() {

// 				// beforeEach(function() {
// 				// 	loadFixtures('../../../../src/task1.html');
// 				// });

// 				it('should be defined', function() {
// 					expect(view).toBeDefined();
// 					expect(view.getText).toBeDefined();
// 					expect(view.getText).toEqual(jasmine.any(Function));
// 					expect(view.prependErrorMessage).toBeDefined();
// 					expect(view.prependErrorMessage).toEqual(jasmine.any(Function));
// 					expect(view.showSuccessMessage).toBeDefined();
// 					expect(view.showSuccessMessage).toEqual(jasmine.any(Function));
// 				});

// 				describe('base html page should', function() {
// 					beforeEach(function() {
// 						loadFixtures('../../../../src/task1.html');
// 					});

// 					it('contain div with id = "wrap"', function() {
// 						var wrap = $('#wrap');
// 						expect(wrap).toExist();
// 						expect(wrap).toEqual('div#wrap');
// 					});

// 					it('contain one form with input text field and submit button', function() {
// 						var postForm = $('#postForm');
// 						expect(postForm).toExist();
// 						expect(postForm).toHaveLength(1);
// 						expect(postForm).toEqual('form');
// 						expect(postForm).toContainElement('input#inputText');
// 						expect(postForm).toContainElement('input#btnPost');
// 					});

// 					it('contain one field for input text', function() {
// 						var inputText = $('#inputText');
// 						expect(inputText).toExist();
// 						expect(inputText).toHaveLength(1);
// 						expect(inputText).toBeEmpty();
// 						expect(inputText).toEqual('input');
// 						expect(inputText).toHaveProp('type', 'text');
// 					});

// 					it('contain one submit button for send request', function() {
// 						var btnPost = $('#btnPost');
// 						expect(btnPost).toExist();
// 						expect(btnPost).toHaveLength(1);
// 						expect(btnPost).toEqual('input');
// 						expect(btnPost).toHaveProp('type', 'submit');
// 						expect(btnPost).toHaveValue('Submit');
// 						expect(btnPost).toHaveClass('buttons');
// 					});
// 				});

// 				xit('getText() returns correct data', function() {
// 					var inputText = $('#inputText');
// 					expect(inputText).toExist();
// 					expect(inputText).toBeEmpty();
// 					inputText.val("correct");
// 					expect(inputText).toBeEmpty();
// 					console.log(view.getText());
// 					expect(inputText).not.toBeEmpty();
// 				});
// 			});
// 			jasmine.getEnv().execute();
// 		});
// 	});