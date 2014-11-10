define(['app/API'], function(){
 	function run() {
		console.log('Task3 module');
		API.getDataSet();
		
	}
	return {
		run: run()
	}
});
