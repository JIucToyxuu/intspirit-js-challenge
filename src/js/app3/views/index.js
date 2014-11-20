define(['jquery', 'utils', 'handlebars', 'text!templates/task3.html', 'helpers'], function ($, utils, Handlebars, template) {
	var compiled = Handlebars.compile(template);
	var data = {};

	function addContainer() {
		$('#wrap').append('<div id="container"></div>');
	}
	function addButton(allItems) {
		$('#wrap').append('<button id="btnClear">Clear data</button>');

		utils.processBindings([{
			target: '#btnClear',
			name: 'click',
			handler: function () {
				allItems.items = {};
				$('#container').remove();
				$('#btnClear').remove();
			}
		}]);
	}

	return {
		render: function (items) {
			if(!$("#container").length) {
				addContainer();
			}
			if(!$("#btnClear").length) {
				addButton(items);
			}
			$("#container").empty().append(compiled(items));
		}
	};
});