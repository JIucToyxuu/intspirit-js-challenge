define(function(){
 	var API = require(['app/API']);
 	function run() {
		console.log('Task1 module')
		var s = API.postResponse();
		console.log("s = "+s);
	}
	return {
		run: run()
	}
});