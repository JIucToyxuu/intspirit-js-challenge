define(['jquery', '../../src/js/app1/controllers/index', '../../src/js/app1/views/index', 'API'],
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
				})

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
			//jasmine.getEnv().execute();
		});
	});