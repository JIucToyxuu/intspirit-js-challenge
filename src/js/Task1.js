define(['app/API'], function() {	
 	function run() {
		console.log('Task1 module');
		API.postResponse();
	}
	return {
		run: run()
	}
});