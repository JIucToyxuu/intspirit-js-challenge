define(['jquery'], function($){
	var baseUrl = 'http://careers.intspirit.com/endpoint/';

	function postRequest(url, data) {
		return $.post(baseUrl + url, data).fail(function(){
			console.error('API MODULE ERROR! URL: ' + (baseUrl + url));
		});
	}
	/* переделать getRequest */
	function getRequest(url) {
		return $.get(baseUrl + url).fail(function(){
			console.error('API MODULE ERROR! URL: ' + (baseUrl + url));
		});
	}
	return {
		baseUrl: baseUrl,
		postResponse: function (data) {
			var dfd = new $.Deferred();
			postRequest('post_response', data).done(function(response, status, obj) {
				dfd.resolve({
					result: obj.responseText,
					statusText: obj.statusText,
					status: obj.status,
				});
			});
			return dfd.promise();
		},
		getResponseCodes: function() {
			var dfd = new $.Deferred();
			getRequest('response_codes').done(function(response, status, obj) {
				dfd.resolve(obj.responseJSON);
			});
			return dfd.promise();
		},
		getDataSet: function() {
			var dfd = new $.Deferred();
			getRequest('data_set').done(function(response, status, obj) {
				dfd.resolve(obj.responseJSON);
			});
			return dfd.promise();
		}
	};
});