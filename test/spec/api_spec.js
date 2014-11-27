define(['jquery', 'API'], function($, API) {
	//$('.passed').first().remove();

	describe("API", function() {

		describe('postResponse()', function() {
			var data = {
				request: "default data"
			};


			beforeEach(function() {

				spyOn($, "post").and.callFake(function() {
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

					reply.resolve(
						reply.responseText,
						reply.statusText,
						reply
					);
					return reply.promise();
				});
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

		describe('getResponseCodes()', function() {
			beforeEach(function() {

				spyOn($, "get").and.callFake(function() {
					var reply = new $.Deferred();
					reply.responseText = '{"result":true,"text":"Success!"}';
					reply.statusText = "OK";
					reply.status = 200;
					reply.responseJSON = {
						"result": true,
						"text": "Success!"
					};

					reply.resolve(
						reply.responseText,
						"success",
						reply
					);
					return reply.promise();
				});
			});

			it('should be defined', function() {
				expect(API.getResponseCodes).toBeDefined();
			});

			it('return correct data', function(done) {
				API.getResponseCodes().done(function(response) {
					expect(response.result).toBeDefined();
					expect(response.result).toBeTruthy();
					expect(response.text).toBeDefined();
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

		describe('getDataSet()', function() {
			beforeEach(function() {

				spyOn($, "get").and.callFake(function() {
					var reply = new $.Deferred();
					reply.responseText = '{"item":"cucumber","type":"vegetable"}';
					reply.statusText = "OK";
					reply.status = 200;
					reply.responseJSON = {
						"item": "cucumber",
						"type": "vegetable"
					};

					reply.resolve(
						reply.responseText,
						"success",
						reply
					);
					return reply.promise();
				});
			});

			it('should be defined', function() {
				expect(API.getDataSet).toBeDefined();
			});

			it('return correct data', function(done) {
				API.getDataSet().done(function(response) {
					expect(response.item).toBeDefined();
					expect(response.item).toEqual("cucumber");
					expect(response.type).toBeDefined();
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

		//jasmine.getEnv().execute();
	});
});