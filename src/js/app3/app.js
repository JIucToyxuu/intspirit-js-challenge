define([/*'main/js/app/views/viewGetDataSet',*/ 'main/js/app/API'], function(/*View,*/ API){
	console.log("getDataSet work!"); //test point
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