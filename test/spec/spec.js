require(['jquery', '../../src/js/app1/views/index', '../../src/js/app1/controllers/index', 'API', '../../src/js/app1/app'], function ($, view, controller, API) {
	'use strict';
	$('.passed').first().remove();

	describe('Task1', function() {

		describe('API method "postResponse"', function() {
			spyOn(API, 'postResponse').and.callThrough();
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

		describe('Controller', function() {
			it('is connected', function() {
				expect(controller).toBeDefined();
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