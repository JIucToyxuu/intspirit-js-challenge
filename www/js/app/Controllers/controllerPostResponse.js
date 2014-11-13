define(['app/src/views/viewTask1', 'app/src/API'], function(View, API){
	var Task = {
		run: function() {
			console.log('Task1 module run');
			var params = {
				//'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				request: 'test' /* здесь позднее добавить содержимое поля ввода текста */
			};

			API.postResponse('post_response', params).done(function(obj){
				console.log(obj);
				View.render(obj);
			});
		}
	};
	return {
		Task: Task
	};
});