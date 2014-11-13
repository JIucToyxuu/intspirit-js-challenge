define(['main/js/app/API', 'main/js/app/views/viewGetResponseCodes'], function (API, View) {
function controllerGetResponseCodes() {
	this.success = 0;
	this.errors = 0;
}
controllerGetResponseCodes.prototype = {
	start: function() {
		var self = this;
		console.log("controllerGetResponseCodes work!"); //test point
		API.getResponseCodes('response_codes').then(
			function(returnObject) {
				console.log(returnObject.responseJSON);
				if(returnObject.responseJSON.result) {
					console.log('success++');
					self.success++;
				}
				else {
					console.log('errors++');
					self.errors++;
				}
				//console.log(Counter);
				// console.log(returnObject)
				//add params to JSON
				/*var jsonObject = {
					status: returnObject.status,
					statusText: returnObject.statusText,
					responseText: returnObject.responseText
				};*/
				/*if(!$('#messagesContainer').length) {
					//add new div-container for messages
					View.addContainer();
				}
				(!!jsonObject.responseText) ? View.addSuccessMessage(jsonObject) : View.addErrorMessage(jsonObject);*/
			},
			function(returnObject){
				alert(returnObject);
			}
		);
	}
};
return controllerGetResponseCodes;
});