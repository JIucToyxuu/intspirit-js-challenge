define(['app/API'], function(){
 	function run() {
		console.log('Task2 module');
		API.getResponseCodes();
	}
	return {
		run: run()
	}
});