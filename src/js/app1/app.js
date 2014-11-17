define(['jquery', 'utils', './controllers/index'], function ($, utils, controller) {
	var bindings = [{
		target: '#btn-post',
		name: 'click',
		handler: function () {
			controller.makeRequest();
			return false;
		}
	}];

	utils.processBindings(bindings);
});