define([/*'main/js/app/views/viewGetResponseCodes',*/ 'main/js/app/API'], function(/*View,*/ API){
	console.log("getResponseCodes work!");
	API.getResponseCodes('response_codes').then(
		function(returnObject) {
			//add params to JSON
			console.log(returnObject)
		},
		function(returnObject){
			alert(returnObject)
		}
	);
});