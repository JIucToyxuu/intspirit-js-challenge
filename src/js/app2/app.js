define(['jquery', 'utils', './controllers/index'], function ($, utils, controller) {
	var data = {
		//counter last errors
		counter: 0,
		success: 0,
		fails: 0,
		percent: 0,
		history: "",
	};

	var bindings = [{
		target: '#getData',
		name: 'click',
		handler: function () {
			controller.makeRequest(data);
		}
	}];

	utils.processBindings(bindings);
});