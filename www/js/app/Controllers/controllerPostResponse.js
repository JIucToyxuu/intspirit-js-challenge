define(['main/js/app/views/viewPostResponse', 'main/js/app/API'], function(View, API){
	function start() {
		var params = {
			request: $('#input-text').val() //text from input-box of html page
		};
		(!$('#messagesContainer').length) ? View.addContainer() : '';	//if container not exist
		if(!$.trim($('#input-text').val())) {	//if string is empty
			View.deleteOver(); //if errors>5 -> delete
			View.emptyStringError(); //add message about empty string or string of white spaces
		}
		else {
			API.postResponse('post_response', params).then(
				function(returnObject) {
					//add params to JSON
					var jsonObject = {
						status: returnObject.status,
						statusText: returnObject.statusText,
						responseText: returnObject.responseText
					};
					//add new message (true/false) about request
					(!!jsonObject.responseText) ? View.addSuccessMessage(jsonObject) : View.addErrorMessage(jsonObject);
				},
				function(returnObject){
					alert(returnObject);
				}
			);
		}
	}
	return {
		start: start
	};
});
