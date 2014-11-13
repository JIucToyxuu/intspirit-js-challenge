define(['jquery'], function($){
	var mainUrl = 'http://careers.intspirit.com/endpoint/';
	function postRequest(endUrl, params, nameMethod) {
		var returnObject = new $.Deferred();
		$.post(mainUrl+endUrl, params)
		.done(function(response, status, obj){
			returnObject.resolve(obj);
		})
		.fail(function(){
			returnObject.reject(nameMethod+' - Post request failed!');
		});
		return returnObject.promise();
	}
	function getRequest(endUrl, nameMethod) {
		var returnObject = new $.Deferred();
		$.get(mainUrl+endUrl)
		.done(function(response, status, obj){
			returnObject.resolve(obj);
		})
		.fail(function(){
			returnObject.reject(nameMethod+' - Get request failed!');
		});
		return returnObject.promise();
	}
	/* API for Task1 */
	function postResponse(endUrl, params) {
		/* jsonObject contains data for request */
		return postRequest(endUrl, params, 'postResponse');
	}
	/* API for Task2 */
	function getResponseCodes(endUrl) {
		return getRequest(endUrl, 'getResponseCodes');
	}
	/* API for Task3 */
	function getDataSet(endUrl) {
		return getRequest(endUrl, 'getDataSet');
	}
	return {
		postResponse: postResponse,
		getResponseCodes: getResponseCodes,
		getDataSet: getDataSet,
	};
});