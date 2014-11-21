define(['jquery', '../utils', './controllers/index'], function ($, utils, controller) {
	var bindings = [{
		target: '#btnPost',
		name: 'click',
		handler: function () {
			controller.makeRequest();
			return false;
		}
	}];

	utils.processBindings(bindings);
});