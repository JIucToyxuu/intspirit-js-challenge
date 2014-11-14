define(['jquery', 'main/js/app/Utility', 'main/js/app/controllers/controllerPostResponse'], function($, Utility, controller) {
	//Utility.loadCss(['style/main.css']); //call function for load css file. problem: load with a delay
	Utility.bindings('#btn-post', 'click', [controller.start]);
});