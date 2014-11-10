var API = (function(){	
	/* API for Task1 */
	function postResponse() { 
		console.log('postResponse'); /* test point */	
		/* jsonObject contains data for request */
		var params = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			"request" : 'test' /* здесь позднее добавить содержимое поля ввода текста */
			/* почему то не могу передать через атрибуты функции */
			/* передавать кстати необязательно. достаточно вызвать функцию и она сама считает с текстбокса */
		};
		var result = $.post('http://careers.intspirit.com/endpoint/post_response', params, function(response, status, obj) { return obj });
		console.log(result); /* test */
	}
	/* API for Task2 */
	function getResponseCodes() {
		console.log('getResponseCodes'); /* test point */		
		var params = {
			'Data-Type': 'json',
		};
		var result = $.get('http://careers.intspirit.com/endpoint/response_codes', params, function(response, status, obj) { return obj });
		console.log(result) /* test */
	}
	/* API for Task3 */
	function getDataSet() {
		console.log('getDataSet'); /* test point */
		var params = {
			'Data-Type': 'json',
		};
		var result = $.get('http://careers.intspirit.com/endpoint/data_set', params, function(response, status, obj) { return obj });
		console.log(result); /* test */		
	}
	return {
		postResponse: postResponse,
		getResponseCodes: getResponseCodes,
		getDataSet: getDataSet
	}
}());