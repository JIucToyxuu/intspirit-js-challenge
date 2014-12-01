define(['jquery', 'API'], function($, API) {

	describe("API", function() {

		it('should have correct base url', function() {
			expect(API.baseUrl).toEqual('http://careers.intspirit.com/endpoint/');
		});

		describe('postResponse()', function() {

			beforeEach(function() {
				spyOn($, "post").and.callFake(function() {
					var dfd = new $.Deferred();
					setTimeout(function() {
						dfd.resolve(
							'responseText',
							'statusText', {
								responseText: 'responseText',
								statusText: 'OK',
								status: 200
							}
						)
					}, 100);
					return dfd.promise();
				});
			});

			it('should be defined', function() {
				expect(API.postResponse).toBeDefined();
			});

			it('should call $.post with correct parameters', function(done) {
				API.postResponse('data').done(function() {
					expect($.post).toHaveBeenCalledWith(API.baseUrl + 'post_response', 'data');
					done();
				});
			});

			it('should call $.post with correct returned data', function(done) {
				$.post().done(function(responseText, statusText, obj) {
					expect(obj).toEqual({
						responseText: 'responseText',
						statusText: 'OK',
						status: 200
					});
					done();
				});
			});

			it('should return correct data', function(done) {
				API.postResponse('data').done(function(response) {
					expect(response).toEqual({
						result: 'responseText',
						statusText: 'OK',
						status: 200,
					});
					done();
				});
			});

			it('should return promise object', function() {
				var promise = API.postResponse('data');
				expect(promise.promise).toBeDefined();
				expect(promise.resolve).toBeUndefined();
			});
		});

		describe('getResponseCodes()', function() {
			beforeEach(function() {

				spyOn($, "get").and.callFake(function() {
					var dfd = new $.Deferred();
					setTimeout(function() {
						dfd.resolve(
							'{"result": "true"}',
							'success', {
								responseJSON: {
									result: true
								}
							})
					}, 100);
					return dfd.promise();
				});
			});

			it('should be defined', function() {
				expect(API.getResponseCodes).toBeDefined();
			});

			it('should call $.get with correct parameters', function(done) {
				API.getResponseCodes().done(function() {
					expect($.get).toHaveBeenCalledWith(API.baseUrl + 'response_codes');
					done();
				});
			});

			it('should call $.get with correct returned data', function(done) {
				$.get().done(function(responseText, statusText, obj) {
					expect(obj).toEqual({
						responseJSON: {
							result: true
						}
					});
					done();
				});
			});

			it('should return correct data', function(done) {
				API.getResponseCodes().done(function(response) {
					expect(response).toEqual({
						result: true
					});
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
					setTimeout(function() {
						dfd.resolve(
							'{"item":"apple"}',
							'success', {
								responseJSON: {
									item: 'apple'
								}
							}
						);
					}, 100);
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

			it('should call $.get with correct returned data', function(done) {
				$.get().done(function(responseText, statusText, obj) {
					expect(obj).toEqual({
						responseJSON: {
							item: 'apple'
						}
					});
					done();
				});
			});

			it('should return correct data', function(done) {
				API.getDataSet().done(function(response) {
					expect(response).toEqual({
						item: 'apple'
					});
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