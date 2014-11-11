define(function(){
 	function run() {
		console.log('Task3 module run');
		requirejs(['app/src/API'], function(API){
			var response = API.getDataSet('data_set');
			console.log(response)
		});
	}
	function error() {

	}
	return {
		run: run
	}
});