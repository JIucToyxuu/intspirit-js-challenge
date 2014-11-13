define(['main/js/app/views/viewPostResponse', 'main/js/app/API'], function(View, API){
	function start() {
		console.log("controllerPostResponse work!"); //test point
		var params = {
			request: 'params' //здесь позднее добавить содержимое поля ввода текста 
		};
		API.postResponse('post_response', params).then(
			function(returnObject) {
				//add params to JSON
				var jsonObject = {};
				jsonObject.status = returnObject.status;
				jsonObject.statusText = returnObject.statusText;
				jsonObject.responseText = returnObject.responseText;
				//console.log(returnObject)
				View.firstRender(jsonObject);
			},
			function(returnObject){
				alert(returnObject)
			}
		);
	}
	function run() {
		View.run('lolks');
		//console.log(!!$('#divMessages').length)
		console.log($('.messages').length)
	}
	return {
		run: run,
		start: start
	};
});