define(['app/src/views/viewTask1', 'app/src/API'], function(View, API){
	var Task = {
		run: function() {
			console.log('Task1 module run');
			var params = {
				//'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				request: 'test' /* здесь позднее добавить содержимое поля ввода текста */
			};

			var a = 'test-test'
			params[a] = 'vaue';


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


{
	"key": "1\"23"
}



{
	key: 'value'
}