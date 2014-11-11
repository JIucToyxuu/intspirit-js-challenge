'use strict'

var App = {
	init: function(config) {
		config = config || {};
		/* проверка на наличие js Файла  */
		/* var checkTask = false;
		$.get('src/js/'+config.nameTask+'.js', function(response) { checkTask = true });*/
		if(config.nameTask /*&& requirejs(['app/'+config.nameTask])   /* проверка */) {
			App.requireTask(config.nameTask);
		}
		else {
			App.requireTask('Abstract');
		}
	},
	run: function(currentTask) {
		/*console.log(App.currentTask);*/
	},
	requireTask: function(nameTask) {
		requirejs(['app/src/'+nameTask], function(Task) {
			Task.run();
		})
	}
	
};


/* симуляция события запуска Task1 */
App.init({
	nameTask: window.location.hash.substring(1)
});
/* сделать роутинг через хэши. каждый хэш вызывает опередленный таск. пр: example.ru#Task1  => App.init(Task1).run(); */


/*$( document ).ready(function() {
	(window.location.hash===undefined) ? window.location.href = window.location.href.substr(0, window.location.href.indexOf('#')) : console.log(window.location.hash)
	
  $( "a" ).bind( "click", function() {
    var s = App.init({
		nameTask: window.location.hash.substring(1)
	});
	/*s.run;*/
 /* });

});*/

/*$('body').on('click', 'a', function(e) {
    App.init({
		nameTask: window.location.hash.substring(1)
	});
});*/