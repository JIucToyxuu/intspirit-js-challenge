/*define([/*'main/js/app/views/viewGetResponseCodes',*/ /*'main/js/app/API'], function(/*View,*/ /*API){
/*	console.log("getResponseCodes work!");
	API.getResponseCodes('response_codes').then(
		function(returnObject) {
			//add params to JSON
			console.log(returnObject)
		},
		function(returnObject){
			alert(returnObject)
		}
	);
});*/


define(['jquery', 'main/js/app/controllers/controllerGetResponseCodes'], function($, requireController) {
	console.log("getResponseCodes work!"); //test point
	var Counter = {
		success: 0,
		errors: 0
	}
	var controller = new requireController();
	// yet without bindingUtils (for test functional)
	$('#getCodes').click(function(){
		//controller.start();
		controller.start(Counter);

	});
});