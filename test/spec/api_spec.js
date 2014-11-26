define(['jquery', 'API'], function($, API) {
	$('.passed').first().remove();

	describe("API", function() {

		describe('postResponse()', function() {
			var data = {
				request: "correct data"
			};

			beforeEach(function() {
				jasmine.clock().install();
				spyOn($, "post").and.callFake(function(url, data) {
					var reply = new $.ajax();
					return reply.then(function() {
						if (data.request.substring(0, 5) !== "error") {
							reply.responseText = "Successfully recieved data from user";
							reply.statusText = "OK";
							reply.status = 200;
							return reply;
						} else {
							reply.responseText = "";
							reply.statusText = "No Content";
							reply.status = 204;
							return reply;
						}
					});
				});
			});

			afterEach(function() {
				jasmine.clock().uninstall();
			});

			it('should be defined', function() {
				expect(API.postResponse).toBeDefined();
			});

			it('should call jquery post with correct parameters', function(done) {
				data.request = "Luke, I'm your father";
				API.postResponse(data).done(function(response) {
					expect(response.result).toEqual("Successfully recieved data from user");
					expect(response.statusText).toEqual("OK");
					expect(response.status).toEqual(200);
					done();
				});
			});

			it('should call jquery post with wrong parameters', function(done) {
				data.request = "error";
				API.postResponse(data).done(function(response) {
					expect(response.result).toEqual("");
					expect(response.statusText).toEqual("No Content");
					expect(response.status).toEqual(204);
					done();
				});
			});

			it('should return promise object', function() {
				var promise = API.postResponse(data);
				expect(promise.promise).toBeDefined();
				expect(promise.resolve).toBeUndefined();
			});
		});

		describe('getResponseCodes', function() {
			beforeEach(function() {
				spyOn($, "get").and.callFake(function() {
					var reply = new $.ajax();
					return reply.then(function() {
						reply.response = '{"result":true,"text":"Success!"}';
						reply.status = 200;
						reply.responseJSON = {
							"result": true,
							"text": "Success!"
						};
						return reply;
					});
				});
			});

			it('should be defined', function() {
				expect(API.getResponseCodes).toBeDefined();
			});

			it('return correct data', function(done) {
				API.getResponseCodes().done(function(response) {
					expect(response.result).toBeTruthy();
					expect(response.text).toEqual("Success!");
					done();
				});
			});

			it('should return promise object', function() {
				var promise = API.getResponseCodes();
				expect(promise.promise).toBeDefined();
				expect(promise.resolve).toBeUndefined();
			});
		});

		describe('getDataSet', function() {
			beforeEach(function() {
				spyOn($, "get").and.callFake(function() {
					var reply = new $.ajax();
					return reply.then(function() {
						reply.response = '{"item":"cucumber","type":"vegetable"}';
						reply.status = 200;
						reply.responseJSON = {
							"item": "cucumber",
							"type": "vegetable"
						};
						return reply;
					});
				});
			});

			it('should be defined', function() {
				expect(API.getDataSet).toBeDefined();
			});

			it('return correct data', function(done) {
				API.getDataSet().done(function(response) {
					expect(response.item).toEqual("cucumber");
					expect(response.type).toEqual("vegetable");
					done();
				});
			});

			it('should return promise object', function() {
				var promise = API.getDataSet();
				expect(promise.promise).toBeDefined();
				expect(promise.resolve).toBeUndefined();
			});

		});

		jasmine.getEnv().execute();
	});
});