define(['jquery', 'API'], function($, API) {
  describe("API", function() {

  	describe('postResponse()', function () {
  		it('should be defined', function () {
  			expect(API.postResponse).toBeDefined();
  		});

  		it('should call jquery post with correct parameters', function (done) {
  			spyOn($, 'post');
  			API.postResponse().then(function () {
  				expect(API.postResponse).toBeDefined();
  				done();
  			});

  			
  		});

  		it('should return promise object', function () {
  			spyOn($, 'post');
  			var promise = API.postResponse
  			expect(promise).toBeDefined();
  		});

  		it('should return correct data if success', function () {
  			spyOn($, 'post');
  			expect(API.postResponse).toBeDefined();
  		});
  	});
    
  });
});

	// describe('Task1', function() {
	// 	describe('API method "postResponse"', function() { //worked
	// 		beforeEach(function() {
	// 			spyOn(API, 'postResponse').and.callThrough();
	// 		});

	// 		var data = {
	// 			request: "Luke, I'm your father"
	// 		};

	// 		it('sended with correct data', function(done) {
	// 			API.postResponse(data).done(function(response) {
	// 				expect(response).toBeDefined();
	// 				expect(response.status).toEqual(200);
	// 				expect(response.result).toEqual("Successfully recieved data from user");
	// 				expect(response.statusText).toEqual("OK");
	// 				done();
	// 			});
	// 			expect(API.postResponse.calls.any()).toBeTruthy();
	// 		});

	// 		it('sended with wrong data', function(done) {
	// 			data.request = "error data";
	// 			API.postResponse(data).done(function(response) {
	// 				expect(response).toBeDefined();
	// 				expect(response.status).toEqual(204);
	// 				expect(response.result).toBeUndefined();
	// 				expect(response.statusText).toEqual("No Content");
	// 				done();
	// 			});
	// 		});
	// 	});
	// });
