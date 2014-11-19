define(['jquery', 'handlebars', 'text!templates/task3.html', 'helpers'], function ($, Handlebars, template) {



	return {
		render: function (allItems) {
			var compiled = Handlebars.compile(template);
			$("#container").remove();
			$("#wrap").append(compiled(allItems));
		}
	};
});