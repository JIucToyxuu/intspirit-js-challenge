/*define(function(){
	var Task = {
		run: function() {
			console.log('Task2 module run');
			requirejs(['app/src/API'], function(API){
				var response = API.getResponseCodes('response_codes');
				console.log(response);
			});
		}
	}
	return {
		Task: Task
	};
});*/
define(function(){
	console.log("getResponseCodes work!");
});