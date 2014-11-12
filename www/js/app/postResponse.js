/*define(['app/src/views/viewTask1', 'app/src/API'], function(View, API){
	var Task = {
		run: function() {
			console.log('Task1 module run');
			var params = {
				request: 'test' //здесь позднее добавить содержимое поля ввода текста 
			};
			API.postResponse('post_response', params).done(function(obj){
				console.log(obj);
				View.render(obj);
			});


			var htnl = '<span id="my_id">a\'bc</span>'
		}
	};
	return {
		Task: Task
	};
});
*/
define(function(){
	console.log("postResponse work!");
});