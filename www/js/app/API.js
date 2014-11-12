define(['jquery'], function($){
	var mainUrl = 'http://careers.intspirit.com/endpoint/';
	function postRequest(endUrl, params, nameMethod) {
		var dfd = new $.Deferred();
		$.post(mainUrl+endUrl, params)
		.done(function(obj, status, jqXHR){
			dfd.resolve(obj);
		})
		.fail(function(){
			dfd.reject(nameMethod+' - FAIL!')
		});

		return dfd.promise();
	}
	function getRequest(endUrl, nameMethod) {
		return $.get(mainUrl+endUrl)
		.done(function(response, status, obj){
			return obj;
			ssss
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