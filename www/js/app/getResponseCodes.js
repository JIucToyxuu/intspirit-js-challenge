define(['jquery', 'main/js/app/controllers/controllerGetResponseCodes'], function($, requireController) {
	console.log("getResponseCodes work!"); //test point
	var controller = new requireController();
	// yet without bindingUtils (for test functional)
	$('#getCodes').click(function(){
		//controller.start();
		controller.start();
		console.log(controller.success);
		console.log(controller.errors);
	});
});