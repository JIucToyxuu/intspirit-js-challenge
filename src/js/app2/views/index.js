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
			showChart(data);
			//console.log(data)
		}
	};
});