define(['jquery', 'handlebars', 'flot'], function ($, Handlebars, flot) {

	var wrapButton = {
		isExisting: function() {
			return $('#wrapButton').length;
		},
		create: function() {
			$('#getCodes').wrap('<div id="wrapButton"></div>');
		},
		// change button color
		changeColor: function(result) {
			(result) ? $('#wrapButton').removeClass("errors").addClass("success") : $('#wrapButton').removeClass("success").addClass("errors");
		}
	};

	function showChart(data) {
		var success = [];
		var errors = [];

		console.log('data')
		$.each(data.success, function(index, element) {
			success.push([index, element]);
		})
		$.each(data.errors, function(index, element) {
			errors.push([index, element]);
		})
		$.plot($("#chart"), [ success, errors ]);
		console.log(success)
		console.log(errors)
	}

	return {
		render: function (result, data) {
			if(!wrapButton.isExisting()) {
				wrapButton.create(result);
			}
			wrapButton.changeColor(result);
			var source = $("#templateCodes").html();
			var template = Handlebars.compile(source);
			$('tbody').empty().append(template(data));
			//console.log(data)
		},
		showChart: showChart
	};
});