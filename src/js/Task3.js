define(function(){
 	var API = require(['app/API']);
 	function run() {
		console.log('Task3 module');
		API.getDataSet();
		
	}
	return {
		run: run()
	}
});
