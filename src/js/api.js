define(['jquery'], function($){
	var mainUrl = 'http://careers.intspirit.com/endpoint/';

	function postRequest(endUrl, data) {
		return $.post(mainUrl+endUrl, data).fail(function(){
			console.error('API MODULE ERROR! URL: ' + endUrl);
		});
	}
	/* переделать getRequest */
	function getRequest(endUrl) {
		return $.get(mainUrl+endUrl).fail(function(){
			console.error('API MODULE ERROR! URL: ' + endUrl);
		});
	}
	return {
		postResponse: function (data) {
			var dfd = new $.Deferred();
			postRequest('post_response', data).done(function(response, status, obj) {
				dfd.resolve({
					result: response,
					statusText: obj.statusText,
					status: obj.status,
				});
			});
			return dfd.promise();
		},
		getResponseCodes: function() {
			var dfd = new $.Deferred();
			getRequest('response_codes').done(function(response, status, obj) {
				dfd.resolve({
					//add data to json file and return 
				});
			});
			return dfd.promise();
		},
		getDataSet: function() {
			var dfd = new $.Deferred();
			getRequest('data_set').done(function(response, status, obj) {
				dfd.resolve({
					//add data to json file and return 
				});
			});
			return dfd.promise();
		}
	};
});