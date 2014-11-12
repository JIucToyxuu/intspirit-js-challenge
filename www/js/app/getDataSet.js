/*define(['app/src/views/viewTask2', 'app/src/API'], function(View, API){
	var Task = {
		run: function() {
			console.log('Task3 module run');
			API.getDataSet('data_set').done(function(response, status, obj){
				View.render(obj);
			});
		}
	};
	return {
		Task: Task
	};
});*/
define(function(){
	console.log("getDataSet work!");
});