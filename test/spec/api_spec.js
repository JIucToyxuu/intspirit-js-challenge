define(['jquery', 'API'], function($, API) {
	describe("API", function() {

	describe('postResponse()', function () {
		var data = {
			request: "correct data"
		};

		beforeEach(function() {
			//jasmine.clock().install();

			spyOn($, "post").and.callFake(function(url, data) {
				var reply = new $.ajax();
				return reply.then(function() {
					if(data.request.substring(0,5)!=="error") {
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
			//jasmine.clock().tick(101);
		});

		afterEach(function() {
			//jasmine.clock().uninstall();
		});

		it('should be defined', function () {
			expect(API.postResponse).toBeDefined();
		});

		it('should call jquery post with correct parameters', function (done) {
			data.request = "Luke, I'm your father";
			API.postResponse(data).done(function(response) {
				expect(response.result).toEqual("Successfully recieved data from user");
				expect(response.statusText).toEqual("OK");
				expect(response.status).toEqual(200);
				done();
			});
		});

		it('should call jquery post with wrong parameters', function (done) {
			data.request = "error";
			API.postResponse(data).done(function(response) {
				expect(response.result).toEqual("");
				expect(response.statusText).toEqual("No Content");
				expect(response.status).toEqual(204);
				done();
			});
		});

		xit('should return promise object', function () {
			var promise = API.postResponse(data);
			expect(promise).toBeDefined();
		});

		xit('should return correct data if success', function () {
			spyOn($, 'post');
			expect(API.postResponse).toBeDefined();
		});
	});
	jasmine.getEnv().execute();
});
});

	//describe('Task1', function() {
	//	describe('API method "postResponse"', function() { //worked
	//		beforeEach(function() {
	//			spyOn(API, 'postResponse').and.callThrough();
	//	});

	//		var data = {
	//			request: "Luke, I'm your father"
	//		};

	//		it('sended with correct data', function(done) {
	//			API.postResponse(data).done(function(response) {
	//				expect(response).toBeDefined();
	//				expect(response.status).toEqual(200);
	//				expect(response.result).toEqual("Successfully recieved data from user");
	//				expect(response.statusText).toEqual("OK");
	//				done();
	//			});
	//			expect(API.postResponse.calls.any()).toBeTruthy();
	//		});

	//		it('sended with wrong data', function(done) {
	//			data.request = "error data";
	//			API.postResponse(data).done(function(response) {
	//				expect(response).toBeDefined();
	//				expect(response.status).toEqual(204);
	//				expect(response.result).toBeUndefined();
	//				expect(response.statusText).toEqual("No Content");
	//				done();
	//			});
	//		});
	//	});
	//});
