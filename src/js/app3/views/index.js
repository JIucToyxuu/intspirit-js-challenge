define(['jquery', 'utils'/*, 'helpers'*/, 'templates/compiled/task3'], function ($, utils) {
	function addContainer() {
		if(!$("#container").length) {
			$('#wrap').append('<div id="container"></div>');
		}
	}
	function addButton(allItems) {
		if(!$("#btnClear").length) {
			$('#wrap').append('<button id="btnClear">Clear data</button>');
		}

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


	Handlebars.registerHelper('list', function(type, items) {
		var plurality = "";
		var out = "<ul>" + type;

		$.each(items, function(index, value) {
			(parseInt(value)>1 && index.slice(-1)!=="s")? plurality="s" : plurality="";
			out += "<li data-item="+ index +" data-count="+ value +" >" + index + plurality +": "+ value + "</li>";
		});
		out += "</ul>";
		return out;
	});


	return {
		render: function (allItems) {
			addContainer();
			addButton(allItems);

			var html = Handlebars.templates.task3(allItems);
			$("#container").empty().append(html);
		}
	};
});