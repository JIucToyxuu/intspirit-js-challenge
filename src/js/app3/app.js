define(['utils', './controllers/index'], function (utils, controller) {

	var bindings = [{
		target: '#getData',
		name: 'click',
		handler: function () {
			controller.makeRequest();
		}
	}];

	utils.processBindings(bindings);
});