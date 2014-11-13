/*define(['main/js/app/views/viewPostResponse', 'main/js/app/API'], function(View, API){
	console.log("postResponse work!"); //test point
	var params = {
		request: 'error' //здесь позднее добавить содержимое поля ввода текста 
	};
	API.postResponse('post_response', params).then(
		function(returnObject) {
			//add params to JSON
			console.log(returnObject)
		},
		function(returnObject){
			alert(returnObject)
		}
	);
});*/
define(function(require) {
	console.log("postResponse work!"); //test point
	var $ = require('jquery'),
		controller = require('main/js/app/controllers/controllerPostResponse');
		/*controller.start();*/
		$('#btn-post').click(function(){
			controller.run();
		});
});
/*define(['main/js/app/controllers/controllerPostResponse', 'jquery'], function($, controller) {
	console.log("postResponse work!"); //test point
});*/