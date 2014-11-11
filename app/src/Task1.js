define(function(){
 	function run() {
		console.log('Task1 module run');
		requirejs(['app/src/API'], function(API){
			var response = API.postResponse('post_response');
			console.log(response)
		});
	}
	function error() {

	}
	return {
		run: run
	}
});