define(['handlebars'], function (Handlebars) {

	var list = 	Handlebars.registerHelper('list', function(type, items) {
		var out = "<ul>" + type;
		$.each(items, function(index, value) {
			out += "<li data-item="+ index +" data-count="+ value +" >" + index +": "+ value + "</li>";
		});
		out += "</ul>";
		return out;
	});
	return {
		list: list
	};
});