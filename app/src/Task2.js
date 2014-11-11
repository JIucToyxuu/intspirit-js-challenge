define(function(){
 	function run() {
		console.log('Task2 module run');
		requirejs(['app/src/API'], function(API){
			var response = API.getResponseCodes('response_codes');
			console.log(response)
		});
	}
	function error() {

	}
	return {
		run: run
	}
});