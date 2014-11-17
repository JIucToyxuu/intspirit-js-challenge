define(['../views/index', 'API'], function (view, API) {
	function collectChart(data) {
		var LENGTH_HISTORY = 3;

		var stringHistory = data.history.substr(-LENGTH_HISTORY);
		var success = [0];
		var errors = [0];
		for(var i=0; i<stringHistory.length; i++) {
			if(+stringHistory[i]) {
				success.push(success[success.length-1]+1);
				errors.push(errors[errors.length-1]);
			} else {
				errors.push(errors[errors.length-1]+1);
				success.push(success[success.length-1]);
			}
		}
		console.log(stringHistory);
		console.log(success)
		console.log(errors)
	}

	return {
		makeRequest: function(data) {
			API.getResponseCodes().then(function (response) {
				if(response.result) {
					data.counter=0;
					data.success++;
					data.history+=1; // for chart
				} else {
					data.counter++;
					data.fails++;
					data.history+=0;
				}
				data.percent = ((data.fails/(data.success+data.fails))*100).toFixed(2);
				view.render(response.result, data);
				collectChart(data);
			});
		},
	};
});