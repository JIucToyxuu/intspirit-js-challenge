define(function(){
	var mainUrl = 'http://careers.intspirit.com/endpoint/'
	/* API for Task1 */
	function postResponse(endUrl) { 
		console.log('postResponse'); /* test point */	
		/* jsonObject contains data for request */
		var params = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			"request" : 'test' /* здесь позднее добавить содержимое поля ввода текста */
			/* почему то не могу передать через атрибуты функции */
			/* передавать кстати необязательно. достаточно вызвать функцию и она сама считает с текстбокса */
		};
		return $.post(mainUrl+endUrl, params)
		.done(function(response){
			return response;
		})
		.fail(function(){
			return {};
			alert('postResponse - FAIL!');
		});
	}
	/* API for Task2 */
	function getResponseCodes(endUrl) {
		console.log('getResponseCodes'); /* test point */
		return $.get(mainUrl+endUrl)
		.done(function(response){
			return response;
		})
		.fail(function(){
			return {};
			alert('getResponseCodes - FAIL!')
		});
	}
	/* API for Task3 */
	function getDataSet(endUrl) {
		console.log('getDataSet'); /* test point */
		return $.get(mainUrl+endUrl)
		.done(function(response){
			return response;
		})
		.fail(function(){
			return {};
			alert('getDataSet - FAIL!');
		});
	}
	return {
		postResponse: postResponse,
		getResponseCodes: getResponseCodes,
		getDataSet: getDataSet
	}
});