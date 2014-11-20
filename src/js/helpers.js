define(['handlebars'], function (Handlebars) {

	var list =	Handlebars.registerHelper('list', function(type, items) {
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
		list: list
	};
});