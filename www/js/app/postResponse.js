define(['jquery', 'main/js/app/controllers/controllerPostResponse'], function($, controller) {
	console.log("postResponse work!"); //test point
	$('#btn-post').click(function(){
		controller.start();
	});
});