define(function(){
 	function run() {
		console.log('Task1 module run');
		var params = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			"request" : 'test' /* здесь позднее добавить содержимое поля ввода текста */
		};
		requirejs(['app/src/API'], function(API){
			var response = API.postResponse('post_response', params);
			console.log(response);
		});
	}
	function error() {

	}
	return {
		run: run
	};
});