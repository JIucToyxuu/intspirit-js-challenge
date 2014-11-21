/*require(['../app1/views/index'], function (myModule) {
	'use strict';

	describe('Module', function() {
		it('is plugged', function() {
			expect(myModule).not.toBeUndefined();
		}),
		it('variable MAX_ERRORS_COUNT should be equal to 5', function() {
			expect(myModule.MAX_ERRORS_COUNT).toEqual(5);
			expect(myModule.MAX_ERRORS_COUNT).not.toEqual(6);
		})
	});
});*/

require(['domReady', '../../src/js/app1/views/index'], function (domReady, myModule) {
	'use strict';
	domReady(function() {
		describe('Module', function() {
			it('is plugged', function() {
				expect(myModule).not.toBeUndefined();
				console.log('exist')
			}),
			it('variable MAX_ERRORS_COUNT should be equal to 5', function() {
				expect(myModule.MAX_ERRORS_COUNT).toEqual(5);
				expect(myModule.MAX_ERRORS_COUNT).not.toEqual(6);
				console.log('numbers')
			})
		});
	});
	
});