define(function(){
	var mainUrl = 'http://careers.intspirit.com/endpoint/';
	function postRequest(endUrl, params, nameMethod) {
		return $.post(mainUrl+endUrl, params)
		.done(function(response){
			return response;
		})
		.fail(function(){
			alert(nameMethod+' - FAIL!');
			return {};
		});
	}
	function getRequest(endUrl, nameMethod) {
		return $.get(mainUrl+endUrl)
		.done(function(response){
			return response;
		})
		.fail(function(){
			alert(nameMethod+' - FAIL!');
			return {};
		});
	}
	/* API for Task1 */
	function postResponse(endUrl, params) { 
		console.log('postResponse'); /* test point */	
		/* jsonObject contains data for request */		
		return postRequest(endUrl, params, 'postResponse');
	}
	/* API for Task2 */
	function getResponseCodes(endUrl) {
		console.log('getResponseCodes'); /* test point */
		return getRequest(endUrl, 'getResponseCodes');
	}
	/* API for Task3 */
	function getDataSet(endUrl) {
		console.log('getDataSet'); /* test point */
		return getRequest(endUrl, 'getDataSet');		
	}
	return {
		postResponse: postResponse,
		getResponseCodes: getResponseCodes,
		getDataSet: getDataSet,
	};
});