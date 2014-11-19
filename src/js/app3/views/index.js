define(['jquery', 'handlebars', 'templates/compiled/task3', 'helpers'], function ($, Handlebars) {
	function plurality() {
		$( "#container li" ).each(function() {
		var count = $(this).data("count")
		var item = $(this).data("item")
		if(parseInt(count)>1 && item.slice(-1)!=="s")
			$(this).append("s");
		})
	} // not work


	return {
		render: function (allItems) {
			//var html = temp(allItems);
			Handlebars.templates.task3({"f":"s"})
			/*var compiled = Handlebars.compile('<div id="container">{{#each items}}{{#list @key this}}{{/list}}{{/each}}</div>');
			$("#container").remove();
			$("#wrap").append(compiled(allItems));*/
			console.log(Handlebars)
		}
	};
});