require(['boot'], function () {
	alert(3);

	it('test2', function () {
		alert(1);
	});
	jasmine.getEnv().execute();
});