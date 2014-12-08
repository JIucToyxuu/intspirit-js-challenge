define(['jquery', '../../../src/js/app1/controllers/index', '../../../src/js/app1/views/index', 'API', 'jasmineJQuery'],
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
					var text = readFixtures('../../../../../src/task1.html');
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

				describe('base html page', function() {

					it('should contain div with id = "wrap"', function() {
						expect($('div#wrap')).toExist();
					});

					it('should contain form with id="postForm"', function() {
						expect($('#postForm')).toExist();
					});

					describe('field for input text', function() {

						it('should be exist', function() {
							expect($('input#inputText')).toExist();
						});

						it('should be empty', function() {
							expect($('input#inputText')).toBeEmpty();
						});
					});

					describe('button for submit send data', function() {

						it('should be exist', function() {
							expect($('input#btnPost')).toExist();
						});

						it('should have value equal to "Submit"', function() {
							expect($('input#btnPost')).toHaveValue('Submit');
						});
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
					});

					it('should return string from #inputText', function() {
						$('#inputText').val('foobar');
						var result = view.getText();
						expect(result).toEqual('foobar');
					});
				});

				describe('prependErrorMessage()', function() {

					it('should be create div with id="messagesContainer"', function() {
						expect($('#messagesContainer')).not.toExist();
						view.prependErrorMessage('message');
						expect($('#messagesContainer')).toExist();
					});

					it('should change button value to "Resubmit"', function() {
						view.prependErrorMessage('message');
						expect($('input#btnPost')).toHaveValue('Resubmit');
					});

					it('should be add new error', function() {
						view.prependErrorMessage('message');
						expect($('.errors')).toExist();
					});

					it('should be delete extra errors', function() {
						view.prependErrorMessage('message');
						view.prependErrorMessage('message');
						view.prependErrorMessage('message');
						view.prependErrorMessage('message');
						view.prependErrorMessage('message');
						view.prependErrorMessage('message');
						expect($('.errors').length).toEqual(5);
					});

				});

				describe('showSuccessMessage()', function() {
					beforeEach(function() {
						spyOn(window, 'alert').and.callFake(function(message) {});
						view.showSuccessMessage('message');
					});

					it('should change button value to "Submit"', function() {
						expect($('input#btnPost')).toHaveValue('Submit');
					});

					it('should be delete "messagesContainer"', function() {
						expect($('#messagesContainer')).not.toExist();
					});

					it('should be alert user about success', function() {
						expect(window.alert).toHaveBeenCalledWith("message");
					});

					it('should be cleared field input text', function() {
						expect($('input#inputText')).toBeEmpty();
					});
				});

			});
		});
	});