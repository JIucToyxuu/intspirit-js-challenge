define(['../views/index', 'API'], function (view, API) {

	return {
		makeRequest: function() {
			var text = view.getText();
			if (text) {
				var data = {
					request: text
				};

				API.postResponse(data).then(function (obj) {
					if (obj.result) {
						view.showSuccessMessage(obj.result);
					} else {
						var message = 'Error! ' + obj.statusText + '! Status request: ' + obj.status;
						view.prependErrorMessage(message);
					}
				});
			} else {
				view.prependErrorMessage('This field is empty!');
			}
		}
	};
});