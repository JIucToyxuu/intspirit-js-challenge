define(['../views/index', 'API'], function (view, API) {
	function collectChart(data) {
		var LENGTH_HISTORY = 3; //default for Task2 = 3

		var stringHistory = data.history.substr(-LENGTH_HISTORY);
		var dataChart = {
			success: [[0, 0]],
			errors: [[0, 0]],
		};
		for(var i=0; i<stringHistory.length; i++) {
			var lastSuccessCount = dataChart.success[dataChart.success.length-1][1];
			var lastErrorsCount = dataChart.errors[dataChart.errors.length-1][1];

			if(+stringHistory[i]) { // if success
				dataChart.success.push([i+1, lastSuccessCount+1]); // raise dataChart.success -> push([index, counter+1])
				dataChart.errors.push([i+1, lastErrorsCount]); // ignore error
			} else {
				dataChart.errors.push([i+1, lastErrorsCount+1]);
				dataChart.success.push([i+1, lastSuccessCount]);
			}
		}
		view.showChart(dataChart);
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
				// response.result -> true/false
				view.render(response.result, data);
				collectChart(data);
			});
		},
	};
});