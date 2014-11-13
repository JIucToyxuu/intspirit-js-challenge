define(['jquery', 'handlebars'], function($, Handlebars) {
	function run(returnValue) {
		if($('#divMessages').length) {
			// if messages>5 delete last message
			if($('.messages').length>4) {
				$('.messages').last().remove();
			}
			this.render('lol');
		}
		else {
			// add new div for messages
			this.firstRender('lol');
			this.render('lol');
		}
	}
	function firstRender(returnValue) {
		$('<div id="divMessages"></div>').insertAfter('#btn-post');
		console.log('first render run');
	}
	function render(returnValue) {
		
		console.log('render Task1 run');
		// var html = '<div>{{name}}</div> <div>{{statusText}}</div> <div>{{responseText}}</div>';
		var html = '<div>'+returnValue+'</div>';
		/*returnValue = {name: returnValue};
		var template = Handlebars.compile(html);*/
		$(html).addClass("messages").appendTo($('#divMessages'));
	} 	
	return {
		run: run,
		firstRender: firstRender,
		render: render
	};
});
