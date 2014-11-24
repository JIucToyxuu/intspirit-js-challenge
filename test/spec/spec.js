require(['jquery', '../../src/js/app1/views/index', 'API', '../../src/js/app1/app'], function ($, view, API) {
	'use strict';
	$('.passed').first().remove();

	spyOn(API, 'postResponse').and.callThrough();

	describe('API', function() {

		beforeEach(function() {
			jasmine.Ajax.install();
		});

		afterEach(function() {
			jasmine.Ajax.uninstall();
		});
		
		it('method "postResponse" should be return success', function() {
			var data = {
				request: "Luke, I'm your father"
			}

			var promise = API.postResponse(data);
			promise.then(function() {
				console.log('success')
			}, function() {
				console.log("fail")
			})

	})

	describe('Module', function() {
		it('is connected', function() {
			expect(view).not.toBeUndefined();
		}),
		it('variable MAX_ERRORS_COUNT should be equal to 5', function() {
			expect(view.MAX_ERRORS_COUNT).toEqual(5);
			expect(view.MAX_ERRORS_COUNT).not.toEqual(6);
		})
	});
	jasmine.getEnv().execute();
});