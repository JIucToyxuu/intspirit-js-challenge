require(['jquery', '../../src/js/app1/views/index', '../../src/js/app1/controllers/index', 'API', '../../src/js/app1/app', 'jasmineJQuery'], function ($, view, controller, API) {
	'use strict';
	$('.passed').first().remove();

	describe('Task1', function() {
/*********************************/
		describe('API method "postResponse"', function() { //worked
			beforeEach(function() {
				spyOn(API, 'postResponse').and.callThrough();
			});
			
			var data = {
				request: "Luke, I'm your father"
			};

			it('sended with correct data', function(done) {
				API.postResponse(data).done(function(response) {
					expect(response).toBeDefined();
					expect(response.status).toEqual(200);
					expect(response.result).toEqual("Successfully recieved data from user");
					expect(response.statusText).toEqual("OK");
					done();
				});
				expect(API.postResponse.calls.any()).toBeTruthy();
			});

			it('sended with wrong data', function(done) {
				data.request = "error data";
				API.postResponse(data).done(function(response) {
					expect(response).toBeDefined();
					expect(response.status).toEqual(204);
					expect(response.result).toBeUndefined();
					expect(response.statusText).toEqual("No Content");
					done();
				});
			});
		});
/********************************/
		describe('Controller', function() {
			var success, fail;
			beforeEach(function() {
				spyOn(controller, 'makeRequest').and.callThrough();
			})
			

			it('is connected', function() {
				expect(controller).toBeDefined();
			})

			it('method "makeRequest()" has been started with correct data', function(done) {
				view.getText = jasmine.createSpy().and.returnValue("Luke, I'm your father");
				view.showSuccessMessage = jasmine.createSpy("view.showSuccessMessage").and.callFake(function() {
					expect(view.showSuccessMessage.calls.any()).toBeTruthy();
					console.log(view.showSuccessMessage.calls.any())
					done();
				});
				controller.makeRequest();
			})

			it('method "makeRequest()" has been started with not correct data', function(done) {
				view.getText = jasmine.createSpy().and.returnValue("error");
				view.prependErrorMessage = jasmine.createSpy("view.prependErrorMessage").and.callFake(function() {
					expect(view.prependErrorMessage.calls.any()).toBeTruthy();
					done();
				});
				controller.makeRequest();
			})

			it('method "makeRequest()" has been started with empty field', function() {
				view.getText = jasmine.createSpy().and.returnValue("");
				view.prependErrorMessage = jasmine.createSpy("view.prependErrorMessage").and.stub();
				controller.makeRequest();
				expect(view.prependErrorMessage).toHaveBeenCalledWith("This field is empty!");
			})
		});

		describe('View', function() {
			it('is connected', function() {
				expect(view).toBeDefined();
			})
		});
	});

	jasmine.getEnv().execute();
});