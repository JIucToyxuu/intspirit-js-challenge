define(['main/js/app/views/viewPostResponse', 'main/js/app/API'], function(View, API){
	function start() {
		console.log("controllerPostResponse work!"); //test point
		var params = {
			request: $('#input-text').val() //text from input-box of html page
		};
		API.postResponse('post_response', params).then(
			function(returnObject) {
				//add params to JSON
				var jsonObject = {
					status: returnObject.status,
					statusText: returnObject.statusText,
					responseText: returnObject.responseText
				};
				if(!$('#messagesContainer').length) {
					//add new div-container for messages
					View.addContainer();
				}
				(!!jsonObject.responseText) ? View.addSuccessMessage(jsonObject) : View.addErrorMessage(jsonObject);
			},
			function(returnObject){
				alert(returnObject); //решить что выводить
			}
		);		
	}
	return {
		start: start
	};
});
