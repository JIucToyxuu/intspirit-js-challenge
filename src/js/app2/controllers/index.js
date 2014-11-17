define(['../views/index', 'API'], function (view, API) {
	function collectChart(data) {
		var LENGTH_HISTORY = 3;

		var stringHistory = data.history.substr(-LENGTH_HISTORY);
		var dataChart = {
			success: [0],
			errors: [0],
		}
		for(var i=0; i<stringHistory.length; i++) {
			if(+stringHistory[i]) {
				dataChart.success.push(dataChart.success[dataChart.success.length-1]+1);
				dataChart.errors.push(dataChart.errors[dataChart.errors.length-1]);
			} else {
				dataChart.errors.push(dataChart.errors[dataChart.errors.length-1]+1);
				dataChart.success.push(dataChart.success[dataChart.success.length-1]);
			}
		}

		view.showChart(dataChart);
		console.log(stringHistory);
		console.log(dataChart.success)
		console.log(dataChart.errors)
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