define(['jquery', 'API'], function($, API) {
	//$('.passed').first().remove();

	describe("API", function() {

		it('should have correct base url', function () {
			expect(API.baseUrl).toEqual('http://careers.intspirit.com/endpoint/');
		});

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

			it('should call jquery post with correct parameters', function() {
				//$.post
			});

			it('should call jquery post with correct parameters', function(done) {
				var data = {request: "Luke, I'm your father"};

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

		//TODO: Refactor
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
					var dfd = new $.Deferred();

					// TODO: not best idea
					setTimeout(function () {
						dfd.resolve(
							'{"foo":"bar"}',
							'success',
							{responseJSON: {foo: 'bar'}}
						);
					}, 0);

					return dfd.promise();
				});
			});

			it('should be defined', function() {
				expect(API.getDataSet).toBeDefined();
			});

			it('should call $.get with correct parameters', function(done) {
				API.getDataSet().done(function() {
					expect($.get).toHaveBeenCalledWith(API.baseUrl + 'data_set');
					done();
				});
			});

			it('should return correct data', function(done) {
				API.getDataSet().done(function(response) {
					expect(response).toEqual({foo: 'bar'});
					done();
				});
			});

			it('should return promise object', function() {
				var promise = API.getDataSet();
				expect(promise.done).toBeDefined();
				expect(promise.fail).toBeDefined();
			});
		});
	});
});